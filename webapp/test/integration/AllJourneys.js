jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 WebRules in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/owi/b2c/b2cWebRule/test/integration/pages/App",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Browser",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Master",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Detail",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Create",
	"com/owi/b2c/b2cWebRule/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.owi.b2c.b2cWebRule.view."
	});

	sap.ui.require([
		"com/owi/b2c/b2cWebRule/test/integration/MasterJourney",
		"com/owi/b2c/b2cWebRule/test/integration/NavigationJourney",
		"com/owi/b2c/b2cWebRule/test/integration/NotFoundJourney",
		"com/owi/b2c/b2cWebRule/test/integration/BusyJourney",
		"com/owi/b2c/b2cWebRule/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});