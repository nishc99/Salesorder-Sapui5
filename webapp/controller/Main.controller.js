sap.ui.define([
    "./Base.controller",
    'sap/ui/model/json/JSONModel',
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (BaseController, JSONModel, MessageToast) {
        "use strict";

        return BaseController.extend("com.example.salesorder.controller.App", {
            onInit: function () {

                BaseController.prototype.onInit.call(this);
                this._oRouter.getRoute("App");
                this._fetchRequestListData();
                },

                _fetchRequestListData: function () {
                    debugger;
                    if (this._oComponent._oBackendModelAPI) {
          
                      this._oComponent._oBackendModelAPI
                        .getRequestList()
                        .then(this.onRequestLoaded.bind(this))
                        .catch(this.onRequestLoadFailed.bind(this));
                    }
                },
                onRequestLoaded: function () {
                    this._postProcessInitialDataLoad(true);
                  },
          
                  onRequestLoadFailed: function (oResponse) {
                    this._postProcessInitialDataLoad(false);
                  },
                  _postProcessInitialDataLoad: function () {
                    var aRequest =
                      this._oAppModel.getProperty("/REQUEST_LIST") || [];
                  },
                  split:function() {
                    var oRouter = this.getOwnerComponent().getRouter();
                         oRouter.navTo("SplitScreen");
                 },
            
        });
    });







// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     'sap/ui/model/json/JSONModel',
//     'sap/m/MessageToast'
// ],
//     /**
//      * @param {typeof sap.ui.core.mvc.Controller} Controller
//      */
//     function (Controller, JSONModel, MessageToast) {
//         "use strict";

//         return Controller.extend("com.example.salesorder.controller.Main", {
//             onInit: function () {
//                 var oModel = new JSONModel(sap.ui.require.toUrl("com/example/salesorder/mockdata/sales.json"));
//                 this.getView().setModel(oModel);
//             },
//             split: function() {
//                 var oRouter = this.getOwnerComponent().getRouter();
//                      oRouter.navTo("SplitView");
//              }
//         });
//     });
