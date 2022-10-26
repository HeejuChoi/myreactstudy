import {useSearchParams} from 'react-router-dom';


function Home () {
    // Login에서 쿼리스트링으로 넘어옴 
    const [params, setParams] = useSearchParams();
    const nick = params.get("nick");

    return (
        <>
        <h1>HOME</h1>
        <h1>{nick}님 환영합니다. </h1>
        </>
    )};

export default Home;