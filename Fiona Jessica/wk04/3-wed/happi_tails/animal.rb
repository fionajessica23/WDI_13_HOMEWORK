class Animal

  def initialize(props)
    @name = props[:name]
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def add_toy(toy)
    @toys.push toy
  end

  def name
    @name
  end


  def print
    puts "Name: #{@name}, age: #{@age}, gender: #{@gender}, species: #{@species}, toys: #{@toys}."
  end


end
