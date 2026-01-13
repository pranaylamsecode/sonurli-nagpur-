import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  Globe,
  Clock,
  PiggyBank,
  Zap,
  DollarSign,
  Palette,
  MonitorSmartphone,
  Code,
  ShoppingCart,
  Settings,
  Wrench,
} from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { PageTransition } from "../components/PageTransition";

export const WebsiteDesignDevelopment: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-brand-500" />,
      title: "Experienced & Trustworthy",
      description:
        "We’re high-end web design experts and our company is located in Nagpur, India. Since 2012, we have helped over 300+ businesses get online.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-500" />,
      title: "Campaign Optimized Solutions",
      description:
        "In the web competition, we provide highly campaign optimized solutions for your business to generate leads, have high conversions and have great sales around the worked by using your web app.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-500" />,
      title: "Beautifully Designed",
      description:
        "Wow your customers with unique website design for your business. With custom designs and unlimited revisions you’re guaranteed to have a beautiful website that you ‘d love.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-500" />,
      title: "Edit Your Website 24/7",
      description:
        "All our websites will come with backend control panel so that you can edit or manage content of your site if required. Take full control of your website with our custom website development.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-500" />,
      title: "Unlimited Lifetime Support",
      description:
        "Our clients rely on us for ongoing professional support, online marketing, SEO and any web related advice.",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-500" />,
      title: "High Quality Service",
      description:
        "The website should be attractive as well as effective. We provide quality services to our client and connected via Skype, messengers, email and phone for communication.",
    },
    {
      icon: <PiggyBank className="w-6 h-6 text-brand-500" />,
      title: "Awesome & Affordable",
      description:
        "We specialize in keeping within your budget while providing outstanding logo, graphics and websites design.",
    },
  ];

  const team = [
    {
      name: "Custom Website Design",
      role: "We create visually stunning, user-focused website designs tailored to your brand identity. Every layout is crafted to deliver the perfect balance of beauty and functionality.",
      icon: <Palette className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "Responsive & Mobile-Friendly Design",
      role: "Your website will look flawless on all devices—mobile, tablet, and desktop. We ensure smooth navigation, fast loading speeds, and a consistent user experience across every screen size.",
      icon: <MonitorSmartphone className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "Website Development",
      role: "From front-end to back-end, we build powerful, secure, and scalable websites using the latest technologies. Our development ensures high performance and seamless functionality.",
      icon: <Code className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "E-Commerce Solutions",
      role: "We develop fully functional e-commerce platforms that help you sell more. From product management to checkout optimization, we create online stores that convert visitors into customers.",
      icon: <ShoppingCart className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "CMS Integration",
      role: "We integrate easy-to-use Content Management Systems like WordPress, Shopify, or custom CMS platforms—allowing you to update your website content anytime with zero technical hassle.",
      icon: <Settings className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "Website Maintenance & Support",
      role: "Our team provides ongoing maintenance, updates, security checks, and support to keep your website performing at its best—so you can focus on your business.",
      icon: <Users className="w-10 h-10 text-brand-500" />,
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20 bg-slate-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Website Design Development{" "}
                {/* <span className="text-brand-500">Into Reality</span> */}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Website is an important part to grow your business, it is
                essential to give it the attention it deserves. Your website
                delivers excellent results for your businesses if it’s visually
                interesting and appealing.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Innovative Website Design Solutions That Combine Creativity,
                    Technology, and Performance
                  </h2>
                  <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                    <p>
                      At Veer IT Solution, we provide complete website design
                      services that help your business stand out online. From
                      custom website design that reflects your brand identity to
                      responsive, mobile-friendly layouts that look perfect on
                      any device, we ensure a seamless user experience.
                    </p>
                    <p>
                      Our team uses latest technologies to build websites that
                      are fast, secure, and scalable, while CMS integration
                      allows you to easily manage your content.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full"></div>
                  <img
                    src="/web-design-1.jpg"
                    alt="Team collaboration"
                    className="relative rounded-2xl shadow-2xl border border-slate-800"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Why VeerIT?
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Many of our clients note us for our quality standards, work
                  process, professional service, and flexibility.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Reveal key={index} delay={index * 100}>
                  <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors group">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text- text-center mb-16 md:text-4xl font-bold">
              Website‘s We’ve Launched Recently
            </h2>
            <div className="grid  items-center">
              <Reveal delay={200}>
                <div className="relative flex justify-center items-center">
                  <img
                    src="/website-1.png"
                    alt="Team collaboration"
                    className="relative "
                  />
                </div>
              </Reveal>
              {/* <Reveal delay={200}>
                <div className="relative flex justify-center items-center">
                  <img
                    src="/website-2.png"
                    alt="Team collaboration"
                    className="relative "
                  />
                </div>
              </Reveal> */}
            </div>
          </div>
        </section>
        <section className="bg-brand-600 text-white py-16 px-6 md:px-12  shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let’s create a website that not only looks amazing but drives
            results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-brand-600 font-semibold px-8 py-4 rounded-xl shadow hover:opacity-90 transition"
          >
            Request a Quote
          </a>
        </section>
        {/* Team Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Services Include
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Crafting Digital Experiences That Drive Results
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center hover:border-slate-700 transition-all">
                    {/* <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-slate-800"
                    /> */}
                    <div className=" flex items-center justify-center mb-6">
                      {member.icon}
                    </div>
                    <h3 className="text-lg mb-2 font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-white text-sm">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CEO Quote */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Reveal>
              <blockquote className="text-2xl md:text-3xl font-medium text-slate-300 italic mb-8">
                "Every time, every step that we take and every company that we
                work with, we become a part of the transformation process.
                Clearly my mission is to give quality performance and help our
                clients to develop new channels from e-commerce."
              </blockquote>
              <cite className="text-brand-500 font-bold not-italic text-lg">
                - Prashant R. Shah, CEO
              </cite>
            </Reveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
