import "./Product.css";
function Product(){
    return (
        <div className="container">
            <div className="product">
                <div className ="Info">
                    <p>Starting ₹149 | Headphones <a href="./Pagenotfound.html" target="_blank"> See all offers</a></p>
                </div>
                <div className ="content">
                <div className="product_info">
                    <img src="./images/Product4image1.jpg" alt="Boat" /> 
                    <p>Starting @249|boAt</p>
                </div>
                <div className="product_info">
                    <img src="./images/Product4image3.jpg" alt="Noise" />
                    <p>Starting @649|Noise</p> 
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Product;