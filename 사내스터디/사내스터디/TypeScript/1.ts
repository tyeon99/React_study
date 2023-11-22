/*

1. 사용하는 이유 

에러의 사전방지 : 기존의 JS는 문자열 , 숫자열 등 을 구별하지 않은채 실행하여 에러발생시 알 수 없는 부분이 많다. 
숫자 123 과 문자 123을 구별하는 방식등에서 소스가 복잡해 질 수록 디버깅에 한계가 발생한다. 


2. 코드 가이드 및 자동완성 

확장프로그램이 많이 나오고 있고, ai코드 완성등 다양하고 나오고 있지만, 
그럼에도 불구하고 Ts의 장점에 속한다. 




String 문자열 

let str: string = 'hi';


Number 숫자열 

let num: number = 10;

Boolean 진위값

let isLoggedIn: boolean = false;




Array 배열 
let arr: number[] = [1,2,3]; or let arr: Array<number> = [1,2,3];
처럼 작성할수 있다. 

let arr: [string, number] = ['hi', 10];

와 같이 각각의 타입을 정의해줄 수 있다. 






함수 

Js -  function sum(a, b){ return a + b }
Ts -  function sum(a: number , b: number): number { return a + b}
(a,b) 매개변수 와 

sum 함수 의 반환값 

에 타입을 추가 

*/
