import React, { Component } from 'react'
import { getDefaultProducts } from '../../js/actions/index';
import { connect } from 'react-redux';
import { Carousel } from "react-responsive-carousel";
import Typography from '@material-ui/core/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
function mapDispatchToProps(dispatch) {
    return {
        getDefaultProducts: () => dispatch(getDefaultProducts()),
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

class ProductDetail extends Component {

    componentDidMount = (props) => {
        this.props.getDefaultProducts();
    }

    render() {
        let productId = parseInt(window.location.href.split('/').pop());
        let result = this.props.products.find(item => item.id === productId);
        return (
            <div>
                {result ?
                    <div className="product_detail">
                        <div className="product_detail__description">
                            <a href='/product'>
                                <FontAwesomeIcon icon={faChevronLeft}  className="product_detail__arrow"/>
                            </a>
                            <div>
                                <Typography variant="body1" component="p" className="product_detail__address1">
                                    {result.address.address1}
                                </Typography>

                                <Typography variant="subtitle1" component="h6" className="product_detail__address2">
                                    {result.address.city},  {result.address.state} {result.address.zip}
                                </Typography>
                            </div>
                        </div>
                        <div className="product_detail__carousel">
                            
                                {
                                    result.resources && result.resources.photos.length > 0 ?
                                        <Carousel>
                                            { result.resources.photos.map((image, index) => (
                                                <div key={image.id}>
                                                    <img alt="image" src={image.url} className="carousel__images" />
                                                    <p className="legend">
                                                        {result.physical ? <div> {result.physical.bedRooms} bd, {result.physical.bathRooms} ba | {result.physical.squareFeet} sqt | Built in {result.physical.yearBuilt}</div> : <div>Not available</div>}
                                                    </p>
                                                </div>
                                            ))}
                                        </Carousel> :
                                        <img src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found-300x225.jpg" alt="errorImage" className="carousel__images"/>
                                }
                            
                        </div>
                    </div>
                    : 'Verify the product id, thanks'}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
