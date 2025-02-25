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
    content: "We provide cutting-edge software development solutions tailored to meet the specific needs of businesses. Our team specializes in creating custom software applications, enterprise solutions, and cloud-based platforms. From requirement gathering to deployment and maintenance, we ensure a smooth and efficient software development cycle. Our developers work with the latest technologies, including AI, machine learning, and blockchain, to enhance productivity and security. Whether you need a CRM system, a project management tool, or automation software, we have the expertise to deliver robust and scalable solutions that align with your business goals.",
    image: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60",
    icon: RiComputerLine,
    price: "$399 - $1799",
  },
  {
    id: 2,
    title: "Web Development",
    content: "Our web development services focus on creating visually appealing, user-friendly, and high-performance websites. We specialize in both front-end and back-end development, ensuring that your website is fully responsive and optimized for all devices. Our developers use the latest frameworks, such as React, Angular, and Vue.js, to build interactive user interfaces. We also integrate e-commerce functionalities, CMS platforms, and API solutions. Whether you need a corporate website, an online store, or a custom web application, our team is equipped to bring your vision to life with modern design and seamless functionality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60",
    icon: TbWorldWww,
    price: "$399 - $1799",
  },
  {
    id: 3,
    title: "Mobile Development",
    content: "We design and develop high-quality mobile applications that run smoothly on both iOS and Android platforms. Our team follows best practices in mobile app development, ensuring a seamless user experience and robust performance. From native development with Swift and Kotlin to cross-platform solutions with Flutter and React Native, we tailor our approach based on your business needs. We focus on creating intuitive user interfaces, implementing secure payment gateways, and optimizing app performance. Whether you need an e-commerce app, a booking platform, or a social networking app, we turn your ideas into reality with state-of-the-art mobile solutions.",
    image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60",
    icon: CiMobile3,
    price: "$399 - $1799",
  },
  {
    id: 4,
    title: "Order Stationery",
    content: "Our online stationery store offers a wide range of educational and office supplies. From notebooks, pens, and art supplies to office essentials like printers and paper, we provide high-quality products at competitive prices. Our platform is designed for seamless browsing and ordering, making it easy for students, teachers, and professionals to find what they need. We also offer bulk ordering options for schools and businesses, ensuring timely delivery and excellent customer service. Our goal is to make stationery shopping convenient and affordable for everyone, with regular discounts and special deals on essential items.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60",
    icon: GiPencilRuler,
    price: "$399 - $1799",
  },
  {
    id: 5,
    title: "Marketing",
    content: "We provide comprehensive digital marketing services to help businesses grow their online presence. Our strategies include SEO optimization, social media marketing, content creation, pay-per-click advertising, and email marketing campaigns. Our team works closely with clients to develop customized marketing plans that align with their brand identity and target audience. We use advanced analytics and data-driven insights to measure campaign performance and optimize strategies for maximum ROI. Whether you're a startup looking to build brand awareness or an established company aiming to increase conversions, our marketing solutions ensure long-term success.",
    image: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=500&auto=format&fit=crop&q=60",
    icon: MdCampaign,
    price: "$399 - $1799",
  },
  {
    id: 6,
    title: "Composing",
    content: "Our professional composing services cater to individuals and businesses that require high-quality document formatting and content structuring. We specialize in composing resumes, business reports, academic papers, legal documents, and official letters. Our team ensures that all documents are formatted according to industry standards, with precise alignment, font styles, and spacing. We also offer proofreading and editing services to enhance readability and eliminate errors. Whether you need a well-structured business proposal or an academic thesis, our experts are here to help you create professional and polished documents.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60",
    icon: FaFileAlt,
    price: "$399 - $1799",
  },
  {
    id: 7,
    title: "IT Consultancy",
    content: "Our IT consultancy services help businesses optimize their technology infrastructure and improve efficiency. We provide expert guidance on IT strategy, cloud solutions, cybersecurity, network management, and software implementation. Our consultants work closely with clients to understand their business objectives and recommend cost-effective solutions that enhance productivity. We also assist with system upgrades, data migration, and IT training to ensure seamless transitions. Whether you're a small business looking to scale or a large enterprise aiming to streamline operations, our IT consultancy services provide the technical expertise needed to stay ahead in a competitive market.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60",

    icon: FaChalkboardTeacher,
    price: "$399 - $1799",
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

      <div className="container mx-auto px-4 lg:mt-20 mt-6 flex flex-col items-center justify-center">
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
              <p className="text-lg font-semibold text-[#3E6899] mt-4">Pricing: {price}</p>
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



