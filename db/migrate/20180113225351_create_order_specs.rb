class CreateOrderSpecs < ActiveRecord::Migration[5.1]
  def change
    create_table :order_specs do |t|
      t.string :position
      t.date :start_date
      t.date :end_date
      t.decimal :position_percentage
      t.string :level_of_experiance
      t.integer :salary
      t.timestamps
    end
  end
end
