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
    "dijit/_TemplatedMixin",
    "dijit/_Container",
    "dijit/_WidgetBase",
    "dojo/_base/declare",
    "scripts/card/card",
    "scripts/cardForm/cardForm",
    "dojo/text!scripts/cardList/cardList.html"
], function (xhr, domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, _Container, WidgetBase, declare, Card,
             CardForm, cardListTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: cardListTemplate,
        name: "Card List",
        postCreate: function () {
            var self = this;
            this.cardContainer = new declare([WidgetBase, _Container], {})();
            this.cardContainer.placeAt(this.cards);

            this.newCardForm = new CardForm();
            this.newCardForm.placeAt(document.body);

            this.registerEvents();

            $(this.cards).sortable({
                connectWith: ".cardContainerList"
            });

        },

        /**
         * This will populate cards in current card list.
         * @param cards - Array of cards.
         * @private
         */
        populateCards: function (cards) {
            var self = this;
            cards.forEach(function (card) {
                self.createCard(card.content);
            });
        },

        /**
         * Adds a card with given content to the current list.
         * @param content {String} - Content of the card.
         * @public
         */
        createCard: function (content) {
           /* var card = new Card({
                content: content
            });

            card.placeAt(this.cards);*/
              this.cardContainer.addChild(new Card({
             content: content
             }));
        }
        ,

        /**
         * Registers all the events.
         * @private
         */
        registerEvents: function (cardList) {
            var self = this;
            on(this.deleteList, "click", function () {
                self.destroy();
            });

            on(this.addCard, "click", function (evt) {
                self.newCardForm.open();
            });

            on(this.deleteAllBtn, "click", function (evt) {
                self.deleteAllCards();
            });

            on(this.newCardForm.submitBtn, "click", function (evt) {
                var content = self.newCardForm.getContent();
                self.createCard(content);
                self.newCardForm.close();
            });
        },

        deleteAllCards: function () {
            var cards = this.cardContainer.getChildren();
            cards.forEach(function(card) {
                card.destroy();
            });
        }

    })
        ;
})
;