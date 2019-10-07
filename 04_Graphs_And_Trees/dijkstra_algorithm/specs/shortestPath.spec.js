const {expect} = require('chai');
const findShortestPath = require('../index');

describe('Dijkstra algorithm', () => {
   it('simple DAG test', () => {
      const graph = [
          [undefined, 1, 3, undefined],
          [undefined, undefined, 1, 5],
          [undefined, undefined, undefined, 2],
          [undefined, undefined, undefined, undefined],
      ];

       expect(findShortestPath(graph, 0, 3)).to.deep.equal([0,1,2,3]);
   });
});
