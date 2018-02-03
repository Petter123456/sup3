class AddOrderSpecIdToConract < ActiveRecord::Migration[5.1]
  def up
    add_column :contracts, :order_spec_id, :integer
  end

  def down
    remove_column :contracts, :order_spec_id, :integer
  end
end
