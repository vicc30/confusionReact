import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,} from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props)
        /*If not set throws error*/
        this.state = {
        }
    }

    renderDish(selectedDish) {
        if (selectedDish != null) {
            return (
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                                <CardBody>
                                    <CardTitle>{selectedDish.name}</CardTitle>
                                    <CardText>{selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4 className="header">Comments</h4>
                            {this.renderComments(selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        let options = {year: "numeric", month: "short", day: "numeric"};
        const comment = comments.map((comment) => {
            if (comment != null) {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}</li>
                    </ul>
                );
            }
            else {
                return (<div></div>)
            }

        });
        return (
            comment
        );
    }

    render() {
        /* receive props from Menu*/
        return (
            this.renderDish(this.props.dish)
        );
    }
}


export default DishDetail;