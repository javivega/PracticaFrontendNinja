var $ = require('jquery');
var commentService = require('./comments-services');

$(document).ready(function () {
    var form = $('#contact-form');
    var inputName = $('#form-name')[0];
    var inputSurname = $('#form-apellidos')[0];
    var inputEmail = $('#form-email')[0];
    var comments = $('#form-message');

    form.submit(function (event) {

        var self = this;

        if (inputName.checkValidity() == false) {
            event.preventDefault();
            inputName.focus();
            $('#val-message-name').css('display', 'block');
            return false;
        }
        else {
            $('#val-message-name').css('display', 'none');
        }
        if (inputSurname.checkValidity() == false) {
            event.preventDefault();
            $('#val-message-surname').css('display', 'block');
            inputSurname.focus();
            return false;
        }
        else {
            $('#val-message-surname').css('display', 'none');
        }
        if (inputEmail.checkValidity() == false) {
            event.preventDefault();
            $('#val-message-email').css('display', 'block');
            inputEmail.focus();
            return false;
        }
        else {
            $('#val-message-email').css('display', 'none');
        }
        if (wordsCount(comments.val()) > 120 || wordsCount(comments.val()) < 2) {
            event.preventDefault();
            $('#val-message-textarea').css('display', 'block');
            comments.focus();
            return false;
        }
        else {
            $('#val-message-textarea').css('display', 'none');
        }


        function wordsCount(text) {
            var textWithoutSpace = text.replace(/\s\s+/g, ' ').trim();
            var listOfWords = textWithoutSpace.split(' ');
            var numOfWords = listOfWords.length;
            return numOfWords;
        }


        var comment = {
            name: $('#form-name').val()
            , apellidos: $('#form-apellidos').val()
            , email: $('#form-email').val()
            , comentario: $('#form-message').val()
        }

        //bloqueo el boton antes de poder enviar el formulario.
        $(this).find("button").text("Saving comment...").attr("disabled", true);


        commentService.save(comment, function (data) {
            alert("Comentario guardado correctamente");
            self.reset();
            $(self).find("button").text("Enviar").attr("disabled", false);
        }, function (error) {
            alert("Se ha producido un error");
            $(self).find("button").text("Enviar").attr("disabled", false);
        });


        event.preventDefault();
        return false;
    });
})
