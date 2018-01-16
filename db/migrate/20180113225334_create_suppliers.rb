class CreateSuppliers < ActiveRecord::Migration[5.1]
  def change
    create_table :suppliers do |t|
      t.string :company
      t.string :company_number
      t.string :company_representative
      t.string :second_representative
      t.string :email
      t.string :telephone
      t.timestamps
    end
  end
end
