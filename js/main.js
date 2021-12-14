$(function () {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://api.novaposhta.ua/v2.0/json/",
        data: JSON.stringify({
            modelName: "Address",
            apiKey: "3ebe9a9c0ad502258fea72274f344df7",
            calledMethod: "getCities",
        }),

        success: function (response) {
            var filteredCities = response.data.filter(function (city) {
                return city.Delivery7 == "1" && city.IsBranch == "1";
            });
            console.log(filteredCities);

            filteredCities = filteredCities.reverse();

            for (var i = 0; i < filteredCities.length; i++) {
                $(".sel").prepend(
                    "<option>" + filteredCities[i].Description + "</option>"
                );
            }
        },
    });

    $(".sel").on("change", function () {
        var selectedCity = $(this).children("option:selected").val();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "https://api.novaposhta.ua/v2.0/json/",
            data: JSON.stringify({
                modelName: "Address",
                apiKey: "3ebe9a9c0ad502258fea72274f344df7",
                calledMethod: "getWarehouses",
                methodProperties: {
                    CityName: selectedCity,
                },
            }),

            success: function (response) {
                $(".branches").empty();
                if (response && response.data) {
                    var branches = response.data.filter(function (branch) {
                        return branch.CategoryOfWarehouse == "Branch";
                    });
                    console.log(branches);

                    for (var i = 0; i < branches.length; i++) {
                        $(".branches").prepend(
                            "<option>" + branches[i].Description + "</option>"
                        );
                    }
                }
            },
        });

        console.log(selectedCity);
    });

    $(".js-adress").on("input", function () {
        if (this.value.length >= 3) {
            $(".branches").empty();
            $(".sel").empty();
            $.ajax({
                type: "POST",
                dataType: "json",
                url: "https://api.novaposhta.ua/v2.0/json/",
                data: JSON.stringify({
                    modelName: "Address",
                    apiKey: "3ebe9a9c0ad502258fea72274f344df7",
                    calledMethod: "getCities",
                    methodProperties: {
                        FindByString: this.value,
                    },
                }),

                success: function (response) {
                    $(".sel").empty();

                    for (var i = 0; i < response.data.length; i++) {
                        $(".sel").prepend(
                            "<option>" +
                                response.data[i].Description +
                                "</option>"
                        );
                    }
                },
            });
        }
    });
});
