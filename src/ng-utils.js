var services = angular.module('ng-utils');
services.service('PaginationGrid', function () {

    this.finalproducts = [];
    this.products = [];
    this.itemsPerPage = 0;
    this.pages = 0;
    this.columns = 0;
    this.rows = 0;
    this.startIndex = 0;
    this.currentPage = 0;

    this.setItemsPerPage = function (val) {
        this.itemsPerPage = val;
        this.pages = Math.ceil(this.products.length / this.itemsPerPage);
    };

    this.loadData = function (array) {
        this.products = array;
    };

    this.setColumns = function (val) {
        this.columns = val;
        this.rows = (this.itemsPerPage / this.columns);
    };

    this.initialize = function (array, itemsPerpage, columns) {
        this.products = array;
        this.itemsPerPage = itemsPerpage;
        this.pages = Math.ceil(this.products.length / this.itemsPerPage);
        this.columns = columns;
        this.rows = (this.itemsPerPage / this.columns);
    };

    this.checkPages = function () {
        if (this.currentPage < 0) {
            this.currentPage = 0;
        }
        if (this.currentPage >= this.pages) {
            this.currentPage = this.pages;
        }
    };

    this.paginateArray = function () {
        var ind = this.currentPage * this.itemsPerPage;
        this.finalproducts = [];
        for (var i = 0; i <= this.rows - 1; i++) {
            var array = [];
            for (var j = 0; j <= this.columns - 1; j++) {
                if (angular.isUndefined(this.products[ind]) == false) {
                    array.push(this.products[ind]);
                }
                ind++;
            }
            this.finalproducts.push(array);
        }
        return this.finalproducts;
    };

    this.nextPages = function () {
        this.currentPage = this.currentPage + 1;
        console.log(this.startIndex);
        this.checkPages();
    };

    this.previousPages = function () {
        this.currentPage = this.currentPage - 1;
        this.checkPages();
    };

});

services.service('PaginationList', function () {

    this.finalItems = [];
    this.items = [];
    this.itemsPerPage = 0;
    this.pages = 0;
    this.currentPage = 0;

    this.setItemsPerPage = function (val) {
        this.itemsPerPage = val;
        this.pages = Math.ceil(this.products.length / this.itemsPerPage);
    };

    this.loadData = function (array) {
        this.items = array;
    };

    this.initialize = function (array, itemsPerpage, columns) {
        this.items = array;
        this.itemsPerPage = itemsPerpage;
        this.pages = Math.ceil(array.length / itemsPerpage);
    };

    this.checkPages = function () {
        if (this.currentPage < 0) {
            this.currentPage = 0;
        }
        if (this.currentPage >= this.pages) {
            this.currentPage = this.pages;
        }
    };

    this.paginateList = function () {
        var ind = this.currentPage * this.itemsPerPage;
        this.finalItems = [];
        for (var i = 0; i <= this.itemsPerPage - 1; i++) {
            if (angular.isUndefined(this.items[ind]) == false) {
                this.finalItems.push(this.items[i]);
            }
            ind++;
        }        
    };

    this.nextPages = function () {
        this.currentPage = this.currentPage + 1;
        console.log(this.startIndex);
        this.checkPages();
    };

    this.previousPages = function () {
        this.currentPage = this.currentPage - 1;
        this.checkPages();
    };

});

