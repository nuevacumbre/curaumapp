import React from "react";

//function PanelAdd(props){
class PanelAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: 1
        };
        //this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

   /* onCancel = (e) =>{
        console.log("paso");
        //this.props.onHide();
    }*/

    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    }

    onSubmit = (e) =>{ //
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        
        this.props.onadd({title: title, image: image, rating: rating});
        this.props.oncancel();
    }

render(){
return(
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form onSubmit={this.onSubmit}>
                <p>
                <label>Nombre del Plato</label><br />
                <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                </p>

                <p>
                <label>Nombre de imagen</label><br />
                <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                </p>
                
                <p>
                <label>Calificación</label><br />
                <select onChange={this.onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </p>
                
                <input type="submit" className="button btn-blue" value="Registrar" />
                <button onClick={this.props.oncancel} className="button btn-normal">Cancelar</button>        
                
                </form>
            </div>
        </div>
    );
}
}

export default PanelAdd;