require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'matchahunting'
}


ActiveRecord::Base.establish_connection(options)
