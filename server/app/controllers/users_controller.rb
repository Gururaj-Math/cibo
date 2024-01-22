class UsersController < ApplicationController
  def register
    user = User.new(user_params)

    if user.save
      render json: { message: 'User registered successfully', data: user }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :phone, :password_digest)
  end
end