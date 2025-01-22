import "./Products.css";

const data = [
    {
        
            img: "/cam-en.png", // Replace with your image path
            title: "شهادات انجاز بعد تركيب الكاميرات",
        },
        {
            img: "/cam-en.png", // Replace with your image path
            title: "عقود صيانة للكاميرات وانظمة الاطفاء",
        }
];

function ServiceCard({ title, img }) {
    return (
        <div className="service-card">
            <img src={img} alt={title} className="service-icon" />
            <h2>{title}</h2>
        </div>
    );
}

function ServiceLanding() {
    return (
        <div className="services-cards">
            <h1>خدماتنا </h1>
            <div className="services">
                {data.map((item, index) => {
                    return <ServiceCard key={index} title={item.title} img={item.img} />;
                })}
            </div>
            <div>
                <a href="/Services" className="btn">المزيد</a>
            </div>
        </div>
    );
}

export default ServiceLanding;