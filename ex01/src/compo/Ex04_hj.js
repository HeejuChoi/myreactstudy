// import {useState} from "react"

// function Ex04 () {

//     const [id, setId] = useState("");
//     const [pw, setPw] = useState("");

//     function getId(e) {
//         realid = e.target.value;
//     }

//     function getPw(e) {
//         realpw = e.target.value;
//     }

//     function chData() {
//         setId(realid);
//         setPw(realpw);
//     }

//     return(

//         <>
        
//         <input onChange={getId} placeholder="아이디 입력"></input>
//         <input onChange={getPw} placeholder="비밀번호 입력"></input>
//         <button onClick={chData}>로그인</button>
//         <h1>{if (chData == 1 ? "{realid}님 환영합니다." : "로그인 실패"}</h1>

//         </>

//     )
// }



// export default Ex04;