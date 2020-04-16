'use strict'
const assert = require('assert');
const sinon = require('sinon');

const {covidTopRegionalTrends} = require('..');

it('covidTopRegionalTrends: service is running!', () => {
    const req = {};
    const res = {
                    send: sinon.stub(), 
                    set: sinon.stub()
                };
  
    covidTopRegionalTrends(req, res);

    assert.ok(res.send.calledOnce);
});