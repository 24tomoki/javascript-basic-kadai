class Product {

  //コンストラクター
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }
}

const shampoo = new Product('シャンプー', 500, '生活用品');
const coffee = new Product('コーヒー', 1500, '飲料');
console.log(shampoo);
console.log(coffee);

shampoo.describe();
coffee.describe();

const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします' + this.name + 'さん');
  }
}

user.greet();