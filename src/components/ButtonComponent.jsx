import React from 'react'

class ButtonComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {operator: null}

    }

    handleInput(e) {
        this.setState({operator: e.target.value})
        console.log(this.state.operator)
    }

    add = e => {
        this.setState({operator: e.target.value})
        console.log(this.state.operator)
    }

    sub = e => {
        this.setState({operator: e.target.value})
        console.log(this.state.operator)
    }

    multi = e => {
        this.setState({operator: e.target.value})
        console.log(this.state.operator)
    }

    divide = e => {
        this.setState({operator: e.target.value})
        console.log(this.state.operator)
    }

    handleClick = value => () => {
        const {onClick} = this.props
        if (onClick) {
            onClick(value)
        }
    }



    render() {




        return <div>
            <button onClick={this.handleClick("+")}>+</button>
            <button onClick={this.handleClick("-")}>-</button>
            <button onClick={this.handleClick("*")}>x</button>
            <button onClick={this.handleClick("/")}>/</button>
            <div>
                <button onClick={this.handleClick("calc")}>Calculate</button>
            </div>
        </div>
    }


}

export default ButtonComponent