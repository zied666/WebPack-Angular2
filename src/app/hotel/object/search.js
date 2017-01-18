"use strict";
var Search = (function () {
    function Search() {
        this.checkIn = new Date().toISOString().slice(0, 10).replace(/-/g, "-");
        this.limit = 10;
        this.offset = 0;
        this.nuitees = 1;
        this.rooms = "1";
        this.nom = "";
        this.order = "ASC";
        this.orderBy = "libelle";
        this.ville = "";
        this.etoiles = "";
    }
    return Search;
}());
exports.Search = Search;
