import React from 'react';

//클래스형 컴포넌트 작성하기
class App extends React.Component{ //이게 기본 뼈대임
  state = {
    count : 0,
  }
  //state는 객채형태의 데이터임, 동적 데이터를 저장하기 위함
  //state는 반드시 소문자로 선언하고, 위치는 클래스형 컴포넌트 안에서 해야함

  //카운트 조절하기 위한 함수
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

  //함수형 컴포넌트는 JSX를 직접 return 하지만
  //클래스형은 render 함수를 통해서 JSX를 return 함, 기본적으로 실행되는 함수임
  render(){
    return (
      <div>
        <h1>this number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button> {/*함수 적용*/}
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
