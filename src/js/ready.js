var $ = require('jquery');
var commentsManager = require('./commentsManager');
require('./noframework.waypoints.min');


$(document).ready(function () {
    
    commentsManager.loadComments();
    //Muestro y oculto comentarios en el scroll

    var waypoint = new Waypoint({
        element: document.getElementById('js--comments-section')
        , handler: function (direction) {
            if (direction == "down") {
                this.element.classList.add("comment-shown");
            }
            else {
                this.element.classList.remove("comment-shown");
            }
        }
        , offset: 800
    })
});
