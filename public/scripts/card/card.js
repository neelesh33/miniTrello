/**
 * Created by neelesh on 10/2/17.
 * @file User interface for a Card.
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

        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;

            on(this.domNode, mouse.enter, function (evt) {
                domStyle.set(self.deleteBtn, "visibility", "visible");
            });

            on(this.domNode, mouse.leave, function (evt) {
                domStyle.set(self.deleteBtn, "visibility", "hidden");
            });

            on(this.deleteBtn, "click", function () {
                self.destroy();
            });
        },
    });
});