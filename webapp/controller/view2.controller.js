sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("oDataDemo.controller.view2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf oDataDemo.view.view2
		 */
		onInit: function() {
			var nEurl = "https://services.odata.org/V2/Northwind/Northwind.svc/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(nEurl);
			sap.ui.getCore().setModel(oModel, "oModel");

			// var oData = sap.ui.getCore().getModel("oModel");

			// oData.read("/Employees", {
			// 	success: function(response) {
			// 		// console.log(response);
			// 	},
			// 	error: function(oerror) {

			// 	}
			// });

			// sap.ui.getCore().byId("__input1").bindElement("modelNw>/Categories(1)")
		},

		nextPage: function(oEvent) {
			sap.ui.getCore().byId("myApp").to("page3");
		},

		empDetail: function(oEvent) {
			// alert("data was: " + oEvent.getSource().data("RowID"));

			var oData = sap.ui.getCore().getModel("oModel");
			var keyId = oEvent.getSource().data("RowID");

			oData.read("/Employees(" + keyId + ")", {
				success: function(response) {
					var EmpDetail = new sap.ui.model.json.JSONModel();
					EmpDetail.setData(response);
					sap.ui.getCore().setModel(EmpDetail, "EmpDetail");
					sap.ui.getCore().byId("myApp").to("page3");
				},
				error: function(oerror) {

				}
			});

		},
		searchEmp: function(oEvent) {

			var sQuery = oEvent.getParameter("query");

			var oList = this.getView().byId("empList");
			var oBinding = oList.getBinding("items");

			if (sQuery) {
				oBinding.filter(new Filter([
					new Filter("FirstName", sap.ui.model.FilterOperator.Contains, sQuery),
					new Filter("LastName", sap.ui.model.FilterOperator.Contains, sQuery)
				], false));
			} else {
				oBinding.filter([]);
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf oDataDemo.view.view2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf oDataDemo.view.view2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf oDataDemo.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});