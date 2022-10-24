import {Link, useSearchParams} from 'react-router-dom'


function About () {

    // const [paramsId, setParamsId] = useSearchParams();
    // // queryString으로 넘긴 데이터는 parmasId에 저장되어있다. 
    // const id = paramsId.get("id"); 

    // const [paramsNick, setParamsNick] = useSearchParams();
    // const nick = paramsNick.get("nick");

    // 이런 방식으로 만들어도 됨
    const [params, setParams] = useSearchParams();
    const id = params.get("id"); 
    const nick = params.get("nick");
    
    return (
        <>
        
            <h1>{id} 페이지 입니다</h1>
            <h1>별명은 {nick} 입니다</h1>
            <Link to='/'>메인 페이지로 이동</Link>

        </>

    )
}

export default About;