///<reference path='_declare/external.d.ts'/>
///<reference path='_declare/jquery.d.ts'/>
///<reference path='_declare/handlebars.d.ts'/>

///<reference path='util/TemplateFactory.ts'/>

module namespace {

    /**
     * YUIDoc_comment
     *
     * @class TestApp
     * @module namespace
     * @constructor
     **/
    export class TestApp {

        private _parent:JQuery = null;
        private _countryData:any = null;

        constructor() {
            TemplateFactory.TEMPLATES = (<any>window).JST;
            this._countryData = (<any>window).JSON_DATA.countryList;
        }

        /**
         * YUIDoc_comment
         *
         * @method createChildren
         * @private
         */
        private createChildren():void {
            var template:string = TemplateFactory.create('templates/topbar/TopNavigationTemplate.hbs');
            this._parent.append(template);

            template = TemplateFactory.create('templates/login/LoginTemplate.hbs', {title: 'TypeScript Boilerplate'});
            this._parent.append(template);
        }

        /**
         * YUIDoc_comment
         *
         * @method appendTo
         * @param selector {string}
         * @public
         */
        public appendTo(selector:string):void {
            this._parent = $(selector);
            this.createChildren();
        }

    }
}