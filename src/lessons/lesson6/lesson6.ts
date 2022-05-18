console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA


// class Test {
//     constructor(public readonly name: string, public age: number) {
//     }
//
//     firstFunc() {
//         console.log(this.name)
//     }
//
//     someFunc() {
//         // this.firstFunc.bind(this)
//         return this.firstFunc()
//     }
//
//     arrowFunc = () => {
//         this.firstFunc()
//     }
// }
//
// let obj = new Test('Miha', 32)
// // console.log(obj)
//
// //------------------------------------------------------------------------
//
// class DeleteTaskAC {
//     constructor(public _type: string, public payload: { taskId: string }) {
//     }
//
//     // we want to work with private/protected variables //older write as # or _
//     // that problem solved with use set/get
//     get type() {
//         return this._type
//     }
//
//     set type(value: string) {
//         this._type = value
//     }
//
// }
//
// const delTaskAC1 = new DeleteTaskAC('delete-task', {taskId: '1111'})
// const delTaskAC2 = new DeleteTaskAC('delete-task', {taskId: '2222'})
// console.log(delTaskAC1, delTaskAC2)

// class Test {
//
//     // private count: number = 0
//     public count: number = 0
//
//     constructor(public name: string, public age: number) {
//     }
//
//     incAge() {
//         this.age += 1
//     }

// incCount() {
//     this.count += 1
// }

// getAge() {
//     return this.age
// }

// getCount() {
//         return this.count + 50000000000
//     }
// }
//
// const test1 = new Test('Miha', 32)
//
// test1.incAge()
// console.log(test1.getCount())

//
// class Test2 extends Test {
//     func() {
//         return this.count + 100000
//     }
// }
//
// const test2 = new Test2('Miha', 32)


// console.log(test1)
// console.log(test2.func())

// class Test3 extends Test {
//     constructor(public name: string, public age: number) {
//         super(name, age);
//     }
//     getCount(): number {
//         // console.log('Testtttttttttttttttttt')
//         this.count +=222
//         return super.getCount()
//     }
// }

// const test3 = new Test3('Miha', 32)
//
// console.log(test3.getCount())
// console.log(test3)


// interface Person {
//     name: string
//     age: number
//     city: string
// }
//
// class Test implements Person {
//     constructor(public name: string, public age: number, public city: string) {
//     }
// }
//
// let objTest = new Test('Miha', 32, 'Minsk')
// console.log(objTest)


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// interface StudentInterface {
//     firstName: string
//     lastName: string
//     group: number
//     progress?: number
// }
//
// class Student implements StudentInterface {
//     public arr = []
//     constructor(public firstName: string, public lastName: string, public group: number, public progress?: number) {
//     }
//
//     getArrData() {
//         this.firstName = String(Math.ceil(Math.random() * 1000))
//         this.lastName = String(Math.ceil(Math.random() * 100000))
//         this.progress = Math.ceil(Math.random() * 5)
//         return [this.firstName, this.lastName, this.group, this.progress]
//     }
//
//     allInArray(n:number = 10){
//         let array: any[] = []
//         for (let i = 0; i <= n; i++) {
//             array = [...array, this.getArrData()]
//         }
//         return array.sort((a,b) => a[3] -b[3])
//     }
//
//     getBestStudents(){
//         let result = this.allInArray().filter(s => s[3] > 3).map((s, i) => `${i + 1}) firstName ${s[0]} lastName ${s[1]}`)
//         return `BEST STUDENTS ${result}`
//     }
// }
//
// let st1 = new Student('1', '11', 1, )
// console.log(st1.allInArray(10))
// console.log(st1.getBestStudents())


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};