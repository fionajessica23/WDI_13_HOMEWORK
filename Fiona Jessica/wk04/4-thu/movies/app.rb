require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/list' do
  @title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
  @movie_list_arr = @result.parsed_response["Search"]
  File.open("history.txt", 'a') { |file| file.write("#{@title}\n") }

  if @movie_list_arr.count == 1

    redirect to("/detail?t=#{@title}")
  else
    erb :list
  end
  # binding.pry

end

get '/detail' do
  @title = params[:t]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
  @movie = @result
  erb :detail
end

get '/history' do
  f = File.open("history.txt", 'r')
  @lines_of_history = []

  f.each_line do |line|
    @lines_of_history.push(line)
  end
  f.close
  erb :history
end
