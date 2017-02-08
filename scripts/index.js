/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "scripts/pageHeader/pageHeader",
    "scripts/boardManager/boardManager"
], function (declare, _WidgetBase, _Container, PageHeader, BoardManager) {
    return declare([_WidgetBase, _Container], {

        pageHeader: undefined,
        boardManager: undefined,

        postCreate: function () {

            // Creating the page title bar.
            this.pageHeader = new PageHeader();
            this.addChild(this.pageHeader);

            // Creating the home that is board container that will show the list of boards available.
            this.boardManager = new BoardManager();
            this.addChild(this.boardManager);
        }
    });
});