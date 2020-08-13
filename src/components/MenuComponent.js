/* Method to create component on react */
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, 
    CardHeader} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderComments(dish) {
        console.log(dish);
        if(dish != null) {
        const dishComments = dish.comments.map((info) => {
            const newDate = info.date.slice(0,10);
            return (
                <CardText>{info.comment}<br></br>
                -- {info.author}, {newDate}</CardText>              
            );
        });
        return (
            <Card>
                <CardBody>
                    <CardHeader><h4>Comments</h4></CardHeader>
                    {dishComments}
                </CardBody>
            </Card>
        );
        } else {
            return(
                <div></div>
            )
        }
}

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
            }
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 mt-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Menu;