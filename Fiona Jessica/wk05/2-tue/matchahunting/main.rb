require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

def run_db(sql)
  conn = PG.connect(dbname: 'matchahunting')
  conn.exec(sql)
end


get '/' do
  redirect '/desserts'
end

get '/desserts' do
  @desserts = run_db('SELECT * FROM desserts;')
  erb :desserts
end


binding.pry
