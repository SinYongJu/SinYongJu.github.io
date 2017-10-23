---
layout: post
title: category
permalink: /categoies/
---

<section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Articles from this year</h2>
{% for post in site.posts %}
<!--태그를 자동 생산 할꺼야!!-->
  {% unless post.next %}

<!--post의 다음게 없으면!? false를 ture로 -->
  <!--unless 는 if와는 정 반대의 문법의 태그 이다! -->


  <ul class="this">
  {% else %}
  <!--post next posting이 있다면, true 일때 이다 -->
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
    <!-- {% capture cate %}{{ post.categoies}}{% endcapture %}
    {% capture nca %}{{ post.next.date | date: '%Y' }}{% endcapture %} -->
  {% if year != nyear %}
  </ul>

  <h2>{{ post.date | date: '%Y' }}</h2>
<!--년도 마다 포스팅을 할 계획 이었는 듯 합니다. 여기서 만들어 년도가 만들어 져야지 저 아래 li tag들이 연속 적으로 만들어 짐 -->
  <ul class="past">
  {% endif %}


  {% endunless %}
  <!--unless는 요기서 끝남-->
 <li class="arch-list"><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>&nbsp;<time>{{ post.date | date:"%d %b" }}</time></li>
{% endfor %}
  </ul>
</section>
