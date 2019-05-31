function check(num){
  var arr = (""+num).split("");
  var acc = [];
  var double = [];
  var sum = [];

 // console.log(arr);

  // arr.forEach(function(element, i)
  for(var k = arr.length-1 ; k > 0; k--){
    acc.push(Number(arr[arr.length-k]));

    if(k%2 === 0){
      double.push(2 * arr[arr.length-k]);
    } else {
      double.push(arr[arr.length-k]);
    };

    if(double[k] > 9){
      sum[k] = double[k]-9;
    } else {
      sum[k] = double[k];
    }
  }
/*
  for(var k=arr.length; k<arr.length; k--){
    acc.push(arr[k]);
  }
*/

  console.log("acc is "+acc);
  console.log("dou is "+double);
  console.log("sum is "+sum);


  var sumOfDigits = 0;
  var foo = 0;
  var x = 0;

  // console.log(sum[3]);

  for(var j= 0; j < sum.length; j++){
    sumOfDigits += Number(sum[j]);
  }

  foo = sumOfDigits - sum[sum.length - 1];
  x = (foo*9)%10;

  console.log(sumOfDigits)
  console.log(foo)
  console.log(x)
  // console.log(sum)

  if(x === Number(sum[sum.length - 1])){
    return true;
  }
  else
    return false;


  // console.log(numArr);
}

if(check(45391488034364678)){
  console.log("yay");
} else {
  console.log("awh");
}