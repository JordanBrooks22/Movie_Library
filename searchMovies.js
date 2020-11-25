// another search method/function may work better
function search(movies, name) {
    var results;

    name = name.toLowerCase();
    results = $.map(movies, function(entry) {
        var match = entry.name.toLowerCase().indexOf(name) !== -1;
        return match ? entry : null;
    });
    return results;
}