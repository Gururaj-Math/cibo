class UsersController < ApplicationController
  def register
    user = User.new(user_params)

    if user.save
      render json: { message: 'User registered successfully', data: user }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    email = params[:email]
    password = params[:password]
    print(email, password)
    if user
      token = generate_token(user)
      render json: { message: "login Successfully", data: user, token: token}
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :phone, :password_digest)
  end

  def generate_token(user)
    JWT.encode({ user_id: user.id }, 'abcsdnjcsddfwqkm', 'HS256')
  end
end