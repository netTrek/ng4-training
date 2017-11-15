/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { Car } from './car';

export class BMW extends Car {

    constructor ( public type: string ) {
        super ( 'bmw', type );
    }

    sayHello (): string {
        return super.sayHello() + ' cool stuf';
    }

    tellMeYourType (): string {
        return `hi i'm a ${this.brand} ${this.type}`
    }
}