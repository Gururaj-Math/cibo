class Api::V1::FeedbackController < ApplicationController
  def index
    @feedbacks = Feedback.all
    render json: @feedbacks
  end

  def create
    @feedback = Feedback.new(feedback_params)

    if @feedback.save
      render json: @feedback, status: :created
    else
      render json: @feedback.errors, status: :unprocessable_entity
    end
  end

  private

  def feedback_params
    params.require(:feedback).permit(:name, :email, :message)
  end
end
