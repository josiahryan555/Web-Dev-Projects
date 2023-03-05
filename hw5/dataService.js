class DataService {
    data = [
        { name: "Josiah Ryan", gender: "M", address: "316 Lake Lane, Grand Rapids, MI", age: 22, phoneNumber: "109-729-7290" },
        { name: "Jack Smith", gender: "M", address: "317 Lake Lane, Grand Rapids, MI", age: 26, phoneNumber: "616-653-2232" },
        { name: "Jenny Rogers", gender: "W", address: "315 Lake Lane, Grand Rapids, MI", age: 67, phoneNumber: "501-444-9020" },
    ];

    //does nothing
    constructor() {
    }

    //returns the first numRecords number of entries in the data array
    //if numRecords is negative, this function returns the data array minus numRecords (technically not minus, as minus a negative number is postive, but that number is removed from the data array)
    // parameter optional
    getData = (numRecords) => {
        return (numRecords !== 0 ?
            //if numRecords !== 0
            (numRecords ?
                //returns numRecords number of records
                this.data.slice(0, numRecords)
                //if no parameter is given, this returns the whole data array
                : this.data)
            //if numRecords === 0, returns an empty array
            : []);
    }
}

// testing code
// const ds = new DataService();
// console.log("getData(0) (should return an empty array): ", ds.getData(0));
// console.log("getData(1) (should return an array with 1 element): ", ds.getData(1));
// console.log("getData(2) (should return an array with 2 element): ", ds.getData(2));
// console.log("getData(3) (should return an array with 3 element): ", ds.getData(3));
// console.log("getData(4) (parameter is 1 larger than data array size): ", ds.getData(4));
// console.log("getData(-1): ", ds.getData(-1));  //these work.  As in, they let the user use negative numbers.  I chose to not treat this as an error, but instead let the user have more flexability
// console.log("getData(-2): ", ds.getData(-2));
// console.log("getData(50) (parameter is much larger than data array size): ", ds.getData(50));
// console.log("No parameter case (should return the whole array), getData(): ", ds.getData());

