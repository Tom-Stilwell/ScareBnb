Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do
    resources :homes, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
