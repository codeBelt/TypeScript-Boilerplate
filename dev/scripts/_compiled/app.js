var TemplateFactory = (function () {
    function TemplateFactory() {
    }
    TemplateFactory.create = function (templatePath, data) {
        if (typeof data === "undefined") { data = null; }
        var templateFunction = TemplateFactory.TEMPLATES[templatePath];
        var template = templateFunction(data);

        return template;
    };
    TemplateFactory.CLASS_NAME = 'TemplateFactory';

    TemplateFactory.TEMPLATES = null;

    TemplateFactory.templateNamespace = 'JST';
    return TemplateFactory;
})();
var TestApp = (function () {
    function TestApp() {
        this._parent = null;
        this._countryData = null;
        TemplateFactory.TEMPLATES = (window).JST;
        this._countryData = (window).JSON_DATA.countryList;
    }
    TestApp.prototype.createChildren = function () {
        var template = TemplateFactory.create('templates/topbar/TopNavigationTemplate.hbs');
        this._parent.append(template);

        template = TemplateFactory.create('templates/login/LoginTemplate.hbs', { title: 'TypeScript Boilerplate' });
        this._parent.append(template);
    };

    TestApp.prototype.appendTo = function (selector) {
        this._parent = $(selector);
        this.createChildren();
    };
    return TestApp;
})();
