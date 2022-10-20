import logo from './logo.svg';
import './App.css';
import Ex01 from './compo/Ex01';
import Ex02 from './compo/Ex02';
import Ex03 from './compo/Ex03';
import Ex04 from './compo/Ex04';
import Home from './compo/Home';
import About from './compo/About';
import Header from './compo/Header';


import {Routes, Route} from "react-router-dom"
// Routes : 여러개의 페이지(컴포넌트) 에 대한 정보를 가지고 있는 태그
// Route : 페이지(컴포넌트)에 경로(주소)를 부여해줄 수 있는 역할 


function App() {  // App이라는 컴포넌트 / Ex01은 자식 컴포넌트 App은 부모 컴포넌트 

  // props : 속성값 전달(부모컴포넌트가 자식컴포넌트한테 데이터를 전달할 때 사용!)
  const name = "희주";
  const myColor = "red"; // -> Ex01컴포넌트로 전달!
  return (
    //<Ex01 name={name} ttt="123" myColor={myColor}></Ex01> // Ex01태그에 name이라는 속성을 이용해서 name 값을 전달한 상태 
    // 마음대로 속성을 정해서 데이터를 넘길 수 있음 ex) ttt="123"
    // Ex01에서 쓰려면 위에 적어놓고 여기에도 속성값을 만들어서 적어줘야함 / Ex01의 props로 넘어감 

    //<Ex02></Ex02>

    <>
    {/* <Switch></Switch> */}
    {/* Switch는 Routes의 옛 버전 */}

    {/* Header를 별도로 위로 빼놓으면 메뉴바처럼 위에 별도로 생김 그리고 모든 페이지에 적용됨 */}
    <Header></Header>
    
    <Routes>
      <Route path='/login' element={<Ex04></Ex04>}></Route>  
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    {/* 이 path에 맞는 요소는 element라는 뜻 */}   
       {/* 이 순서여도 Home이 먼저 출력되는 이유 : '/' 루트로 해놔서 
       로그인 페이지만 보기 : /login 추가하기 */}
    </>

  );
} 

export default App;
