import React from 'react';

function Movie(){
  //새로운 컴포넌트 생성.. 각 컴포넌트는 대문자로 시작하여야 한다.
  return <h1> I like Pizza </h1>;
}
function Food({fav}){
  return <h3> I Like {fav} </h3>;
}

function App() {
  return  (
      <div>
        <h1>으아</h1>
        <Food fav='kimchi'/>
        <Food fav='Ramen'/>
        <Food fav='Pizza'/>
        <Food fav='kimchi'/>
        {/* props에 있는 데이터는 문자열인 경우를 제외하면 중괄호로 감싸야함 */}
      </div>
    );
}

export default App;
