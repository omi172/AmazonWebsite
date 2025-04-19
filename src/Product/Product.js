import "./Product.css";
function Product(){
    return (
        <div className="container">
            <div className="product">
                <div className ="Info">
                    <p>Appliances for your home | Up to 55% off <a href="./Pagenotfound.html" target="_blank"> See more </a></p>
                </div>
                <div className ="content">
                <div className="product_info">
                    <img src="./images/Product1image1.jpg" alt="AirConditioner" /> 
                    <p>Air Conditioner</p>
                </div>
                <div className="product_info">
                    <img src="./images/Product1image2.jpg" alt="Refrigerators"/> 
                    <p>Refrigerators</p>
                </div>
                
                </div>
                </div>
            </div>
    );
}

export default Product;