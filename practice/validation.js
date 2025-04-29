const btn = document.getElementById('check-btn');
btn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const output = document.getElementById('output');

  let errors = [];
  if (name.trim() === '') {
    errors.push('名前は入力して');
  } else if (name.length > 10) {
    errors.push('10文字未満にして');
  }

  const emailPattern = /^[a-zA-z0-9.]+@[a-zA-z0-9.]+$/;
  if (!emailPattern.test(email)) {
    errors.push('メアドのパターンがおかしい');
  }

  if (errors.length > 0) {
    output.innerHTML = errors.join('<br>');
  } else {
    output.innerHTML = ''; // エラーメッセージをクリア
    alert('バリデーションOKです。');
  }
})