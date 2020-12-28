import React from 'react';

function Movie(){
  //새로운 컴포넌트 생성.. 각 컴포넌트는 대문자로 시작하여야 한다.
  return <h1> I like Pizza </h1>;
}
function Food({fav}){
  //props로 데이터를 받아오는 경우
  return <h3> I Like {fav} </h3>;
}
function Ships({name, picture}){
  return (
    <div>
        <h3> I Like {name} </h3>
        <img src = {picture}/>
    </div>
  );
}

const ships = [
  {
    name : "Missouri",
    image : "https://w.namu.la/s/67916258a0bed28454fcbe2bfad953201cd83c614a04b207fb2a4c54d2a13556624b44b247b367dda4d70a39f55f5e593b5b51a244a6fe739225e667447a6a27478f94eaf647541862e4559804b0cb51a22ad0a02054fc9548e38dce5afa8c33a78efa514a79584208b342a734fb65e8"
  },
  {
    name : "Bismark",
    image : "https://w.namu.la/s/aa15b40d3dd0cc27aaa042452059c92bee9e5f6ef29532f38b87df161e0702d96398aeab0b3f7626f1695b2a60573882b8c5ba735cbecb216184ebc8c1734b82d38cfb834ecf021102ef707df948a482d37eb96a05f4fa3af92e9037e3f0b7dfa0554a71385b12f1296f8f686743c230"
  },
  {
    name : "Hood",
    image : "https://t1.daumcdn.net/cfile/blog/2225803554C5E0C516"
  },
  {
    name : "Nelson",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/HMS_Nelson_during_gunnery_trials.jpg/270px-HMS_Nelson_during_gunnery_trials.jpg"
  },

];

function renderShip(ship){
  return <Ships name={ship.name} picture={ship.image}/>
}

function App() {
  return  (
      <div>
        {/* props에 있는 데이터는 문자열인 경우를 제외하면 중괄호로 감싸야함 */}
        {ships.map(renderShip)}
        {/* 함수를 사용하여 리턴 시켜줄수 있음 */}
      </div>
    );
}

export default App;
