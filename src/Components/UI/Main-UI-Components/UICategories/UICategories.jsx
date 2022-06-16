import React, {useState, useEffect} from 'react';
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from '../../../Helpers/Auth';
import Skeleton from '@mui/material/Skeleton';
import { UIButtons } from "../UIButtons/UIButtons.jsx";
import { NavLink } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const UICategories = ({
    uidProductCategory,
    typeProductCategory,
    imgProductCategory,
    categoryProduct,
    nameProductCategory,
    conditionProductCategory,
    descriptionProductCategory,
    availabilityProductCategory,
    dateProductCategory,
    cityProductCategory
}) => {
    const [open, setOpen] = React.useState(false);
    const [isloading, setIsLoading] = React.useState(false);
const UserInSesion = Auth();

const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};


const [categories, setCategories] = useState([]);

const categoriesProduct = async () => {
    await fetch(
        `https://fullmarket-provitional-backend.herokuapp.com/products/productsbycategory/Accesorio`
        )
        .then((res) => res.json())
        .then((data) => setCategories(data));
    };
    console.log("CATEGORIES", categories);
    
    useEffect(() => {
        categoriesProduct()
    }, []);

return (
    <>
    <div className='container-card'>
        <div className="header-Card">
            <div className="iconInfo">
                {isloading ? (
                <BsFillInfoCircleFill onClick={handleOpen} />
                )  
                : 
                <Skeleton
                variant="circular"
                animation="wave"
                width={25}
                height={25}
                />}
            </div>
            {isloading ? (
            <h1>{typeProductCategory}</h1>
            ) 
            : 
            <Skeleton
            animation="wave"
            width={120}
            height={50}
            />}
        </div>
        <div className="body-Card">
            <div className="img-Card">
                {isloading ? (
                <img
                    src={imgProductCategory}
                    className="img-Card"
                    alt={nameProductCategory}
                ></img>
                ) 
                : 
                <Skeleton
                variant="rectangle"
                animation="wave"
                width={130}
                height={110}
                />}
            </div>
            {isloading ? (
            <h2>{nameProductCategory}</h2>
            ) 
            :   
            <Skeleton
            animation="wave"
            width={150}
            height={35}
            />}
            {isloading ? (
            <p>Estado: {conditionProductCategory}</p>
            ) 
            :
            <Skeleton
            animation="wave"
            width={150}
            height={35}
            />}
            {UserInSesion ? ( 
            <div className="apply-Product">
                <UIButtons
                    classButtons="btn-Apply"
                    nameButtons="Aplicar"
                    // onClick={sendNotification}
                ></UIButtons>
            </div>
            ) : (
            <div className="apply-Product">
                <NavLink to="/LogIn" className="">
                    <UIButtons
                    classButtons="btn-Apply"
                    nameButtons="Aplicar"
                    ></UIButtons>
                </NavLink>
            </div>
            )}
        </div>
        {/* <div className="modal-window-products">
            <Modal open={open} onClose={handleClose}>
                {body}
            </Modal>
        </div> */}
    </div>
    </>
)
}
