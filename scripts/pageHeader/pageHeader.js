/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/pageHeader/pageHeader.html"
], function (WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, template) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: template,

        postCreate: function () {
            console.log("Page header created.");
        }
    });
});