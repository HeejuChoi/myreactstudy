import {useState} from 'react'
function Ex04(){
    // const [inputId, setInputId] = useState('');
    // const [inputPw, setInputPw] = useState('');

    let inputId = "";
    let inputPw = "";
    // 일반 변수는 화면이 렌더링 될 때 --> 다시 맨처음 초기값으로 돌아간다. 
    // 화면이 다시 렌더링 된다 ==> 상태값이 바뀔 때!
    
    const [result , setResult] = useState('로그인 실패')
    function getId(e){
        // console.log(e);
        inputId = e.target.value;  // 일반변수로만 하면 렌더링할 때 다시 처음부터 시작하기 때문에 초기값으로 시작됨
        // 그래서 getId와 getPw가 다시 작성되어야 원하는 값이 나옴 
        //setInputId(e.target.value); // target : 이벤트가 일어난 태그 (여기선 input)
    } // input의 value는 사용자가 작성한 값이다 
    function getPw(e){
        inputPw = e.target.value;
        //setInputPw(e.target.value);
    }
    function chResult(){
        if(inputId == 'smhrd' && inputPw =='123'){
            setResult("smhrd님 환영합니다")
        }
       else{ 
        setResult("다시 입력해주세요")
       }
    }
    return(
        <>
            <input onChange={getId}></input>
            {/* onChange : input에 입력될 때마다 {getID}를 실행해주세요. */}
            <br></br>
            <input onChange={getPw}></input>
            <button onClick={chResult}>로그인</button>
            <h1>{result}</h1>
        </>
    )
}
export default Ex04;