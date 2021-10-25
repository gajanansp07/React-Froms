import React, { Component } from 'react'
import Axios from 'axios'

class AxiosPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title:'',
             body: ''
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    sumitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state);
        Axios
            .post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(res=>{
                console.log(res);
            })
            .catch(e=>{
                console.log(e);
            })
    }
    
    render() {
        const {userId,title,body} = this.state
        return (
            <div>
                <form onSubmit={this.sumitHandler}>
                <div>
                    <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type='text' name='title' value={title} onChange={this.changeHandler} />
                </div>
                <div>
                    <input type='text' name='body' value={body} onChange={this.changeHandler} />
                </div>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default AxiosPost
