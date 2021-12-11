
var arr = [3, 6, 2, 56, 32, 5, 89, 32,1];
var least = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (least > arr[i] ) {
        least = arr[i];
    }
}
console.log(least);