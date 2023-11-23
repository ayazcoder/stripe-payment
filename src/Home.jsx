import React, { useState } from 'react'

export const Home = () => {
    const itemName = "FIREIMG";
    const itemPrice = 500;
    const [quantity, setQuantity] = useState(1)
    const [finalAmount, setFinalAmount] = useState(itemPrice)
    const decrement = () => {
        if (quantity <= 1) {
            setQuantity(1)
            setFinalAmount(itemPrice)
        } else if (quantity > 1) {
            setQuantity(quantity - 1)
            setFinalAmount(finalAmount - itemPrice)
        }
    }
    const increment = () => {
        setQuantity(quantity + 1)
        setFinalAmount(finalAmount + itemPrice)
    }
    const checkout = async () => {
        try {
            const res = await fetch("http://localhost:8000/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    items: [
                        {
                            id: 1,
                            quantity: quantity,
                            price: itemPrice,
                            name: itemName
                        }
                    ]
                })
            })
            const data = await res.json();
            window.location = data.url
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>Item quantity :{quantity}</p>
                <p>Item name :{itemName}</p>
                <p>Item price :{itemPrice}</p>
                <p>Item final Amount :{finalAmount}</p>


                <button onClick={checkout}>Checkout</button>
            </div>
        </div>
    )
}
