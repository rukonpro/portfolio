import Project4 from "../Images/project4.jpg";
import Project5 from "../Images/project5.jpg";
import Project6 from "../Images/project6.jpeg";
import Project7 from "../Images/Thumbnail.png"
import Project8 from "../Images/Cover.png"
import MosafirLogo from "../Images/musafir_logo.png";
import MosafirCover from "../Images/musafir-cover.png";
import MosafirImg1 from "../Images/musafira2z1.png";
import MosafirImg2 from "../Images/musafirImage2.png";
import MosafirImg3 from "../Images/musafir3.png";
import SkulCover from "../Images/skul-cover.png";
import SkulImg1 from "../Images/eskulImg1.png";
import SkulImg2 from "../Images/eskulImage2.png";
import SkulImg3 from "../Images/skulImg3.png";
import EskulLogo from "../Images/EskulLogo.png";
import OnlineClockShopLogo from "../Images/onlineCLockShoplogo.webp";
import OnlineClockShop1 from "../Images/onlineClockShop1.png";
import OnlineClockCover from "../Images/ClockShop-cover.png";
import OnlineClockShop2 from "../Images/onlineClockShop2.png";
import OnlineClockShop3 from "../Images/onlineClockShop3.png";
import ExploreTravelCovewr from "../Images/ExploreTravel-cover.png";
import ShopMartCover from "../Images/ShopMart-cover.gif";




