import Axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../reducers/user/userSlice";

interface User {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}


export const Index = () => {
    const emailField = useRef<HTMLInputElement>(null);
    const passwordField = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await Axios.get<User[]>("http://localhost:3000/users")
            const users = response.data;
            const userTolog = users.find(user => user.email === emailField.current?.value);

            if (userTolog) {
                if (userTolog.password === passwordField.current?.value) {
                    console.log("Credenciales válidas");
                    dispatch(setUser({
                        email: userTolog.email,
                        fullName: `${userTolog.first_name} ${userTolog.last_name}`,
                        token: Date.now(),// genera un token basado en el tiempo en que transcurrio desde la epoca Unix como valor aleatorio
                    }))
                    navigate("/home");
                }
            }
        } catch (error) {
            console.log("Error al encontrar usuario", error);
        }

    }

    return (
        <div className="row justify-content-center">
            <div className="col-6">
                <h2 className="mb-4">Login Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" ref={emailField} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" ref={passwordField} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}





