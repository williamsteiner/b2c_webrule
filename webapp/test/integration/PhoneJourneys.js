jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/owi/b2c/b2cWebRule/test/integration/pages/App",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Browser",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Master",
	"com/owi/b2c/b2cWebRule/test/integration/pages/Detail",
	"com/owi/b2c/b2cWebRule/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.owi.b2c.b2cWebRule.view."
	});

	sap.ui.require([
		"com/owi/b2c/b2cWebRule/test/integration/NavigationJourneyPhone",
		"com/owi/b2c/b2cWebRule/test/integration/NotFoundJourneyPhone",
		"com/owi/b2c/b2cWebRule/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});