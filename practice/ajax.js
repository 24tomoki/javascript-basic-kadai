const url = 'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json';
const btn = document.getElementById('ajax-btn');
btn.addEventListener('click', () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      console.log('東京の天気：' + weather);
    });
});

const url2 = 'https://jsonplaceholder.typicode.com/posts';
const btn2 = document.getElementById('btn');
btn2.addEventListener('click', () => {
  const dummyData = { name: '侍太郎', age: 30 };
  fetch(url2, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dummyData)
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log('サーバーからの応答：\n' + JSON.stringify(data, null, 2));
    });
});