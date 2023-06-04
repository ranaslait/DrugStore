
// let search = $("#livesearch");

// function showResults(str){
//     if(str.length===0){
//         search.addClass("hide");
//     }else{
//         search.removeClass("hide");
//     }
// }
// $(document).ready(function () {
//     console.log("jQuery version:", $.fn.jquery);
//     jQuery.ajax("#d").on('keyup', function (e) {
//         console.log("inside ajax");
//         e.preventDefault();
//         let search = $("#d").val();
//         $.ajax({
//             url: '/srch',
//             method: 'POST',
//             contentType: 'application/json',
//             data: JSON.stringify({ query: search }),
//             success: function (response) {
//                 $("#livesearch").html('nada');
//                 $("#livesearch").css("display", "block");
//             },
//             error: function (err) {
//                 console.log(err);

//             }
//         });
//     });
// });