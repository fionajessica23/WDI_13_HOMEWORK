require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'


get '/' do
  result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
  @volume = result['MSFT'].volume
  erb :index
  binding.pry
end
