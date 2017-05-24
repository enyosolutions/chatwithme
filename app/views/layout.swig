<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <title>{{ title }}</title>
  {% block stylesheet %}
  <link rel="stylesheet" href="/components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/chat.css">
  {% endblock %}
  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>
<body>
  {% block content %}{% endblock %}
</body>
{% block javascript %}
<script src="/components/jquery/dist/jquery.min.js"></script>
<script src="/components/bootstrap/dist/js/bootstrap.min.js"></script>
{% endblock %}
</html>
