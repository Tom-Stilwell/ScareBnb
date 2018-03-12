Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do
    resources :homes, only: [:index, :create, :show, :update, :destroy] do
      resources :rentals, only: [:index]
    end

    post "/homes/:home_id/createRental", to: "homes#create_rental"

    resources :users, only: [:create, :show, :update, :destroy] do
      resources :rentals, only: [:index]
    end

    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
