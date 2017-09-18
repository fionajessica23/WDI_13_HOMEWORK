# Activity:
# You are to generate a basic "guess my number" game. The computer will
# pick a random number between 0 and 10.
# The user will guess the number until they guess correctly.

# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to
# guess the number again.

require 'pry'

puts "What is your number? "
user_number = gets
user_number = user_number.chomp.to_i

# binding.pry

winning_number = rand(11) # does not include number 11.


while (user_number != winning_number)
  puts "It's wrong. Try again?"
  user_number = gets
  user_number = user_number.chomp.to_i
end

puts "You have guessed correctly!"
