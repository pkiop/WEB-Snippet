## postMessageAPI

### Same-Origin Policy

js코드는 서로 상호작용한다. 
ex) 여러 js파일 읽고 쓰고 등등

보안상 취약점이 있어서 제약을 건게 Same-Origin에서만 구동가능하도록 한 것.

### Same-Origin 

프로토콜, 호스트, 포트가 일치해야 same origin

### Same-Origin 이 어긋나는 상황
A window에서 javascript로 B window를 띄운다. 이 B window의 출처가 A랑 같으면 OK 다르면 Same-Origin 어긋남. (새창으로 google.com을 띄운다고 google의 js코드 접근 불가)

### Same-Origin 다 지키면서 원하는거 구현 못함

Same-Origin 해제할 필요가 있을 경우가 있다. 

1. 같은 서브 도메인일때
ex) blog.ex.com
ex) temp.ex.com
Same-Origin 에 어긋나지만 
document.domain = ex.com 으로 둘다 지정하면 공유 가능해진다. 

2. CORS 정책
HTTP 헤더에 Access-Control-Allow-Origin에 출처를 넣어 꼭 same-origin 이 아니더라도 사용가능하게 한다. (BE와 통신)

3. postMessage API (cross-domain messaging)
postMessage API를 통해 서로 다른 origin이라도 데이터 전송 가능. 
postMessageAPI를 통해 전송하고 message Event를 Listen하는 형태로 구현가능.