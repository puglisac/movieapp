$('form').submit(function(event) {
    event.preventDefault();
    let $mov = $('input').eq(0).val();
    const $rate = $('input').eq(1).val();
    if (Array.from($mov).length >= 2) {
        $('#rated').append(`<tr><td class='movT'>${$mov}</td><td class='movR'>${$rate}</td><td><button class='delete'>Delete</button></td></tr>`)
        $('input').eq(0).val('');
        $('input').eq(1).val('');
    } else alert('Movie title must be more than two characters')
});
$('#rated').on('click', 'button', function() {
    console.log($(this));
    $(this).closest('tr').remove();

});

function Ascending_sort(a, b) {
    return ($(b).text().toUpperCase()) <
        ($(a).text().toUpperCase()) ? 1 : -1;

}

function Ascending_sortRate(a, b) {
    return (Number($(b).find('.movR').text())) >
        (Number($(a).find('.movR').text())) ? 1 : -1;
}

$('#sortMov').click(function() {
    $("#rated tr").sort(Ascending_sort).appendTo('#rated');

});
$('#sortRate').click(function() {
    $("#rated tr").sort(Ascending_sortRate).appendTo('#rated');
});