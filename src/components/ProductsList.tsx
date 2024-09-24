import { RootState } from "../app/store"
import { addProductToCart, Product, removeProductFromCart} from "../reducers/card/cartSlice"
import { useDispatch, useSelector } from "react-redux"

interface Productslist {
    products: Product[];
}

export const ProductsList: React.FC<Productslist>= ({ products }) => {

    const dispatch = useDispatch();
    const { productList } = useSelector((state:RootState) => state.cart);

    const handleAddOrRemoveProduct = (productId: number) => {
        const product = products.find(product => product.id === productId);
        if (productList.find((pdt: Product) => pdt.id === productId)) {
            dispatch(removeProductFromCart(productId));
        } else {
            dispatch(addProductToCart(product));
        }
    }

    return (
        <>
        <h2>Listado de productos</h2>
            <div className="row">
                {
                    products.map(product => {
                        return (
                            <div key={product.id} className="col-3 mt-3">
                                <h4>{product.name}</h4>
                                <p><b>Price</b>{product.price}</p>
                                <p><b>Catergory</b>{product.category}</p>
                                <button 
                                className={`btn ${productList.find((pdt: Product) => pdt.id === product.id) ? "btn-danger": "btn-success"}`}
                                onClick={() => handleAddOrRemoveProduct(product.id)}
                                >
                                    {productList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

