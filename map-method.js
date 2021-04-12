var arr = [ 8,4,5,3,5,1,6,7,8]
// var newArr = [];

// for ( var i=0; i<arr.length; i++){
//     newArr.push(arr[i] + 2);
// }
// console.log(newArr);
// var newArr = arr.map(function(value){
//     return value + 2;
// })
// console.log('arry ' +newArr); 
function map(arr, callback){
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}
var newMap = map(arr, function(value){
    return value -1;
})
console.log(' newArry'+ newMap)

