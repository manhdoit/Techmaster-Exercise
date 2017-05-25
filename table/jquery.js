$(document).ready(function() {
    evenify("myTable");

    $("th:gt(0)").click(function() {
        sortTable($("#myTable"), $(this));
    });


});
$("tr th:gt(0)").addClass("ascending");
function evenify(id) {
    var count = 0;
    $("#" + id).find("tbody").find("tr").each(function() {
        var cls = (count % 2 == 0) ? "even" : "odd";
        $(this).removeClass("even").removeClass("odd");
        $(this).addClass(cls);
        count++;
    });
}

function sortTable(table, th) {
    var rows = $(table).find("tr:gt(0)").toArray().sort(compare($(th).index()));

    if ($(th).hasClass("ascending")) {
        $(th).removeClass("ascending").addClass("descending");
        rows = rows.reverse();
    }
    else {
        $(th).removeClass("descending").addClass("ascending");
        // $(th).removeClass("icon");
    }

    for (var i = 0; i < rows.length; i++) {
        $(table).append(rows[i]);
    }

    evenify($(table).attr("id"));
}

function compare(index) {
    return function(a, b) {
        var valA = $(a).children("td").eq(index).html();
        var valB = $(b).children("td").eq(index).html();
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
    }
}

