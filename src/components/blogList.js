import React, {Component} from 'react';



const ShowPost = (props) =>{
    const message = props.contentPost.map((post, index) =>
      <li key={post.id}>{post.message}</li>
    )
    return(
      <ul>
        {message}
      </ul>
    )
  }
class BlogPost extends React.Component{
    constructor(props){
        super(props);

        this.contentPost = [
            {
                id          : 1,
                message     : `Wow that's nice!` 
            },
            {
                id          : 2,
                message     : `Really ? Thanks!` 
            }
        ];
    }

    render(){
        return <ShowPost contentPost={this.contentPost}/>
    }


}

export default BlogPost;