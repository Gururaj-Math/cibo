class Api::V1::SellerController < ApplicationController
    def register
      @seller = Seller.new(seller_params)

      if @seller.save
        render json: { message: 'Seller registered successfully', data: @seller }, status: :created
      else
        render json: { errors: @seller.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def login
      @seller = Seller.find_by(username: params[:username])
      if @seller
        token = generate_token(@seller)
        @seller.refreshToken = token
        @seller.save
        render json: { message: "login Successfully", data: @seller}
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
  
    private
  
    def seller_params
      params.require(:seller).permit(:username, :email, :password_digest)
    end

    def generate_token(seller)
      JWT.encode({ seller_id: seller.id }, 'abcsdnjcsddfwqkm', 'HS256')
    end
  end
  