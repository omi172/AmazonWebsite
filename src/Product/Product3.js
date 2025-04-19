import "./Product.css";
function Product(){
    return (
        <div className="container">
            <div className="product">
                <div className ="Info">
                    <p>Automotive essentials | Up to 60% off <a href="./Pagenotfound.html" target="_blank"> See more</a></p>
                </div>
                <div className ="content">
                <div className="product_info">
                    <img src="./images/Product3image1.jpg" alt="Cleaning Accessories" /> 
                    <p>Cleaning Accessories</p>
                </div>
                <div className="product_info">
                    <img src="./images/Product3image2.jpg" alt="Tyre & rim care"/> 
                    <p>Tyre & rim care</p>
                </div>
                
                </div>
                </div>
            </div>
    );
}

export default Product;