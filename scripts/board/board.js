/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "dojo/text!scripts/board/board.html"
], function (on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, declare, boardTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: boardTemplate,

        colors : ["#00AECC", "#985C7E", "#41837E", "#4183D2", "#41B87D", "#CAB87D", "#CAB85C",
            "#5A6660", "#5A5C66", "#C797BD", "#4D8238", "#6E736C"],

        postCreate: function () {
            var self = this;
            this.setBoardColor();

            // Show board option button on mouse enter.
            on(this.domNode, mouse.enter, function(evt) {
                self.showBoardOption();
            });

            // Hide board option button on mouse leave.
            on(this.domNode, mouse.leave, function(evt) {
                self.hideBoardOption();
            });

            // Attach event for deleting the board.
            on(this.deleteBoard, "click", function(evt) {
                self.destroy();
            });
        },

        showBoardOption: function() {
            domStyle.set(this.boardOption, "visibility", "visible");
        },

        hideBoardOption: function() {
            domStyle.set(this.boardOption, "visibility", "hidden");
        },

        /**
         * This function will pick a random color from the given color array and set it as the background
         * color of this board.
         * @private
         */
        setBoardColor: function() {
            var colorIndex = Math.floor(Math.random() * this.colors.length);
            domStyle.set(this.content, "background-color", this.colors[colorIndex]);
        }
    });
});