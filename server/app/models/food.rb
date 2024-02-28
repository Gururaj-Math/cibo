class Food
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id, type: String
  field :name, type: String
  field :price, type: String
  field :image, type: String
  field :category, type: String
  field :description, type: String
  field :rating, type: Array, default: []
  field :offer, type: String
  field :featured, type: Boolean
  field :archived, type: Boolean
end
