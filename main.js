// 1. 화면 요소 가져오기
const langDropdown = document.querySelector('.lang_dropdown');
const langBtn = document.querySelector('.language');
const langOptions = document.querySelectorAll('.lang_option');

// 2. 언어별 텍스트 데이터 정의
const translations = {
    KR: {
        main_text: "우리는 비워진 공간 속에서 정돈된 구조와 자연스러운 미학을 탐구합니다.<br>절제된 실루엣과 감각적인 소재의 조화를 통해 오래도록 기억될 가치를 만듭니다.<br>주거, 상업, 인테리어 디자인 전반에 걸친 맞춤형 디자인 솔루션을 제안합니다.<br>스튜디오 리리와 함께 당신만의 독창적인 공간과 브랜드를 완성해보세요.",
        footer_name: "상호명 : 릴리스튜디오",
        footer_phone: "연락처 :010-0000-0000",
        footer_locate: "위치 : 경기도 남양주시",
        footer_mail: "메일 : lty773@gmail.com",    
    },
    EN: {
        main_text: "We explore organized structures and natural aesthetics in empty spaces.<br>We create lasting value through harmonious restrained silhouettes and tactile materials.<br>We offer tailored design solutions across residential, commercial, and interior design.<br>Complete your unique space and brand with Studio Lili.",
        footer_name: "Company name : lily studio",
        footer_phone: "phone number : 010-0000-0000",
        footer_locate: "locate : Namyangju-si , Gyeonggi-do",
        footer_mail: "mail : lty773@gmail.com"
    }
};

// 3. 화면의 글자들을 선택한 언어로 바꾸는 함수
function updateLanguage(selectedLang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    
    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[selectedLang] && translations[selectedLang][key]) {
            // <br> 태그를 반영하기 위해 innerHTML 사용
            element.innerHTML = translations[selectedLang][key]; 
        }
    });
}

// 4. 드롭다운 버튼 클릭 시 메뉴 열기/닫기
langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('active');
});

// 5. 언어 옵션(KR/EN) 클릭 시 처리
langOptions.forEach((option) => {
    option.addEventListener('click', () => {
        const selectedLang = option.textContent.trim(); // "KR" 또는 "EN" 가져오기
        
        // 버튼 텍스트 변경 (역삼각형 아이콘 유지)
        langBtn.innerHTML = `${selectedLang} <i class="fa-solid fa-chevron-down"></i>`;
        
        // 본문 및 푸터 언어 변경 실행
        updateLanguage(selectedLang);
        
        // 드롭다운 닫기
        langDropdown.classList.remove('active');
    });
});

// 6. 드롭다운 바깥 영역 클릭 시 닫기
document.addEventListener('click', (event) => {
    if (!langDropdown.contains(event.target)) {
        langDropdown.classList.remove('active');
    }
});