class Api::V1::FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]

  def index
    @foods = Food.all
    render json: @foods
  end

  def show
    render json: @food
  end

  def create
    @food = Food.new(food_params)

    if @food.save
      render json: @food, status: :created
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params)
      render json: @food
    else
      render json: @food.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @food.destroy
    head :no_content
  end

  def add_to_cart
    @food = Food.find(params[:id])

    # Check if user is present
    if params[:user_id].present?
      user = User.find(params[:user_id])
      if user.cart.include?(@food.id)
        render json: { error: 'Food already exists in cart' }, status: :unprocessable_entity
      else
        user.cart << @food.id
        if user.save
          render json: { message: 'Food added to cart successfully' }
        else
          render json: user.errors, status: :unprocessable_entity
        end
      end
    else
      render json: { error: 'User not specified' }, status: :unprocessable_entity
    end
  end

  private

  def set_food
    @food = Food.find(params[:id])
  end

  def food_params
    permitted_params = params.require(:food).permit(:name, :price, :image, :description, :offer, rating: [])

    # Check if category_id exists in Category model
    if params[:food][:category] && params[:food][:category][:id]
      category_id = params[:food][:category][:id]
      category = Category.find_by(id: category_id)
      permitted_params[:category_id] = category.id if category
    end

    # Check if seller_id exists in Seller model
    if params[:food][:seller] && params[:food][:seller][:id]
      seller_id = params[:food][:seller][:id]
      seller = Seller.find_by(id: seller_id)
      permitted_params[:seller_id] = seller.id if seller
    end

    permitted_params
  end
end
