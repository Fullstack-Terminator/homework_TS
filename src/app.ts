function swapKeyAndValue<T extends Record<PropertyKey, PropertyKey>>(object: T): Record<PropertyKey, PropertyKey>  {
    const result: Record<PropertyKey, PropertyKey> = {};
    
    for(const [key, value] of Object.entries(object)) {
        result[value] = key;
    }
    
    return result;
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}

console.log(swapKeyAndValue(obj));