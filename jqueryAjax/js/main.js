//-- $.ajax() paraméreket lsd.: https://www.w3schools.com/jquery/ajax_ajax.asp
$(document).ready(function () {
    console.log('Az oldal betöltődött!');
})

function getData() {
    var data = new Object();
    data.name = $('#name').val();
    data.email = $('#email').val();
    data.password = getPassword();
    data.interest = $('#interest').val();
    return data;
}

$('#create').click(function () {
    console.log( getData());
})

function getPassword() {
    let pass1 = $('#pass1').val();
    let pass2 = $('#pass2').val();
    if (pass1 === pass2) {
        return pass1;
    }
    return '1234';
}