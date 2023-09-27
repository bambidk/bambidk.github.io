function btoncalc() {
  console.log('--------------------\n--------------------\n--------------------');
  var bit1 = document.getElementsByName('b1')[0].value
  var bit2 = document.getElementsByName('b2')[0].value
  var bit3 = document.getElementsByName('b3')[0].value
  var bit4 = document.getElementsByName('b4')[0].value
  var bit5 = document.getElementsByName('b5')[0].value
  var bit6 = document.getElementsByName('b6')[0].value
  var bit7 = document.getElementsByName('b7')[0].value

  var code = [bit7,bit6,bit5,bit4,bit3,bit2,bit1];
  var table = [1,2,4,8,16,32,64];

  if (code[0] == 1){
    var res = 1;
  } else {
    var res = 0;
  }

  for (var i = 1; i < 7; i++){
    if (code[i] == 1){
      res += table[i];
    } else {
      res += 0;
    }
  }

  console.log('1bit: '+bit1);
  console.log('2bit: '+bit2);
  console.log('3bit: '+bit3);
  console.log('4bit: '+bit4);
  console.log('5bit: '+bit5);
  console.log('6bit: '+bit6);
  console.log('7bit: '+bit7);
  console.log('res: '+res);
  document.getElementById('btonres').innerHTML = res;
}

function ntobcalc() {
  console.log('----------');
  var num = document.getElementsByName('numb')[0].value
  var res = [];
  //var table = [1,2,4,8,16,32,64];
  var calc = num - 64;
  if (calc < 0) {
    calc = num
    res.push('0')
  }
  else {
    res.push('1')
  }
  console.log(res);
  var calc2 = calc - 32;
  if (calc2 < 0) {
    res.push('0')
    calc2 = calc
  }
  else {
    res.push('1')
  }
  console.log(res);
  var calc3 = calc2 - 16;
  if (calc3 < 0) {
    res.push('0')
    calc3 = calc2
  } else {
    res.push('1')
  }
  console.log(res);
  var calc4 = calc3 - 8;
  if (calc4 < 0) {
    res.push('0')
    calc4 = calc3
  } else {
    res.push('1')
  }
  console.log(res);
  var calc5 = calc4 - 4;
  if (calc5 < 0) {
    res.push('0')
    calc5 = calc4
  } else {
    res.push('1')
  }
  console.log(res);
  var calc6 = calc5 - 2;
  if (calc6 < 0) {
    res.push('0')
    calc6 = calc5
  } else {
    res.push('1')
  }
  console.log(res);
  var calc7 = calc6 - 1;
  if (calc7 < 0) {
    res.push('0')
    calc7 = calc6
  } else {
    res.push('1')
  }
  console.log(res);
  console.log('-------------');

  document.getElementsByName('bb1')[0].value = res[0]
  document.getElementsByName('bb2')[0].value = res[1]
  document.getElementsByName('bb3')[0].value = res[2]
  document.getElementsByName('bb4')[0].value = res[3]
  document.getElementsByName('bb5')[0].value = res[4]
  document.getElementsByName('bb6')[0].value = res[5]
  document.getElementsByName('bb7')[0].value = res[6]
}
