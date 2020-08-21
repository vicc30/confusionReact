import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Row,
    BreadcrumbItem, Breadcrumb, Button, Label, Col, } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

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

class DishDetail extends Component  {

    constructor(props){
        super(props);

        this.state={
            isModalOpen: false,
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    CommentForm (){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={{size: 12}}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15),
                                        }}
                                         />
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:12}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

    toggleModal() { 
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render(){
        /* receive props from Main*/
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{this.props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={this.props.comments} />
                    {this.CommentForm()}
                </div>
            </div>
            </div>
        );
    }
}

export default DishDetail;