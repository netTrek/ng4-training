/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { IAdress } from './IAdress';

export interface IUser {
    name: string;
    age: number;
    adress?: IAdress
}