import React from 'react';

class SearchBar extends React.Component {
    

    render() {
    let status;
    
    return (
        <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon ion-ios-search"></span>
                  <input type="text" className="form-control" placeholder="Buscar tienda..."></input>
                </div>
              </form>
    );
  }

}

export default SearchBar;