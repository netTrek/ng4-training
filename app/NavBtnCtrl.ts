/**
 * File created by suenlue on 15.11.17.
 * Copyright (c) 2017 by netTrek GmbH & Co. KG
 */



export class NavBtnCtrl {

    constructor ( public btn: HTMLButtonElement ) {
        this.init ();
    }

    private init () {

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