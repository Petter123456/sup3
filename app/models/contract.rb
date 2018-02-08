class Contract < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :supplier
  validates :salary, numericality: {greater_than_or_equal_to: 20000}

    # def salary_validation
    #Specify here the salary limitatons and call it Instead of greater_than_or_equal_to
end
