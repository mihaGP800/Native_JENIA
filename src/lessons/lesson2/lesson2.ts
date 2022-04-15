console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// const sum = (a:number)=>(b:number)=>a+b

function sum(a = 100) {
    return function (b: number) {
        return a + b
    }
}

const sumWith100 = sum(100)

// console.log(sumWith100(6))


function urlDomain(domain: string) {
    return function (url: string) {
        return `https://${url}.${domain}`
    }
}

const comUrl = urlDomain('com')
const ruUrl = urlDomain('ru')
// console.log(comUrl('google'))
// console.log(ruUrl('google'))

function logPerson() {

    // @ts-ignore
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Miha', age: 32, job: 'developer'}
const person2 = {name: 'Alina', age: 27, job: 'project-manager'}

type FnType = typeof logPerson
type PersonType = typeof person1

function bind(context: PersonType, fn: FnType) {
    return function (...arg: any) {
        fn.apply(context, arg)
    }
}

// bind(person1, logPerson)()
// bind(person2, logPerson)()


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter() {
//     let count = 0
//     return function () {
//         return ++count
//     }
// }
// const makeCounter = () => {
//     let count = 0
//     return () => ++count
// }
//
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter2())
// console.log(counter())

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter() {
//     // let count = 0
//     return function (count: number) {
//         return {
//             increase: ++count,
//             decrease: --count,
//             reset: 0,
//             set: count
//         }
//     }
// }
//
// const counter = makeCounter();
// console.log(counter(3).increase)
// console.log(counter(40).reset)

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

const superSum = (n: number) => {
    if (n <= 0) return 0
    if (n === 1) return (arg: number) => arg

    let arr: number[] = []

    const inner = (...arg: number[]) => {
        arr = [...arr, ...arg]
        if (arr.length >= n) {
            return arr.splice(0, 3).reduce((acc, el) => acc + el)
        } else return inner
    }
    return inner
}

// console.log(superSum(0));
// //@ts-ignore
// console.log(superSum(3)(2)(5)(3));
// //@ts-ignore
// console.log(superSum(2)(2)(5));
// //@ts-ignore
// console.log(superSum(3)(2)(5, 3));
// //@ts-ignore
// console.log(superSum(3)(2, 5, 3));
// //@ts-ignore
// console.log(superSum(3)(2, 5)(3));
// //@ts-ignore
// console.log(superSum(3)(2, 5)(3, 9));


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// const sumTo = (n: number) => {
//     let res = 0
//     for (let i = 1; i <= n; i++) {
//         res += i
//     }
//     return res
//     return [...Array(n)].map((_,i)=>i + 1).reduce((acc,el)=>acc+el)
// }

// const sumTo = (n: number): number => {
//         // if (n!== 0){
//         //     return n + sumTo(n-1)
//         // }else return 0
//     return n!== 0 ? n + sumTo(n-1) : 0
// }


// const multiTo = (n: number): number => {
//     return n !== 1 ? n * multiTo(n - 1) : 1
// }

// const fib = (n:number):number => {
//   return n <= 1 ? n : fib(n-1) + fib(n-2)
// }

// let list = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}};
//
// function printList(list: any) {
//     ; // выводим текущий элемент
//
//     if (list.next) {
//         console.log(list.next)
//         printList(list.next); // делаем то же самое для остальной части списка
//     }
//     alert(list.value)
// }

// const flatToBase = (n: any[]) => {
//     let arr: any[] = []
//     for (let i = 0; i < n.length; i++) {
//         if (Array.isArray(n[i])) {
//             let newArr = flatToBase(n[i])
//             for (let j = 0; j < newArr.length; j++) {
//                 arr.push(newArr[j])
//             }
//         } else {
//             arr.push(n[i])
//         }
//     }
//     return arr
// }

const flatToBase = (nArr: any[]): any[] => nArr.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatToBase(el): el), [])

// console.log(flatToBase([[[[[[[42]]]], 36]]]))


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};