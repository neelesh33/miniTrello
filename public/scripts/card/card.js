/**
 * Created by neelesh on 10/2/17.
 */
define([
    "dojo/dnd/Moveable",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/card/card.html"
], function (Moveable, on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, CardTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: CardTemplate,
        content: "Sample Card Content",
        postCreate: function () {
            this.registerEvents();

            //var dnd = new Moveable(this.domNode);
        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;

        },
    });
});