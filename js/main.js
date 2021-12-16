$(function () {
    $(".block1").draggable();

    $(".block2").droppable({
        drop: function (event, ui) {
            $(".topLine").css("background-color", "white");
            $(".mainBlock").css("background-color", "white");
        },
        out: function (event, ui) {
            $(".topLine").css("background-color", "black");
            $(".mainBlock").css("background-color", "black");
        },
    });
});
