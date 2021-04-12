var arr = [ 2,3,4,5,1,6,7,8];
// var sum = 0;
// for (var i=0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log('sum : ' + sum);
var newArr = arr.reduce(function(a,b){
    return a+b;
})
console.log('s '+newArr);
