$(document).ready(function () {
    $("#name").on('keyup', function (e) {
        e.preventDefault();
        var data = $('#name').val();
        $.ajax({
            url: '/user/checkUN',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: data }),
            success: function (response) {
                $('#result').html('name is ' + response);

                if (response == 'taken') {
                    $('#result').css("color", "red");
                }
                else {
                    $('#result').css("color", "green");
                }
            },
            error:function(err){

            }
        });
    });
});