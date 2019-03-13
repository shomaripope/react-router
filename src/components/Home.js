import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }
componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }
    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post =>{
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content" key={post.id}>
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts Yet </div>
        )
        return (
            <div className="container">
                <h1 className="center">Home Page</h1>
                    {postList}  
            </div>
        );
    }
}

export default Home;