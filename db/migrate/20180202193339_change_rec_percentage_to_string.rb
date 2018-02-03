class ChangeRecPercentageToString < ActiveRecord::Migration[5.1]
  def change
    change_column :suppliers, :recruitment_percentage, :string
  end
end
