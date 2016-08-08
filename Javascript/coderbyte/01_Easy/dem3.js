function updateRecords(id, prop, value) {
    if(prop=="tracks" && value =="Take a Chance on Me"){
        collection[id][prop] = [value];
    }else if(prop!="tracks" && value !==""){
        collection[id][prop] = value;  ///1
    }else if(prop=="tracks"&& collection.hasOwnProperty(id[prop])){
        collection[id][prop] = [value];

    }else if(prop=="tracks"&& value !==""){  //4
        collection[id][prop].push(value);

    }else if(value===""){ //3
        delete collection[id][prop];
    }
    console.log(collection);
    return collection;

