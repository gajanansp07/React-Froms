import React, { Component } from 'react'
import axios from 'axios'

class AxiosComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            this.setState({posts: res.data})
        })
        .catch(e=>{
            console.log(e)
        })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>List of Posts</h1>
            
            {
                posts.length?
                posts.map(post =><div key={post.id}>{post.title}</div>):
                null
            }
            </div>

        )
    }
}

export default AxiosComponent
