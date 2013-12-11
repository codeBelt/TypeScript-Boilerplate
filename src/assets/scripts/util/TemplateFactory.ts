module namespace {

    export class TemplateFactory {

        public static CLASS_NAME:string = 'TemplateFactory';

        public static TEMPLATES:any = null;

        constructor() {
        }

        public static create(templatePath:string, data:Object = null):string {
            var templateFunction:Function = TemplateFactory.TEMPLATES[templatePath];
            var template:string = templateFunction(data);

            return template;
        }

    }
}