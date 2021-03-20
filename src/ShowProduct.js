import React, {useEffect, useState} from 'react';

const ShowProduct = ({match}) => {

    useEffect(() => {
        printSingleItem();
        console.log(match);
    }, []);

    const [item, setItem] = useState({});

    const printSingleItem = async () => {
        const url = `https://eshopsmart.herokuapp.com/api/item/${match.params.id}`;

        try {
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const data = await response.json();
            const item = data.item;
            console.log(item);
            setItem(item);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div>
                <h3>Prekė kazkokia</h3>
            </div>
            <div key={item.id}>
                <h1 className="text-dark">{item.title}</h1>
                <h1>{item.description}</h1>
            </div>

        </>
    );
};

export default ShowProduct;