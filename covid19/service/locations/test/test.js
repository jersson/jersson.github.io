'use strict'
const assert = require('assert');
const sinon = require('sinon');

const {covidLocations} = require('..');

it('covidLocations: service is running!', () => {
    const req = {};
    const res = {
                    send: sinon.stub(), 
                    set: sinon.stub()
                };
  
    covidLocations(req, res);

    assert.ok(res.send.calledOnce);
});