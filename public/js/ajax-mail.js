$(document).ready(function () {
        $("#email").on('keyup', function (e) {
            e.preventDefault();
            var datam = $('#email').val();
            $.ajax({
                url: '/user/checkmail',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ email: datam }),
                success: function (response) {
                    $('#resultm').html('email is ' + response);
    
                    if (response == 'taken') {
                        $('#resultm').css("color", "red");
                    }
                    else {
                        $('#resultm').css("color", "green");
                    }
                },
                error:function(err){
    
                }
            });
        });
    });