///<reference path='_declare/external.d.ts'/>
///<reference path='_declare/jquery.d.ts'/>
///<reference path='_declare/handlebars.d.ts'/>

class TestApp {

    private _countryData:any = null;

    constructor ()
    {
        this._countryData = JSON_DATA.countrylist;
        console.log(JSON_DATA);
    }

}