const portfolioData=[
    {
        id:"Musafir-Onlinewholesalers",
        title:"Musafir - Online wholesalers",
        logo:MosafirLogo,
        description:"As a remote developer for Musafir, a leading South African online wholesaler, I designed and implemented a fully functional e-commerce site. Leveraging React, Tailwind CSS, GraphQL, Apollo Client, and Selore, I ensured dynamic interfaces, responsive design, and efficient data handling. This project highlights my skills in modern web technologies and commitment to delivering impactful solutions.",
        images:[MosafirCover,MosafirImg1,MosafirImg2,MosafirImg3],
        technology:["React","Tailwind CSS", "GraphQL", "Apollo client","Selore"],
        point:[
            "Developed a fully functional e-commerce website utilizing React for dynamic user interfaces and Tailwind CSS for responsive design.",
            "Implemented Apollo Client to manage state and handle GraphQL queries for seamless data fetching and manipulation.",
            "Utilized React for building interactive components and Tailwind CSS for optimizing styling and user experience.",
            "Integrated GraphQL with Apollo Client for efficient data fetching, providing a performant and scalable solution for the application."
        ],
        links:{
            fontEndCode:"",
            backEndCode:"",
            liveLink:"https://www.musafira2z.com/"
        }
    },
    {
        id:"Eskul",
        title:"Eskul",
        logo: EskulLogo,
        description:"Eskul - My latest full-stack project. A responsive school management website with dynamic features. Built using React, Mongoose, Express, Firebase, NodeJS, and Material UI, it includes admin and user dashboards. Users can discover transportation options, purchase books, donate, hire online tutors, and provide feedback. Contact and FAQ forms enhance user interaction. Deployed with SSL Commerce on Heroku, Eskul showcases my skills in creating comprehensive, responsive, and feature-rich web solutions.",
        images:[SkulCover,SkulImg1,SkulImg2,SkulImg3],
        technology:["React", "Mongoose", "Express", "Firebase",  "Node.JS", "Material UI", "SSL Commerce", "Email.js", "Heroku"],
        point:[
            "School’s information-related website with dynamic functions and responsive design. Implement a dashboard for admin and users.",
            "Users can also find out transport for their child based on their school location, buy books, donate money for any school, hire an online private tutor and read the books.",
            "Users can contact us using the contact us form and by messenger chatting system. Ask any questions using the faq form. They can Review our website, private tutor, and books."
        ],
        links:{
            fontEndCode:"https://github.com/team-avengers-endgame/Eskul-Client",
            backEndCode:"https://github.com/team-avengers-endgame/Eskul-Server",
            liveLink:"https://eskul-avengers.web.app"
        }
    },
    {
        id:"NicheProductWebSiteOnlineClockShop",
        title:"Niche Product website - Online Clock Shop",
        logo:OnlineClockShopLogo,
        description:"\"Niche Product Website - An online clock shop meticulously crafted with React, React-router, SSL, Express.js, Firebase, Material UI, Tailwind CSS, and MongoDB. Users enjoy seamless functionality, including single-order addition, order reviews, deletion, and placement. The platform supports user authentication through Firebase, enabling easy login with Google, account creation, and login.\n" +
            "\n" +
            "Admins wield comprehensive control with the ability to manage all orders, add, update, and delete products, and define user rules. The integration of modern technologies ensures a secure, user-friendly, and efficient experience for both customers and administrators, making this clock shop a showcase of my proficiency in web development.\"",
        images:[OnlineClockCover,OnlineClockShop1,OnlineClockShop2,OnlineClockShop3],
        technology:["React", "React-router","SSL Commerce","Express.js", "Firebase", "Material UI","Telwind CSS", "MongoDB","Mongoose"],
        point:[
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
        links:{
            fontEndCode:"https://github.com/RnRukon/ONLINE-CLOCK-SHOP",
            backEndCode:"https://github.com/RnRukon/ONLINE-CLOCK-SHOP-Server",
            liveLink:"https://premier-pottery-retailer.web.app/"
        }
    },
    {
        id:"DoctorsPortal",
        title:"Doctors Portal",
        logo:Project4,
        description:"Developed a modern web application, \"Doctors Portal,\" utilizing React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. The platform empowers users to schedule appointments seamlessly, enhancing the overall healthcare experience. The combination of a user-friendly interface and robust backend technologies ensures a reliable and efficient appointment management system.",
        images:["1","2"],
        technology:["fsdf",'sdfsd'],
        point:[
            "User-friendly appointment scheduling",
            "Integration with Firebase for secure user authentication.",
            "Responsive design with Material UI for optimal user experience.",
            "Backend powered by Node.js and Express.js, with MongoDB for data storage."
        ],

        links:{
            fontEndCode:"https://github.com/RnRukon/Doctor-portal-cline-site",
            backEndCode:"https://github.com/RnRukon/Doctor-Portal-Server",
            liveLink:"https://doctor-portal-b1210.web.app/"
        }
    },
    {
        id:"exploreTravel",
        title:"Explore Travel",
        logo:Project5,
        description:"Crafted \"Explore Travel,\" a dynamic web platform, leveraging React, React Router, Node.js, Express.js, Firebase, Material UI, and MongoDB. This travel hub facilitates a vibrant community where users can seamlessly post travel blogs, share experiences, and engage through reviews. Admin privileges include comprehensive blog management, user role assignments, and ensuring the platform's vitality.",
        images:[ExploreTravelCovewr],
        technology:["React", "React Router", "Node.js", "Express.js", "Firebase", "Material UI", "MongoDB"],
        point:[
            "User-friendly blog posting, reviewing, and deletion.",
            "Robust admin controls for overseeing, adding, updating, and deleting blogs.",
            "Firebase-powered user authentication for secure Google login, account creation, and login experiences."

        ],
        links:{
            fontEndCode:"https://github.com/RnRukon/Explore-Tarvel-Client",
            backEndCode:"https://github.com/RnRukon/Explore-Tarvel-server",
            liveLink:"https://explore-travel-df23a.web.app"
        }
    },
    {
        id:"shopMart",
        title:"Shop Mart - E-commerce Platform",
        logo:Project6,
        description:"Shop Mart is a feature-rich e-commerce platform designed and developed with cutting-edge technologies to provide a seamless shopping experience. Leveraging React, React-router, Node.js, Express.js, Firebase, Material UI, Tailwind CSS, MongoDB, Chat-Engin, and Email.js, this platform offers a robust set of functionalities for both users and administrators.Shop Mart stands as a testament to the power of modern web technologies, offering a user-friendly interface, robust features, and efficient management tools. This project showcases my expertise in full-stack development and my ability to create engaging and functional e-commerce platforms.",
        images:[ShopMartCover],
        technology:["React", "React-router", "Node.js", "Express.js", "Firebase", "Material UI", "Tailwind CSS", "MongoDB", "Chat-Engin", "Email.js"],
        point:[
            "Order Management: Users can effortlessly add, review, and delete orders, providing a streamlined shopping experience.",
            "Place Orders: A straightforward process for users to place orders for their desired products.",
            "Real-time Chat: Shop Mart integrates Chat-Engin for users to engage in real-time conversations with each other, fostering community and enhancing user experience.",
            "Order Management: Admins have comprehensive control over all orders, ensuring efficient order processing and fulfillment.",
            "Product Management: Admins can easily add, update, and delete products, keeping the inventory up-to-date.",
            "User Role Management: Admins can assign and manage user roles, ensuring secure access and data management.",
            "Firebase Integration: Seamless and secure user authentication through Firebase, enabling users to log in with Google and create accounts with ease.",
            "Account Management: Users can create accounts and log in, providing a personalized and secure shopping experience."
        ],
        links:{
            fontEndCode:"https://github.com/RnRukon/Shop-mart-client-site-code",
            backEndCode:"https://github.com/RnRukon/Shop-mart-server-code",
            liveLink:"https://shop-mart-80ef1.web.app"
        }
    },
    {
        id:"7",
        title:"project7",
        logo:Project7,
        description:"sortDescription",
        images:["1","2"],
        technology:["fsdf",'sdfsd'],
        point:["sd",'sfs'],
        links:{
            fontEndCode:"sdfsdf",
            backEndCode:"dsfsd",
            liveLink:"fsdfsd"
        }
    },
    {
        id:"8",
        title:"project8",
        logo:Project8,
        description:"sortDescription",
        images:["1","2"],
        technology:["fsdf",'sdfsd'],
        point:["sd",'sfs'],
        links:{
            fontEndCode:"sdfsdf",
            backEndCode:"dsfsd",
            liveLink:"fsdfsd"
        }
    },
]
export default portfolioData;