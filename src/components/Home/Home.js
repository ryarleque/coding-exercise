import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDefaultProducts } from '../../js/actions/index';
import ProductGridView from '../ProductGridView/ProductGridView';
import ProductTableView from '../ProductTableView/ProductTableView';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.itemTofind = React.createRef();
        this.state = {
            visibleOption: 'grid'
        };
        this.updateVisibleOption = this.updateVisibleOption.bind(this);
    }

    updateVisibleOption(event, newVisibleOption) {
        this.setState({
            visibleOption: newVisibleOption
        });
    }

    componentDidMount = (props) => {
        this.props.getDefaultProducts();
    }

    render() {
        return (
            <Container maxWidth="lg">
                <div className="options">
                    <Typography variant="body2" component="div" className="options__title">
                        PROPERTIES
                    </Typography>
                    <ToggleButtonGroup
                        value={this.state.visibleOption}
                        exclusive
                        onChange={this.updateVisibleOption}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="grid" aria-label="centered">
                            <FontAwesomeIcon icon={faThLarge} />
                        </ToggleButton>
                        <ToggleButton value="table" aria-label="centered">
                            <FontAwesomeIcon icon={faBars} />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {
                    this.state.visibleOption === 'grid' 
                        ? <ProductGridView products={this.props.products}/> 
                        : <ProductTableView products={this.props.products}/> 
                }
            </Container>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);