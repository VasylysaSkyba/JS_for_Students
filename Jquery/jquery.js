$(document).ready(function () {
    $(".btn-slide").click(function () {
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
        return false;
    });
});

$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $(".box").slideToggle();
    });
});