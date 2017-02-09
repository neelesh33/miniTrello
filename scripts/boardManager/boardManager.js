/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/dom-style",
    "dojo/on",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "dojo/_base/declare",
    "scripts/board/board",
    "scripts/boardForm/boardForm",
    "dojo/text!scripts/boardManager/boardManager.html"
], function (domStyle, on, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, _Container, declare, Board, BoardForm, boardManagerTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: boardManagerTemplate,

        postCreate: function () {

            this.boardList = new declare([WidgetBase, _Container], {})();

            this.boardList.placeAt(this.boardContainer);

            this.newBoardWidget = new BoardForm();
            this.newBoardWidget.placeAt(this.domNode);

            this.registerEvents();
        },

        /**
         * Registers all events here.
         * @private
         */
        registerEvents: function () {
            var self = this;

            // Event for creating new board.
            on(this.createBoard, "click", function (evt) {
                self.onCreateBoard();
            });

            // Event for deleting all board.
            on(this.deleteAllBoard, "click", function (evt) {
                self.onDeleteAllBoard();
            });

            // Event for submitting new board.
            on(this.newBoardWidget.submitBtn, "click", function () {
                self.onNewBoardSubmit();
            });
        },

        /**
         * On submitting new board form.
         * @private
         */
        onNewBoardSubmit: function () {
            var boardContent = this.newBoardWidget.getBoardContent();
            if (boardContent.trim().length == 0) {
                return;
            }
            this.boardList.addChild(new Board({
                content: boardContent
            }));

            $(this.newBoardWidget.domNode).modal('toggle');
            this.newBoardWidget.resetForm();
        },

        /**
         * Callback for create new board option.
         * @private
         */
        onCreateBoard: function () {
            this.newBoardWidget.resetForm();
            $(this.newBoardWidget.domNode).modal();
        },

        /**
         * Callback for delete all board option.
         * @private
         */
        onDeleteAllBoard: function () {
            var boards = this.getBoardList();
            boards.forEach(function (board) {
                board.destroy();
            });
        },

        /**
         * Returns the list of all the boards.
         * @returns {*}
         * @public
         */
        getBoardList: function () {
            return this.boardList.getChildren();
        },

        /**
         * Show the list of available boards.
         * @public
         */
        open: function () {
            domStyle.set(this.domNode, "display", "block");
        },

        /**
         * Hide the list of available boards.
         * @public
         */
        close: function () {
            domStyle.set(this.domNode, "display", "none");
        }
    });
});