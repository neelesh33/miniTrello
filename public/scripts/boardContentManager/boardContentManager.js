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
    "dojo/text!scripts/boardContentManager/boardContentManager.html"
], function (xhr, domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, _Container, TemplatedMixin, WidgetBase, declare,
             CardList, BoardContentManager) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: BoardContentManager,
        name: "Board",
        postCreate: function () {
            var self = this;

            this.cardListContainer = new declare([WidgetBase, _Container], {})();
            this.cardListContainer.placeAt(this.cardContainer);

            this.registerEvents();
        },

        init: function() {
            this.createLists();
        },

        /**
         * This function will get the list from the server and
         * will create lists and cards according to the data.
         * @public
         */
        createLists: function() {
            var self = this;
            xhr("/board/1", {
                handleAs: "json"
            }).then(function(response) {
                response.forEach(function(cardList) {
                   self.createCardList(cardList.name);
                });
            }, function(error) {
                console.error(error);
            });
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