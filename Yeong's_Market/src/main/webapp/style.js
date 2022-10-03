 
function idCheck() {
		
		const id = "hong"; // 변수 임시저장
		const inputId = document.getElementById("inputId").value;
		if ( inputId == id ){
			alert("중복된 아이디 입니다");
		} else if ( inputId != id ) {
			alert("사용 가능한 아이디 입니다.");
		} else if ( inputId.length == 0) { // 적용안됨
			alert("아이디를 입력해주세요.");
		}	

}

