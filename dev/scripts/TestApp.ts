///<reference path='_declare/external.d.ts'/>
///<reference path='_declare/jquery.d.ts'/>
///<reference path='_declare/handlebars.d.ts'/>
///<reference path='util/TemplateFactory.ts'/>

class TestApp {

    public static TEMPLATES:any = null;

    private _countryData:any = null;

    constructor ()
    {
        this._countryData = JSON_DATA.countrylist;
        console.log(JSON_DATA);
        TestApp.TEMPLATES = JST;

        this._countryData = JSON_DATA.countryList;

        var $body:JQuery =  $('body');

        var template:string = TemplateFactory.create('templates/topbar/TopNavigationTemplate.hbs');
        $body.append(template);

        template = TemplateFactory.create('templates/login/LoginTemplate.hbs', {title: 'TypeScript Boilerplate'});
        $body.append(template);
    }

}