import "./Services.css";

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
        img: "/attend.png", // Replace with your image path
        title: "انظمة البصمة",
    },
    {
        img: "/Itfaa-r.png",
        title: "السلامة والاطفاء",
    },
    {
        img: "/attend.png", // Replace with your image path
        title: "انظمة السنترالات",
    },
    {
        img: "/attend.png", // Replace with your image path
        title: "تمديد الشبكات",
    },
    {
        img: "/attend.png", // Replace with your image path
        title: "انذار الحريق",
    },
    {
        img: "/attend.png", // Replace with your image path
        title: "شهادات نجاز الكاميرات",
    },
    {
        img: "/attend.png", // Replace with your image path
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

function Services() {
    return (
        <div className="services-cards">
            <h1>الخدمات</h1>
            <div className="services">
                {data.map((item, index) => {
                    return <ServiceCard key={index} title={item.title} img={item.img} />;
                })}
            </div>
        </div>
    );
}

export default Services;