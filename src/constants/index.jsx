import pos1 from "../assets/pos1.jpg";
import pos2 from "../assets/pos2.jpg";
import pos3 from "../assets/pos3.jpg";
import pos4 from "../assets/pos4.jpg";
import pos5 from "../assets/pos5.jpg";
import pos6 from "../assets/pos6.jpg";
import pos7 from "../assets/pos7.jpg";
import pos8 from "../assets/pos8.jpg";
import pos9 from "../assets/pos9.jpg";
import pos10 from "../assets/pos10.jpg";


import management from "../assets/management.jpg";
import sales from "../assets/sales.jpg";
import reports from "../assets/reports.jpg";


import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Features", targetId: "features" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Services", targetId: "service" },
  { text: "Contact", targetId: "contact" },
];

export const FEATURES = [
  {
    image: pos1,
    title: "Order Management",
    description: "Streamline your cantina’s order process with real-time tracking.",
  },
  {
    image: pos2,
    title: "Inventory Control",
    description: "Monitor stock levels and receive alerts for low inventory.",
  },
  {
    image: pos3,
    title: "Customer Management",
    description: "Manage client profiles, track preferences, and reward loyalty.",
  },
  {
    image: pos4,
    title: "Sales Reports",
    description: "Generate detailed sales reports to monitor performance and trends.",
  },
  {
    image: pos5,
    title: "Payment Integration",
    description: "Accept payments through multiple channels, including cards and mobile wallets.",
  },
  {
    image: pos6,
    title: "Employee Management",
    description: "Schedule shifts and monitor staff performance in one place.",
  },
  {
    image: pos7,
    title: "Table Reservations",
    description: "Simplify table reservations with an integrated booking system.",
  },
  {
    image: pos8,
    title: "Expense Tracking",
    description: "Keep an eye on expenses with real-time tracking and reporting.",
  },
  {
    image: pos9,
    title: "Customization Options",
    description: "Tailor the system to fit the specific needs of your cantina.",
  },
  {
    image: pos10,
    title: "Customer Feedback",
    description: "Gather and analyze feedback to improve customer experience.",
  },
];

export const ABOUT = {
  header: "Enhance Your Cantina’s Operations with Our POS System",
  content:
    "Our POS system is designed to meet the specific needs of cantinas, optimizing everything from order processing to sales reporting. With our easy-to-use interface and robust features, managing your business has never been more efficient. Whether it's keeping track of inventory, processing payments, or analyzing sales data, our system does it all. Experience the difference with a solution built for your success.",
};

export const MISSION =
  "Our mission is to simplify cantina management through innovative and efficient technology solutions.";

export const SERVICES = [
  {
    number: "01.",
    image: management,
    title: "Order & Inventory Management",
    description:
      "Seamlessly manage orders and inventory with our integrated system, reducing errors and improving efficiency.",
  },
  {
    number: "02.",
    image: sales,
    title: "Sales & Payment Processing",
    description:
      "Speed up transactions and offer a variety of payment options to customers for a smooth experience.",
  },
  {
    number: "03.",
    image: reports,
    title: "Reporting & Analytics",
    description:
      "Gain valuable insights with comprehensive reports and data analytics to make informed decisions.",
  },
];

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Bogota, Colombia, 110011" },
  { key: "phone", value: "Phone: 123-456-7890" },
  { key: "email", value: "Email: ellis_velandia@soy.sena.edu.co" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
