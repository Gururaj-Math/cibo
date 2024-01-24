class Category
  include Mongoid::Document
  include Mongoid::Timestamps

  field :id, type: String
  field :name, type: String

  has_many :foods, class_name: 'Food', foreign_key: 'category_id'
end
