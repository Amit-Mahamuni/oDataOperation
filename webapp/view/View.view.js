sap.ui.jsview("oDataDemo.view.View", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.View
	 */
	getControllerName: function() {
		return "oDataDemo.controller.View";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.View
	 */
	createContent: function(oController) {
		var oPage = new sap.m.Page({
			title: "OData Demo",
			showNavButton: true,
			navButtonPress: function(oEvent) {
				sap.ui.getCore().byId("myApp").back();
			},
			content: []
		});

		// var app = new sap.m.App("myApp", {
		// 	initialPage: "oPage"
		// });
		// app.addPage(oPage);
		return oPage;
	}

});