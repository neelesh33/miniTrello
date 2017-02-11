/**
 * Created by neelesh on 9/2/17.
 */
define([
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
        "dojo/text!scripts/cardList/cardList.html"
    ], function (domStyle, on, mouse, domStyle, WidgetsInTemplateMixin, TemplatedMixin, _Container, WidgetBase, declare, Card, cardListTemplate) {

        return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
            templateString: cardListTemplate,
            name: "Card List",
            postCreate: function () {
                var self = this;
                this.cardContainer = new declare([WidgetBase, _Container], {})();
                this.cardContainer.domNode.className += "hola";
                // this.cardContainer.placeAt(this.cards);

                this.createCard("card-1");
                this.createCard("card-2");
                this.createCard("card-3");
                this.createCard("card-4");
                this.createCard("card-5");
                this.createCard("card-6");
                this.createCard("card-7");

                this.registerEvents();

                $(this.cards).sortable({
                    connectWith: ".cardContainerList",
                    appendTo: 'body',
                    tolerance: 'pointer',
                    revert: 'invalid',
                    forceHelperSize: true,
                    helper: 'original',
                    scroll: true
                })

    },

    /**
     * Adds a card with given content to the current list.
     * @param content {String} - Content of the card.
     * @public
     */
    createCard
:
function (content) {
    var card = new Card({
        content: content
    });

    card.placeAt(this.cards);
    /*  this.cardContainer.addChild(new Card({
     content: content
     }));*/
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
}

})
;
})
;