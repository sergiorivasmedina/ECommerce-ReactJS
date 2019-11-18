import React from 'react';

class SearchBarMenu extends React.Component {
    constructor(){
        super();
        this.state={
            search:''
        }
    }

    updateSearch(event){
        this.setState({
          search: event.target.value.substr(0,20)
        });
        this.props.updateSearch(event.target.value);
    }

    render() {
        return (
            <form action="#" className="search-form" >
                <div className="form-group">
                <span className="icon ion-ios-search"></span>
                <input  margin-top="15px !important"  type="text" className="form-control-2 form-control" placeholder="¿Que producto necesitas?" 
                value={this.props.search} onChange={this.updateSearch.bind(this)}></input>
                </div>
            </form>
        );
    }
}

export default SearchBarMenu;