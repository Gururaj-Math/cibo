class Seller
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id, type: String
  field :name, type: String
  field :location, type: String

  has_many :foods, class_name: 'Food', foreign_key: 'seller_id'
end
