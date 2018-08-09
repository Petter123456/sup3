Rails.application.routes.draw do

  resources :password_resets

  resources :suppliers
  resources :prices

default_url_options :host => "localhost:3000"


root 'main_pages#index'

get 'main_page' => 'main_pages#index'

get '/index' => 'suppliers#index'

get '/new' => 'suppliers#new'

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


get 'supplier/index' => 'suppliers#index'
post 'supplier/create' => 'suppliers#create'
get 'supplier/new' => 'suppliers#new'
get 'supplier/edit' => 'suppliers#edit'
get 'supplier/show' => 'suppliers#show'
patch 'supplier/update' => 'suppliers#update'
put 'supplier/update' => 'suppliers#update'
delete 'supplier/delete' => 'suppliers#delete'





#
# suppliers GET    /suppliers(.:format)          suppliers#index
#               POST   /suppliers(.:format)          suppliers#create
#  new_supplier GET    /suppliers/new(.:format)      suppliers#new
# edit_supplier GET    /suppliers/:id/edit(.:format) suppliers#edit
#      supplier GET    /suppliers/:id(.:format)      suppliers#show
#               PATCH  /suppliers/:id(.:format)      suppliers#update
#               PUT    /suppliers/:id(.:format)      suppliers#update
#               DELETE /suppliers/:id(.:format)      suppliers#destroy


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html



end
