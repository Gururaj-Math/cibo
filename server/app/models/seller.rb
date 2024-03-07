class Seller
  include Mongoid::Document
  include Mongoid::Timestamps

  field :username, type: String
  field :email, type: String
  field :password_digest, type: String
  field :refreshToken, type: String

  validates :username, presence: true
  validates :email, presence: true, uniqueness: true

  private
  def generate_tokens
    self.refreshToken = SecureRandom.hex(16)
  end
end
