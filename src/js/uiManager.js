var $ = require('jquery');

module.exports = {

    uiStatus: "no-comments-shown",

    showComments: function(){
        if(this.uiStatus == "no-comments-shown"){
            $('.comments-section').removeClass().addClass('comments-shown');
            this.uiStatus = "comments-shown";
        } else {
            $('.comments-section').removeClass().addClass('no-comments-shown');
            this.uiStatus = "no-comments-shown";
        }
    }
}
