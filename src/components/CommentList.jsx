import React from "react";
import { Badge, ListGroup } from "react-bootstrap";


class CommentList extends React.Component{
  state = {
    comments:[]
  }


  componentDidMount = async () => {
      const username = 'user19';
      const password = 'dXNlcjE5Okh4eDhSNHdaZkNBTmFtcmo6';

      const headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));

        const commentsUrl = "https://striveschool.herokuapp.com/api/comments/";
        const comments = await fetch(commentsUrl + this.props.id, {
          headers: headers,
        }).then((response) => response.json());
        this.setState({ comments });
      
}


render (){
  return(
    this.state.comments.map((comment)=>(
      <ListGroup key={comment._id}>
       <ListGroup.Item>
         <Badge pill variant="info" className="mr-3">
           {comment.rate}
         </Badge>
         {comment.comment}
       </ListGroup.Item>
     </ListGroup>
    ))
  )
}

}

export default CommentList;