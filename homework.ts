import {IUser} from './interfaces/user.interface'

const user = {
    name: "Max",
    age: 18,
    gender: 'male'
}

// const user: { name: string, age: number, gender: string } = {name: 'Max', age: 18, gender: 'male'}

// const user: IUser = {name: 'Max', age: 18, gender: 'male'}

function sum(a: number, b: number): number {
    return a + b
}

function showSum(a: number, b: number): void {
    console.log(a + b);
}

function incAge(someUser:IUser, inc: number): IUser {
    someUser.age += inc
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3)
console.log(incAge({age: 18, gender: 'male', name: 'Dima'}, 2));