function groupObjectsBy(arr, key) {
    const map = new Map();

    arr.forEach(element => {
        const mk = element[key];
        const item = map.get(mk);
        if (!item) {
            map.set(mk, [element]);
        } else {
            item.push(element);
        }
    });
    return map;
}
const res = groupObjectsBy([
    {
        "channel": "A",
        "name": "shoe"
    },
    {
        "channel": "A",
        "name": "electronics"
    },
    {
        "channel": "B",
        "name": "apparel"
    },
    {
        "channel": "C",
        "name": "electronics"
    }
], 'channel');

console.log([...res]);