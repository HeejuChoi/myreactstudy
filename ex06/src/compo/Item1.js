import Item2 from "./Item2";
import {useSelector} from 'react-redux';


function Item1 () {
    const name = useSelector((state) => state.name);
    return(
        <div>
            {/* props 방식 - Item1옆 괄호에 props가 있었음 */}
            {/* <h1>Item1 : {props.num}</h1> */}
            {/* 자식 컴포넌트로 담아주기 */}
            {/* <Item2 num={props.num}></Item2>  */}
            {/* 하나씩 차례차례 넘겨줘야만 Item3에도 값이 담김 */}
            <h1>Item1 : {name}</h1> 
            
            <Item2 ></Item2> 
        </div>
    )
}

export default Item1;