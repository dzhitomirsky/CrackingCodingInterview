const parens = require('../index');
const {expect} =require('chai');

describe('Parens', () => {
   it('n=3 test', () => {
       expect(parens(3)).to.deep.equal([ '()()()', '()(())', '(())()', '((()))', '(()())' ])
   });
});
