import {useState, useEffect}from 'react';
import { UIMyProducts } from '../../UI/MyProducts-UI-Components/UIMyProducts';

export const LayoutMyProducts=()=> {
  const [products, setProducts] = useState([]);
  const uidUsers = localStorage.getItem('uiduser')
  const URL = `https://fullmarket-provitional-backend.herokuapp.com/getmyproducts/${uidUsers}`
  
  
  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    mostrar();
  }, []);

  return (
    <main className="main-products">
      {products.map((element) => (
        <UIMyProducts
          key={element.name + 1}
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
  );
};
