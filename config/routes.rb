Rails.application.routes.draw do

default_url_options :host => "localhost:3000"


root 'main_pages#index'

get 'main_page' => 'main_pages#index'
get '/index' => 'suppliers#index'
get '/page1' => 'main_pages#page_1', as: "page1"
post '/page1' => 'main_pages#page_1'
get '/om_oss' => 'main_pages#om_oss'


get'/login' => 'sessions#new'
post '/login' => 'sessions#create'
get '/logout' => 'sessions#destroy'
get '/signup' => 'users#new'
post '/signup' => 'users#create'


post '/confirm_order_and_email' => 'main_pages#confirm_order_and_email'
get '/confirm_order_and_email' => 'main_pages#confirm_order_and_email'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :password_resets

end
