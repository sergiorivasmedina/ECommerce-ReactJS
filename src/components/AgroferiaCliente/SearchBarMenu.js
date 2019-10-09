import React from 'react';

class SearchBarMenu extends React.Component {
    constructor(){
        super();
        this.state={
          value:''
        }
    }
    render() {
        return (
            <form action="#" className="search-form" >
                <div className="form-group">
                <span className="icon ion-ios-search"></span>
                <input margin-top="15px !important" type="text" className="form-control-2 form-control" placeholder="¿Que producto necesitas?"></input>
                </div>
            </form>
        );
    }
}

export default SearchBarMenu;