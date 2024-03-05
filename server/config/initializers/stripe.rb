Rails.configuration.stripe = {
  publishable_key: 'pk_test_51NeHpDSEx5fskDF3Qv2j5IQOTKfENhnVKYmDi3UoiIvK1VERPIJ7Z8pQ2iw1uUUOxJTauyg9GXrzl0CzFuzQqeFb00ZGj0poph',
  secret_key: 'sk_test_51NeHpDSEx5fskDF3Qiiko938N11e5JYnv8cFZgAuUukSGIwYlBqUsxTf3Zqxo2LKL5n7tfJ2CzJdglcAbWrRHS5N00dZk6nF7p'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
