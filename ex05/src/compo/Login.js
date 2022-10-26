
import {useSearchParams, useNavigate} from 'react-router-dom';
// useSearchParams : 주소값에 있는 쿼리스트링 데이터를 꺼내올 수 있게 만들어줌!

import {useState} from 'react';

function Login(){
    const [params, setParams] = useSearchParams();
    // params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음 
    // ex) id=희주&pw=123&nick=123
    // 그래서 get이라는 메소드로 가져올 수 있다. 
    const id = params.get("id"); 
    const pw = params.get("pw"); //pw라는 키값으로 params가 가진 value를 pw 변수에 담아주세요
    const nick = params.get("nick"); // Join에서 넘어옴

    // (추가) Home에 다시 Nick값 넘겨주기 위해 useNavigate사용 
    const nav = useNavigate();

    // input태그에 적은 내용을 저장하겠다!
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    // 기존 쿼리스트링 값과 입력한 값이 같으면 로그인 성공! 아니면 실패!
    function tryLogin() {
        if(id == inputId && pw == inputPw) {
            // 로그인 성공
            console.log("성공")
            nav("/Home?nick="+nick)
            // nick이라는 키값을 /Home에 같이 넘겨줌 --> 그래서 로그인시도 시 nick을 같이 사용 
        } else {
            // 로그인 실패
            console.log("실패")
        }
    }

    return (
    <>
        <h1>Login 페이지</h1>
        {/* 여기로 form 태그를 주면 무조건적으로 하나의 페이지로만 보낼 수 있어서
            잘 어울리진 않음 (tryLogin으로 로그인 성공,실패에 따라 다르게 하고 있는데) */}
        {/* <form action={'/Home?nick='+nick}>
        ID: <input onChange={(e) => setInputId(e.target.value)}></input>
        <br></br>
        PW: <input onChange={(e) => setInputPw(e.target.value)}></input>
        <br></br>
        <button>로그인 시도!</button>
        </form> */}

        ID: <input onChange={(e) => setInputId(e.target.value)}></input>
        <br></br>
        PW: <input onChange={(e) => setInputPw(e.target.value)}></input>
        <br></br>
        <button onClick={tryLogin}>로그인 시도</button>
    </>
    )
}

export default Login;
// 이 컴포넌트를 다른 곳에서도 쓸 수 있게 내보내기! 