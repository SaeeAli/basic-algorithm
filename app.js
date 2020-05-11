// 1 print numbers 1-135

var i = 1;
for(i = 1; i <= 135; i++)
  { console.log(i);
  }

  // 2 Odd numbers

  var x = 0;
for(var i= 1; i <= 135; i++)
  {
    if(i % 2 !==0){
      
      x=i;
      console.log(x);
    }
  }

  // 3 Sum of Printed Numbers

  var total = 0;
for(var i = 0; i <= 10; i++)
  {
    total+=i;
    console.log('Number is:', i, 'sum:', total);
  }

  // 4 print the ellements of an array

  var x = [1,4,2,12];
for (var i=0; i < x.length; i++)
{
  console.log(x[i]);
}

// 5 Find Max

var x = [5,2,-1,6]
console.log(Math.max(5,2,-1,6));

// 6 Average

var array = [2, 6, 4, 1];
var sum = 0; 
var average;
for(var i = 0; i < array.length; i++)
{
  sum +=  array[i];  

average = sum / array.length;
}
console.log(average);

// 7 Eliminate the negatives

var x = [2,-1,4,-3];
for(var i= 0; i < x.length; i++) {
  
  if (x[i]< 0) {
    x[i] = 0;
  }
}
console.log(x);

// 8 Number to String

var a = [2,5,1,6,7];
var n = 'Turing';
for(var i= 0; i < a.length; i++) {
  
  if (a[i]< 0) {
    a[i] = n;
  }
}
console.log(a);