class FoodsController < ApplicationController
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

  private

  def set_food
    @food = Food.find(params[:id])
  end

  def food_params
    # Permitting :seller and :category as objects of their respective types
    params.require(:food).permit(:name, :price, :image, :description, :offer, rating: [], seller: {}, category: {})
  end
end
