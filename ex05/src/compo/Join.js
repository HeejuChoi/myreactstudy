import {useState, useRef} from 'react'
// useRef : 컴포넌트 안에 특정DOM(요소) 선택할 수 있게끔 도와주는 기능이다
import {Link, useNavigate} from 'react-router-dom'
// useNavigate : 특정 주소값으로 화면을 전환할 수 있는 역할



function Join(){

    const useId = useRef();

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [inputNick, setInputNick] = useState('');

    function reset () {
        setInputId('');
        setInputPw('');
        setInputNick('');
        // ref.current -> ref가 적용된 태그를 의미!
        // useId가 적용된 첫 번째 input태그를 말함 
        useId.current.focus();
    }

    const nav = useNavigate();
    function tryJoin() {
        nav("/login?id="+inputId+"&pw="+inputPw+"&nick="+inputNick);
        // nav(주소값);
        // 사용자가 입력한 키값이 쿼리스트링으로 넘어가게 된다
    }



    return(
        // onChange를 안쓰면 초기값인 빈문자열이 그대로 있어서 입력이 안됨

        // ref 속성을 쓸 수 있음 
        <>
        <h1>회원가입 페이지 입니다</h1>
        ID:<input onChange={(e) =>setInputId(e.target.value)} value={inputId} ref={useId}></input><br></br>
        PW:<input onChange={(e) =>setInputPw(e.target.value)} value={inputPw}></input><br></br>
        Nick:<input onChange={(e) =>setInputNick(e.target.value)} value={inputNick}></input><br></br>
        {/* <Link to="/Login"><button>JOIN</button></Link> */}

        <button onClick={tryJoin}>JOIN</button>
        <button onClick={reset}>초기화</button>
        </>
    )
}
export default Join;