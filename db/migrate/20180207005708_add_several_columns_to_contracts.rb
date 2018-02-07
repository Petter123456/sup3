class AddSeveralColumnsToContracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :productarea, :string
    add_column :contracts, :start_date, :string
    add_column :contracts, :end_date, :string
    add_column :contracts, :city, :string
    add_column :contracts, :percentage, :string
    add_column :contracts, :experience, :string
    add_column :contracts, :salary, :string
    add_column :contracts, :supplier, :string
    add_column :contracts, :supplier_price, :string
  end
end
