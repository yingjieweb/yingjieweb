window.onload = function () {
  let code = document.getElementById('code');
  let str = `大家好，我叫宋徐坤
我练习时长达到两年半了，
我喜欢唱，跳，rap，篮球
body{
  color:red;
}`;
  let start = '';
  let n = 0;

  //通过setInterval()的方式实现动画打印效果
  /*let step = setInterval(()=>{
    if(str[n] === '\n'){
      start = start + '<br>';
    }else if(str[n] === ' '){
      start = start + '&nbsp';
    }else{
      start = start + str[n]
    }
    code.innerHTML = start;
    n++;
    if(n === str.length){
      clearInterval(step);
    }
  },50)*/

  //通过setTimeout()的方式实现动画打印效果
  let step = () => {
    setTimeout(()=>{
      if(str[n] === '\n'){  //如果当前字符是回车，就给start+'<br>'
        start = start + '<br>';
      }else if(str[n] === ' '){ //如果当前字符是空格，就给start+'&nbsp'
        start = start + '&nbsp';
      }else{
        start = start + str[n]  //其余情况，直接将start+str[n]
      }
      code.innerHTML = start;
      n++;
      if (n < str.length){
        step();
      }
    },100)
  }
  step();
}