import { useState, useEffect } from "react";
import "./Home.css";
import Cards from "./Product/Cards.js";

function Home() {
    const [slideIndex, setSlideIndex] = useState(1);
    
    const images = [
        "/images/home1.jpg",
        "/images/home2.jpg",
        "/images/home3.jpg",
        "/images/home4.jpg",
        "/images/home5.jpg",
        "/images/home6.jpg",
    ];

    useEffect(() => {
        showDivs(slideIndex);
    }, [slideIndex]);

    function plusDivs(n) {
        let newIndex = slideIndex + n;
        if (newIndex > images.length) newIndex = 1;
        if (newIndex < 1) newIndex = images.length;
        setSlideIndex(newIndex);
    }

    function showDivs(n) {
        document.querySelectorAll(".home_image").forEach((img, i) => {
            img.style.display = i === n - 1 ? "block" : "none";
        });
    }
    
    return (
        <div className="home">
             <div className="home_container">
                {images.map((src, j) => (
                    <img
                    key={j}
                    className="home_image"
                    src={src}
                    alt={`home${j + 1}`}
                    style={{ display : j + 1 === slideIndex ? "block" : "none" }}
                    />
                ))}
                <button className="w3-button w3-display-left" onClick={() => plusDivs(-1)}>
                    &#10094;
                </button>
                <button className="w3-button w3-display-right" onClick={() => plusDivs(1)}>
                    &#10095;
                </button>
             </div>
             <div className = "content">       
                <div className="home_row">
                    <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                    <Cards title="Ant Esports MK 1700 Wired Membrane Gaming Keyboard –with Backlit RGB LED, USB-A Connection" img="./images/keyboard.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
            </div>
            <div className = "content">       
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
            </div>
            <div className = "content">       
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
                <div className="home_row">
                <Cards title="Noise Master Buds, Sound by Bose in-Ear Bluetooth Earbuds, Up to 49dB Adaptive ANC, LHDC 5.0" img="./images/noise.jpg" />
                </div>
            </div>
        </div>
    );
}

export default Home;