class Supplier < ApplicationRecord
  has_many :contracts
  has_many :prices
end
