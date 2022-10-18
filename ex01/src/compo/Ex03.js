import {useState} from "react"

function Ex03 () {

    const [inputData, setInputData] = useState("");

    let data = ""; // 버튼 누를 때 내용가지고오고 싶어서 일반변수 선언함 

    function getData(e) {  // 매개변수로 이벤트 객체 
        console.log(e.target.value);  
        // e --> 이벤트 객체, 이벤트가 일어나는 전반적인 정보를 가지고 있음
        // e.target --> 이벤트를 실행시킨 주체를 가져옴 (여기서는 input태그)
        {/* e.target.value를 입력할 때마다 input값을 가져와달라는 뜻이라서 바뀔 때마다 값이 console에 찍힘 */}
        data = e.target.value;  // input에 쓸 때마다 data에 내용이 저장됨
        //setInputData(e.target.value); // input에 작성하고 있을 때 내용이 출력됨 

    } 

    function chData() {
        setInputData(data);
    }

    return(
        <>
        
        <input onChange={getData}></input>
        {/* onChange : 값이 바뀔 때마다 실행해주세요 */}

        <button onClick={chData}>상태값 바꾸기</button>
        <h1>{inputData}</h1>  {/* data에 마지막에 저장된 값이 출력됨 */}
        
        </>
    )
}

export default Ex03;