$(document).ready(function () {

    function displayTime() {
        var display = moment().format("MMM Do, YYYY");
        $('#currentDay').text(display);

    }
    displayTime();
    $(".saveBtn").on("click", function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");


        localStorage.setItem(time, text);
    })

    function timeTracker() {

        var timeNow = moment().hour();


        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);


            if (blockTime < timeNow) {

                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {

                $(this).addClass("present");
            }
            else {

                $(this).addClass("future");

            }
        })
    }
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})