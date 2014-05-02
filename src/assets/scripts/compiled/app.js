var namespace;
(function (namespace) {
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

        TemplateFactory.TEMPLATES = window.JST;
        return TemplateFactory;
    })();
    namespace.TemplateFactory = TemplateFactory;
})(namespace || (namespace = {}));
var namespace;
(function (namespace) {
    var Base = (function () {
        function Base() {
            this._parent = null;
        }
        Base.prototype.createChildren = function () {
        };

        Base.prototype.appendTo = function (selector) {
            this._parent = $(selector);
            this.createChildren();
        };

        Base.prototype.addChild = function (template) {
            this._parent.append(template);
        };
        return Base;
    })();
    namespace.Base = Base;
})(namespace || (namespace = {}));
var anotherNamespace;
(function (anotherNamespace) {
    var AnotherNamespaceClass = (function () {
        function AnotherNamespaceClass() {
        }
        AnotherNamespaceClass.prototype.sayHi = function () {
            console.log('Hi there!');
        };
        return AnotherNamespaceClass;
    })();
    anotherNamespace.AnotherNamespaceClass = AnotherNamespaceClass;
})(anotherNamespace || (anotherNamespace = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var namespace;
(function (namespace) {
    var AnotherNamespaceClass = anotherNamespace.AnotherNamespaceClass;

    var TestApp = (function (_super) {
        __extends(TestApp, _super);
        function TestApp() {
            _super.call(this);
            this._title = 'TypeScript Boilerplate';
            this._anotherClass = null;
        }
        TestApp.prototype.createChildren = function () {
            var template = namespace.TemplateFactory.create('templates/topbar/TopNavigationTemplate');
            this.addChild(template);

            template = namespace.TemplateFactory.create('templates/login/LoginTemplate', { title: this._title });
            this.addChild(template);

            this._anotherClass = new AnotherNamespaceClass();
            this._anotherClass.sayHi();
        };
        return TestApp;
    })(namespace.Base);
    namespace.TestApp = TestApp;
})(namespace || (namespace = {}));
//# sourceMappingURL=app.js.map
