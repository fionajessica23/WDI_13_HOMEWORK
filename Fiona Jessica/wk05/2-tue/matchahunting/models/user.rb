class User < ActiveRecord::Base
  # it adds 2 methods(password and authenticate()) to user objects
  has_secure_password
end
