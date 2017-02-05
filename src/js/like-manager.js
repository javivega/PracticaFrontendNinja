var $ = require('jquery');

var likeServices = require('./like-services');


likeServices.setLike();

$(document).ready(function(){


    for (var key in localStorage){

        $('.articles-section').find('[data-id="' + key + '"]').find('a.unlike-btn').removeClass().addClass('shown');
        $('.articles-section').find('[data-id="' + key + '"]').find('a.like-btn').removeClass().addClass('unshown');
    }


})

likeServices.setUnlike();
