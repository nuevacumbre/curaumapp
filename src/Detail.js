import React from 'react'
//import { useParams } from 'react-router-dom'
//import {Link, BrowserRouter, Route, Switch} from 'react-router-dom';
//import Detail from "./Detail";

//this.viewFood = this.viewFood.bind(this);
//this.closeFood = this.closeFood.bind(this);


/*<BrowserRouter>
<Switch>
<Route path='/detail/:id'>
    <Detail><Link to={'/detail/${detail.id}'}>{Detail.content}</Link></Detail>
</Route>
</Switch>
</BrowserRouter>
    viewFood(){
        this.setState({newItemPreview: true});
    }

    closeFood(e){
        this.setState({newItemPreview: false});
    }
*/

export const Detail = ({ detail }) => {
    //const { id } = useParams()
    //const note = detail.find(note => note.id === id );
    if (!note) return null 
    console.log(note);
    return (
        <div>
            <h2>{note.content}6:03</h2>
        </div>
    )
}

export default Detail
