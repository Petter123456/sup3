class AddSupplierIdToConract < ActiveRecord::Migration[5.1]
  def up
    add_column :contracts, :supplier_id, :integer
  end

  def down
    remove_column :contracts, :supplier_id, :integer
  end
end
