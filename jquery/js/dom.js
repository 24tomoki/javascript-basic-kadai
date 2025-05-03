// $(function () {
//   $('p').text('jQueryを勉強しよう');
// });

$(function () {
  let num = 0;
  $('#append').on('click', () => {
    num++;
    $('ul').append('<li>appendで追加' + num + '</li>');
  });

  $('#remove').on('click', () => {
    if (num == 0) {
      return;
    }
    num--;
    $('li:last').remove();
  });

  $('#show').on('click', () => {
    $('ul').show();
  });

  $('#hide').on('click', () => {
    $('ul').hide();
  });
});