# Initialize a hash called ninja_turtle with the properties name, weapon and radical.
# They should have values of "Michelangelo", "Nunchuks" and true respectively.

require 'pry'

ninja_turtle = {
  name: "Michelangelo",
  weapon: "Nunchuks",
  radical: true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle[:age] = 30


# Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete(:radical)


# Add a key pizza_toppings to ninja_turtle.
# Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]


# Access the first element of pizza_toppings.
ninja_turtle[:pizza_toppings][0]
# alternative
# ninja_turtle[:pizza_toppings].first



# Produce an array containing all of ninja_turtle's keys using a method.
ninja_turtle.values



# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method.
ninja_turtle.each { |key, value| puts "#{key} is equal to #{value}" }


binding.pry
