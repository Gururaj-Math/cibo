Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/user/register', to: 'users#register'
      post '/user/login', to: 'users#login'
      put '/user/update', to: 'users#updateUser'
      get '/user/cart', to: 'users#get_cart'
      post '/user/add_to_cart', to: 'users#add_to_cart'
      get '/user/cart_details', to: 'users#get_cart_details' 
      delete '/user/remove_from_cart', to: 'users#remove_from_cart'
      post '/user/add_to_favorites', to: 'users#add_to_favorites'

      resources :categories do
        patch 'update_name/:id', action: :update_name, on: :collection
      end
        
      resources :sellers
      resources :foods do
        get 'find_by_id/:id', action: :find_by_id, on: :collection
      end
    end
  end

  post '/payments', to: 'payments#create'
end
