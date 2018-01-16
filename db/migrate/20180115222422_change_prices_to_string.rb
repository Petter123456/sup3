class ChangePricesToString < ActiveRecord::Migration[5.1]
  def change
    change_column :prices, :it, :string
    change_column :prices, :finance, :string
    change_column :prices, :call_center, :string
    change_column :prices, :logisticts, :string
    change_column :prices, :marketing, :string
    change_column :prices, :technology, :string
  end
end
