const {expect} = require('chai');
const rollingMean = require('../index');

describe('Rolling Mean', () => {
    console.log(rollingMean([1, 2, 3, 4, 5, 6, 7, 8], 3))
});
