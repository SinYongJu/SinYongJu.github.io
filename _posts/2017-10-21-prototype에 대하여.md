---
layout: post
title:  "prototype에 대하여!"
icon:  heart-o
categoies: javascript

---


 어제는 의외로 전날에 스트레스가 엄청 났던거 같다(긴장이....너무 오래 지속됨...).

 목에 담이 와서 좀 힘들었지만..극복!
 http://insanehong.kr/post/javascript-prototype/ [insanehong] <-이글을 참조하면서 작성함

 여튼

 오늘은 원형객체라고 예전에 수업때 배웠던 prototype와 call, apply, bind 메서드에 대해서

 정리해보는 시간을 가져볼까 합니다.


 ***prototype***
  자바스크립트에서 객체지향프로그래밍에 대한 개념을 잡게 해줄 수 있는 객체이다.(쉽게, 공부하는 목적)

  즉, 스크립트 랭귀지인 자바스크립트로 객체지향 프로그래밍이!!!

  자바스크립트로 객체지향 프로그래밍의 개념을 잡아 준다는 것이다.

  그러나

  ECMAScript6 부터는 자바스크립에도 Class 문법이 포함되었어요! 참고 하시기를
  (다만 아직 나온지 얼마 안된 문법이어서 그런지 사용 되는것을 거의 보지 못하였다.)

  다른 객체 지향 언어의 습득이 있었다면, class라는 문법을 사용하지 않고 어떻게 객체지향을?!

  이란 의문을 던질 수 있다.

  이때, 프로토타입 기반 프로그래밍이라는 스크립트 언어의 특징을 알게되면 이해하기 쉽습니다.

  프로토타입 기반 프로그래밍 :

  프로토타입 기반 프로그래밍은 객체지향 프로그래밍의 한 형태의 갈래로 클래스가 없고, 클래스 기반 언어에서
  상속을 사용하는 것과는 다르게, 객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을
   다시 사용할 수 있다.
   프로토타입기반 프로그래밍은 클래스리스(class-less), 프로토타입 지향(prototype-oriented) 혹은 인스턴스 기반(instance-based) 프로그래밍이라고도 한다.

  https://ko.wikipedia.org/wiki/프로토타입_기반_프로그래밍  [위키피디아, 프로토타입 기반 프로그램이]


  정리 요약 :
  자바스크립트에서는 객체의 원형인 프로토타입을 이용한 클로닝(Cloning: 복사)과 객체특성을 확장해 나가는 방식을
  통해 새로운 객체를 생성해 낸다.(요게 가장 잘 정리한거 같다.)




  그렇다면 ***자바스크립트에서의 prototype이란?!***(왜?! 스크립팅 언어의 특징중에 하나라면 먼가 자바스크립에서만 다른게 있지 않갔어?!)

  다른 여타 스크립트 언어와 다른 문법은 아니다!!1

  다만, 일단 이렇게 정리하고 생각해보자!


  프로토타입 == 어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입


  {% highlight html linenos %}
    function who() {}

    var A = new who()

    console.log(A)

    //요걸 이제 chrome에서 확인해보자
    // html <script>를 이용해서 빈화면에서 요걸 쳐보장!
    // F12 키를 눌러요!    

  {% endhighlight %}

  {% highlight html linenos %}
  // 요건 비교용!!! new 연산자를 사용 안했을을 경우
    function who() {}

    var A = who()

    console.log(A)

  {% endhighlight %}

  ![post 1]({{site.baseurl}}/images/prototypeEx.png)

  조금 복잡해 보이는데

  *__proto__* 라는 거랑 *constructor* 는 fucntion who(){}이다. 요거를 따라 들어가면 *prototype* 이라는 아이도 나온다!!

  뚜든!!

  일단 정리를 하자면

  new 라는 연산자는 new 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.

  참고 자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/new [모질라]

  인스턴스가 생성하고 console.log를 통해 객체 내부를 보면

  어떤 생성자 부터 *__proto__* 까지 나오는데

  이는 prototype 즉, fucntion who()을 prototype으로 하는 객체 인스턴스가 되었다는거!


  *__proto__* 는 머고,

  *prototype* 은 무엇일까?


자바스크립트의 모든 객체는 생성과 동시에 자기자신이 생성될 당시의 정보를 취한 Prototype Object 라는 새로운 객체를 Cloning 하여 만들어낸다.
프로토타입이 객체를 만들어내기위한 원형이라면 이 Prototype Object 는 자기 자신의 분신이며 자신을 원형으로 만들어질 다른 객체가 참조할
프로토타입이 된다. 즉 객체 자신을 이용할 다른 객체들이 프로토타입으로 사용할 객체가 Prototype Object 인 것이다. 즉 위에서 언급한 *__proto__*
라는 *prototype* 에 대한 link는 상위에서 물려받은 객체의 프로토타입에 대한 정보이며 prototype 프로퍼티는 자신을 원형으로 만들어질 새로운 객체들
 즉 하위로 물려줄 연결에 대한 속성이다.



 정리 :
