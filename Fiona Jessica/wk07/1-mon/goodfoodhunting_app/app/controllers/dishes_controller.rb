class DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def new
  end

  def show
    @dish = Dish.find(params[:id])
    @comments = @dish.comments
    @venue = @dish.venue.name
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.description = params[:description]
    dish.save
    redirect_to '/dishes'
  end

  def edit
    @dish = Dish.find(params[:id])
  end

  def update
    dish = Dish.find(params[:id])
    dish.name = params[:name]
    dish.description = params[:description]
    dish.save
    redirect_to "/dishes/#{dish.id}/"
  end

  def destroy
    dish = Dish.find(params[:id])
    dish.destroy
    redirect_to "/dishes"
  end

end
