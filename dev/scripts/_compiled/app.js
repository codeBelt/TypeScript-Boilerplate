var TestApp = (function () {
    function TestApp() {
        this._countryData = null;
        this._countryData = JSON_DATA.countryList;
        console.log(this._countryData);
    }
    return TestApp;
})();
