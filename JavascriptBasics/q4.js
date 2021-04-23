class SortedArray {
    constructor(arr) {
        this._originalArray = arr;
    }

    sortArray() {
        this._originalArray.sort();
    }

    getSortedArray() {
        this.sortArray();
        return this._originalArray;
    }
}

class SortObjectArray extends SortedArray {
    constructor(arr, itemToSortBy) {
        super(arr);
        this.itemToSortBy = itemToSortBy;
    }

    sortArray() {
        this._originalArray.sort((a, b) => a[this.itemToSortBy] > b[this.itemToSortBy] ? 1 : -1)
    }
}

const objArr = new SortObjectArray([
    { 'id': 2, 'name': 'a' },
    { 'id': 1, 'name': 'b' },
    { 'id': 3, 'name': 'c' },
], 'id');

console.log(objArr.getSortedArray());