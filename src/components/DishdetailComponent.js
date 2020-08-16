import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, 
    BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );  
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
        let options = {year: "numeric", month: "short", day: "numeric"};
        if (comments != null) {
            const comment = comments.map((commentEach) => {
                return (
                    <ul key={commentEach.id} className="list-unstyled">
                        <li>{commentEach.comment}</li>
                        <li>-- {commentEach.author}, {new Date(commentEach.date).toLocaleDateString("en-US", options)}</li>
                    </ul>
                );
            });
            return (
                <div className="col-12">
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
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
    }

export default DishDetail;