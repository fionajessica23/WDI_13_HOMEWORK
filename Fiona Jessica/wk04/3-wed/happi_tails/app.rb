require('pry')
require_relative('animal.rb')
require_relative('client.rb')


animal_shelter = [Animal.new, Animal.new, Animal.new]
# animal_shelter = {
#   fluffles: Animal.new('fluffles', 12, 'male'),
# }
# animal_shelter[:fluffles]

def add_animal(animal_shelter)
  creating an animal from user
  puts "Let's create an animal"
  print "Name of animal: "
  name = gets.chomp
  print "Age of animal: "
  age = gets.chomp
  print "Gender of animal: "
  gender = gets.chomp
  print "Species of animal: "
  species = gets.chomp
  print "List of toys: "
  toys = gets.chomp
  toys = toys.split(/\s*,\s*/)
  animal_obj = Animal.new({age: age, name: name, gender: gender})
  animal_shelter.push(animal_obj)

end


# display all animals
def display_all_animal(animal_shelter)
  animal_shelter.each do |animal_obj|
    animal_obj.name
    puts animal_obj.print
  end
  puts "Total animals: #{animal_shelter.count}"
end

add_animal(animal_shelter)

def adopt_animal(name, client)
  animal_obj = animal_shelter[name]
  animal_shelter.delete(name)
  client.adopt(animal_obj)
end

name = gets.chomp # fluffles the great
adopt_animal(animal_name, client_name)


binding.pry
