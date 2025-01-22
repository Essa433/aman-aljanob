import "./Products.css";

const data = [
    {
        img: "/camira.jpeg", // Replace with your image path
        title: "كاميرات امنية",
    },
    {
        img: "/interc.png", // Replace with your image path
        title: "انتركم",
    },
    {
        img: "/Itfaa-r.png",
        title: "السلامة والاطفاء",
    }
];

function ProductCard({ title, img }) {
    return (
        <div className="service-card">
            <img src={img} alt={title} className="service-icon" />
            <h2>{title}</h2>
        </div>
    );
}

function ProductLanding() {
    return (
        <div className="services-cards">
            <h1>المنتجات</h1>
            <div className="services">
                {data.map((item, index) => {
                    return <ProductCard key={index} title={item.title} img={item.img} />;
                })}
            </div>
            <div>
                <a href="/Services" className="btn">المزيد</a>
            </div>
        </div>
    );
}

export default ProductLanding;