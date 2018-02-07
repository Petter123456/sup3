class AddSupplierNameToSuppliers < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :supplier_name, :string
  end
end