prototype에 대한 Link인데
 **__proto__** 자신에게 물려준 상위에서 물려받은 객체의 프로토 타입에 대한 정보
 **prototype** 자신을 원형으로 만들어질 새로운 객쳉게 물려줄 (하위로) 연결에 대한 속성!
               함수 객체가 가지는, 즉 constructor가 가지는 프로퍼티!
               (헛갈릴거 같다. 이는 함수 선언과 호출과는 다르게 new를 통해 인스턴스를 생성된 함수객체를 통한 객체 생성과는 다르게
                 함수 객체즉 생성자에 해당하는 프로퍼티 이다.)


{% highlight html linenos %}
 function who(x) {
   this.x = x
 }

 var A = new who('시바');
console.log(A.x) // 시바

A.prototype.x // 문법 에러 왜?! A는 prototype이라는 프로퍼티가 없어요!
// 즉 A는 who()를 통해 확장된 객체일 뿐 이라는 것

who.prototype.x // 오호라~!

{% endhighlight %}



그렇다면 나는 왜 이러한 특성을 알려고 할까요!?

흠흠... 솔직히 프로젝트를 하다보니 **__proto__** 와 prototype이라는 프로퍼티를 많이 보게 되었다.

또한 필자의 경우 컨텐츠 쓰기 기능 구현당시 생성자를 사용한 객체 인스턴스 생성을 사용하게 된적이 있는데

이때 prototype이라는 이 용어가 굉장히 거슬렸다.

실제로 사용은 하지 않았다. 프로젝트 기간상 급격히 도입시키기에는 정리도 미흡했을 뿐더러

일단 어느정도 기능구현이 됬기에 안주했다.


그렇다면 내가 이걸 알면 좋았을 점은

따로 내가 인스턴스화한 객체들을 다룰 메서드들을 마구잡이로 같은 스크립트 내에서 선언해서 특정하게 사용할 목적(특정 객체에만)인

그런 메서드들을 좀더 직관적이지 못하게 한것을 바로 잡을 수 있을 것 같다.

(아직 미흡....ㅜㅜ)



이렇게 정리하는 김에

맨윗줄 링크를 읽다 보니(insanehong의 블로그) 공유와 상속있다

일단 이것을 알기위해서는

흠 이론 부턴


{% highlight html linenos %}

function who() {}

who.prototype.x = function () {
  console.log('siba')
}


var a = new who();
var b = new who();

// a.x();
// b.x(); // siba

who.prototype.x = function () {
  console.log('ciba')
}

a.x();
b.x(); //ciba

console.log(a) //a만 확인해보자 상속과 공유 비교를 위해서

{% endhighlight %}

위의 흐름과 참고한 블로그를 잘 읽고 따라왔다면 오호~!!! 라고 실소를 할지도 모른다.

프로토 타입 체인에 대해서 설명하자면  *__proto__* 라는 프로퍼티를 통해 상위로 연결된 원형 객체를

추적 할 수있다. 이를 통해 연결하고 연결된 관계라는거?!

자바스크립트에서 어떠한 객체에서의 함수를 호출시 최상위 객체 Object까지 올라 가서 없으면 undefined가 뜨게 된다. (싹다 찾아서 위로 올라감

  흡사 공무 보고 쳬계)

이렇게 설명 하면 먼가 객체 지향에서 클래스 같다고 생각 할텐데 어찌 보면 스크립트 언어에서의

객체지향 프로그래밍 개념정도로 이해하자!

위의 참고 코드를 풀어보면  (실험 보고소의 고찰 같은 느낌으로 할게요...)

who.prototype.x에 의한 x라는 메서드의 재정의가 a,b에 영향을 끼친 것이다.  

이를 프로토 타입에 의한 공유라고 한다.

원래는 who 에는 없던 메서드 x를 prototype객체로 추가


{% highlight html linenos %}

function who() {
this.x = function () {
  console.log('siba')

 }
}

 a.x();

cosnole.log(a) // 상속과 공유의 차이 비교

function A() {this.x='hello';};
var B = new A();
console.log(B);



{% endhighlight %}


원래 부터 who에는 x라는 메서드가 있있다!!


요롷게 비교 하면 좋을 듯 하다

흠...


![post2]({{site.baseurl}}/images/공유.png)
![post3]({{site.baseurl}}/images/상속.png)
![post4]({{site.baseurl}}/images/상속 1.png)


참고 이미지들이다.




위 참고글 들을 계쏙 읽다 보니

자바스크립트에서의 Object , function Object가 역시나 헛갈린다.

역시 오늘도 공부할것만 만들었다.

이제 6개월인데 ㅋㅋㅋㅋㅋㅋ 더 잘알면 탈이라 생각한다...(긍정은 참 무섭다.)


여튼 잘 이용해 먹어야징~!

스트레스야 날아가랏
