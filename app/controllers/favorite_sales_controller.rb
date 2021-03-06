class FavoriteSalesController < ApplicationController
  before_action :set_sale

  def index
    @favorites = current_user.favorite_sales
    # @fav = Favorite.where(favorited_id: @sale.id, user_id: current_user.id)
    @sale = Estatesale.find(params[:sale_id] || params[:id])
  end

  def show
    @favorites = current_user.favorite_sales
  end

  def create
    if Favorite.create(favorited: @sale, user: current_user)
      respond_to do |format|
        format.html { redirect_to @sale, notice: 'Sale has been added to favorites!'}
        format.js
      end
    else
      redirect_to @sale, alert: 'Something went wrong!'
    end
  end

  def destroy
    Favorite.where(favorited_id: @sale.id, user_id: current_user.id).destroy
    redirect_to favorite_sales_path, notice: 'Sale is no longer in favorites'
  end

  private

  def set_sale
    @sale = Estatesale.find(params[:sale_id] || params[:id])
  end

end
