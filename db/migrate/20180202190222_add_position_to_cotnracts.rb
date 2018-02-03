class AddPositionToCotnracts < ActiveRecord::Migration[5.1]
  def change
    add_column :contracts, :position, :string
  end
end
