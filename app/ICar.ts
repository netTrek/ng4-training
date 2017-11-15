/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */


export interface ICar {
    brand: string;
    type: string;
    buildDate: Date;
    sayHello (): string;
    seats ( num: number ): void;
}