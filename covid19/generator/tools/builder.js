'use strict'
class Builder{
    constructor(){
        this.config = require('../data/configuration').data();
        this.fs = require('fs');
        this.path = require('path');
    };

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    };
    
}

module.exports = Builder;