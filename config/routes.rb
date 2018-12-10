Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :offices

      root to: "users#index"
    end
  devise_for :users, controllers: {
    invitations: 'invitations'
  }, skip: [:registrations]

  as :user do
    get 'users/edit' => 'devise/registrations#edit', :as => 'edit_user_registration'
    put 'users' => 'devise/registrations#update', :as => 'user_registration'
  end

  root to: 'application#hello_world'
end
