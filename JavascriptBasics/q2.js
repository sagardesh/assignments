class MetadataParser {
    constructor(version, channel, keyField) {
        this._version = version;
        this._channel = channel;
        this._keyField = keyField;
    }
    setVersion(version) {
        this._version = version;
    }
    setChannel(channel) {
        this._channel = channel;
    }
    setKeyField(keyField) {
        this._keyField = keyField;
    }
    getKeyField() {  
        return this._keyField;
    }
    getVersion() {
        return this._version;
    }
    getChannel() {
        return this._channel;
    }
    getKeyFields(arr) {
        return arr.map((item) => item._keyField);
    }
}

const md1 = new MetadataParser('1', 'a', '1');
const md2 = new MetadataParser('1', 'a', '2');
const md3 = new MetadataParser('1', 'a', '3');

const res = md3.getKeyFields([md1, md2, md3]);
console.log(res);
