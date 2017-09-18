# 1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
#
# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position.
# Use array methods.
#
# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days
#
# 4. Remove either the weekdays or the weekends
# Your choice...
#
# 5. Sort the remaining days alphabetically

require 'pry'
# 1.
days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

days_of_the_week = []

days.each do |day|
  days_of_the_week.push(day)
end

# puts days_of_the_week



# 2.
getting_sunday = days_of_the_week.pop()
days_of_the_week.unshift(getting_sunday)

# puts days_of_the_week



# 3.
weekdays = []
weekend = []

days_of_the_week.each do |day|
  if (day == 'saturday' || day == 'sunday')
    weekend.push(day)
  else
    weekdays.push(day)
  end
end

puts new_week = [weekdays, weekend]


# 4.
new_week.shift
puts new_week


# 5.
puts new_week.shift.sort
