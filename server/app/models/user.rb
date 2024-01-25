class User
  include Mongoid::Document
  include Mongoid::Timestamps
  include ActiveModel::SecurePassword

  field :name, type: String
  field :email, type: String
  field :phone, type: String
  field :password_digest, type: String
  field :currentLocation, type: String
  field :avatar, type: String
  field :accessToken, type: String
  field :refreshToken, type: String
  field :orders, type: Array, default: []
  field :favorites, type: Array, default: []
  field :cart, type: Array, default: []

  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true
  validates :password, length: { minimum: 4 }, allow_nil: true

  before_create :generate_tokens

  private

  def generate_tokens
    self.refreshToken = SecureRandom.hex(16)
    self.accessToken = SecureRandom.hex(16)
  end
end
