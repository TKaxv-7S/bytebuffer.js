/**
 * Gets the backing buffer type.
 * @returns {Function} `Buffer` for NB builds, `ArrayBuffer` for AB builds (classes)
 * @expose
 */
ByteBuffer.type = function() {
    //? if (NODE)
    return Buffer;
    //? else if (DATAVIEW)
    return ArrayBuffer;
    //? else
    return Uint8Array;
};

