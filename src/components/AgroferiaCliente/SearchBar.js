import React from 'react';

class SearchBar extends React.Component {
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
        <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon ion-ios-search"></span>
                  <input type="text" className="form-control" placeholder="Buscar tienda..." 
                  value={this.props.search} onChange={this.updateSearch.bind(this)}></input>
                </div>
              </form>
    );
  }

}

export default SearchBar;