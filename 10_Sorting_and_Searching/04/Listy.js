/**
 * Listy data structure
 */
class Listy {
    /**
     * Constructor
     * @param data {Array}
     */
    constructor(data) {
        this._data = data.sort((a,b) => a - b);
    }

    elementAt(i) {
        if(i < 0 || i > this._data.length - 1) {
            return -1;
        }

        return this._data[i];
    }
}

module.exports = Listy;
