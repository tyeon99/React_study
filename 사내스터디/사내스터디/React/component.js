/*

컴포넌트 - 클래스형 , 함수형 으로 사용된다. 

상대적으로 간결하고 사용하기 편한 함수형 을 권장하고 있다. 

*Hook 사용의 편의성*


하나의 태그로 끝나야 한다. 

<> 빈태그 사용가능 ( fragment)

ex

<>
    <div>블라블라블라</div>
    <div>블라블라블라2</div>
<>

가능 해짐 

export default 와 export의 차이


default = 하나의 개체만을 가져옴 





// Data.js

function Data() {
    return <h1>Hello, React!</h1>;
}

export default Data;


// DataChild.js

import Data from "./Data"

import 시 작명이 자유롭다. 






복수 개체 일때


const name = 'Ann';
 
function sayHello() {
    console.log('Hello World!');
}
 
class Person {
    constructor(name){
        this.name = name;
    }
}
 
// 변수, 함수, 클래스를 하나의 객체로 구성하여 export
export {name, sayHello, Person};

import {name, sayHello, Person} from './test.js'

import 시 export한 네이밍으로 사용해야 한다. 

개별 import 하지 않고 

import * as test from './test.js'


위와 같이 as를 사용하여 test의 모든것들을 불러온다 라는 의미로 전체를 불러 올 수 있다. 






next.js 에서 페이지 분리와 컴포넌트 분리등을 더 자세히 다룰 예정
*/
