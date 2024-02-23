Rails.configuration.stripe = {
  publishable_key: 'pk_test_51NeHpDSEx5fskDF3Qv2j5IQOTKfENhnVKYmDi3UoiIvK1VERPIJ7Z8pQ2iw1uUUOxJTauyg9GXrzl0CzFuzQqeFb00ZGj0poph',
  secret_key: 'sk_test_51NeHpDSEx5fskDF3yDd1jD6k0C9H2q9SWrKDHRFXN58Pm6KVtFdXNcjL9lwSoJJ5lWZtT8tLEm4tJiH1SRliWDMZ004qnBo1iX'
}

Stripe.api_key = Rails.configuration.stripe[:secret_key]
