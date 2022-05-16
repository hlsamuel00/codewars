//P: entry will be two strings; look will be just a single string. We must create a dictionary object that accepts entries, has methods, and has properties.
//R: return should be a string/associated value?
//E:       >>> let d = new Dictionary();

        // >>> d.newEntry("Apple", "A fruit that grows on trees");

        // >>> console.log(d.look("Apple"));
        //     A fruit that grows on trees

        // >>> console.log(d.look("Banana"));
        //     Can't find entry for Banana

        // >>>d.newEntry('Orange', 'A fruit that produces amazing juice')

        // >>>console.log(d.look('Orange'))
        //     A fruit that produces amazing juice

class Dictionary {
    constructor() {
        this.entry = {}
    }
    
    newEntry(key, value) {
        this.entry[key] = value
    }
    
    look(key) {
        return this.entry[key] || `Can't find entry for ${key}`
    }
}


//*****I was extremely proud of accomplishing this kata. I love my progress with OOP!!