import React from 'react';

class App extends React.Component {
    // React.Component 클래스의 기능을 추가한 App Class
    
    // rendor() 함수보다 constructor가 먼저 실행
    constructor(props) {
        super(props);
        console.log('hello');
    }

    // Mount로 분류하는 생명주기 함수 3개 순서: constuctor() >> rendor() >> componentDidMount()
    componentDidMount() {
        console.log("component renderd");
    }

    // Update 생명주기 함수
    componentDidUpdate() {
        console.log('I just updated');
    }

    // UnMount 생명주기 함수
    componentWillUnmount() {
        console.log('Goodbye, cruel world');
    }

    // state: Dynamic data를 다루기 위해 사용
    state = {
        count: 0,
    };

    add = () => {
        // console.log('add');
        // this.state.count = 1; Not working / 123page
        this.setState(current => ({ 
            count: current.count + 1
        }));
    }

    minus = () => {
        // console.log('minus');
        // this.state.count = -1; Not working / 123page
        this.setState(current => ({ 
            count: current.count -1
        }));
    }


    render() {
        console.log('render');
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;