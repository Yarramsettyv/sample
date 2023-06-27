sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller,MessageBox,MessageToast) {
	"use strict";

	return Controller.extend("sample.controller.View1", {
		onDiv  : function(){
			var Num1=this.getView().byId("idNum1").getProperty("value");
			var Num2=this.getView().byId("idNum2").getProperty("value");
		var result=parseInt(Num1)/parseInt(Num2);
		MessageToast.show("result"+result);	
		}

	});
});