import {useState} from 'react'
function Ex04(){
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const [result , setResult] = useState('')
    function getId(e){
        console.log(e);
        setInputId(e.target.value); // target : 이벤트가 일어난 태그 (여기선 input)
    } // input의 value는 사용자가 작성한 값이다 
    function getPw(e){
        setInputPw(e.target.value);
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
            <br></br>
            <input onChange={getPw}></input>
            <button onClick={chResult}>로그인</button>
            <h1>{result}</h1>
        </>
    )
}
export default Ex04;