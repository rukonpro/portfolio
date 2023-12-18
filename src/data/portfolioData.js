import MosafirLogo from "../Images/musafir_logo.webp";
import MosafirCover from "../Images/musafir-cover.webp";
import MosafirImg1 from "../Images/musafira2z1.webp";
import MosafirImg2 from "../Images/musafirImage2.webp";
import MosafirImg3 from "../Images/musafir3.webp";
import SkulCover from "../Images/skul-cover.webp";
import SkulImg1 from "../Images/eskulImg1.webp";
import SkulImg2 from "../Images/eskulImage2.webp";
import SkulImg3 from "../Images/skulImg3.webp";
import EskulLogo from "../Images/EskulLogo.webp";
import OnlineClockShopLogo from "../Images/onlineCLockShoplogo.webp";
import OnlineClockShop1 from "../Images/onlineClockShop1.webp";
import OnlineClockCover from "../Images/ClockShop-cover.webp";
import OnlineClockShop2 from "../Images/onlineClockShop2.webp";
import OnlineClockShop3 from "../Images/onlineClockShop3.webp";
import ExploreTravelCovewr from "../Images/ExploreTravel-cover.webp";
import ShopMartCover from "../Images/ShopMartCover.webp";
import DoctorPortalCover from "../Images/doctor-portal.webp"
import DoctorPortal1 from "../Images/doctor-portal2.webp"
import DoctorPortal2 from "../Images/doctor-portal3.webp"


