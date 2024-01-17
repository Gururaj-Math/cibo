class Category
  include Mongoid::Document
  include Mongoid::Timestamps
  field :id, type: String
  field :name, type: String
end
