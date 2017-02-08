/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dijit/_WidgetsInTemplateMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "dojo/_base/declare",
    "scripts/board/board",
    "dojo/text!scripts/boardManager/boardManager.html"
], function (WidgetsInTemplateMixin, TemplatedMixin, WidgetBase, _Container, declare, Board, boardManagerTemplate) {

    return declare([WidgetBase, TemplatedMixin, WidgetsInTemplateMixin], {
        templateString: boardManagerTemplate,

        postCreate: function () {

            this.boardList = new declare([WidgetBase, _Container], {})();

            this.boardList.addChild(new Board());

            this.boardList.placeAt(this.boardContainer);
        }
    });
});