require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end


get '/about' do
  @title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=2f6435d9")
  # binding.pry
  erb :about
end
