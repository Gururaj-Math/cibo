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

  def get_cart
    @user = User.find_by(email: params[:email])

    if @user
      render json: { cart: @user.cart }, status: :ok
    else
      render json: { message: 'User not found' }, status: :not_found
    end
  end

  def add_to_favorites
    @user = User.find_by(email: params[:email])
    food_id = params[:food_id]

    if @user && food_id.present?
      if @user.favorites.include?(food_id)
        render json: { error: 'Food already exists in favorites' }, status: :unprocessable_entity
      else
        @user.favorites << food_id
        if @user.save
          render json: { message: 'Food added to favorites successfully', user: @user }
        else
          render json: { error: 'Failed to add food to favorites' }, status: :unprocessable_entity
        end
      end
    else
      render json: { error: 'User not found or Food ID not provided' }, status: :unprocessable_entity
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