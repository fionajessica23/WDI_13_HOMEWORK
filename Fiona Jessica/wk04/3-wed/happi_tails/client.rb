class Client

  def initialize(name, num_child, age)
    @name = name
    @num_child = num_child
    @age = age
    @pets = []
  end

  def pets_list(pet)
    @pets.push pet
  end

end
