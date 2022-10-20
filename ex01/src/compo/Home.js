import {Link} from 'react-router-dom'
// Link 태그 이용하기 위해 작성


function Home () {
    return(
        <>
        
        <h1>Home</h1>
        <p>Main Page</p>
        <a href="./login">로그인 페이지로 이동</a>
        <br></br>
        <Link to="./login">로그인 페이지로 이동2</Link>
        <br></br>
        <Link to="./about">소개 페이지로 이동</Link>
        </>
        
        // a href와 Link 둘 다 login페이지로 이동하는게 같음 
        // 하지만 Link를 쓰는 이유? 차이점 존재!
        // -> a 태그 : 새로고침돼서 넘어감 (app.js에서 route로 만들었지만 a태그로 다시 태그를 만들어서 실행하기 때문에)
        // (두 번 활성화 하게 됨)
        // -> Link 태그 : 깜박임 없이 넘어감 (app.js 에서 컴포넌트를 route로 활성화 시켜둠 )
        // (활성화된 경로로만 이동해서 활성화 작업이 한 번 있기 때문에) 
        // React에서 라우터를 통한 페이지 이동을 할 때는 a 태그보다는 Link 태그를 사용하자 
    )
}

export default Home;