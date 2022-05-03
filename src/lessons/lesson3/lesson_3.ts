import {log} from 'util';
import axios from 'axios';

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// setTimeout(() => console.log(1), 0)
// setTimeout(() => console.log(2), 0)
//
const pr = new Promise((res, rej) => {
    console.log(2.1)
    // res()
    setTimeout(() => rej(), 1000)
    console.log(2.2)
})
console.log(pr)

pr
    .then(() => {
        console.log('then')
        console.log(pr)
    })
    .catch(() => {
        console.log(pr)
        console.warn('it is not resolve')
    })
    .finally(() => console.log('finally'))

// console.log(3)

const repo = {
    save: (data: any) => {
        try {
            localStorage.setItem('newData', JSON.stringify(data))
        } catch (error: any) {
            return false
        }
        return true
    },
    saveAsync: (data: any) => {
        const pr = new Promise((res, rej) => {
            try {
                localStorage.setItem('newData', JSON.stringify(data))
                res()
            } catch (error: any) {
                return rej(error)
            }

        })
        return pr
    },
    readAsync: () => {
        return new Promise((res, rej) => {
            const data = localStorage.getItem('newData')
            res(data && JSON.parse(data))
        })
    }
}

repo.saveAsync({name: 'Miha', age: 32})
    .then(response => console.log('save'))
    .catch(error => console.warn('it doesn\'t save: ' + error))


const run = async () => {
    await repo.saveAsync({name: 'Miha', age: 32})
    console.log('save')
    console.log(await repo.readAsync());
}
run()


const wait = (t: number) => new Promise((res, rej) => {
    setInterval(() => {
        res()
    }, t)
})

const couter = async () => {
    await wait(1000)
    console.log(1)
    await wait(2000)
    console.log(2)
    await wait(3000)
    console.log(3)

}
couter()


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
