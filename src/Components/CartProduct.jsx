import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Context/StateProvider';

function CartProduct({ item }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);

    //removeFromBascket
    const removeFromBascket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: item.id
        })
    }
    return (
        <>
            <div className="cart-single-list">
                <div className="row align-items-center">
                    <div className="col-lg-1 col-md-1 col-12">
                        <Link to="/"><img src={item.image} alt="#" /></Link>
                    </div>
                    <div className="col-lg-2 col-md-3 col-12">
                        <h5 className="product-name"><Link
                            to="/"
                        >
                            {item.title}</Link></h5>
                        <p className="product-des">
                            <span><em>Type:</em> {item.category}</span>
                            <span><em>Color:</em> Black</span>
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <div className="count-input">
                            <select className="form-control">
                                <option value={item.quantity}>{item.quantity}</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{item.originalPrice.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{((item.originalPrice * item.quantity) - (item.price * item.quantity)).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                        <p>{(item.originalPrice * item.quantity).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            maximumFractionDigits: 2,
                        })}</p>
                    </div>
                    <div className="col-lg-1 col-md-2 col-12">
                        <button className="remove-item" onClick={removeFromBascket}><i className="lni lni-close"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProduct
