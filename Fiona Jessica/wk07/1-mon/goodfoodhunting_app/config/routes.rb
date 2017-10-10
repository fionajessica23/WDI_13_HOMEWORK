Rails.application.routes.draw do
  # resources :dishes #this command makes the below routes for us
  get '/dishes', to: 'dishes#index'
  get '/dishes/new', to: 'dishes#new'
  get '/dishes/:id/edit', to: 'dishes#edit'
  get '/dishes/:id', to: 'dishes#show'

  post '/dishes', to: 'dishes#create'
  put '/dishes/:id', to: 'dishes#update'
  delete '/dishes/:id', to: 'dishes#destroy'
end
