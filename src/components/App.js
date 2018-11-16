import React from 'react';
import Counter from './counter';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleDecrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(prevState => {
            return {
                count: prevState.count - prevState.count
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Hello My Classy Friend</h1>
                <Counter
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    count={this.state.count}
                    handleReset={this.handleReset}
                />
            </div>
        )
    }
}

export default App;