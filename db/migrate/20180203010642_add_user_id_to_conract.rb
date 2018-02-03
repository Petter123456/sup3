class AddUserIdToConract < ActiveRecord::Migration[5.1]
  def up
    add_column :contracts, :user_id, :integer
  end

  def down
    remove_column :contracts, :user_id, :integer
  end
end
