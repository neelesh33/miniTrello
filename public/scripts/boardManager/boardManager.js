/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/Evented",
    "dojo/request/xhr",
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
], function (Evented, xhr, domStyle, on, WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, _Container, declare, Board, BoardForm, boardManagerTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin, Evented], {
        templateString: boardManagerTemplate,

        postCreate: function () {

            this.boardList = new declare([WidgetBase, _Container], {})();

            this.boardList.placeAt(this.boardContainer);

            this.newBoardWidget = new BoardForm();
            this.newBoardWidget.placeAt(document.body);

            this.registerEvents();
        },

        /**
         * Initialize everything.
         * @public
         */
        init: function () {
            this.createBoards();
        },

        createBoards: function () {
            var self = this;
            xhr("/boards", {
                handleAs: "json"
            }).then(function(response) {
                response.forEach(function(board) {
                    self.addBoard(board.name);
                });
            }, function(error) {
                console.log(error);
            });
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
            this.addBoard(boardContent);

            this.newBoardWidget.close();
            this.newBoardWidget.resetForm();
        },

        /**
         * Creates and adds a board with given name.
         * @param content {String} Name of the board.
         * @public
         */
        addBoard: function(content) {
            var self = this;
            var board = new Board({
                content: content
            });

            on(board.domNode, "click", function(evt) {
                self.emit("BoardClick", {
                    id: board.getBoardId(),
                    content: board.getContent()
                });
            });

            this.boardList.addChild(board);
        },

        /**
         * Callback for create new board option.
         * @private
         */
        onCreateBoard: function () {
            this.newBoardWidget.resetForm();
            this.newBoardWidget.open();
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