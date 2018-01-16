Rails.application.routes.draw do

root 'main_pages#index'


get '/index' => 'suppliers#index'
get '/page1' => 'main_pages#page_1', as: "page1"


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
