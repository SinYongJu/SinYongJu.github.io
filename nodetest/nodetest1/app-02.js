//modull 호출
 var express = require('express'),
     http = require('http');


// 익스프레스 객체 생성
 var app = express();


// 기본 포트를 app 객체에 속성으로 설정
 app.set('port', process.env.PORT || 3000);
// process.env객체에 port 속성이 있으면 그 속성을 사용 없으면 3000 port
/*
set(name , value) : 서버 설정을 위한 속성을 지정, 지정한 속성은
get(name)으로 꺼내 올 수 있습니다.
use([path,]function[,function...]): 미들웨어 함수를 사용합니다.
get([path,]function):특정 패스로 요청된 정보를 처리합니다.



서버 설정을 위해 미리 정해진 주요 속성 이름은 다음과 같습니다.

env 서버 모드를 설정
views: 뷰들이 들어 있는 폴더 또는 폴더 배열의 설정
view engine : 기본값으로 사용할 뷰 엔진

*/



http.createServer(app).listen(app.get('port'), function(){
  console.log('익스프레스 서버를 시작함:'+ app.get('port'))
});

/*express에서는 미들웨어 이외에도 라우터도 사용하는데 미들웨어나 라우터는 하나의 독립된
기능의 함수라고 생각가능!

웹 요청과 응답에 관한 정보를 사용해 필요한 처리를 진행할수 있도록 독립된
함수로 분리합니다.
*/
//use 메서드로 미들웨어를 등록해보자!
// 일단 하나의 미들웨어를 등록해보자


app.use(function(req,res,next){
  console.log('first Middleware 등록');
  res.writeHead('200',{'Content-Type': 'text/html;charset=utf8'});
  res.end('<h1>Express 서버에서 응답한 결과입니다.</h1>')
});
