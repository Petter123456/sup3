class AddServiceToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :type_of_service, :string
  end
end
