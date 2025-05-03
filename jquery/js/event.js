// $(function () {
//   $('button').on('click', function () {
//     console.log('クリックされました。');
//   });
// });

$(function () {
  $('button').on('click', () => {
    console.log('頑張りましょう');
  });
});

// $(function () {
//   $('div').on({
//     'click': () => {
//       $('div').css('background', 'red');
//       $('div').text('click');
//     },
//     'dblclick': () => {
//       $('div').css('background', 'green');
//       $('div').text('dblclick');
//     },
//     'mouseenter': () => {
//       $('div').css('background', 'blue');
//       $('div').text('mouseenter');
//     },
//     'mouseout': () => {
//       $('div').css('background', 'gray');
//       $('div').text('mouseout');
//     },
//   });
// });

$(function () {
  $(document).on('click keydown', (e) => {
    if (e.type == 'click') {
      $('div').text('クリックされました');
    }
    if (e.type == 'keydown') {
      $('div').text('キーが押されました');
    }
  });
});