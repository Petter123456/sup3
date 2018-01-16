class AddCityToSupplier < ActiveRecord::Migration[5.1]
  def change
    add_column :suppliers, :city, :string
  end
end
