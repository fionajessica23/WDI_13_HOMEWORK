require('pry')
require_relative('animal.rb')
require_relative('client.rb')

@animal_list = []
@client_list = []


def add_animal()
  # creating an animal from user
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
  animal_obj = Animal.new(name, age, gender, species)
  animal_obj.add_toy_array(toys)
  @animal_list.push(animal_obj)
end


def add_client()
  # creating a client from user
  puts "Let's create a client"
  print "Name of client: "
  name = gets.chomp
  print "Number of children: "
  num_child = gets.chomp
  print "Age of client: "
  age = gets.chomp
  print "List of pets: "
  pets = gets.chomp
  pets = pets.split(/\s*,\s*/)
  client_obj = Client.new(name, num_child, age)
  client_obj.add_pet_array(pets)
  @client_list.push(client_obj)
end


# display all animals
def display_all_animal()
  @animal_list.each do |animal_obj|
    # animal_obj.name
    puts animal_obj.print
  end
  puts "Total animals: #{animal_list.count}"
end

# add_animal(animal_list)

# display all clients
def display_all_clients()
  @client_list.each do |client_obj|
    # client_obj.name
    puts client_obj.print
  end
  puts "Total clients: #{client_list.count}"
end

# add_client(client_list)


def adopt_animal(animal_name, client_name)
  animal_obj = @animal_list.find { |a| a.name == animal_name }
  @animal_list.delete(animal_obj)
  client_obj = @client_list.find { |b| b.name == client_name }
  #client_obj.adopt(animal_obj)
  client_obj.pets.push(animal_obj)
end

def put_animal_for_adoption(animal_name, client_name)
  client_obj = @client_list.find { |a| a.name == client_name }
  client_animal_list = client_obj.pets
  animal_obj = client_animal_list.find { |a| a.name == animal_name }
  @animal_list.push(animal_obj)
  client_obj.pets.delete(animal_obj)
end

# def display_menu
#   puts "Welcome to Animal Shelter System"
#   puts "Please choose from this following menu option"
#   puts "1. Display all animals"
#   puts "2. Display all clients"
#   puts "Your option [1-2]: "
#   input = gets.chomp
#
#   if input == "1"
#     display_all_animal
#   elsif input == "2"
#     display_all_clients
#   end
#
# end
#
# display_menu

# animal_obj = Animal.new('cat', 2, 'f', 'apaaja')
# @animal_list.push(animal_obj)
# animal_obj = Animal.new('dog', 2, 'f', 'apaaja')
# @animal_list.push(animal_obj)
# client_obj = Client.new('fiona', 3, 30)
# @client_list.push(client_obj)
# adopt_animal('cat', 'fiona')
# put_animal_for_adoption('cat', 'fiona')

# name = gets.chomp # fluffles the great
# adopt_animal(animal_name, client_name)


binding.pry
