var ss = [];
function SalesSpecial(id, img) {
    this.id = id;
    this.img = img;
};

$().ready(function() {
    $.getJSON('/api/sales.php', function(data) {
        $.each(data, function(id, img) {
            ss.push(new SalesSpecial(id, img));
        });
    });
});

function getRandom() {
    return Math.floor(Math.random() * ss.length + 1);
}

var winner = getRandom();
var i1 = new Image().src = ss[getRandom()];
var i2 = new Image().src = ss[getRandom()];
var i3 = new Image().src = ss[getRandom()];

