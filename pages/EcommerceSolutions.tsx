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
  ShoppingCart,
  Layers,
  Package,
  Store,
  Wrench,
  ShoppingBag,
} from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { PageTransition } from "../components/PageTransition";

export const EcommerceSolutions: React.FC = () => {
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
      name: "WooCommerce Development & Customization",
      role: "We are specialized in building, customizing and implementing WooCommerce platform for diverse industries including B2B & B2C portals, online marketplaces and auction websites.",
      icon: <ShoppingCart className="w-10 h-10 text-brand-500" />,
    },
    {
      name: "Shopify Development",
      role: "Our Shopify development and customization services are your ultimate solution for a stunning, money-yielding online store. We provide customized Shopify store development, theme development, API development, and migration services.",
      icon: <Store className="w-10 h-10 text-brand-500" />,
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
                Ecommerce Solutions{" "}
                {/* <span className="text-brand-500">Into Reality</span> */}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                From Flowers to Furnitures, Groceries to Books, VeerIT provide
                eCommerce Solution to all. We are a reputed eCommerce
                development service provider in India
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
                    Boost Your Online Sales with Expert Ecommerce Solutions
                  </h2>
                  <div className="space-y-4 mb-6 text-slate-400 text-lg leading-relaxed">
                    <p>
                      We create custom, scalable, and user-friendly ecommerce
                      websites to help your business grow online.
                    </p>
                  </div>
                  <a
                    href="/contact"
                    className="inline-block bg-brand-600 text-white font-semibold px-8 py-3 rounded-xl shadow hover:opacity-90 transition"
                  >
                    Contact Us
                  </a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full"></div>
                  <img
                    src="/ecommerce-1.png"
                    alt="Team collaboration"
                    className="relative rounded-2xl shadow-2xl border border-slate-800"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}

        {/* Team Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our eCommerce Website Development Services
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Our ecommerce development company provides end-to-end
                  eCommerce web / mobile design & development services. Some of
                  our services include:
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
