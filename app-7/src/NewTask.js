import React, {Component} from 'react'

class NewTask extends Component {
    constructor() {
        super();
        this.state = {
            inputText: ''
        }
        this.addItem=this.addItem.bind(this);
    }

    handleChange(str) {
        this.setState({inputText: str})
    }

    addItem() {
        this.props.add(this.state.inputText);
        this.setState({inputText: ''})
    }

    render() {
        return (
            <div>
                <input  
                    value={this.state.inputText}
                    placeholder='Enter new task'
                    onChange={e=>this.handleChange(e.target.value)}
                />
                <button onClick={this.addItem}>Add</button>
            </div>
        )
    }
}

export default NewTask;