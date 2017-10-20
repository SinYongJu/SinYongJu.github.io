---
layout: post
title:  "JavaScript 생각난 김에 변수 선언에 관한 포스팅!"
icon:  heart-o

---


 *이 글은 MDN 및 구글의 각종 블로그와 검색결과를 바탕으로 한 포스팅!! ㄷㄷ 개인의 결과물이기에 최대한 출처 적습니다. 부적절하다면 덧글 남겨주세요!*
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals [모질라!]

  프로그래밍 언어를 배울 때 가장 처음 접 하는 부분이 이 부분일 것이라고 생각한다.

  또한 코딩을 하는데 있어서 기초이면서도 쓰다보면?! 어랏 모였지 하는 부분이 있다.(하...자바도 변수 선언 포스팅 해야겟다...또륵)  

  특히 '나'야 어느 정도 사용하면서 흠~ 이럴때는 이게 괜찮겠어?!(뿌듯ㅋ) 하면서 사용할 때가 있지만

  대부분 웹에서 검색에서 찾을 수 있는 소스에는 먼가 짧고, 미니멀라이즈?!(최소화)형태로?! 되어있을 때가 있다.

  그 때, ***var***, ***let***, ***const*** 요런   키워드?! 요론 글자들을 접할 때가 있어요!!!


  그리고 보다보면 스크립트 최 상단에

  "use strict" --> 일명 'Stric mode' 요거는 문법을 엄격히!! 로 이해합시다!! <-> 비-엄격모드를 "느슨한 모드(sloppy mode)"

이건 일종의 코딩 가이드라인?!으로 올바른 문법을 유도한다.

아래를 참조 하기 바란다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode


단, Strict mode의 경우 선언한 스크립트와 비선언한 스크립트에 연결에 있어서 문제가 생길 수 있다.

이는 Strict mode 선언은 스크립트를 읽는 과정에서 전체에 적용되는 부분(환경 전체에 영향을 미쳐서 비선언 스크립트 또한 스트릭트 모드가 되어버림)(필자는 이렇게 이해하고 있다... 아직 먼가 비전문가...또륵)


여튼 막 자바스크립트를 시작하는 사람에게 있어서 "use strict"를 선언하고 공부를 하자!!!


{% highlight html %}
a = 10  // 전역 변수  var 없이도 선언 가능 하나 "use strict"사용시 제한됨!

var a = 10 // 지역, 전역 변수
a = 14 // 이때 console.log(a) == 14

var a = 15 // 엥?! 이름이 같은걸>!

let b = 11 // {}내에서 변수로 주로 쓰임 , 변수의 이름의 중복을 허용 하지 않아요
let b = 111// 오류
// var와의 차이는 var는 전역으로 내부 외부에서 외부까지 참조 가능 하나 let은 {}내에 한정한다!


const = "호우" //상수 변수; 참조만 해올 수 있어요!

{% endhighlight %}


**전역 변수 란?!**

전역 변수는 사실 global 객체의 속성(property)입니다. 웹 페이지에서 global 객체는 window 이므로, windows.variable 구문을 통해 전역 변수를 설정하고 접근할 수 있습니다.
window 혹은 frame의 이름을 지정하여 한 window 혹은 frame에서 다른 window 혹은 frame에 선언된 전역 변수에 접근할 수 있습니다. 예를 들어, phoneNumber 라는 변수가 문서에 선언된 경우, iframe에서 parent.phoneNumber로 이 변수를 참조할 수 있습니다.

**변수 범위**
어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 합니다. 만약 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 부릅니다.

ECMAScript 6 이전의 JavaScript는 block 문 범위가 없습니다. 그래서 오히려, 블록 내에 선언된 변수는 그 블록 내에 존재하는 함수(혹은 전역 범위)에 지역적입니다.

위의 전역변수와 변수 범위는 mdn에서 참조해왔다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Values,_variables,_and_literals
개인 적으로 이 문서와 친해지길 바래~ (경험상 읽어봐야 나중에 다른 공부할 때 좋아요!)

참고 자료!
http://www.nextree.co.kr/p7363/ [nextree]
요고 하나면 끝이 날듯 하다! 읽어 보자!
(갠적으로 이런 포스팅을 왜 지금 발견 했을까?! 한다.!!!)
