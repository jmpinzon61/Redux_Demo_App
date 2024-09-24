import { useDispatch, useSelector } from "react-redux"
import { removeProductFromCart } from "../../reducers/card/cartSlice"
import { RootState } from "../store";

export const Cart = () => {
    const dispatch = useDispatch();
    const { productList } = useSelector((state: RootState) => state.cart);

    const handleRemoveProduct = (productId: number) => dispatch(removeProductFromCart(productId));

    return (
        <>
            <h2>Cart</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" className="text-center fs-5">Id</th>
                            <th scope="col" className="text-center fs-5">Name</th>
                            <th scope="col" className="text-center fs-5">Price</th>
                            <th scope="col" className="text-center fs-5">Category</th>
                            <th scope="col" className="text-center fs-5">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map(product => {
                            return (
                                <tr key={product.id}>
                                    <th scope="row" className="text-center fst-italic">{product.id}</th>
                                    <td scope="row" className="text-center fst-italic">{product.name}</td>
                                    <td scope="row" className="text-center fst-italic">{product.price}</td>
                                    <td scope="row" className="text-center fst-italic">{product.category}</td>
                                    <td scope="row" className="text-center fst-italic"><div className="d-grid gap-2 d-md-flex justify-content-md-center"><button className="btn btn-outline-danger btn-sm md-2 fst-italic" onClick={() => handleRemoveProduct(product.id)}>Delete</button></div></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}