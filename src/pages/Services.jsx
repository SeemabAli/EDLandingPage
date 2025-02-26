import { useState, useRef, useEffect } from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { GiPencilRuler } from "react-icons/gi";
import { MdCampaign } from "react-icons/md";
import { FaFileAlt, FaChalkboardTeacher, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Software Development",
    content: "We provide innovative digital solutions for the education sector through eBridgePK, a comprehensive platform designed to streamline school management. Our system offers seamless student enrollment, attendance tracking, and administrative automation, reducing workload and enhancing efficiency. From community-driven educational blogs to an integrated e-commerce section for stationery and a robust school management system, we ensure a smooth digital experience. Leveraging the latest technologies, including cloud computing and automation, we empower educators, students, and institutions with scalable, secure, and user-friendly solutions tailored to modern educational needs.",
    image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60",
    icon: RiComputerLine,
  },
  {
    id: 2,
    title: "Web Development",
    content: "Our web development services focus on delivering high-performance, user-friendly, and visually appealing websites for the education sector. We specialize in front-end and back-end development, ensuring that our platforms are fully responsive and optimized for all devices. Using modern technologies like React and Tailwind CSS, we build interactive and scalable solutions, including school management systems, educational blogging platforms, and e-commerce portals for stationery. Our expertise extends to API integration, real-time data synchronization, and cloud-based solutions, ensuring seamless functionality for educators, students, and administrators.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    icon: TbWorldWww,
  },
  {
    id: 3,
    title: "Mobile Development",
    content: "We develop high-quality mobile applications designed to enhance the education sector. Our apps provide seamless experiences for students, teachers, and administrators, ensuring real-time communication, attendance tracking, e-learning, and school management functionalities. We specialize in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) development, ensuring optimal performance across iOS and Android. Our solutions integrate secure payment gateways, cloud storage, and interactive UI components, making education more accessible and efficient. Whether you need a school app, an e-learning platform, or an educational community app, we turn ideas into powerful, user-friendly mobile solutions.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60",
    icon: CiMobile3,
  },
  {
    id: 4,
    title: "Order Stationery",
    content: "Our online stationery store offers a comprehensive range of educational and office supplies, making it easy for students, teachers, and professionals to find what they need. From notebooks, pens, and art supplies to school essentials and office equipment, we provide high-quality products at competitive prices. Our seamless e-commerce platform ensures smooth browsing, secure payments, and fast delivery. We also offer bulk ordering options for schools and businesses, ensuring cost-effective solutions and timely shipments. With exclusive deals, seasonal discounts, and top-notch customer support, we aim to make stationery shopping effortless and affordable for everyone.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60",
    icon: GiPencilRuler,
  },
  {
    id: 5,
    title: "Marketing",
    content: "We provide comprehensive digital marketing solutions to help educational institutions and businesses enhance their online presence. Our services include SEO optimization, social media marketing, content creation, targeted advertising, and email campaigns tailored to the education sector and e-commerce industry. We craft customized marketing strategies that align with your brand identity and audience, leveraging data-driven insights to maximize engagement and conversions. Whether you're an educational platform, a stationery store, or a service provider, our expertise ensures increased visibility, lead generation, and long-term growth in the digital landscape.",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60",
    icon: MdCampaign,
  },
  {
    id: 6,
    title: "Composing",
    content: "We provide professional composing services for students, educators, and businesses, ensuring high-quality document formatting and content structuring. Our expertise includes resumes, academic papers, business reports, legal documents, and official letters. We follow industry standards for formatting, ensuring precise alignment, font consistency, and readability. Additionally, we offer proofreading and editing services to enhance clarity and eliminate errors. Whether you need a well-structured thesis, a professional business proposal, or an official document, our team ensures that your content is polished, professional, and impactful.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60",
    icon: FaFileAlt,
  },
  {
    id: 7,
    title: "IT Consultancy",
    content: "Our IT consultancy services empower educational institutions and businesses to optimize their digital infrastructure and enhance operational efficiency. We offer expert guidance on IT strategy, cloud solutions, cybersecurity, network management, and software integration. Our team collaborates closely with clients to understand their unique requirements and recommend cost-effective, scalable solutions. We also assist with system upgrades, data migration, and IT training, ensuring seamless digital transformation. Whether you're a school, university, or enterprise, our consultancy services provide the technical expertise needed to streamline operations and drive success in the evolving digital landscape.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60",

    icon: FaChalkboardTeacher,
  },
];

const ServicesPage = () => {
  const sectionRefs = useRef({});
  const [activeService, setActiveService] = useState(services[0].id);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(Number(entry.target.id));
          }
        });
      },
      { threshold: 0.6 }
    );

    services.forEach(({ id }) => {
      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]);
      }
    });

    return () => {
      services.forEach(({ id }) => {
        if (sectionRefs.current[id]) {
          observer.unobserve(sectionRefs.current[id]);
        }
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get("id");
    if (serviceId) {
      scrollToSection(serviceId);
    }
  }, [location]);

  return (
    <section className="bg-white">
      <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-10 bg-white px-6 justify-center w-full max-w-[1200px] mx-auto lg:flex hidden">
        <div className="flex gap-4 bg-[#D4E0ED] p-2 pt-3 rounded-lg">
          {services.map(({ id, title, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 whitespace-nowrap 
              ${activeService === id ? "bg-[#3E6899] text-white shadow-md" : "bg-gray-200 text-dark hover:bg-[#7BB661] hover:text-white"}`}
            >
              <Icon className="text-lg" /> {title}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:mt-20 flex flex-col items-center justify-center">
        {services.map(({ id, title, content, image, price }) => (
          <motion.div
            key={id}
            id={id}
            ref={(el) => (sectionRefs.current[id] = el)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="py-4 lg:py-4 flex flex-col items-center justify-center text-center lg:flex-row-reverse lg:text-left max-w-5xl"
          >
            <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
              <img src={image} alt={title} className="w-full max-w-md h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto lg:mx-0">{content}</p>
              <div className="flex flex-col lg:flex-row gap-4 mt-4 items-center">
                <button
                  onClick={() => id === 4 ? navigate("/stationery") : navigate("/pricing")}
                  className="bg-[#3E6899] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#7BB661] transition-all flex items-center gap-2"
                >
                  <FaFileAlt /> Buy Now
                </button>

                <button
                  onClick={() => navigate("/contact")}  // 🔥 Navigates to the Contact page
                  className="bg-[#7BB661] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-[#3E6899] transition-all flex items-center gap-2"
                >
                  <FaComments /> Talk to Us
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;



