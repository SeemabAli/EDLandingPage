import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Steve Smith",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Kristen",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Ariana",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
        img: "https://picsum.photos/103/103",
    },
];

const Testimonial = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="py-14 mb-10 bg-[#D4E0ED]">
            <div className="container">
                {/* Header Section */}
                <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
                    <h1 className="uppercase font-semibold text-primary">
                        OUR TESTIMONIALS
                    </h1>
                    <p className="font-semibold text-3xl text-dark">
                        What Our Clients Say About Us
                    </p>
                </div>
                {/* Testimonial Cards Section */}
                <div>
                    <Slider {...setting}>
                        {TestimonialsData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                                        {/* Upper Section */}
                                        <div className="flex justify-start items-center gap-5">
                                            <img
                                                src={item.img}
                                                alt=""
                                                className="w-16 h-16 rounded-full"
                                            />
                                            <div>
                                                <p className="text-xl font-bold text-dark">
                                                    {item.name}
                                                </p>
                                                <p className="text-primary">{item.name}</p>
                                            </div>
                                        </div>
                                        {/* Bottom Section */}
                                        <div className="py-6 space-y-4">
                                            <p className="text-sm text-gray-600">{item.text}</p>
                                            <p className="text-secondary">⭐⭐⭐⭐⭐</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;