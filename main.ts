/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IUser } from './model/IUser';
import { Car } from './app/car';
import { BMW } from './app/bmw';
import { MyAbst } from './app/MyAbst';


let list1: number[] = [1,2,3];
let copy : number[] = [...list1];
let list2: number[] = [4,5,6];

let list3: number[] = [ ...list1, ...list2 ];
let list4: number[] = [ ...list1, ...list2, 7, 8, 9 ];

let saban: IUser = <IUser>{
    name: 'saban',
    age: 44
};


let was = 'soll das';

// let copySaban = saban;
// let copySaban = { ...saban };
// copySaban.name = 'new name';

let copySaban = {...saban, name: 'new Name', adress: {
    country: 'de', zip: 555565555
} };


let {adress, age} = copySaban;

console.log ( saban, copySaban );

const firstname = 'saban';
const birthday = '04.11.73';
let testObj = { firstname: 'saban', birthday: '04.11.73' };
let testObj2 = { firstname, birthday };

/*
let bmw: BMW = new BMW ('118d');
console.log ( bmw.sayHello() );
console.log ( bmw.tellMeYourType() );

let test: MyAbst = new MyAbst ();
*/

/*

setTimeout( () => {
    console.log ( 'hello after 1 sec' );
}, 1000 );
*/

/*
let user: IUser = {
    age: 11,
    name: 'saban',
    adress: {
        country: 'de',
        zip: 46282
    }
};

let username = 'saban';
let firstname: string = 'saban';

const age = 44;*/

/*


for ( let i = 1; i < 10; i ++) {
    console.log ( i );
    for ( let i = 1; i < 10; i ++) {
        console.log ( i );
    }
}

console.log ( username );
console.log ( age );
*/
