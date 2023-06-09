/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/example/salesorder/model/models"
],
function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("com.example.salesorder.Component", {
        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
            // set size limit
            this.getModel("app");
            this.getModel("config");
            
            // Initialize backend Model Api
            this._oBackendModelAPI = this._getBackendModelAPI();

        },
        _getBackendModelAPI: function () {
            var bMock = true;
            return models.createBackendModelAPI(this,bMock);
          }
    });
}
);