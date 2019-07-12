# 사용자 스토리 기록

## 로그인 사용자 스토리
__스토리 1__<br>
사용자는 이전에 로그인 기록이 있을 수 있다.

1. 시나리오<br>

        given : 로그인한 기억값
        when : 있을 시 == true 일 시
        then : Main 화면으로 이동한다.

2. 시나리오<br>

        given : 로그인한 기억값
        when : 없을 시 == false 일 시 
        then : Login 화면을 보여준다.


__스토리 2__<br> 
사용자는 ID와 PW을 입력할 수 있다.

1. 시나리오<br>

        given : ID와 PW의 값이
        when : 유효할 때
        then : 통과 값 true

2. 시나리오<br>

        given : ID와 PW의 값이
        when : 유효하지 않을 때 (빈칸, 금지 문자)
        then : 통과 값 false


__스토리 3__<br>
사용자는 자신이 입력한 ID와 PW를 기억하도록 설정할 수 있다.

1. 시나리오<br>

        given : 기억 값이 true가 입력되고
        when : 통과값이 true 일 때
        then : 체크박스의 value를 true로 변경

2. 시나리오<br>

        given : 기억 값이 true가 입력되고
        when : 통과값이 false 일 때
        then : 유효성 확인 Alert을 띄운다

3. 시나리오<br>

        given : 기억 값이 false가 입력되고
        when :
        then : 체크박스의 value를 false로 변경

__스토리 4__<br>
사용자는 로그인 버튼을 누를 수 있다.

1. 시나리오<br>

        given : 입력된 PW, ID, 통과 값이 true
        when : 서버에 인증 요청 응답값이 성공이면
        then : Main 페이지로 이동한다

2. 시나리오<br>

        given : 입력된 PW, ID, 통과 값이 true 확인
        when : 서버에 인증 요청 응답값이 실패이면
        then : 인증실패 Alert를 띄운다.

3. 시나리오<br>

        given : 통과 값이 false
        when : 
        then : 유효성 확인 Alert를 띄운다.

        # ID / PW 구분하여 유효성 체크하면 좋겠지만 일단 패스!! 