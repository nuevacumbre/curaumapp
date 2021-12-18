import React from "react";

//function Search(props){
class Search extends React.Component{

    constructor(props){
        super(props);
        
        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        //this.props.onsearch(e.target.value);
        this.props.onsearch(query);
    }

    render(){
    return(
        <input type="text" onChange={this.onChangeEvent}/>
    );
}
}

export default Search;