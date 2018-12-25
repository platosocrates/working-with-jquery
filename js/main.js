var $h1 = $('h1');
var $ul = $('ul');

$h1.html('Dinosaurs!');
$ul.addClass('dino-list');

$('.more-dinos').remove();

dinos.forEach(function (dino) {
    var $li = $('<li>');
    var $figure = $('<figure>');
    var $img = $('<img>');
    var $caption = $('<figcaption>');

    $caption.html(dino.name);
    $img.attr('src', 'images/' + dino.img);

    $figure.append($img, $caption);
    $li.append($figure);
    $ul.append($li);
});