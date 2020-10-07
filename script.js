var numbers=[-30, 14, 66, 21, 72, -4];
var num = [];

function prac(pNum, pracs){  
  var that = this;
  this.number = pNum;
  this.pracs = pracs;
  
  this.ele = document.createElement('div');  
  this.ele.className = ('divy' + this.pracs);  
  this.textEle = document.createElement('p'); 
  
  function setP(pNum){
  if (pNum < 0){
    var retr = 'The number is ' + pNum + ' and is below 0';
  }
  else if (pNum > 50){
    var retr = 'The number is ' + pNum + ' and is greater than 50';
  }
  else if (pNum == 14){
    var retr = 'The number is ' + pNum + ' and equals 14';
  }
  else {
    var retr = 'The number is ' + pNum;
  }
    
    return retr
  }  
  
  var retd = setP(this.number);  
  this.textEle.innerHTML = retd; 
  this.textEle.addEventListener("click", function(){
    that.number = that.number + 1;
    var changeUp = setP(that.number)
    that.textEle.innerHTML = changeUp
  })  
  
  this.ele.appendChild(this.textEle);  
  document.body.appendChild(this.ele);  
}

for ( var i  = 0; i < numbers.length; i++){
  num.push(new prac(numbers[i], i))
}