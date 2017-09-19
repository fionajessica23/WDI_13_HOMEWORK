require 'pry'

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

# Access the second value in planeteers.
# puts second_value = planeteers[1]



# Add "Heart" to the end of planeteers.
planeteers.push("Heart")
# alternative below
# planeteers << "Heart"
# puts planeteers



# Remove "Captain Planet" from the array (without using a method).
planeteers -["Captain Planet"]
# puts planeteers



# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
# and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers + rangers
# puts heroes



# Alphabetize the contents of heroes using a method.
heroes.sort!
# puts heroes



# Randomize the contents of heroes using a method.
heroes.shuffle!
puts heroes


# Select a random element from heroes using a method.
heroes.sample



# Select all elements in heroes that begin with "B" using a method.
heroes.select { |hero| hero[0] =~ /b/i }
# alternative
# heroes.select { |hero| hero.start_with?("B")}


binding.pry
