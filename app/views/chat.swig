{% extends 'layout.swig' %}

{% block content %}
<table style="width:100%;text-align:center;">
<tbody><tr><td style="text-align:center;">
<img src="/img/page_speed.jpg"
style="width:60%;text-align:center;margin-left: 20%;"
 />
</td></tr></tbody></table>




  <h2 class="text-danger">{{ title }}</h2>
  <h3  class="text-info">Share this url to start chatting with people...</h3>
  <p>This chat room has no memory and no history. Conversation are lost when you leave or refresh the page.</p>
  <button onClick="changeName()" class="btn btn-info">Change name</button>
<hr/>
<div>Enjoy!</div>
  <iframe src="https://giphy.com/embed/RQSuZfuylVNAY" width="237.5" height="240" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>



  <div id="chatZone">
  <div class="container">
      <div class="row chat-window col-xs-5 col-md-3" id="chat_window_1" style="margin-left:10px;">
          <div class="col-xs-12 col-md-12">
            <div class="panel panel-default">
                  <div class="panel-heading top-bar" >
                      <div class="col-md-10 col-xs-10">
                          <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat - with the Captain</h3>
                      </div>
                      <div class="col-md-2 col-xs-2" style="text-align: right;">
                          <a data-toggle="collapse" href="#text-zone"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>
                      </div>
                  </div>
                  <div class="panel-body msg_container_base " id="text-zone">
                    <div> Hello !</div>
                  </div>
                  <div class="panel-footer">
                      <div class="input-group">
                            <form id="chatInput">
                          <input id="btn-input" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." autocomplete="false"/>
                          <span class="input-group-btn">
                          <button class="btn btn-primary btn-sm" id="btn-chat">Send</button>
                          </span>
                          </form>
                      </div>
                  </div>
            </div>
          </div>
      </div>
  </div>
  </div>
{% endblock %}
{% block javascript %}
{% parent %}
<script src="/js/socket.io.slim.js"></script>
<script>
 var originalName =  "{{ name || null }}"  ;
</script>
<script src="/js/chat.js"></script>

{% endblock %}

