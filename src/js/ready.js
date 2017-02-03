var $ = require('jquery');
var uiManager = require('./uiManager');
var commentsManager = require('./commentsManager');
require('./noframework.waypoints.min');

$(document).ready(function () {
    
    commentsManager.loadComments();

    var waypoint = new Waypoint({
        element: document.getElementById('js--comments-section')
        , handler: function (direction) {
            if(direction == "down"){
               this.element.classList.add("prueba");
            } else {
                this.element.classList.remove("prueba");
            }

        }
        , offset: 550
    })
});
