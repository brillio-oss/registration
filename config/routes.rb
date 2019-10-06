Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'static#index'

  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1, defaults: { format: 'json' } do
        # v1 routes go here example.com/v1/some-url
      end
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
