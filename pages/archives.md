---
layout: splash
title: Archives
aside: true
permalink: /archives/
header:
  overlay_image: /assets/images/nilc2025-67.jpg
  overlay_filter: 0.25
excerpt: "Sessions, recordings, and programs from past conferences."
# One entry per conference, newest first. `sessions` names the
# _data/sectionsYYYY.csv file; `collection` the matching nilcYYYY pages.
editions:
  - year: 2026
    name: "Second National Interdisciplinary Lookout Conference"
    program: /Booklet_Nilc2026.pdf
  - year: 2025
    name: "First National Interdisciplinary Lookout Conference"
    theme: "The Past and Future of Fire Lookouts"
    program: /Booklet_Nilc2025.pdf
    sessions: sections2025
    collection: nilc2025
    summary: "The 2025 conference featured a series of panels, presentations, and lectures exploring various aspects of fire lookouts in the human environment. Its theme, *The Past and Future of Fire Lookouts*, focused on the history and the evolving role of fire lookout towers and related issues."
---

This page lists the sessions and links to content from past National Interdisciplinary Lookout Conferences, newest first.
{: .lead}

{% for e in page.editions %}
<section class="archive-year" markdown="0">
  {% assign bearing = e.year | modulo: 36 | times: 10 %}
  {% include azimuth.html start=bearing span=120 %}
  <h2 id="nilc-{{ e.year }}">NILC {{ e.year }}</h2>
  <p class="archive-year__meta">
    <span>{{ e.name }}, University of Idaho</span>
    {% if e.program %}<a href="{{ e.program | relative_url }}">Program (PDF)</a>{% endif %}
  </p>
  {% if e.theme %}<p>Theme: <em>{{ e.theme }}</em></p>{% endif %}
  {% if e.summary %}{{ e.summary | markdownify }}{% endif %}

  {% if e.sessions %}
  {% assign talks_data = site.data[e.collection] %}
  <ol class="sessions">
    {% for s in site.data[e.sessions] %}
    {% assign s_url = '/' | append: e.collection | append: '/' | append: s.id | append: '.html' %}
    {% assign s_talks = talks_data | where: "parentid", s.id %}
    <li class="session">
      <h3 class="session__title"><a href="{{ s_url | relative_url }}">{{ s.title }}</a></h3>
      {% if s.chair and s.chair != "" %}<p class="session__chair">Chair: {{ s.chair }}</p>{% endif %}
      {% if s_talks.size > 0 %}
      <ul class="session__talks">
        {% for t in s_talks %}<li><span class="speaker">{{ t.speaker }}</span>, {{ t.title }}</li>{% endfor %}
      </ul>
      {% endif %}
    </li>
    {% endfor %}
  </ol>
  {% else %}
  <p>Session recordings and abstracts from {{ e.year }} will be added here.</p>
  {% endif %}
</section>
{% endfor %}
