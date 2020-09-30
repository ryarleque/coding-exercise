import React from 'react';
import NumberFormat from 'react-number-format';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './ProductTableView.css';

const ProductTableView = props => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="product table view">
                <TableHead>
                    <TableRow>
                        <TableCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
                        <TableCell align="left">Address</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Montly Rent</TableCell>
                        <TableCell align="left">Gross Yield</TableCell>
                        <TableCell align="left">Year Built</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.products.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                <a href={'/product/'+ item.id}>
                                    {
                                        item.mainImageUrl ? <img src={item.mainImageUrl} alt="image" height="40" width="40" className="product__image"/>
                                            : <img src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found-300x225.jpg" className="product__image" alt="errorImage" height="40" width="40" />
                                    }
                                </a>
                            </TableCell>
                            <TableCell align="left" className="product__text">
                                <div className="product__title"><a href={'/product/'+ item.id}>{item.address.address1}</a></div>
                                <br/>
                                <div className="product__subtitle"> {item.address.city},  {item.address.state} {item.address.zip}</div>
                            </TableCell>
                            <TableCell align="left" className="product__text">
                                {item.financial ? <div> <NumberFormat value={item.financial.listPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} /> </div> : <div>Not available</div>}
                            </TableCell>
                            <TableCell align="left" className="product__text">
                                {item.financial ? <div> <NumberFormat value={item.financial.monthlyRent} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />  </div> : <div> Not available </div>}
                            </TableCell>
                            <TableCell align="left" className="product__text">
                                {item.financial ? <div> <NumberFormat value={(item.financial.monthlyRent * 12 / item.financial.listPrice) * 100} displayType={'text'} thousandSeparator={true} suffix={'%'} decimalScale={2} fixedDecimalScale={true} /> </div> : <div> Not available </div>}
                            </TableCell>
                            <TableCell align="left" className="product__text">
                                {item.physical ? <div> {item.physical.yearBuilt} </div> : <div> Not available </div>}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductTableView;