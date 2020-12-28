import React from 'react';
import axios from 'axios';

//클래스형 컴포넌트 작성하기
class App extends React.Component{ //이게 기본 뼈대임
  state ={
    isLoading : true,
    movies:[],
  }

  componentDidMount(){
    axios.get('https://yts-proxy.now.sh/list_movies.json')
  }

  render(){
    const {isLoading} = this.state;
    return <div > { isLoading ? 'Loading...':'We Ready'}</div>
  }
}

export default App;
