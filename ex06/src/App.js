import logo from './logo.svg';
import './App.css';
import Item1 from './compo/Item1';
import Item2 from './compo/Item2';
import Item3 from './compo/Item3';
import Right1 from './compo/Right1';
import {useState} from 'react';

// 리덕스 재료 준비 (store를 만들어요~)
import { createStore } from 'redux'; // createStore : state(상태)값을 저장시키는 역할 
import { Provider } from 'react-redux'; // Provider : state 값을 어떤 컴포넌트와 공유, 제공할건지 정의! 
                                        // (어떤 컴포넌트가 store에 접근할 수 있는지)

// reducer : store에 접근해서 state에 관련된 작업을 처리할 기능 
// --------> 현재의 상태값, 작업(action)
function reducer(currentState, action) {
  // reducer가 처음 store에 적용될 때 default 상태값을 만드는 부분 
  if (currentState === undefined) {  // reducer가 처음 실행될 때 currentState가 정해져있지 않아서 undefined임
    return {
      number : 1  // ---> 다른 컴포넌트에서도 사용가능한 상태값
    };
  }  

  // currentState가 undefined가 아니고 다른 상태값에 따른 명령이 들어왔다면
  // 밑에서 처리 가능
  // plus된다면 현재의 상태값에서 number를 추가해주세요 
  if (action.type =='plus') {
    currentState.number++;
  }
  else if (action.type == 'name') {
    currentState.name="희주"; // 현재의 상태값에 name이라는 것을 만들어서 희주를 넣는다.
  }
  return {...currentState}; // State에 있는 내용을 모두 꺼내서 리턴하겠다. (그래서 ... 사용)
  // ... -> 객체에 대한 모든 정보를 가져오겠습니다. 
}


const store = createStore(reducer); // state값을 저장시킬 저장소 생성!

function App() {

  const [number, setNumber] = useState(3);

  return (
    <div id="container">
      <h1>Root : {number}</h1>
      <div id="grid">
      <Provider store={store}>
        {/* 위에서 만들어 놓은 store와 연결시킨 뒤 해당 내용을 
            하위 컴포넌트에 제공하겠습니다.
            하위 컴포넌트가 사용하고 있는 다른 컴포넌트에도 store를 제공할 수 있다! */}
        <Item1 num = {number}></Item1>
        {/* num이 key number가 value해서 객체 형식으로 넘어감 */}
        {/* 부모컴포넌트에서 자식컴포넌트로 내용을 넘겨준다 */}
        <Right1></Right1>
      </Provider>
      </div>
    </div>
  );
}

export default App;
