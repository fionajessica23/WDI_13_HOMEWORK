require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/dessert'
require_relative 'models/user'

#sinatra provides this feature
enable :sessions

#helpers make the methods inside it accessible to all of your files
helpers do
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    if current_user
      return true
    else
      return false
    end
  end
end


get '/' do
  desserts = Dessert.all
  latest_desserts = desserts.sort_by { |hash| hash[:created_at] }.reverse
  @latest_3_desserts = latest_desserts[0..2]
  erb :index
end

get '/desserts' do
  @desserts = Dessert.all
  erb :desserts
end


get '/desserts/:id/edit' do
  redirect '/login' unless logged_in?

  @dessert = Dessert.find(params[:id])
  erb :edit
end


put '/desserts/:id' do
  redirect '/login' unless logged_in?

  dessert = Dessert.find(params[:id])
  dessert.name = params[:name]
  dessert.image_url = params[:image_url]
  dessert.save
  redirect '/desserts'
end

get '/desserts/new' do
  redirect '/login' unless logged_in?

  erb :new
end

post '/desserts' do
  redirect '/login' unless logged_in?

  dessert = Dessert.new
  dessert.name = params[:name]
  dessert.image_url = params[:image_url]
  dessert.save
  redirect '/desserts'
end

delete '/desserts/:id' do
  redirect '/login' unless logged_in?

  dessert = Dessert.find(params[:id])
  dessert.destroy
  redirect '/desserts'
end

# binding.pry

#============================================

# for creating user login page & session
get '/login' do
  erb :login
end


get '/logout' do
  if logged_in?
    session[:user_id] = nil
  end
  redirect '/'
end


post '/session' do
  # find the user
  user = User.find_by(email: params[:email])
  #if found a user, and password is matched
  if user && user.authenticate(params[:password])
    # successful, create session then redirect
    # session = {}, session is an empty hash atm
    session[:user_id] = user.id
    redirect '/desserts'
  else
    # don't redirect because we don't want to create a session for this
    @message = 'incorrect email or password'
    erb :login
  end
end
