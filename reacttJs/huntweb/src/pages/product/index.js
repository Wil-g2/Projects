import React, {Component} from 'react'; 
import api from '../../services/api'; 
import {Link} from 'react-router-dom';

import './styles.css';

export default class Produts extends Component{
    constructor(props){
        super(props)
        this.state = {
            product: {}
        }
    }

    async componentDidMount(){
        const { id } = this.props.match.params; 

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data })
    } 
    render(){
        const { product } = this.state; 

        return (
            <div className="products">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>    
                <div>
                    <Link to={"/"} className="voltarbtn">Voltar</Link>
                </div>
            </div>
            
        );
    }
}
