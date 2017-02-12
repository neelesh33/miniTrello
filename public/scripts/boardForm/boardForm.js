/**
 * Created by neelesh on 9/2/17.
 *
 * @file User interface to create a new board.
 */
define([
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/boardForm/boardForm.html"
], function (on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, boardFormTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: boardFormTemplate,
        postCreate: function () {
            var self = this;
            this.close();

            this.registerEvents();
        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;
            on(this.closeBtn1, "click", function (evt) {
                self.close();
                self.resetForm();
            });

            on(this.closeBtn2, "click", function (evt) {
                self.close();
                self.resetForm();
            });
        },

        /**
         * Returns board content.
         * @public
         */
        getBoardContent: function () {
            return this.content.value;
        },

        /**
         * Reset the state of the new board form.
         * @public
         */
        resetForm: function () {
            this.content.value = "";
        },

        open: function () {
            domStyle.set(this.domNode, "display", "block");
        },

        close: function () {
            domStyle.set(this.domNode, "display", "none");
        },
    });
});