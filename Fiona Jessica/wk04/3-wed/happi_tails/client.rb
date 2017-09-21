class Client

  def initialize(name, num_child, age)
    @name = name
    @num_child = num_child
    @age = age
    @pets = []
  end

  def add_pet_array(pet) # pet as array
    @pets += pet
  end

  def adopt(pet) # pet as pet object
    @pets.push pet
  end

  def name
    @name
  end

  def pets
    @pets
  end

  def print
    puts "Name: #{@name}, number of children: #{@num_child}, age: #{@age}, pets: #{@pets}."
  end


end
