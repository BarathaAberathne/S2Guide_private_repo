function init() {
    document.getElementById("student_details").style.display = "block";
    document.getElementById("results_form_al").style.display = "none";
    document.getElementById("results_form_ol").style.display = "none";
}

function load_form_result() {
    document.getElementById("student_details").style.display = "none";
    document.getElementById("results_form_al").style.display = "block";
    document.getElementById("results_form_ol").style.display = "none";
}

function load_form_ol(){
    var name = document.getElementById("st_name").value;
    var email = document.getElementById("st_email").value;
    var address = document.getElementById("st_address").value;
    var std_obj = {
        name : name,
        email: email,
        address :address
    };
    console.log(std_obj);
    var json_str = JSON.stringify(std_obj);
    createCookie('student_details', json_str);
    document.getElementById("student_details").style.display = "none";
    document.getElementById("results_form_al").style.display = "none";
    document.getElementById("results_form_ol").style.display = "block";
}

function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
var $stream = $( '#stream' );
var $options = $( '.option' );

$stream.on( 'change', function ( e ) {

    $options.hide();
    $( '#option-' + this.value ).show();

} );

/*var option = ["Maths", "Bio Science", "Commerce", "Technology", "Other Stream"];
var dropdown = document.getElementById("stream");
dropdown.onchange=function ()
{
    for (var x = 0; x < option.length; x++) {
        document.getElementById(option[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";
}*/

function load_subjects() {
    var option = ["Maths", "Bio Science", "Commerce", "Technology", "Other Stream"];
    //var mc = document.getElementById("stream");
    for (var x = 0; x < option.length; x++) {
        document.getElementById(option[x]).style.display = "none";
    }
    document.getElementById(this.value).style.display = "block";
}

(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() == ''){
            showValidate(name);
            check=false;
        }


        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check=false;
        }

        if($(message).val().trim() == ''){
            showValidate(message);
            check=false;
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);