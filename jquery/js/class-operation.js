$(function () {
  $('#add').on('click', () => {
    $('#target').addClass('sample');
  });

  $('#remove').on('click', () => {
    $('#target').removeClass('sample');
  });

  $('#toggle').on('click', () => {
    $('#target').toggleClass('sample');
  });

  $('#has').on('click', () => {
    if ($('#target').hasClass('sample')) {
      console.log('クラスが設定されています');
    } else {
      console.log('クラスが設定されていないです');
    }
  });
});