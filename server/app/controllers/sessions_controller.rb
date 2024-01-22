class SessionsController < ApplicationController
  def login
    user = User.find_by(email: params[:email])
    email = params[:email]
    password = params[:password]
    print(email, password)
    if user
      token = generate_token(user)
      render json: { token: token }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def generate_token(user)
    JWT.encode({ user_id: user.id }, 'abcsdnjcsddfwqkm', 'HS256')
  end
end