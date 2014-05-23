var App = function (table, url, method) {
    this.table = table;
    this.url = url;
    var self = this;

    this.update = function () {
        $.ajax({
            url: url,
            type: method
        }).done(function (data) {
            self.table.html('');
            for (var key in data) {
                var row = $('<tr>');
                row.append($('<td>').html(key + ' : '));
                row.append($('<td>').html(data[key]));
                self.table.append(row);
            }
        }).fail(function (xhr, status) {
            console.info('status');
        });
    };

    this.start = function (interval) {
        setInterval(self.update, interval);
    };
};

$(document).ready(function () {
    var app = new App($('.table'), '/test');
    app.start(500);
});