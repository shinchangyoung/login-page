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

document.addEventListener("DOMContentLoaded", () => {
    // 비밀번호 표시/숨김을 위한 아이콘(span 요소) 생성
    const togglePassword = document.createElement("span");
    togglePassword.innerText = "👁️"; // 눈 모양 이모지
    togglePassword.style.cursor = "pointer"; // 클릭할 수 있도록 커서 스타일 변경

    // "비밀번호 확인하기" 문구 생성
    const passwordLabel = document.createElement("span");
    passwordLabel.innerText = "비밀번호 확인하기"; // 문구 텍스트
    passwordLabel.style.fontSize = "6px"; // 폰트 크기 조정
    passwordLabel.style.color = "#fff"; // 색상 지정
    passwordLabel.style.marginTop = "5px"; // 간격을 위한 마진 추가
    passwordLabel.style.cursor = "pointer"; // 클릭할 수 있도록 커서 스타일 변경

    // 비밀번호 입력 필드 가져오기
    const passwordInput = document.querySelector("input[type='password']");

    // 비밀번호 입력 필드의 부모 요소에 아이콘과 문구 추가
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center"; // 아이콘과 문구를 가운데 정렬

    // 아이콘과 문구를 함께 래핑한 div에 추가
    wrapper.appendChild(togglePassword);
    wrapper.appendChild(passwordLabel);

    // 비밀번호 입력 필드의 부모 요소에 추가 (기존 비밀번호 입력 필드 바로 아래에 삽입)
    passwordInput.parentNode.appendChild(wrapper);

    // 아이콘 클릭 시 비밀번호 표시/숨김 기능 토글
    togglePassword.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text"; // 비밀번호를 보이도록 변경
        } else {
            passwordInput.type = "password"; // 다시 비밀번호로 숨김
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("input[type='submit']");
    const emailInput = document.querySelector("input[type='text']");
    const passwordInput = document.querySelector("input[type='password']");

    form.addEventListener("submit", (event) => {
        event.preventDefault();  // 기본 제출 동작 방지

        // 입력된 이메일과 비밀번호 가져오기
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 이메일 형식 검증
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("올바른 이메일을 입력하세요.");
            return;
        }

        
        // 비밀번호 길이 확인
        if (password.length < 6) {
            alert("비밀번호는 최소 6자 이상이어야 합니다.");
            return;
        }


        // 새 창 열기
        window.open("dashboard.html", "_blank");  // 여기에 원하는 로컬 HTML 파일 경로를 입력
    });
});



