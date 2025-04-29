const getCookie = (name) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, value] = cookies[i].trim().split('=');
    if (cookieName == name) {
      return decodeURIComponent(value);
    }
  }
  return '';
}

document.getElementById('output').textContent = 'name= ' + getCookie('name') + 'age= ' + getCookie('age');
document.cookie = 'name=' + encodeURIComponent('侍太郎') + '; max-age=60 *60';
document.cookie = 'age=30; max-age=60 * 60';


// メールアドレスのバリデーション（使える記号は.と@のみとする）
const emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+$/;
if (!emailPattern.test('user@s')) {
  console.log('エラーが発生しました');
}