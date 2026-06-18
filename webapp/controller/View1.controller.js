sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit() {
        },
        onHelloWorldPress() {
            MessageToast.show("Hello World!!!");
        }
    });
});