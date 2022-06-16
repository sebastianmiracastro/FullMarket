import React, { useEffect, useState } from 'react'
import { UICardsProductsUser } from '../../UI/ProfileUser-UI-Component/UICardsProductsUser/UICardsProductsUser'
import '../../Styles/Main-Styles/MainStyle.css'

export const SeeProfileUser = () => {

    const gettempary = window.localStorage.getItem('tempary?')

    const urluser = `https://fullmarket-provitional-backend.herokuapp.com/products/getmyproducts/${gettempary}`

    const [products, setProducts] = useState([]);


    const mostrar = async () => {
        await fetch(urluser)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    };

    useEffect(() => {
        mostrar()
    })

  return (
    <main className="main-products">
        {products.map((element) => (
            <UICardsProductsUser
            key={element.uidProduct + 1}
            uidProduct = {element.uidProduct}
            typeProduct={element.type}
            imgProduct={element.imgProductURL}
            nameProduct={element.name}
            conditionProduct={element.condition}
            availabilityProduct={element.availability}
            dateProduct={element.date}
            descriptionProduct={element.description}
            cityProduct={element.city}
            />
        ))}
    </main>
  )
}
