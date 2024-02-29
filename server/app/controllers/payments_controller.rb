class PaymentsController < ApplicationController
  def create
    begin
      session = Stripe::Checkout::Session.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: params[:items].map do |item|
        {
          price_data: {
            currency: 'inr',
            product_data: {
             name: item[:name]
            },
            unit_amount: item[:price] * 100
            },
            quantity: item[:quantity]
          }
          end,
          success_url: "http://localhost:5173/",
          cancel_url: "http://localhost:5173/"
      })

      render json: { url: session.url }
    rescue Stripe::StripeError => e
      render json: { error: e.message }, status: :bad_request
    end
  end

  def getPayments
    begin
      payments = Stripe::PaymentIntent.list
      render json: { payments: payments }
    rescue Stripe::StripeError => e
      render json: { error: e.message }, status: :bad_request
    end
  end

  def getPaymentById
    @payment = Stripe::PaymentIntent.retrieve(params[:id])
    render json: { payments: @payment }
  end
end
