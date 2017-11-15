/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */
import { ICar } from './ICar';

export class NavBtnCtrl {

    constructor ( public btn: HTMLButtonElement ) {
        this.init ();
    }

    sampleMethod ( param1: number, param2: string, list: any[] ) {
        list.push( 'sad' );
        list.push( 123 );
        list.push( true );
        list.push( new Date() );
    }

    sampleMethod1 ( param1: number = 123, param2?: boolean ) {
    }

    sampleMethod2 ( param1: number, ...rest: any[] ) {
    }

    private init () {

        this.sampleMethod2 ( 21, 2, 2 , 3, true, new Date () );

        this.btn.addEventListener( 'click', () => {
            console.log ( this );
        });


        /*
        let _this = this;
        this.btn.addEventListener( 'click', function (  ) {
            console.log( _this ); /// get the instance of the HTML Button
        } )
        */
    }
}