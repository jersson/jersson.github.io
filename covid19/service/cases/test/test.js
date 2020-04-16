'use strict'
const assert = require('assert');
const sinon = require('sinon');

const {covidCaseTrends} = require('..');

it('covidCaseTrends: service is running!', () => {
    const req = {};
    const res = {
                    send: sinon.stub(), 
                    set: sinon.stub()
                };
  
    covidCaseTrends(req, res);

    assert.ok(res.send.calledOnce);
});