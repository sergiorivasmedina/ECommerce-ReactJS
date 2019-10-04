import React from 'react';

class Product extends React.Component {
  render() {
    let status;
    let pricing;

    if (this.props.discount == "0") {

      pricing = <p className="price"><span>${this.props.price}</span></p>;
    }
    else {
      var discountPrice = (100 - parseFloat(this.props.discount)) * parseFloat(this.props.price) / 100;
      discountPrice = discountPrice.toString();
      status = <span className="status">{this.props.discount}%</span>;
      pricing = <p className="price"><span className="mr-2 price-dc">${this.props.price}</span><span className="price-sale">${discountPrice}</span></p>;
    }


    return (
      <div className="col-md-6 col-lg-3 ">
        <div className="product">
          <a href="#" className="img-prod"><img className="img-fluid" src={this.props.imageUrl} alt="Colorlib Template" />
            {status}
            <div className="overlay"></div>
          </a>
          <div className="text py-3 pb-4 px-3 text-center">
            <h3><a href="#">{this.props.name}</a></h3>
            <div className="d-flex">
              <div className="pricing">
                {pricing}
              </div>
            </div>
            <div className="bottom-area d-flex px-3">
              <div className="m-auto d-flex">
                <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                  <span><i className="ion-ios-menu"></i></span>
                </a>
                <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                  <span><i className="ion-ios-cart"></i></span>
                </a>
                <a href="#" className="heart d-flex justify-content-center align-items-center ">
                  <span><i className="ion-ios-heart"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Product;