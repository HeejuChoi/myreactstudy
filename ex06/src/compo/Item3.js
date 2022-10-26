import {useSelector} from 'react-redux';
// userSelector : 공유되고있는 store에 접근해서 state값을 가져올 수 있는 역할

function Item3 () {

    const number = useSelector((state) => state.number); // state.number를 number에 담아줌
    return(
        <div>
            {/* <h1>Item3 : {props.num}</h1> */}
            <h1>Item3 : {number}</h1>
        </div>
    )
}

export default Item3;