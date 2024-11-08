import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import './App.css';

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root')).user
  ).currentUser.isAdmin;
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     {admin && (
    //       <>
    //         <Topbar />
    //         <div className="container">
    //           <Sidebar />
    //           <Route path="/" element={<Home />} />
    //           <Route path="/users" element={<UserList />} />
    //           <Route path="/user/:userId" element={<User />} />
    //           <Route path="/newUser" element={<NewUser />} />
    //           <Route path="/products" element={<ProductList />} />
    //           <Route path="/product/:productId" element={<Product />} />
    //           <Route path="/newProduct" element={<NewProduct />} />
    //         </div>
    //       </>
    //     )}
    //   </Routes>
    // </Router>
    <Router>
      {admin && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}
      {!admin && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;

// import Sidebar from './components/sidebar/Sidebar';
// import Topbar from './components/topbar/Topbar';
// import Home from './pages/home/Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import UserList from './pages/userList/UserList';
// import User from './pages/user/User';
// import NewUser from './pages/newUser/NewUser';
// import ProductList from './pages/productList/ProductList';
// import Product from './pages/product/Product';
// import NewProduct from './pages/newProduct/NewProduct';
// import Login from './pages/login/Login';
// import './App.css';

// function App() {
//   const admin = JSON.parse(
//     JSON.parse(localStorage.getItem('persist:root')).user
//   ).currentUser.isAdmin;

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {admin && (
//           <>
//             <Route
//               path="*"
//               element={
//                 <>
//                   <Topbar />
//                   <div className="container">
//                     <Sidebar />
//                     <Routes>
//                       <Route path="/" element={<Home />} />
//                       <Route path="/users" element={<UserList />} />
//                       <Route path="/user/:userId" element={<User />} />
//                       <Route path="/newUser" element={<NewUser />} />
//                       <Route path="/products" element={<ProductList />} />
//                       <Route path="/product/:productId" element={<Product />} />
//                       <Route path="/newProduct" element={<NewProduct />} />
//                     </Routes>
//                   </div>
//                 </>
//               }
//             />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
