import { useSelector, useDispatch } from "react-redux";
import { setUser, unsetUser } from "./reducers/user/userSlice";

interface UserState {
  email: string;
  fullName: string;
}
interface rootState {
  user: UserState;
}

export const App = () => {

  const dispatch = useDispatch();
  const { email, fullName } = useSelector((state: rootState) => state.user);

  return (
    <div className="container">
      <h1>Hello Word</h1>
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
       >Unset User</button>
    </div>
  )
}

export default App;
