// adding this comment to test git branch and merge
function convertToRoman(number) {
var numInArr = []; //array of digits
var sNumber = number.toString(); //stringify number
var numeral = []; //array of roman numerals

//split up number into stringified digits and push to array
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    numInArr.push(+sNumber.charAt(i)); 
}

var lowerDigits; // for digits below 1000
var thousands;
//split thousands off from array
if (numInArr.length >3) {
	lowerDigits = numInArr.splice(-3,3);
    thousands = numInArr.join('');
  } else lowerDigits = numInArr;

//reverse array to start order with singles, tens, hundreds
lowerDigits.reverse(); 
var single = lowerDigits[0];
var tens = lowerDigits[1];
var hundreds = lowerDigits[2];

//create roman numeral
romanThousands(thousands, numeral);
assignNumeral(hundreds, numeral, "C", "D", "M");
assignNumeral(tens, numeral, "X", "L", "C");
assignNumeral(single, numeral, "I", "V", "X");

//return final converted roman numeral
console.log(numeral.join(''));
return numeral.join(''); 
} 

convertToRoman(306);

//begin conversion with Roman thousands
function romanThousands(num, romanArr) {
	for (var i= 0; i<num; i++) {
  romanArr.push("M");
  }
  return romanArr;
}

//Function for adding Roman numerals to the array
function assignNumeral(number, arr, firstNumeral, secondNumeral, thirdNumeral) {
	switch (number) {
  case 0: 
  	return arr;

  case 1:
  case 2:
  case 3:
  	for (var i =0; i< number; i++) {
  		arr.push(firstNumeral);
  	}
  	return arr;
  case 4:
  	return arr.push(firstNumeral+secondNumeral);
  case 5:
  	return arr.push(secondNumeral);
  case 6:
  case 7:
  case 8:
  	arr.push(secondNumeral);
  	for (i =5; i< number; i++) {
  		arr.push(firstNumeral);
  	}
  	return arr;
  case 9:
  	return arr.push(firstNumeral, thirdNumeral);
  }
}





