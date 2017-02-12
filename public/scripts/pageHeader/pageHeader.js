/**
 * Created by neelesh on 8/2/17.
 *
 * @file Title/Header of the page.
 */
define([
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/pageHeader/pageHeader.html"
], function (WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, pageHeaderTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: pageHeaderTemplate,

        postCreate: function () {
        }
    });
});