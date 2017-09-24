class Client

  def initialize(name, num_child, age)
    @name = name
    @num_child = num_child
    @age = age
    @pets = []
  end

  # not being used,
  # assume client can only have pets through adoption
  # def add_pet_array(pet)
  #   @pets += pet
  # end

  def name
    @name
  end

  def pets
    @pets
  end

  def print
    pet_list = []
    @pets.each do |pet|
      pet_list.push(pet.name)
    end
    puts "Name: #{@name}, number of children: #{@num_child}, age: #{@age}, pets: #{pet_list}."
  end


end
