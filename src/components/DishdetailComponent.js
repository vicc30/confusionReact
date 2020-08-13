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
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        const comment = comments.map((comment) => {
            if (comment != null) {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {comment.date.slice(0,10)}</li>
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
        const selectedDish = this.props.selectedDish;
        return (
            this.renderDish(selectedDish)
        );
    }
}


export default DishDetail;