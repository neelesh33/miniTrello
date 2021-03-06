/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/on",
    "dojo/Evented",
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "scripts/pageHeader/pageHeader",
    "scripts/boardManager/boardManager",
    "scripts/boardContentManager/boardContentManager"
], function (on, Evented, declare, _WidgetBase, _Container, PageHeader, BoardManager, BoardContentManager) {
    return declare([_WidgetBase, _Container, Evented], {

        pageHeader: undefined,
        boardManager: undefined,
        boardContentManager: undefined,

        postCreate: function () {

            // Creating the page title bar.
            this.pageHeader = new PageHeader();
            this.addChild(this.pageHeader);

            // Creating the home that is board container that will show the list of boards available.
            this.boardManager = new BoardManager();
            this.boardManager.init();
            this.addChild(this.boardManager);

            // Creating the ui that will show the tasks of a selected board.
            this.boardContentManager = new BoardContentManager();
            this.addChild(this.boardContentManager);
            this.boardContentManager.close();

            this.registerEvented();
        },

        /**
         * Registers event.
         * @private
         */
        registerEvented: function() {
            var self = this;
            this.boardManager.on("BoardClick", function(board) {
                self.onBoardClick();
            });

            on(this.boardContentManager.homeBtn, "click", function() {
                self.boardContentManager.close();
                self.boardManager.open();
            });
        },

        /**
         * Opens the content of the board on clicking a board.
         * @private
         */
        onBoardClick: function() {
            this.boardContentManager.init();
            this.boardManager.close();
            this.boardContentManager.open();
        },
    });
});