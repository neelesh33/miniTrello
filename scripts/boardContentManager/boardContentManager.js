/**
 * Created by neelesh on 9/2/17.
 */
define([
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
    "dojo/text!scripts/boardContentManager/boardContentManager.html"
], function (domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, _Container, TemplatedMixin, WidgetBase, declare,
             CardList, BoardContentManager) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: BoardContentManager,
        name: "Board",
        postCreate: function () {
            var self = this;

            this.cardListContainer = new declare([WidgetBase, _Container], {})();
            this.cardListContainer.placeAt(this.cardContainer);

            this.createCardList("Card List - 1");
            this.createCardList("Card List - 1");
            this.createCardList("Card List - 1");
            this.createCardList("Card List - 1");
            this.createCardList("Card List - f");
            this.createCardList("Card List - 3");
            this.createCardList("Card List - 2");
            this.createCardList("Card List - 4");
            this.createCardList("Card List - 6");
            this.createCardList("Card List - 8");
            this.createCardList("Card List - 9");

            this.registerEvents();
        },

        init: function() {

        },

        /**
         * Creates card container.
         * @public
         */
        createCardList: function(listName) {
            var cardList = new CardList({
                name: listName
            });

            this.cardListContainer.addChild(cardList);
        },

        startup: function () {
            this.setHeight();
        },

        setHeight: function () {
            var totalH = $(document).height();
            var totalW = $(document).width();
            console.log(totalH, totalW);
            var elem = $(this.cardContainer)[0];
            console.log($(elem).offset());
            // var p = $(test).position();
            //console.log(p);

        },

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function () {
            var self = this;
            // Event for create list menu.
            on(this.createList, "click", function() {
                self.onCreateList();
            });

            // Event for delete all list menu.
            on(this.deleteAllList, "click", function() {
                self.onDeleteAllList();
            });
        },

        onCreateList: function() {

        },

        onDeleteAllList: function() {
            var cardLists = this.cardListContainer.getChildren();
            cardLists.forEach(function(item) {
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