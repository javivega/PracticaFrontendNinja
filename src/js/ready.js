var $ = require('jquery');
var uiManager = require('./uiManager');
var commentsManager = require('./commentsManager.js');

$(document).ready(function(){

    /*$('.register-button').on('click', function(){
        uiManager.showComments();
    })
    */
    
    commentsManager.loadComments();


})
