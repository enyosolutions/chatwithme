{% extends 'layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>

<form action="/chat/{{room}}">
  <div class="panel panel-primary">
  <div class="panel panel-heading">Choose a name</div>
  <div class="panel-body text-center"><input type="text" name="name" /><button>Start</button></div>
  </div>
  </form>
{% endblock %}
