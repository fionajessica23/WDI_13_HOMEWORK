require('pry')
require_relative('monkey.rb')


fiona = Monkey.new('fiona','spider monkey')
fiona.eat('banana')
fiona.eat('milkshake')
fiona.introduce

binding.pry
