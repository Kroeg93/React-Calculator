import React from 'react'
import ButtonComponent from "./ButtonComponent";
import DisplayComponent from "./DisplayComponent";
import TextInputComponent from "./TextInput";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {text: ''}
    }

    handleButtonInput = value => {
        console.log("Received: ", value)
        if (value === 'calc') {
            this.calculate()
        }
    }

    handleTextInput = text => {
        this.setState({text})
    }

    calculate() {
        console.log("Calccue")
    }



    render() {
        return <div>
            <DisplayComponent text={this.state.text}/>
            <ButtonComponent onClick={this.handleButtonInput}/>
            <TextInputComponent onInput={this.handleTextInput}/>
        </div>


    }
}

export default App