function linearSearch(arr,value){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element==value)
            return index;
    }
    return -1;
}

//Big O for this linear search are O(N) you need to pass all the items to find whatever you are searching for (worst case)
console.log(linearSearch([1,2,3,6,34,7,3,67,3,34],67));