---
layout: post
title: Archive
permalink: /archive/
---

<section id="archive">
<h2><i class="fa fa-file-archive-o"></i>&nbsp;Articles from this year</h2>

{% for post in site.posts %}

  {% capture cate %}{{ post.category }}{% endcapture %}
  {% capture ncater %}{{ post.next.category }}{% endcapture %}


  {% unless post.next %}
  {% if cate == ncate %}
    <h2>{{ post.category}}</h2>
  {% endif %}
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
 <li class="arch-list"><a href="{{site.baseurl}}{{ post.url }}">{{ post.title }}</a>&nbsp;<time>{{ post.date | date:"%d %b" }}</time></li>
{% endfor %}
  </ul>
</section>
