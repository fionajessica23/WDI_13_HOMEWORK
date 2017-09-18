# line of code
#
# write a program loc.rb to display the number of lines in a file
#
# eg. in file data.txt
# cat
# dog
# rabbit

# when I run the program, it should prompt for a filename
# > ruby loc.rb
# > Enter filename: data.txt
# > 3 line(s)

puts "Enter filename: "
file_name = gets.chomp


lines = File.foreach(file_name).count

puts "#{lines} line(s)"
