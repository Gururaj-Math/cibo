class Food
  include Mongoid::Document
  include Mongoid::Timestamps
  field :id, type: String
  field :name, type: String
  field :price, type: Integer
  field :image, type: String
  field :description, type: String
  field :category, type: String
  field :seller, type: String
  field :rating, type: Array, default: []
  field :offer, type: String
end
