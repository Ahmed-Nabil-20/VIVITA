
$(".openModelReplay").on('click', function() {
    var value = $(this).children("input").val();
    $("#commentId").val(value);
});

$(".openModelReplay").on('click', function () {
    $("#modelReplay").css('display', 'block');
    $("#modelReplay .modal-content").animate({
        top: 0
    }, 300);
});

// When the user clicks on <span> (x), close the modal
$(".close").on('click', function () {
    $("#modelReplay").css('display', 'none');
    $("#modelReplay .modal-content").animate({
        top: '-300px'
    }, 300);
});

var modal = document.getElementById("modelComment");
var modal2 = document.getElementById("modelReplay");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        $("#modelComment").css('display', 'none');
        $("#modelComment .modal-content").animate({
            top: '-300px'
        }, 300);
    }

    if (event.target == modal2) {
        $("#modelreplay").css('display', 'none');
        $("#modelreplay .modal-content").animate({
            top: '-300px'
        }, 300);
    }
}