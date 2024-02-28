Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/user/register', to: 'users#register'
      post '/user/login', to: 'users#login'
      put '/user/update', to: 'users#updateUser'
      get '/user/cart', to: 'users#get_cart'
      post '/user/add_to_cart', to: 'users#add_to_cart' 

      resources :foods do
        member do
          get 'get_food_details' 
        end
      end

      resources :categories  
      resources :sellers
    end
  end

  post '/payments', to: 'payments#create'
end
