/**
 * Created by neelesh on 11/2/17.
 */
define([
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/cardListForm/cardListForm.html"
], function (on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, cardListForm) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: cardListForm,
        postCreate: function () {
            var self = this;
            self.close();

            this.registerEvents();
        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;
            on(this.closeBtn1, "click", function(evt) {
                self.resetForm();
                self.close();
            });

            on(this.closeBtn2, "click", function(evt) {
                self.resetForm();
                self.close();
            });
        },

        /**
         * Returns content.
         * @public
         */
        getContent: function() {
            return this.content.value;
        },

        /**
         * Reset the state of the new Card list form.
         * @public
         */
        resetForm: function() {
            this.content.value = "";
        },

        open: function() {
            domStyle.set(this.domNode, "display", "block");
        },

        close: function() {
            domStyle.set(this.domNode, "display", "none");
        },
    });
});