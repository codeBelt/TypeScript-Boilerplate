var TemplateFactory = (function () {
    function TemplateFactory() {
    }
    TemplateFactory.create = function (templatePath, data) {
        if (typeof data === "undefined") { data = null; }
        var templateObj = window[TemplateFactory.templateNamespace];
        var templateFunction = templateObj[templatePath];
        var template = templateFunction(data);

        return template;
    };
    TemplateFactory.CLASS_NAME = 'TemplateFactory';

    TemplateFactory.templateNamespace = 'JST';
    return TemplateFactory;
})();
var TestApp = (function () {
    function TestApp() {
        this._countryData = null;
        this._countryData = JSON_DATA.countrylist;
        console.log(JSON_DATA);
        TestApp.TEMPLATES = JST;

        this._countryData = JSON_DATA.countryList;

        var $body = $('body');

        var template = TemplateFactory.create('templates/topbar/TopNavigationTemplate.hbs');
        $body.append(template);

        template = TemplateFactory.create('templates/login/LoginTemplate.hbs', { title: 'TypeScript Boilerplate' });
        $body.append(template);
    }
    TestApp.TEMPLATES = null;
    return TestApp;
})();
