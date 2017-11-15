/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { ICar } from './ICar';

export class Car implements ICar {

    buildDate: Date;

    constructor ( public brand: string,
                  public type: string ) {
    }

    sayHello (): string {
        // console.log ( 'hello car', this.brand );
        return `hello I'm a ${this.brand}`;
    }


    seats ( num: number ): void {
        throw new Error ( 'Method not implemented.' );
    }
}