Rails.application.routes.draw do
  post '/api/v1/user/register', to: 'users#register', defaults: { format: :json }
  post '/api/v1/user/login', to: 'users#login', defaults: { format: :json }

  # Adding resources for FoodsController
  resources :foods
  resources :categories
  resources :seller

end
