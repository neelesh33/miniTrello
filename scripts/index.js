/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "dojo/domReady!"
], function (declare, _WidgetBase, _Container) {
    return declare([_WidgetBase, _Container], {
        postCreate: function () {
            console.log("In post create.");
            this.placeAt(document.body);
        }
    });
});