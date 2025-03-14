// DOM이 완전히 로드되었을 때 실행
document.addEventListener("DOMContentLoaded", () => {
    // 로그인 폼 요소 가져오기
    const form = document.querySelector("form");

    // 이메일 입력 필드 가져오기 (type='text'인 input 요소 선택)
    const emailInput = document.querySelector("input[type='text']");

    // 비밀번호 입력 필드 가져오기 (type='password'인 input 요소 선택)
    const passwordInput = document.querySelector("input[type='password']");

    // 폼 제출 이벤트 리스너 추가
    form.addEventListener("submit", (event) => {
        // 기본 제출 동작 방지 (페이지 새로고침 방지)
        event.preventDefault();

        // 입력된 이메일과 비밀번호 값 가져오기 (앞뒤 공백 제거)
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 이메일 형식을 검사하는 정규식 (이메일 형식이 올바른지 확인)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 이메일이 정규식과 일치하지 않으면 경고 메시지 출력 후 함수 종료
        if (!emailPattern.test(email)) {
            alert("올바른 이메일을 입력하세요.");
            return;
        }

        // 비밀번호 길이가 6자 미만이면 경고 메시지 출력 후 함수 종료
        if (password.length < 6) {
            alert("비밀번호는 최소 6자 이상 입력해야 합니다.");
            return;
        }

        // 모든 조건이 충족되면 로그인 성공 메시지 출력
        alert("로그인 성공!");
    });
});
