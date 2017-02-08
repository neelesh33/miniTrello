/**
 * Created by neelesh on 8/2/17.
 */
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_Container",
    "scripts/pageHeader/pageHeader"
], function (declare, _WidgetBase, _Container, PageHeader) {
    return declare([_WidgetBase, _Container], {

        pageHeader: undefined,

        postCreate: function () {
            this.pageHeader = new PageHeader();
            this.addChild(this.pageHeader);
        }
    });
});