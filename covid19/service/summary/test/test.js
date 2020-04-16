'use strict'
const assert = require('assert');
const sinon = require('sinon');

const {covidSummary} = require('..');

it('covidSummary: service is running!', () => {
    const req = {};
    const res = {
                    send: sinon.stub(), 
                    set: sinon.stub()
                };
  
    covidSummary(req, res);

    assert.ok(res.send.calledOnce);
});