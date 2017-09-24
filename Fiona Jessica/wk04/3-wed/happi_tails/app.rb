require('pry')
require_relative('animal.rb')
require_relative('client.rb')

@animal_list = []
@client_list = []

def add_animal_menu()
  # getting input from user to create an animal
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
  add_animal(name, age, gender, species, toys)

end

def add_client_menu()
  # getting input from user to create a client
  puts "Let's create a client"
  print "Name of client: "
  name = gets.chomp
  print "Number of children: "
  num_child = gets.chomp
  print "Age of client: "
  age = gets.chomp
  add_client(name, num_child, age)
end

def adopt_animal_menu()
  # getting input from user to adopt an animal
  puts "Let's adopt an animal"
  print "Name of animal: "
  animal_name = gets.chomp
  print "Name of client: "
  client_name = gets.chomp
  adopt_animal(animal_name, client_name)
end


def put_animal_for_adoption_menu()
  puts "Let's put an animal for adoption"
  print "Name of animal: "
  animal_name = gets.chomp
  print "Name of client: "
  client_name = gets.chomp
  put_animal_for_adoption(animal_name, client_name)
end


def add_animal(name, age, gender, species, toys)
  # creating an animal
  animal_obj = Animal.new(name, age, gender, species)
  animal_obj.add_toy_array(toys)
  @animal_list.push(animal_obj)
end

def add_client(name, num_child, age)
  # creating a client
  client_obj = Client.new(name, num_child, age)
  @client_list.push(client_obj)
end


# display all animals
def display_all_animals()
  puts "\nAnimal List:"
  @animal_list.each do |animal_obj|
    puts animal_obj.print
  end
  puts "Total animals: #{@animal_list.count}"
end


# display all clients
def display_all_clients()
  puts "\nClient List:"
  @client_list.each do |client_obj|
    puts client_obj.print
  end
  puts "Total clients: #{@client_list.count}"
end


def adopt_animal(animal_name, client_name)
  # adopt an animal
  animal_obj = @animal_list.find { |a| a.name == animal_name }
  @animal_list.delete(animal_obj)
  client_obj = @client_list.find { |b| b.name == client_name }
  client_obj.pets.push(animal_obj)
end


def put_animal_for_adoption(animal_name, client_name)
  client_obj = @client_list.find { |a| a.name == client_name }
  client_animal_list = client_obj.pets
  animal_obj = client_animal_list.find { |a| a.name == animal_name }
  @animal_list.push(animal_obj)
  client_obj.pets.delete(animal_obj)
end

# data for testing
animal_obj = Animal.new('cat', 2, 'f', 'apaaja')
@animal_list.push(animal_obj)
animal_obj = Animal.new('dog', 2, 'f', 'apaaja')
@animal_list.push(animal_obj)
client_obj = Client.new('fiona', 3, 30)
@client_list.push(client_obj)

def display_menu()
  puts "\n\n==================================="
  puts "Welcome to Animal Shelter System"
  puts "==================================="
  puts "Please choose from this following menu option"
  puts "1. Display all animals"
  puts "2. Display all clients"
  puts "3. Add animals"
  puts "4. Add clients"
  puts "5. Adopt animal"
  puts "6. Put animal for adoption"
  puts "7. Exit"
  print "Your option [1-7]: "
end

def start_program()
  while true
    display_menu()
    input = gets.chomp
    break if input == '7'
    if input == '1'
      display_all_animals()
    elsif input == '2'
      display_all_clients()
    elsif input == '3'
      add_animal_menu()
    elsif input == '4'
      add_client_menu()
    elsif input == '5'
      adopt_animal_menu()
    elsif input == '6'
      put_animal_for_adoption_menu()
    end
  end
end

start_program()



# binding.pry
