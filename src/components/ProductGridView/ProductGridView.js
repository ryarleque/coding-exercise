import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import NumberFormat from 'react-number-format';
import './ProductGridView.css';

const ProductGridView = props => {
    return (
        <Grid container spacing={2}>
            {props.products.map((item, index) => (
                <Grid key={index} xs={12} sm={6} md={4} lg={3} item className="card">
                    <Paper elevation={1} square={false} className="card__container">
                        <a href={'/product/'+ item.id} className="card__selectable">
                            {
                                item.mainImageUrl ? <img src={item.mainImageUrl} onError="" alt="image" height="186" width="273" />
                                    : <img src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found-300x225.jpg" alt="errorImage" height="186" width="273" />
                            }
                            <div className="card__title">
                                {item.financial ? <div className="card__price"> <NumberFormat value={item.financial.listPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /> </div> : <div className="card__price">Not available</div>}
                                {item.physical ? <div> {item.physical.bedRooms} bd, {item.physical.bathRooms} ba | {item.physical.squareFeet} sqt | Built in {item.physical.yearBuilt}</div> : <div>Not available</div>}
                            </div>
                        </a>
                        <div className="card__description">
                            <div className="card__description__top-section">
                                <div className="card__description__rent">
                                    <div>Montly Rent</div>
                                    {item.financial ? <div className="card__description__title"> <NumberFormat value={item.financial.monthlyRent} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />  </div> : <div> Not available </div>}
                                </div>
                                <div className="card__description__yield">
                                    <div>Gross Yield</div>
                                    {item.financial ? <div className="card__description__title"> <NumberFormat value={(item.financial.monthlyRent * 12 / item.financial.listPrice) * 100} displayType={'text'} thousandSeparator={true} suffix={'%'} decimalScale={2} fixedDecimalScale={true} /> </div> : <div> Not available </div>}
                                </div>
                            </div>
                            <div className="card__description__bottom-section">
                                <div>{item.address.address1}</div>
                                <div> {item.address.city},  {item.address.state} {item.address.zip}</div>
                            </div>
                        </div>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGridView;