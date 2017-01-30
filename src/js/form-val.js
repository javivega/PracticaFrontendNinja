var $ = require('jquery');

$(document).ready(function(){
    var form = $('#contact-form');
    var inputName = $('#form-name')[0];
    var inputSurname = $('#form-apellidos')[0];
    var inputEmail = $('#form-email')[0];
    var comments = $('#form-message');


    form.submit(function(event){
        if(inputName.checkValidity() == false){
            event.preventDefault();
            inputName.focus();
            $('#val-message-name').css('display', 'block');
            return false;
        } else {
            $('#val-message-name').css('display', 'none');
        }

        if(inputSurname.checkValidity() == false){
            event.preventDefault();
            $('#val-message-surname').css('display', 'block');
            inputSurname.focus();
            return false;
        } else {
            $('#val-message-surname').css('display', 'none');
        }

          if(inputEmail.checkValidity() == false){
            event.preventDefault();
            $('#val-message-email').css('display', 'block');
            inputEmail.focus();
            return false;
        } else {
            $('#val-message-email').css('display', 'none');
        }

        if(wordsCount(comments.val()) > 120 || wordsCount(comments.val()) < 2) {
            event.preventDefault();
            $('#val-message-textarea').css('display', 'block');
            comments.focus();
            return false;
        } else {
            $('#val-message-textarea').css('display', 'none');
        }

        event.preventDefault();
        return false;
    });

    function wordsCount (text){
        var textWithoutSpace = text.replace(/\s\s+/g, ' ').trim();
        var listOfWords = textWithoutSpace.split(' ');
        var numOfWords = listOfWords.length;
        return numOfWords;
    }





})
