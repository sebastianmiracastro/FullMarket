import {useState, useEffect}from 'react';
import { UIMyProducts } from '../../UI/MyProducts-UI-Components/UIMyProducts/UIMyProducts';
import { useNavigate } from 'react-router-dom';

export const LayoutMyProducts=()=> {
  const [products, setProducts] = useState([]);
  const uidUsers = localStorage.getItem('uiduser')
  const URL = `https://fullmarket-provitional-backend.herokuapp.com/products/getmyproducts/${uidUsers}`

  let navigate = useNavigate();
  
  const mostrar = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    mostrar();
  }, []);

  useEffect(() => {
    if(!window.localStorage.getItem('uiduser')){
      navigate("/") 
    }
  }, []);

  return (
    <main className="main-myProducts">
      {products.map((element) => (
        <UIMyProducts
          key={element.name + 1}
          typeProductMyProduct={element.type}
          imgProductMyProduct={element.imgProductURL}
          nameProductMyProduct={element.name}
          conditionProductMyProduct={element.condition}
          availabilityProductMyProduct={element.availability}
          dateProductMyProduct={element.date}
          descriptionProductMyProduct={element.description}
          cityProductMyProduct={element.city}
        />
      ))}
    </main>
  );
};
