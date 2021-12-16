$(document).ready(function () {
    var branchesGlobal;

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://api.novaposhta.ua/v2.0/json/",
        data: JSON.stringify({
            modelName: "Address",
            apiKey: "3ebe9a9c0ad502258fea72274f344df7",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityName: "Вінниця",
            },
        }),

        success: function (response) {
            $(".branches").empty();
            if (response && response.data) {
                branchesGlobal = response.data;

                for (var i = 0; i < branchesGlobal.length; i++) {
                    $(".branches").prepend(
                        "<li>" + branchesGlobal[i].Description + "</li>"
                    );
                }
            }
        },
    });

    $(".in").on("click", function () {
        if ($(".in").hasClass("hideBlock")) {
            $(".in").removeClass("hideBlock");
            $(".block").css("display", "none");
        } else {
            $(".in").show();
            $(".in").addClass("hideBlock");
            $(".block").css("display", "block");
        }
    });

    $(".inputSecond").on("input", function () {
        $(".branches").empty();
        $(".in").empty();
        var inpuValue = this.value.toLowerCase();
        var newList = branchesGlobal.filter(function (branch) {
            return branch.Description.toLowerCase().indexOf(inpuValue) != -1;
        });
        for (var i = 0; i < newList.length; i++) {
            $(".branches").prepend("<li>" + newList[i].Description + "</li>");
        }
    });

    $("body").on("click", ".branches li", function () {
        var selectedBranche = $(this).text();
        console.log(selectedBranche);
        $(".in").text(selectedBranche);
        $(".in").removeClass("hideBlock");
        $(".block").hide();
    });

    $("body").on("click", function (evt) {
        if (!$(evt.target).hasClass("in")) {
            $(".in").removeClass("hideBlock");
            $(".block").hide();
        }
    });
});
