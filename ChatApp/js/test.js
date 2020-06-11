let arr = []
let obj =  { 'gUHum2d-rJ7kmlkQAAAF': 'Arjun', 'uRY1ZwMa-MXlZAnXAAAG': 'Harry' }

/*for(let i=0; i< obj.length; i++){
    var key = Object.keys(obj)[i]
    var value = obj[key]
    console.log(key,value)
    }
*/
    o = { "key1": "value1", "key2": "value2"};
    // var idx = 1; // key2
    for(let idx = 0; idx < Object.keys(o).length; idx++)
    var key = Object.keys(o)[idx];
    value = o[key]
    

    console.log(key,value); // key2 value2