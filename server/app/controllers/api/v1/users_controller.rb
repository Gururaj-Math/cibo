class Api::V1::UsersController < ApplicationController
  def register
    @user = User.new(user_params)

    if @user.save
      render json: { message: 'User registered successfully', data: @user }, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(email: params[:email])
    if @user
      token = generate_token(@user)
      render json: { message: "login Successfully", data: @user, token: token}
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def updateUser
    @user = User.find_by(email: params[:email])

    if @user
      if @user.update(params.permit(:name, :email, :phone))
        render json: { message: 'User updated successfully', user: @user }
      else
        render json: { message: 'Failed to update', errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { message: 'User not found' }, status: :not_found
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