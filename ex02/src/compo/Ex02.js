import {useState} from 'react'


function Ex02 () {

    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState(""); // 현재 내가 input태그에 입력한 값을 기억

    function  getText(e) {
        setInputData (e.target.value);
    }   

    function setTodo () {
        // todoArray에 inputData 추가!
        // react에서 배열에 값을 추가할 때는 push가 아니라 concat을 사용한다!

        // 불변성 유지 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서 
        //                새로운 값으로 상태를 업데이트 해줘야함
        //                push나 pop같은 경우는 기존의 배열에서 추가가 됨 (주소값이 달라지지 않음)
        //                concat이나 map, filter는 새로운 배열이 만들어짐 (주소값이 달라짐)
        //                (기존 배열은 기존 주소값에 배열이 있음)
        setTodoArray(todoArray.concat(inputData))
    }

    function deleteText (e) {
        //e.target.value
        setTodoArray(todoArray.filter(function(data, index){   // filter함수의 첫 번째 매개변수는 data여야해서 index만 작성 x
            return index != e.target.value;  
            // != : 타입과 상관없이 안에 있는 값만 비교 / !== : 타입까지 비교 
            // ex) 10 == '10' --> true / 10 === '10' --> false
            // 배열의 index -> 숫자 타입   / e.target.value -> 문자열타입  
        }))
    }
 
    return (
        <>
            <h1>TodoList</h1>
            <input onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data, index){
                return (
                <div>
                    <h1>{data}</h1>
                    <button value={index} onClick={deleteText}>삭제</button>
                </div>
                )
            })}
            
        </>
        // 이벤트 객체 
        // 1. button onClick을 실행하면 deleteText 함수가 실행된다.
        // 2. 기존 index와 이벤트객체가 실행된 태그(target이 태그를 의미, 여기선 button)의 value를 비교함
        // 3. 둘이 같지 않으면 todoArray로 보냄 => 버튼 클릭했을 때의 index와 기존 index가 다를 경우만 모아서 별도 배열을 만듦
        // 4. 삭제 성공
    )
}

export default Ex02;