# at '/detail'
# if the title has not been searched before (not in database), then
#   create new movie entries
#

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'


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
end


get '/detail' do
  @title = params[:t]

  if !Movie.exists?(title: "#{@title}")
    @movie = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{
      ENV['OMDB_API_KEY']}")
    movie_obj = Movie.new
    movie_obj.poster_url = @movie["Poster"]
    movie_obj.title = @movie["Title"]
    movie_obj.year = @movie["Year"]
    movie_obj.rated = @movie["Rated"]
    movie_obj.released = @movie["Released"]
    movie_obj.runtime = @movie["Runtime"]
    movie_obj.genre = @movie["Genre"]
    movie_obj.director = @movie["Director"]
    movie_obj.writer = @movie["Writer"]
    movie_obj.actors = @movie["Actors"]
    movie_obj.plot = @movie["Plot"]
    movie_obj.save
    @movie = movie_obj
  else
    @movie = Movie.find_by(title: "#{@title}")
  end
  # binding.pry
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
