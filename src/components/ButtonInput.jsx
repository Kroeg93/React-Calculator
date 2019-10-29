import React from 'react'


class ButtonInput extends React.Component {


    constructor(props) {
        super(props)
        this.state = props

    }




    handleClick = value => () => {
        console.log(value, this)
        const {onClick} = this.props

        if (onClick) {
            onClick(value)
        }
    }


    render() {

        const {min, max} = [];
        const buttons = [];

        for (let i = min; i < max; i++) {
            buttons.push(<button onClick={this.handleClick(i)}>i</button>)
        }

        return<div>{buttons}</div>
    }


}

export default ButtonInput