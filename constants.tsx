import React from "react";
import {
  Users,
  Shield,
  Droplets,
  Heart,
  Building,
  Lightbulb,
  FileText,
  Phone,
} from "lucide-react";
import { Project, Service, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "मुख्यपृष्ठ", href: "/" },
  { label: "आमच्याबद्दल", href: "/about" },
  { label: "सेवा", href: "/services" },
  { label: "आमची टीम", href: "/team" },
  { label: "गॅलरी", href: "/gallery" },
  { label: "संपर्क साधा", href: "/contact" },
];

export const HERO_DATA = {
  title: "ग्रामपंचायत सोनुर्ली",
  subtitle: "विश्वास, गुणवत्ता आणि अनुभव. ग्रामविकासासाठी कटिबद्ध.",
  ctaPrimary: "आमच्याशी संपर्क साधा",
  ctaSecondary: "अधिक जाणून घ्या",
};

export const VILLAGE_INFO = {
  name: "सोनुर्ली",
  district: "नागपूर",
  taluka: "नागपूर ग्रामीण",
  state: "महाराष्ट्र",
  pincode: "441106",
  distanceFromHQ: "47 किमी",
  description: `सोनुर्ली हे महाराष्ट्र राज्यातील नागपूर जिल्ह्यातील नागपूर ग्रामीण तालुक्यात वसलेले एक गाव आहे. हे गाव उपजिल्हाधिकारी कार्यालय (नागपूर तहसील) तसेच जिल्हा मुख्यालय नागपूरपासून सुमारे ४७ किमी अंतरावर आहे. सन १९६२ नुसार, सोनुर्ली हे स्वतंत्र ग्रामपंचायत असलेले गाव आहे.

सोनुर्ली गावाने नागपूर प्रदेशात आपली वेगळी ओळख निर्माण केली आहे. पुढील विभागांमध्ये लोकसंख्या, साक्षरता, कुटुंबसंख्या, बालसंख्या, जातिविषयक माहिती, पिनकोड, स्थानिक स्वराज्य संस्था, शेजारील गावे आणि त्याबद्दलची सविस्तर माहिती दिली आहे.`,
};

export const VILLAGE_STATS = [
  { label: "लोकसंख्या", value: "2,500+", icon: Users },
  { label: "कुटुंबे", value: "425", icon: Building },
  { label: "साक्षरता दर", value: "75%", icon: FileText },
  { label: "हॅण्डपंप", value: "11", icon: Droplets },
];

export const CONTACT_INFO = {
  address: "मु पोस्ट सोनुर्ली, ता. जिल्हा नागपूर, महाराष्ट्र - 441106",
  phone: "(+91)  883 005 6484",
  email: "sonurli@gmail.com",
  administrator: "श्री. गोपाल वडे",
  gramSevak: "सौ. सुषमा स. मोरे",
};

export const SERVICES: Service[] = [
  {
    id: "good-governance",
    link: "/services",
    title: "सुशासनयुक्त पंचायत",
    description:
      "लोकसहभाग व प्रशासकीय सुधारणा, नागरिकांना ऑनलाइन सुविधा, महिला सभा, युवक सभा नियमित. CCTV व सुरक्षा व्यवस्था सुधारलेली.",
    icon: <Shield className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "financial",
    link: "/services",
    title: "वित्तीय सक्षम",
    description:
      "घरपट्टी व पाणीपट्टी भरण्यासाठी QR/Online प्रणाली. गावांतर्गत महसूल वाढविण्याकरिता विविध उपक्रम सुरू.",
    icon: <Building className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "water-conservation",
    link: "/services",
    title: "जलसंधारण व स्वच्छता",
    description:
      "FHTC नळजोडणी, पावसाचे पाणी साठवण, बोअरवेल पुनर्भरण, प्लास्टिक बंदी, कंपोस्ट निर्माण उपक्रम.",
    icon: <Droplets className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "women-empowerment",
    link: "/services",
    title: "महिला सक्षमीकरण",
    description:
      "महिला बचत गट कार्यरत – 213 महिलांचा सहभाग. लघुउद्योग, प्रशिक्षण आणि सामाजिक योजनांचा लाभ.",
    icon: <Heart className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "education-health",
    link: "/services",
    title: "शिक्षण व आरोग्य",
    description:
      "1 प्राथमिक शाळा, आरोग्य उपकेंद्र, आशा सेविका सक्रिय. 2 अंगणवाडी – स्वच्छ शौचालय, पोषण सुविधा उत्तम.",
    icon: <Users className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "innovation",
    link: "/services",
    title: "नवोन्मेष व प्रशासन",
    description:
      "सौर ऊर्जा प्रकल्प, डिजिटल ग्राम प्रशासन, ERP सॉफ्टवेअर, स्मार्ट सेवा वितरण प्रयत्न.",
    icon: <Lightbulb className="w-6 h-6" />,
    headerImage:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800",
  },
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "श्री. गोपाल वडे",
    role: "प्रशासक",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    name: "सौ. सुषमा स. मोरे",
    role: "ग्रामपंचायत अधिकारी",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "सुशासन गुण",
    points: "16",
    description: "लोकसहभाग, ऑनलाइन सुविधा, CCTV सुरक्षा",
  },
  {
    title: "वित्तीय सक्षम",
    points: "10",
    description: "QR/Online पेमेंट, महसूल वाढ",
  },
  {
    title: "जलसंधारण",
    points: "19",
    description: "नळजोडणी, स्वच्छता मोहिम",
  },
  {
    title: "उपजीविका विकास",
    points: "23",
    description: "महिला बचत गट, लघुउद्योग",
  },
];

export const INFRASTRUCTURE = [
  { label: "विहीर", count: "2" },
  { label: "हॅण्डपंप", count: "11" },
  { label: "शौचालये", count: "425" },
  { label: "प्राथमिक शाळा", count: "1" },
  { label: "अंगणवाडी", count: "2" },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "गाव दृश्य",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "ग्रामसभा",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "विकास कामे",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "शाळा",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "जलसंधारण",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "महिला बचत गट",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
  },
];

// Keep for backward compatibility but not used
export const PROJECTS: Project[] = [];
export const TESTIMONIALS = [];
