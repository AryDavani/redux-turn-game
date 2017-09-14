var $ = require('jquery');
var Redux = require('redux');

var Character = require('./models/characters.js');

var homePage = require('../templates/homePage.hbs');
var playGame = require('../templates/playGame.hbs');
var endGame = require('../templates/endGame.hbs');


var INITIAL_STATE = {

};

var characters = [

]


$('#app').html(homePage());
