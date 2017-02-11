/**
 * Created by neelesh on 9/2/17.
 */
define([
    "dojo/request/xhr",
    "dojo/dom-style",
    "dojo/on",
    "dojo/mouse",
    "dojo/dom-style",
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_Container",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "scripts/cardList/cardList",
    "scripts/cardListForm/cardListForm",
    "dojo/text!scripts/boardContentManager/boardContentManager.html"
], function (xhr, domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, _Container, TemplatedMixin, WidgetBase, declare,
             CardList, CardListForm, BoardContentManager) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: BoardContentManager,
        name: "Board",
        postCreate: function () {
            var self = this;

            this.cardListContainer = new declare([WidgetBase, _Container], {})();
            this.cardListContainer.placeAt(this.cardContainer);

            this.newCardListWidget = new CardListForm();
            this.newCardListWidget.placeAt(document.body);

            this.registerEvents();
        },

        init: function () {
            this.emptyBoard();
            this.createLists();
        },

        /**
         * This function will get the list from the server and
         * will create lists and cards according to the data.
         * @public
         */
        createLists: function () {
            var self = this;
            xhr("/board/1", {
                handleAs: "json"
            }).then(function (response) {
                response.forEach(function (cardList) {
                    var list = self.createCardList(cardList.name);
                    list.populateCards(cardList.cards);
                });
            }, function (error) {
                console.error(error);
            });
        },


        /**
         * Creates card container.
         * @public
         */
        createCardList: function (listName) {
            var cardList = new CardList({
                name: listName
            });

            this.cardListContainer.addChild(cardList);
            return cardList;
        },

        startup: function () {
            this.setHeight();
        },

        setHeight: function () {

        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;
            // Event for create list menu.
            on(this.createList, "click", function () {
                self.onCreateList();
            });

            // Event for delete all list menu.
            on(this.deleteAllList, "click", function () {
                self.onDeleteAllList();
            });

            // Event for creating new card list.
            on(this.newCardListWidget.submitBtn, "click", function (evt) {
                var listName = self.newCardListWidget.getContent();
                self.createCardList(listName);
                self.newCardListWidget.close();
            });
        },

        /**
         * Opens New Card list form
         * @public
         */
        onCreateList: function () {
            this.newCardListWidget.resetForm();
            this.newCardListWidget.open();
        },

        onDeleteAllList: function () {
            this.emptyBoard();
        },

        /**
         * Delete all the list of this board.
         * @public
         */
        emptyBoard: function () {
            var cardLists = this.cardListContainer.getChildren();
            cardLists.forEach(function (item) {
                item.destroy();
            });
        },

        /**
         * Open a board.
         * @public
         */
        open: function () {
            domStyle.set(this.domNode, "display", "block");
        },

        /**
         * Close a board.
         * @public
         */
        close: function () {
            domStyle.set(this.domNode, "display", "none");
        },
    });
});