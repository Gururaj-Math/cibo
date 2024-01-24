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

  belongs_to :seller, class_name: 'Seller', foreign_key: 'seller_id'
  belongs_to :category, class_name: 'Category', foreign_key: 'category_id'
end
