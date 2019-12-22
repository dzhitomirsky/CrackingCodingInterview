const countSimilarityGroups = require('../index');
const {expect} = require('mocha');

describe('countSimilarityGroups', () => {
   it('simple test', () => {
       console.log(countSimilarityGroups(["tars","rats","arts","star"]))
   });
});
