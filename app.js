/*
 * Native js
 * еще раз повторю что что бы js заработал в файле index.html 
 * его надо разместить в самом низу. 
 */
document.querySelector('.button1').onclick = function () {
    document.querySelector('.kvadrat1').classList.toggle('orange');
}
/*
 * Jquery
 * $ ---> замена ---> document.querySelector
 */
$('.button2').click(function () {
    $('.kvadrat2').toggleClass('orange');
})
/*
 * Jquery
 * Изменения через style
 */
$('.button3').click(function () {
    $('.kvadrat3').css({
        'background': 'green',
        'width': '100%',
    });
})
/*
 * Jquery
 * Изменения текста
 * $('.text').text('Change complite!!!'); --> если нужно изменить только текст
 * $('.text').html(`<h2>Change complite!!!</h2>`); --> если нужно изменить html
 */
$('.button4').click(function () {
    $('.text').html(`<h2>Change complite!!!</h2>`);
})
/*
 * Jquery
 * Добавляет значения li в список ul 
 */
$('.button5').click(function () {
    let text=$('.list_input');
    $('.list').append(`<li>${text.val()}</li>`);
    text.val('');
})