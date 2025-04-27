// console.log(document.head);
// console.log(document.body);
// console.log(window);
// console.log(document.getElementById('first-list'));
// console.log(document.getElementsByClassName('heading'));
const headings = document.getElementsByClassName('heading');
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));
const cssHeadings = document.querySelectorAll('.heading');
const cssLists = document.querySelectorAll('li');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < cssHeadings.length; i++) {
  console.log(cssHeadings[i]);
}
for (let i = 0; i < cssLists.length; i++) {
  console.log(cssLists[i]);
}

const li = document.createElement('li');
// li.textContent = 'Javascriptで作成したリスト3';
li.innerHTML = '<a href="#">javascriptで新しく作成したリスト3</a>';
document.querySelector('ul').appendChild(li);

let text = document.getElementById('first-heading').innerHTML;
console.log(text);
text = document.getElementById('first-heading').textContent;
console.log(text);
