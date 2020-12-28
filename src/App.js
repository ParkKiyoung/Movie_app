import React from 'react';

//클래스형 컴포넌트 작성하기
class App extends React.Component{ //이게 기본 뼈대임
  //생명주기 알아봄
  constructor(props){
    super(props);
    console.log('construct')
  }

  state = {
    count : 0,
  }
  add = ()=>{
    this.setState(current =>({
      count : current.count +1,
    }))
  }
  minus = () =>{
    this.setState(current =>({
      count : current.count -1,
    }))
  }

  componentDidMount(){
    //컴포넌트가 마운트되고 난뒤
    console.log('console rendered')
  }
  componentDidUpdate(){
    //컴포넌트가 업데이트 되었을때
    console.log('component updated')
  }
  componentWillUnmount(){
    //컴포넌트가 화면에서 떠날때
    console.log('component Unmount')
  }

  render(){
    console.log('render')
    return (
      <div>
        <h1>this number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
