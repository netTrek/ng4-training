/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IUser } from './model/IUser';
import { Car } from './app/car';
import { BMW } from './app/bmw';
import { MyAbst } from './app/MyAbst';



let bmw: BMW = new BMW ('118d');
console.log ( bmw.sayHello() );
console.log ( bmw.tellMeYourType() );
/*

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
