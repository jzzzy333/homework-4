// script.js
const cost = [
  { name: '餐饮', cost: 321 },
  { name: '交通', cost: 27.5 },
  { name: '购物', cost: 23 },
  { name: '娱乐', cost: 9.9 },
  { name: '药物', cost: 87.5 },
  { name: '服务', cost: 105 }
  ];
// 计算总消费
const total = cost.reduce((sum, item) => sum + item.cost, 0);
console.log('总消费：', total.toFixed(2));
