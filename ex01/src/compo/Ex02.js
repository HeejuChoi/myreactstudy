import {useState} from "react"
// useState : react에서 기본적으로 제공하는 기능(Hooks)
// -> 상태값을 만들 수 있는 기능 제공! 
// 상태값 : 화면이 보여진 후에도 값이 바뀌면 화면도 바뀔 수 있는 값 

function Ex02 () {
    // const를 선언해도
    const [result2, setResult2] = useState("일단 야근"); // useState("초기값")
    // useState로 적는 순간 
    // result2 --> 상태값을 나타낼 수 있는 값
    // setResult2 --> 상태값을 바꿀 수 있는 함수 
    // 가 됨 ==> 비구조 할당 방법!!   // setResult2를 이용해 result2를 바꿔줄 수 있음 

    let result = "야근"; // 일반 변수는 값이 바뀌더라도 한 번 보여지고 난 뒤에 바뀐 값으로 보여줄 수 없음
    // 첫 렌더링 됐을 때만 보이고 그 이후 렌더링 때는 일반변수는 보여지지 않음 
    // 렌더링 : 개발자가 설정한 화면이 사용자에게 보여지기까지의 과정

    function chResult() {
        result="칼퇴!!!!!" 
        console.log("1 :" + result);

        setResult2("칼퇴")  
        console.log("2 :" + result2);  // console로 보면 바뀌지 않은 값으로 나옴 (초기값이 나옴)
        // 두 번째 누르면 칼퇴로 변경됨 ==> setResult2함수가 제일 마지막 순서로 실행됨, console.log가 먼저 실행되어서 이렇게 나옴
        // useState에서 상태값 변경함수의 실행순서는 항상 제일 마지막이 된다.  
    }

    return(
        <>
            <h1>두 번째 컴포 useState</h1>
            <h1>오늘은 {result}</h1>
            <h1>오늘은 2 {result2}</h1>  
            {/* 이렇게까지만 진행되면 result2에 초기값이 세팅되어 있지 않아서 아무것도 출력이 되지 않음
            (초기값은 위 useState 옆 괄호 안에 작성하면 초기값임 )
            버튼 클릭을 하면 chResult함수가 적용되면서 setResult2에 값이 들어가고 result2에 값이 들어가서 출력됨 
             */}
            <button onClick={chResult}>바꾸기</button>
        </>
    )
}

export default Ex02;