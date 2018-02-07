class Contract < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :supplier
end