const portfolioData = {
    skills: {
        experienced: ["Javascript", "React.JSX", "Next.JS", "ES6", "Redux", "Redux-toolkit", "RTK Query", "Node.JS", "Express.JS", "MongoDB", "PostgresQL", "MySQL", "Mongoose", "GraphQL", "Apollo Client", "React-hook-form", "Firebase", "Bootstrap 4&5", "React-Bootstrap", "Material UI", "Tailwind-CSS", "HTML5", "CSS3"],
        comfortable: ["Javascript", "React.JSX", "ES6", "Redux", "Redux-toolkit", "RTK Query", "Node.JS", "Express.JS", "MongoDB", "Mongoose", "GraphQL", "Apollo Client", "React-hook-form", "Firebase", "Tailwind-CSS", "Bootstrap 4&5", "Material UI", "HTML5", "CSS3"],
        familiar: ["TypeScript", "React-Native", "Chassis", "Kotlin", "Jetpack Compose"],
        tools: ["Git", "GitHub", "npm", "yarn", "VS Code", "WebStorm", "Firefox dev tool", "Chrome dev tool", "Heroku", "Render", "Netlify", "Figma", "MongoDB Compass", "Postman"]
    },
    portfolios: [
        {
            id: "Musafir-Onlinewholesalers",
            title: "Musafir - Online wholesalers",
            logo: MosafirLogo,
            description: "As a remote developer for Musafir, a leading South African online wholesaler, I designed and implemented a fully functional e-commerce site. Leveraging React, Tailwind CSS, GraphQL, Apollo Client, and Selore, I ensured dynamic interfaces, responsive design, and efficient data handling. This project highlights my skills in modern web technologies and commitment to delivering impactful solutions.",
            images: [MosafirCover, MosafirImg1, MosafirImg2, MosafirImg3],
            technology: ["React", "React Router Dom", "Tailwind CSS", "GraphQL", "Apollo client", "Selore", "Postsgress", ""],
            point: [
                "Developed a fully functional e-commerce website utilizing React for dynamic user interfaces and Tailwind CSS for responsive design.",
                "Implemented Apollo Client to manage state and handle GraphQL queries for seamless data fetching and manipulation.",
                "Utilized React for building interactive components and Tailwind CSS for optimizing styling and user experience.",
                "Integrated GraphQL with Apollo Client for efficient data fetching, providing a performant and scalable solution for the application."
            ],
            links: {
                fontEndCode: "",
                backEndCode: "",
                liveLink: "https://www.musafira2z.com/"
            }
        },
        {
            id: "Eskul",
            title: "Eskul",
            logo: EskulLogo,
            description: "Eskul - My latest full-stack project. A responsive school management website with dynamic features. Built using React, Mongoose, Express, Firebase, NodeJS, and Material UI, it includes admin and user dashboards. Users can discover transportation options, purchase books, donate, hire online tutors, and provide feedback. Contact and FAQ forms enhance user interaction. Deployed with SSL Commerce on Heroku, Eskul showcases my skills in creating comprehensive, responsive, and feature-rich web solutions.",
            images: [SkulCover, SkulImg1, SkulImg2, SkulImg3],
            technology: ["React", "Mongoose", "Express", "Firebase", "Node.JS", "Material UI", "SSL Commerce", "Email.js", "Heroku"],
            point: [
                "School’s information-related website with dynamic functions and responsive design. Implement a dashboard for admin and users.",
                "Users can also find out transport for their child based on their school location, buy books, donate money for any school, hire an online private tutor and read the books.",
                "Users can contact us using the contact us form and by messenger chatting system. Ask any questions using the faq form. They can Review our website, private tutor, and books."
            ],
            links: {
                fontEndCode: "https://github.com/team-avengers-endgame/Eskul-Client",
                backEndCode: "https://github.com/team-avengers-endgame/Eskul-Server",
                liveLink: "https://eskul-avengers.web.app"
            }
        },
        {
            id: "NicheProductWebSiteOnlineClockShop",
            title: "Niche Product website - Online Clock Shop",
            logo: OnlineClockShopLogo,
            description: "\"Niche Product Website - An online clock shop meticulously crafted with React, React-router, SSL, Express.js, Firebase, Material UI, Tailwind CSS, and MongoDB. Users enjoy seamless functionality, including single-order addition, order reviews, deletion, and placement. The platform supports user authentication through Firebase, enabling easy login with Google, account creation, and login.\n" +
                "\n" +
                "Admins wield comprehensive control with the ability to manage all orders, add, update, and delete products, and define user rules. The integration of modern technologies ensures a secure, user-friendly, and efficient experience for both customers and administrators, making this clock shop a showcase of my proficiency in web development.\"",
            images: [OnlineClockCover, OnlineClockShop1, OnlineClockShop2, OnlineClockShop3],
            technology: ["React", "React-router", "SSL Commerce", "Express.js", "Firebase", "Material UI", "Telwind CSS", "MongoDB", "Mongoose"],
            point: [
                "    Users can easily add single orders to their shopping cart.\n" +
                "    A user-friendly interface allows for the review of previous orders.\n" +
                "    Order deletion functionality is available for a seamless user experience.\n" +
                "    The platform supports the placement of new orders with a straightforward process.",

                "    Admins have the capability to manage and track all orders efficiently.\n" +
                "    Product management is made easy with the ability to add, update, and delete products.\n" +
                "    Admins can set specific user rules, enhancing control and security.",

                "User Authentication:\n" +
                "\n" +
                "    Integrated Firebase for a secure and reliable user authentication system.\n" +
                "    Users can conveniently log in using their Google accounts.\n" +
                "    The platform provides a smooth account creation and login process.",

                "Overall Highlights:\n" +
                "\n" +
                "    The website specializes in niche clock products, catering to a specific market.\n" +
                "    Focus on delivering a seamless and user-friendly experience for customers.\n" +
                "    Admins enjoy comprehensive control, ensuring efficient management of the platform.\n" +
                "    Integration of modern technologies guarantees security and operational efficiency."

            ],
            links: {
                fontEndCode: "https://github.com/RnRukon/ONLINE-CLOCK-SHOP",
                backEndCode: "https://github.com/RnRukon/ONLINE-CLOCK-SHOP-Server",
                liveLink: "https://premier-pottery-retailer.web.app/"
            }
        },
        {
            id: "DoctorsPortal",
            title: "Doctors Portal",
            logo: DoctorPortalCover,
            description: "Developed a modern web application, \"Doctors Portal,\" utilizing React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. The platform empowers users to schedule appointments seamlessly, enhancing the overall healthcare experience. The combination of a user-friendly interface and robust backend technologies ensures a reliable and efficient appointment management system.",
            images: [DoctorPortalCover, DoctorPortal1, DoctorPortal2],
            technology: ["React", "React Router Dom", 'Metaril UI', 'Firebase', 'Heroku', 'Node.JS', 'Express.JS', 'MongoDB'],
            point: [
                "User-friendly appointment scheduling",
                "Integration with Firebase for secure user authentication.",
                "Responsive design with Material UI for optimal user experience.",
                "Backend powered by Node.js and Express.js, with MongoDB for data storage."
            ],

            links: {
                fontEndCode: "https://github.com/RnRukon/Doctor-portal-cline-site",
                backEndCode: "https://github.com/RnRukon/Doctor-Portal-Server",
                liveLink: "https://doctor-portal-b1210.web.app/"
            }
        },
        {
            id: "exploreTravel",
            title: "Explore Travel",
            logo: ExploreTravelCovewr,
            description: "Crafted \"Explore Travel,\" a dynamic web platform, leveraging React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. This travel hub facilitates a vibrant community where users can seamlessly post travel blogs, share experiences, and engage through reviews. Admin privileges include comprehensive blog management, user role assignments, and ensuring the platform's vitality.",
            images: [ExploreTravelCovewr],
            technology: ["React", "React Router", "Node.js", "Express.js", "Firebase", "Material UI", "MongoDB"],
            point: [
                "User-friendly blog posting, reviewing, and deletion.",
                "Robust admin controls for overseeing, adding, updating, and deleting blogs.",
                "Firebase-powered user authentication for secure Google login, account creation, and login experiences."

            ],
            links: {
                fontEndCode: "https://github.com/RnRukon/Explore-Tarvel-Client",
                backEndCode: "https://github.com/RnRukon/Explore-Tarvel-server",
                liveLink: "https://explore-travel-df23a.web.app"
            }
        },
        {
            id: "shopMart",
            title: "Shop Mart - E-commerce Platform",
            logo: ShopMartCover,
            description: "Shop Mart is a feature-rich e-commerce platform designed and developed with cutting-edge technologies to provide a seamless shopping experience. Leveraging React, React-router, Node.js, Express.js, Firebase, Material UI, Tailwind CSS, MongoDB, Chat-Engin, and Email.js, this platform offers a robust set of functionalities for both users and administrators.Shop Mart stands as a testament to the power of modern web technologies, offering a user-friendly interface, robust features, and efficient management tools. This project showcases my expertise in full-stack development and my ability to create engaging and functional e-commerce platforms.",
            images: [ShopMartCover],
            technology: ["React", "React-router", "Node.js", "Express.js", "Firebase", "Material UI", "Tailwind CSS", "MongoDB", "Chat-Engin", "Email.js"],
            point: [
                "Order Management: Users can effortlessly add, review, and delete orders, providing a streamlined shopping experience.",
                "Place Orders: A straightforward process for users to place orders for their desired products.",
                "Real-time Chat: Shop Mart integrates Chat-Engin for users to engage in real-time conversations with each other, fostering community and enhancing user experience.",
                "Order Management: Admins have comprehensive control over all orders, ensuring efficient order processing and fulfillment.",
                "Product Management: Admins can easily add, update, and delete products, keeping the inventory up-to-date.",
                "User Role Management: Admins can assign and manage user roles, ensuring secure access and data management.",
                "Firebase Integration: Seamless and secure user authentication through Firebase, enabling users to log in with Google and create accounts with ease.",
                "Account Management: Users can create accounts and log in, providing a personalized and secure shopping experience."
            ],
            links: {
                fontEndCode: "https://github.com/RnRukon/Shop-mart-client-site-code",
                backEndCode: "https://github.com/RnRukon/Shop-mart-server-code",
                liveLink: "https://shop-mart-80ef1.web.app"
            }
        }
    ]
}
export default portfolioData;