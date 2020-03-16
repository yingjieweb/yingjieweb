window.onload = function () {
  let html = document.getElementById('html');
  let style = document.getElementById('style');

  let str = `/*大家好，我叫宋徐坤
练习时长达两年半的coder，
我喜欢唱，跳，code，篮球，
下面我给大家展示个花里胡哨图*/
/*ok，show time，先搞一个圈圈*/
#canvas{
  width:200px;
  height:200px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#canvas{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#canvas::before{
  content: '';
  width: 100px;
  height: 100px;
  position:absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#canvas::after{
  content: '';
  width: 100px;
  height: 100px;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
  let string = '';
  let n = 0;

  //通过setInterval()的方式实现动画打印效果
  /*let step = setInterval(()=>{
    if(str[n] === '\n'){  //如果当前字符是回车，就给string+'<br>'
      string = string + '<br>';
    }else if(str[n] === ' '){ //如果当前字符是空格，就给string+'&nbsp'
      string = string + '&nbsp';
    }else{
      string = string + str[n];  //其余情况，直接将string+str[n]
    }
    html.innerHTML = string;
    style.innerHTML = str.substring(0,n);
    n++;
    if(n === str.length){
      clearInterval(step);
    }
  },50)*/

  //通过setTimeout()的方式实现动画打印效果
  let step = () => {
    setTimeout(()=>{
      if(str[n] === '\n'){  //如果当前字符是回车，就给string+'<br>'
        string = string + '<br>';
      }else if(str[n] === ' '){ //如果当前字符是空格，就给string+'&nbsp'
        string = string + '&nbsp';
      }else{
        string = string + str[n];  //其余情况，直接将string+str[n]
      }
      html.innerHTML = string;
      style.innerHTML = str.substring(0,n); //style中不要添加<br>和&nbsp
      window.scrollTo(0, 9999);  //写完代码滚动到底部
      html.scrollTo(0, 9999);  //写完代码滚动到底部
      n++;
      if (n < str.length){
        step();
      }
    },50)
  }
  step();
}