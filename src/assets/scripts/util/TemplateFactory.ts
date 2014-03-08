module namespace {

    /**
     * YUIDoc_comment
     *
     * @class TemplateFactory
     * @module namespace
     * @constructor
     * @static
     **/
    export class TemplateFactory {

        public static CLASS_NAME:string = 'TemplateFactory';

        public static TEMPLATES = (<any>window).JST;

        constructor() {
        }

        /**
         * YUIDoc_comment
         *
         * @method create
         * @param templatePath {string}
         * @param [data=null] {Object}
         * @return {string}
         * @public
         * @static
         */
        public static create(templatePath:string, data:Object = null):string {
            var templateFunction:Function = TemplateFactory.TEMPLATES[templatePath];
            var template:string = templateFunction(data);

            return template;
        }

    }
}