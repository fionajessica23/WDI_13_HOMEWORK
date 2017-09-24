require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

binding.pry
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]


# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7


# How would you add yourself to the users hash?
users["Fiona"] = {
  :twitter => "dolphine",
  :favorite_numbers => [7, 9, 23],
}


# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]



# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# or
# users["Erik"][:favorite_numbers].sort.first
# or
# users["Erik"][:favorite_numbers].sort[0]


# How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select { |num| num.even? }


# How would you return an array of the favorite numbers common to all users?
users['Erik'][:favorite_numbers] & users['Anil'][:favorite_numbers] & users['Jonathan'][:favorite_numbers]


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
common_number = []
users.each_value do |name|
  common_number.push(name[:favorite_numbers])
end
puts common_number.flatten.sort.uniq
