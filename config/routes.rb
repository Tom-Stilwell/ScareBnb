Rails.application.routes.draw do

  namespace :api do
    get 'sessions/create'
  end

  namespace :api do
    get 'sessions/destroy'
  end

  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/destroy'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
