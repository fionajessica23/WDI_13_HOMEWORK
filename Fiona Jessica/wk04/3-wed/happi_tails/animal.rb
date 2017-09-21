class Animal

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def add_toy_array(toy)
    @toys += toy
  end

  def name
    @name
  end


  def print
    puts "Name: #{@name}, age: #{@age}, gender: #{@gender}, species: #{@species}, toys: #{@toys}."
  end


end
