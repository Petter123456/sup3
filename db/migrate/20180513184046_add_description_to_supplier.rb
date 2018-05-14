class AddDescriptionToSupplier < ActiveRecord::Migration[5.1]
  def change
    add_column :suppliers, :description, :string

  end
end
