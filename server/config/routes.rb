Rails.application.routes.draw do
  post '/users/register', to: 'users#register', defaults: { format: :json }
  post '/users/login', to: 'users#login', defaults: { format: :json }
end