import React, { Component } from 'react'

class Forms extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             comments: '',
             skills:'React'
        }
    }
    HandleUserNameChange = (event) =>{
        this.setState({
            userName: event.target.value
        })
    }
    HandleUserCommentChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    HandleSkillChange = (event) => {
        this.setState({
            skills: event.target.value
        })
    }
    HandleSubmit = (event) =>{
        alert (`${this.state.userName}, ${this.state.comments} and ${this.state.skills}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <div>
                <h1> From Handaling with React</h1>
                <form onSubmit={this.HandleSubmit}> 
                <div>
                    <label>Name : </label>
                    <input type='text' value={this.state.userName} onChange={this.HandleUserNameChange} />
                </div>
                <div>
                    <label>Comments : </label>
                    <textarea value={this.state.comments} onChange={this.HandleUserCommentChange} />
                </div>
                <div>
                    <label>Skill : </label>
                    <select value={this.state.skills} onChange={this.HandleSkillChange}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Veu</option>
                        <option>PHP-WordPress</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
           
        )
    }
}

export default Forms
