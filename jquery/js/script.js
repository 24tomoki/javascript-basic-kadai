$(function () {
  const title = $('#title').text();
  const list = $('.message').text();
  console.log(title);
  console.log(list);
  const text = $('li[class^="sample"]').text();
  const text2 = $('li').text();

  console.log(text);
  console.log(text2);
});