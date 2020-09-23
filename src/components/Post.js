import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postAction';


class Post extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    componentDidUpdate(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const postItems = this.props.posts.map((post) => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Post</h1>
                { postItems }
            </div>
        )
    }
}

Post.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Post)