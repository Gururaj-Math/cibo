require_relative "boot"

require "rails/all"

Bundler.require(*Rails.groups)

module Server
  class Application < Rails::Application
    config.middleware.insert_before 0, Rack::Cors do
    end
    config.load_defaults 7.1

    # Add the following line to autoload the lib directory
    config.autoload_paths += %W(#{config.root}/lib)

    # Please, add to the `ignore` list any other `lib` subdirectories that do
    # not contain `.rb` files, or that should not be reloaded or eager loaded.
    # Common ones are `templates`, `generators`, or `middleware`, for example.
    config.autoload_paths.reject! { |path| path =~ /assets|tasks/ }

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Only loads a smaller set of middleware suitable for API only apps.
    # Middleware like session, flash, cookies can be added back manually.
    # Skip views, helpers, and assets when generating a new resource.
    config.api_only = true

    config.session_store :cookie_store, key: 'ciboSession'
    config.session_store :active_record_store, key: 'ciboSession'
    config.middleware.use ActionDispatch::Session::CookieStore, key: 'ciboSession'
  end
end
