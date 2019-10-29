import React from 'react'

class TextInputComponent extends React.Component {

    handleTextInput = event => {
        const {onInput} = this.props
        if (onInput) {
            onInput(event.target.value)
        }
    }



    render() {
        return <div>
            <input onInput={this.handleTextInput}/>
        </div>
    }



}

export default TextInputComponent