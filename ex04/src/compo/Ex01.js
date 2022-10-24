import axios from 'axios'
import {useState} from 'react'
// 누르면 정보가 나올 수 있게 상태값 지정

// 버튼을 누르면 해당 정보를 가져오고 싶음!
function Ex01 () {

    const [movieArray, setMovieArray] = useState([]);
    // map이 배열에 적용되는 함수라 기본값으로 빈배열을 담아줘야함 

    async function getMovies() {
        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        
        // axios 비동기 통신 방법으로 통신을 진행하겠습니다. get방식으로 할거에요!
        // 위 주소를 axios를 활용해서 비동기통신방식으로 통신할 것
        const result = await axios.get(url);
        // async~ await를 적지 않는다면 통신에 대한 응답값으로 promise 타입이 반환되어진다. 
        // --> 이유: 화면을 구성하는 컴포넌트들이 요청을 보낼 때 순차적으로 요청을 처리하기 위함
        // (async ~ await가 순차적으로 처리가 되게끔 해줌)
        // 이렇게 하면 promsie 타입이 아닌 바로 객체형식으로 가져와짐 
        //console.log(result.data); // result로 보면 promise로 뜨는데 이 안에 json이 담겨있음 
        // result.data로 하면 result 안에 있는 data 꺼내서 바로 볼 수 있음 / . 통해서 들어가기 
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm);
        // 10개의 영화데이터 배열 --> result.data.boxOfficeResult.dailyBoxOfficeList
        setMovieArray(result.data.boxOfficeResult.dailyBoxOfficeList)
        // setMovieArray가 10개의 영화데이터가 담긴 배열로 바뀜 

    }

    return (
        <>
            <h1>영화데이터 확인페이지</h1>
            <button onClick={getMovies}>영화정보 가져오기</button>
            <br></br>
            <table border="1">
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                </tr>
                {/* 아래와 같은 형식으로 내보내겠다. */}
                {movieArray.map(function(movie) {
                    return(
                        <tr>
                            <td>{movie.rank}</td>
                            <td>{movie.movieNm}</td>
                            <td>{movie.openDt}</td>
                        </tr>
                    )
                })} 
            </table>
        </>
    );
}

export default Ex01;