class CreatePrices < ActiveRecord::Migration[5.1]
  def change
    create_table :prices do |t|
      t.float :it
      t.float :finance
      t.float :call_center
      t.float :logisticts
      t.float :marketing
      t.float :technology
      t.timestamps
    end
  end
end
