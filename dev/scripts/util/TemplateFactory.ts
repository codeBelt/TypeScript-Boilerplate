class TemplateFactory
{
    public static CLASS_NAME:string = 'TemplateFactory';

    public static templateNamespace:string = 'JST';

    constructor()
    {
    }

    public static create(templatePath:string, data:Object = null):string
    {
        var templateObj:Object = window[TemplateFactory.templateNamespace];
        var templateFunction:Function = templateObj[templatePath];
        var template:string = templateFunction(data);

        return template;
    }

}