import {useState} from 'react'


function Ex01 () {

    // const array = ['눈', '바람', '비', '해'];  
    const [array, setArray] = useState(['눈', '바람', '비', '해'])  // 삭제키를 활용하기 위해 usestate를 활용

    function deleteData(e) {
        // e.target.value
        setArray(array.filter(function(data, index){
            return index != e.target.value; // e.target.value는 내가 클릭한 삭제버튼의 인덱스번호 
            // 기존인덱스와 누른 인덱스가 같지 않으면 새로운 배열을 만든다. 
            // 그래서 내가 누르지 않은 것들의 인덱스만 따로 뽑혀서 새로운 배열이 만들어짐
            // setArray로 array에 다시 적용해서 출력 
            // 삭제 버튼을 눌렀을 때 이벤트가 발생 ...? 정리 한 번 하기 
        }));
    }

    return (

        <>
            {/* JSX 문법 */}
            {/* 기존 배열의 각각의 원소를 li태그 구조로 리턴해줄거다. */}
            <ul>
                {array.map(function(data, index){
                    return <li key={index}>{data}<button value={index} onClick={deleteData}>삭제</button></li>
                    // index는 중복값이 없기 때문에 key값을 index로 주면 console에서 warning이 안뜬다. 
                    // button의 index는 기존 배열의 index / 이걸 클릭하면 deleteData로 보내줌 
                    
                })}
            </ul>
        
        
        </>


    )
}

export default Ex01;