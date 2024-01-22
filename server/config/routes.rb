Rails.application.routes.draw do
  post '/users/register', to: 'users#register', defaults: { format: :json }
  post '/sessions/login', to: 'sessions#login', defaults: { format: :json }
end