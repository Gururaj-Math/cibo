class Food
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id, type: String
  field :name, type: String
  field :price, type: Integer
  field :image, type: String
  field :description, type: String
  field :rating, type: Array, default: []
  field :offer, type: String
  field :featured, type: Boolean

  belongs_to :seller, class_name: 'Seller', foreign_key: 'seller_id'
  belongs_to :category, class_name: 'Category', foreign_key: 'category_id'
  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
end
