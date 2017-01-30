var $ = require('jquery');
var uiManager = require('./uiManager');

$(document).ready(function(){

    $('.register-button').on('click', function(){
        uiManager.showComments();
    })


})
