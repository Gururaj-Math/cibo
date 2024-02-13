Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/user/register', to: 'users#register'
      post '/user/login', to: 'users#login'
      put '/user/update', to: 'users#updateUser'

      resources :foods do
        member do
          post 'add_to_cart'
        end
      end

      resources :categories
      resources :sellers
    end
  end
end
