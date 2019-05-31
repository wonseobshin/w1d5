function check(num){
  var arr = (""+num).split("");
  var acc = [];
  var double = [];
  var sum = [];

  // console.log(arr);

  arr.forEach(function(element, i){
    acc.push(element);

    if(i%2 !== 0){
      double.push(element*2);
    } else {
      double.push(element);
    };

    if(i%2 !== 0){
      if(double[i] > 9){
        sum[i] = double[i]-9;
      } else {
        sum[i] = double[i];
      }
    }
    else
      sum.push(element);
  });

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

if(check(4539148803436467)){
  console.log("yay");
} else {
  console.log("awh");
}