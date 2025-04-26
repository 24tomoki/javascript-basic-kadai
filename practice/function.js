const sayGoodMorning = () => {
  console.log('おはようございます');
  console.log('昨日はよく眠れましたか？');
  console.log('今日も一日頑張りましょう');
}

const sayGoodEvening = () => {
  console.log('こんばんは！');
  console.log('今日も一日お疲れ様でした');
}

sayGoodMorning();

sayGoodEvening();

const calculate = (price) => {
  console.log(price + 500 + '円');
}

calculate(1200);

const addTwoArgument = (price, shippingfree) => {
  console.log(price + shippingfree + '円');
}

addTwoArgument(1200, 500);

const double = (num) => {
  return num * 2;
}
console.log(double(20));

const userVariable = () => {
  const userName = '侍太郎';
  console.log(userName);
}

// userVariable();
console.log(userName);