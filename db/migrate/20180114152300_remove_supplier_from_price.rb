class RemoveSupplierFromPrice < ActiveRecord::Migration[5.1]
  def change
    remove_column :prices, :suppliers, :string
  end
end
