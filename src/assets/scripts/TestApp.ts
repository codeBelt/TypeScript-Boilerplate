///<reference path='_declare/external.d.ts'/>
///<reference path='_declare/jquery.d.ts'/>

///<reference path='util/TemplateFactory.ts'/>
///<reference path='view/Base.ts'/>

///<reference path='view/AnotherNamespaceClass.ts'/>

module namespace {

    import AnotherNamespaceClass = anotherNamespace.AnotherNamespaceClass;

    /**
     * YUIDoc_comment
     *
     * @class TestApp
     * @module namespace
     * @constructor
     **/
    export class TestApp extends Base {

        private _title:string = 'TypeScript Boilerplate';
        private _anotherClass:AnotherNamespaceClass = null;

        constructor() {
            super();
        }

        /**
         * @overridden Base.createChildren
         */
        public createChildren():void {
            var template:string = TemplateFactory.create('templates/topbar/TopNavigationTemplate');
            this.addChild(template);

            template = TemplateFactory.create('templates/login/LoginTemplate', {title: this._title});
            this.addChild(template);

            this._anotherClass = new AnotherNamespaceClass();
            this._anotherClass.sayHi();
        }

    }
}