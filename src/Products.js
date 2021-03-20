import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Products = () => {
    const [items, setItems] = useState([]);

    const printItems = async () => {
        const url = 'https://eshopsmart.herokuapp.com/api/items';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);
        setItems(data.items);
    }

    useEffect(() => {
        printItems();
    }, []);

    const imgUrl = 'https://eshopsmart.herokuapp.com/images/'
    return (
        <div className='container'>
            {items.map((item) => (
                <div key={item.id} style={{width: "180px"}}>
                    <img style={{width: "170px"}}
                         src={imgUrl + item.img[0]}/>
                    <div>
                        {/*<Link to={`/products/${item.id}`}>{item.title}</Link>*/}
                    </div>
                    <div>
                        {item.price} €
                    </div>
                    <div>
                        - {item.discount}%
                    </div>
                    <Link to={`/products/${item.id}`}>Peržiūrėti</Link>
                </div>
            ))}

        </div>
    );
};

export default Products;