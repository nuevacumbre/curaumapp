import React from "react";
import './Item.css';


//function Item(props){
class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            stars: []
        };

        this.onRemove = this.onRemove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    onChangeRating = e =>{
        const rating = parseInt(e.target.value);
        console.log("El rating actual es "+rating);

        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(0)
        });

        this.props.onupdaterating({id: this.state.id, title: this.state.title, image: this.state.image, rating: this.state.rating});
    }


    onRemove = e =>{
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    //react router

    render(){
    var i = 0;
    return(
        <div className="item">
            <div className="image"><img src={'img/' + this.state.image} width="100%" alt="plato" /></div>
            <div className="title">{this.state.title}</div>
             <div className="rating">
                <p>
                     {
                         this.state.stars.map(x =>
                            //i++;
                            <img key={i++} src="img/star.png" width="32" alt="rating" />
                        )
                     }
                </p>
                Calificación:&nbsp;&nbsp; 
                <select value={this.state.rating} onChange={this.onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="actions">
                     <button onClick={this.onRemove}>Eliminar</button>
            </div>
        </div>
    );
    }
}

export default Item;