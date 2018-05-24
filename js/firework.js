"use strict";

var FireWorkdoc = function () {
    LocalContractStorage.defineMapProperty(this, "doc", null)
};
FireWorkdoc.prototype = {
    init: function () {
        this.doc.put('fireWorks', []);
    },

    add: function (fire) {
        var fireWorks = this.doc.get('fireWorks');
        fireWorks.push(fire)
        this.doc.put('fireWorks', fireWorks)
    },

    get: function() {
        var fireWorksArr = this.doc.get('fireWorks')
        return fireWorksArr;
    },

    restart : function(int) {
        if(int == "reset") {
            this.doc.put('fireWorks', []);
        }
        return 1
    }
};
module.exports = FireWorkdoc;