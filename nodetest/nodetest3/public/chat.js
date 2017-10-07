var host,port,socket;
// var id = new date();
// var idNaming = function() {
//   return = id.getMilliseconds();
// }
// 문서 로딩후 실행
$(function(){
  $('#connectionButton').bind('click', function(e){
    println('connectionButton clcik!')
    host = $('#hostInput').val();
    port = $('#portInput').val();

    var options = {'forceNew' : true};
    var url = 'http://' + host +':'+port;

    console.log(options)
    console.log(url)

    socket = io.connect(url, options);


    //
    socket.on('connect',function(){
      println('웹소켓 연결 :' + url);
      console.log('connect안임....')
      socket.on('message', function(message){
        console.log(JSON.stringify(message));



        println('<p>수신 메세지'+ message.sender + ',' +message.recepient +
      ',' +message.command+','+message.type+','+message.data+'</p>');
      });
    //
    });
    //
    $('#sendButton').on('click',function(e){

      e.preventDefault()
      var sender = $('#senderInput').val()
      var recepient = $('#recepientInput').val()
      var data = $('#dataInput').val()

      console.log('서버로 보낼 데이터 '+ JSON.stringify(output))
      var output = {sender : sender, recepient : recepient, command : 'chat', type : 'text', data : data};
      if(socket== undefined){
        alert('서버에 연결되있지 않아요!')
        return
      }

      socket.emit('message', output)

    })


    socket.on('disconnect',function(){
      println('웹소켓 끊음')
    //
    })
  });

});

function println (data) {
  console.log('println')
  $('.result').append('<p>'+data+'</p>');

}
