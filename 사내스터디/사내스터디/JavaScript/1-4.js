/* 

객체 object

const a1 = [1, 2, 3, 4];
const a2 = [1, "two"];
const a3 = [
  [1, 2],
  [1, 3],
];
const a4 = [
  { name: "12월", value: 12 },
  { name: "1월", value: 1 },
];
a3.length; // 2
a3[0]; // [1,2]
a3[a3.length - 1]; // [1,3]


위와 같이 사용한다. 

const 의 경우 object의 재할당이 가능함으로 

a4[0].name = '5월' 과 같이 재할당 할 수 있다. 

*/