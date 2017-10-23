---
layout: post
title: Archive
permalink: /archive/
---

<section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Articles from this year</h2>

{% for cate in site.categoies %}
    <h2>{cate}</h2>
    <ul class="this">
    {% for post in site.posts %}
          {% if post.category == cate %}
           <li class="arch-list" data-cate="cate"><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>&nbsp;<time>{{ post.date | date:"%d %b" }}</time></li>
          {% endif %}<!--if-->
   {% endfor %}
  </ul>
{% endfor %}
</section>
<!--

<script type="text/javascript">
  (function(){
    console.log('호우 achieve')
    console.log($('li.arch-list'))

  })()
</script> -->

<!-- <section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Articles from this year</h2>

{% for post in site.posts %}
  {% unless post.next %}
  <ul class="this">
  {% else %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if (year != nyear && cate ! = ncate) %}
  </ul>
  <h2>{{ post.date | date: '%Y' }}</h2>
  <ul class="past">
  {% endif %}
  {% endunless %}
 <li class="arch-list" data-cate="{{post.category}}"><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>&nbsp;<time>{{ post.date | date:"%d %b" }}</time></li>
 {% endfor %}
  </ul>

</section> -->
