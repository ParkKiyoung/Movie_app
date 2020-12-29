import React from 'react';
import "./App.css";
import {HashRouter,Route} from 'react-router-dom';
//라우터 기능 임포트
import About from './routes/About';
import Home from './routes/Home';

function App(){
  return (
    <HashRouter>
      <Route path="/about" component={About}/>
      <Route path="/" exact={true} component={Home}/>
      {/* Route에는 2가지 props를 전달할수 있는데 URL PATH, URL에 맞는 컴포넌트를 불러주기 위한 component props 
      path,component props를 통해 사용자가 접속한 URL을 보고 그에 맞는 컴포넌트를 화면에 그림
      Url/about으로 오게 되면 해당 컴포넌트로서 About을 호출한다고 봄
      */}
    </HashRouter>
  );
}

export default App;