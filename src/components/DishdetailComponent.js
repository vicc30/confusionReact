import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,} from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );  
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        let options = {year: "numeric", month: "short", day: "numeric"};
        if (dish != null) {
            const comment = dish.comments.map((commentEach) => {
                return (
                    <ul key={commentEach.id} className="list-unstyled">
                        <li>{commentEach.comment}</li>
                        <li>-- {commentEach.author}, {new Date(commentEach.date).toLocaleDateString("en-US", options)}</li>
                    </ul>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4 className="header">Comments</h4>
                    {comment} 
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        /* receive props from Main*/
        return (
            <div className="container">
                <div className = "row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments dish = {props.dish} /> 
                </div>
            </div>
            
        );
    }

export default DishDetail;