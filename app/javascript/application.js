// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import * as jquery from "jquery"
import "semantic-ui" 
import "@hotwired/turbo-rails"
import "controllers"


$(document).on("turbo:load", function() {
    $('.ui.dropdown').dropdown();
})