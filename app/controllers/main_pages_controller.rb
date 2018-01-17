class MainPagesController < ApplicationController
  # before_action :authorize
  before_action :set_song, only: [:show, :edit, :update, :destroy]

  def index
    @product_areas = ["IT", "Finance", "Marketing", "Call Center", "Technology",]
  end

  def page_1
    @position_percentage = ["10%",'20 %','30 %','40 %', '50 %', '60 %', '70 %', '80 %', '90 %', '100 %']

    @level_of_experiance = ["Student","Just Graduated", "1 year", "2 Years", "3 years", "4 years", "5 years", "5 + years" ]


    @monthly_salary = []
    i = 20000

    while i < 150000 do
      @monthly_salary << i
      i += 2000
    end

    @supplier = Supplier.all
    @supplier_first = @supplier.first
    # @it = @supplier_first.prices.map {|p| p.it}
    # @prices = Price.all.map{|p| p.it}

    # @it = @prices.map {|p| p.map {|i| i.it}}.flatten


end


  def create
  end

  def new
  end

  def show
  end

  def delete
  end
end
