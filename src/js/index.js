(function ($) {
    $('#homesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/homes",
        "columns": [
            { "data": "sell" },
            { "data": "list" },
            { "data": "living" },
            { "data": "rooms" },
            { "data": "beds" },
            { "data": "baths" },
            { "data": "age" },
            { "data": "acres" },
            { "data": "taxes" }

        ]
    } );

})(jQuery);