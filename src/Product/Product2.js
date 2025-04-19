import "./Product.css";
function Product(){
    return (
        <div className="container">
            <div className="product">
                <div className ="Info">
                    <p>Revamp your home in style  <a href="./Pagenotfound.html" target="_blank"> Explore all</a></p>
                </div>
                <div className ="content">
                <div className="product_info">
                    <img src="./images/Product2image1.jpg" alt="Cushion covers,bedsheets & more" /> 
                    <p>Cushion covers,bedsheets & more</p>
                </div>
                <div className="product_info">
                    <img src="./images/Product2image2.jpg" alt="Figurines, vases & more"/> 
                    <p>Figurines, vases & more</p>
                </div>
                
                </div>
            </div>
           
        </div>
    );
}

export default Product;