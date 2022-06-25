import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Components/Page/Main-Page/MainPage';
import { PageHomeRegister } from './Components/Page/Register-Page/PageHomeRegister';
import { LogInPage } from './Components/Page/LogIn-Page/LogInPage';
import { AddProductPage } from './Components/Page/AddProduct-Page/AddProductPage';
import { MyProductsPage } from "./Components/Page/MyProducts-Page/MyProductsPage";
import { DataUserPage } from "./Components/Page/DataUser-Page/DataUserPage";
import { EditUserPage } from "./Components/Page/EditUser-Page/EditUserPage";
import { NavBar } from "./Components/Layout/NavBar/NavBar";
import { EditProductsPage } from "./Components/Page/EditMyProducts-Page/EditProductsPage";
import {Footer} from "./Components/Layout/Footer/Footer.jsx"
import { SeeProfileUserPage } from "./Components/Page/SeeProfileUser-Page/SeeProfileUser";
import { PrivateChatRoom } from "./Components/UI/Chat-UI-Components/PrivateChatRoom"
import { SeeChatUser } from "./Components/UI/SeeChatUser-UI-Component/SeeChatUser";
import { PrivateChatRoomReceiver } from "./Components/UI/Chat-UI-Components/PrivateChatRoomReceiver";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={ <MainPage />  } />
        <Route path="/UserRegister" element={ <PageHomeRegister /> } />
        <Route path="/LogIn" element= { <LogInPage /> } />
        <Route path="/LoggedUser/AddProduct" element= { <AddProductPage/> } />
        <Route path="LoggedUser/MyProducts/EditProduct" element= {<EditProductsPage/>} />
        <Route path="/LoggedUser/MyProducts" element= { <MyProductsPage/> } />
        <Route path="/LoggedUser/DataUser" element= { <DataUserPage/> } />
        <Route path="/LoggedUser/EditUser" element= { <EditUserPage/> } />
        <Route path="/LoggedUser/PrivateChat" element= { <PrivateChatRoom /> } />
        <Route path="/LoggedUser/PrivateChat/Receiver" element= { <PrivateChatRoomReceiver /> } />
        <Route path="/LoggedUser/PrivateInformation/ChatHistory" element= { <SeeChatUser /> } /> 
        <Route path="/LoggedUser/NotificationReview/ProfileUser" element= { <SeeProfileUserPage /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
