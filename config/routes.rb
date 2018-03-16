Rails.application.routes.draw do


  namespace :api, defaults: { format: :json } do
    resources :homes, only: [:index, :create, :show, :update, :destroy]

    post "/homes/:home_id/createRental", to: "homes#create_rental"
    delete "/rentals/:rental_id", to: "homes#destroy_rental"
    post "/homes/:home_id/createReview", to: "homes#create_review"
    get "/users/:user_id/trips", to: "users#get_trips"

    resources :users, only: [:create, :show, :update, :destroy]

    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
