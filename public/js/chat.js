var $input = $("#btn-input");
var $chatZone = $("#text-zone");
var sock;
var roomId = btoa(document.location.hostname + document.location.pathname);
var uuid = localStorage.captain_uuid || guid();
var audio = new Audio('/audio.ogg');
var name = localStorage.getItem('name') || "random guest " + Math.floor((1 + Math.random()) * 0x10000)
    .toString(16);

if (originalName && originalName.length) {
    name = originalName;
}
localStorage.setItem('name', name);

$(document).on('focus', '.panel-footer input.chat_input', function(e) {
    var $this = $(this);
    if ($('#minim_chat_window').hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideDown();
        $('#minim_chat_window').removeClass('panel-collapsed');
        $('#minim_chat_window').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '#new_chat', function(e) {
    var size = $(".chat-window:last-child").css("margin-left");
    size_total = parseInt(size) + 400;
    alert(size_total);
    var clone = $("#chat_window_1").clone().appendTo(".container");
    clone.css("margin-left", size_total);
});
$(document).on('click', '.icon_close', function(e) {
    $("#chat_window_1").remove();
});


$("#chatInput").on('submit', (evt) => {
    evt.preventDefault();
    let text = $input.val();
    if (!text || !text.length) {
        return;
    }
    console.log("emitting message");
    sock.emit('message', {
        room: roomId,
        uuid: uuid,
        name: localStorage.getItem("name"),
        text: text,
        timestamp: new Date().toISOString()
    })

    $input.val('');
    return false;
});
var sock = io.connect();
console.log(document.location.hostname + document.location.pathname);
sock.on('connect', function() {
    sock.emit('room', roomId);
});

sock.on('disconnect', function() { console.log("Socket closed"); });
sock.on("message", (message) => {

    console.log("Received", message);
    if (message.uuid != uuid) {
        $chatZone.append('<div class="row msg_container base_sent">\
                         <div class="col-md-2 col-xs-2 avatar">\
                             <img src="/img/man.png" class=" img-responsive ">\
                         </div>\
                              <div class="col-md-10 col-xs-10 ">\
                                  <div class="messages bg-warning">\
                                      <p>' + message.text + '</p>\
                                      <time datetime="' + message.timestamp + '">' + message.name + ' • at ' + message.timestamp + ' </time>\
                                  </div>\
                              </div>\
                          </div>');
        audio.play();
    } else {
        $input.val('');
        $chatZone.append('<div class="row msg_container base_receive">\
                              <div class="col-md-10 col-xs-10 ">\
                                  <div class="messages msg_receive bg-info">\
                                      <p>' + message.text + '</p>\
                                      <time datetime="' + message.timestamp + '">' + message.name + ' • at ' + message.timestamp + ' </time>\
                                  </div>\
                              </div>\
                              <div class="col-md-2 col-xs-2 avatar">\
                                  <img src="/img/man.png" class=" img-responsive ">\
                              </div>\
                          </div>');
    }

    $chatZone.animate({
        scrollTop: $chatZone[0].scrollHeight
    }, 300, 'linear');

});


function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function changeName() {
    name = prompt("Choose a new name");
    name = name.trim();
    localStorage.setItem('name', name);
}
