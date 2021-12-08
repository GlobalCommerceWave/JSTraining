$(function () {
    // your code
    $.ajax({
        url: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json",
    }).done(function (data) {
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            $(".js-loop").append(
                '<div class="col-4">' +
                    data[i].rate +
                    "</div>" +
                    '<div class="col-4">' +
                    data[i].txt +
                    "</div>" +
                    '<div class="col-4">' +
                    data[i].cc +
                    "</div>"
            );
        }
    });
});
