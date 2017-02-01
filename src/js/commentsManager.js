var $ = require('jquery');
var commentsService = require('./comments-services');

module.exports = {
    
    
    
    setUiIdeal: function(){
        $('.comments').removeClass().addClass('comments ideal');
    },
    
    setUiBlank: function(){
        $('.comments').removeClass().addClass('comments blank');
    },
    
    setUiError: function(){
        $('.comments').removeClass().addClass('comments error');
    },
    
    setUiLoading: function(){
        $('.comments').removeClass().addClass('comments loading');
        
    },
    
    loadComments: function(){
        var self = this;
        
        commentsService.list(function(comment){
            if(comment.length == 0){
                self.setUiBlank();
            } else {
                self.setUiIdeal();
            }
        }, function(error){
            self.setUiError();
        });
        
    }
    
    
    
}