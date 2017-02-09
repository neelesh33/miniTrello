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
        postCreate: function () {
            var self = this;

            this.cardListContainer = new declare([WidgetBase, _Container], {})();

            this.cardListContainer.placeAt(this.cardContainer);

            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());
            this.cardListContainer.addChild(new CardList());


            this.registerEvents();
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