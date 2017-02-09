/**
 * Created by neelesh on 9/2/17.
 */
define([
    "dojo/dom-style",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/cardList/cardList.html"
], function (domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, cardListTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: cardListTemplate,
        postCreate: function () {
            var self = this;

            this.registerEvents();
        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {

        }

    });
});