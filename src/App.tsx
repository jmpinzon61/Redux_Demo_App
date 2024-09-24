// import { useSelector, useDispatch } from "react-redux";
// import { setUser, unsetUser } from "./reducers/user/userSlice";
import { Index } from "./app/pages/index";
import { Cart } from "./app/pages/Cart";
import { Home } from "./app/pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
// interface UserState {
//   email: string;
//   fullName: string;
// }
// interface rootState {
//   user: UserState;
// }

export const App = () => {

  const { totalCount } = useSelector((state: RootState) => state.cart);

  // const dispatch = useDispatch();
  // const { email, fullName } = useSelector((state: rootState) => state.user);
  return (
    <div className="container">
      <div className="d-flex py-4">
        <Link className="btn btn-info mx-2" to={"/"}>Login</Link>
        <Link className="btn btn-info mx-2" to={"/home"}>Home</Link>
        <Link className="btn btn-info mx-2" to={"/cart"}>Cart</Link>
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to={"/cart"}>
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge reunded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">product in cart</span>
            </span>
          </Link>
        </div>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <h1>Hello Word</h1>
      <h2>{fullName}</h2>
      <p>This is a simple React app. El email en el store es: {email}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(setUser({
            email: "jp1563588@gmail.com",
            fullName: "Juan Script",
            token: "123456789"
          }))
        }}
      >Set User</button>

      <button
       className="btn btn-primary"
       onClick={ () => dispatch(unsetUser()) }
       >Unset User</button> */}
    </div>
  )
}

export default App;
