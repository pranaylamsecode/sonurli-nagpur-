import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  Globe,
  Clock,
  Zap,
  DollarSign,
} from "lucide-react";
import { Reveal } from "../components/ui/Reveal";
import { PageTransition } from "../components/PageTransition";

export const TechnicalSupport: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-brand-500" />,
      title: "Extensive Experience",
      description:
        "Serving global clients since 2006 with deep expertise in web services.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-500" />,
      title: "Top Quality Design",
      description:
        "Creating visually stunning and user-centered designs that leave a lasting impression.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-brand-500" />,
      title: "Cost Effective",
      description:
        "High-quality development at competitive rates without compromising on standards.",
    },
    {
      icon: <Users className="w-6 h-6 text-brand-500" />,
      title: "Flexible Models",
      description:
        "Engagement models tailored to your specific business needs and goals.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-500" />,
      title: "On-Time Delivery",
      description:
        "We value your time and ensure strict adherence to project timelines.",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-500" />,
      title: "SEO Friendly",
      description:
        "Built from the ground up with search engine optimization best practices.",
    },
  ];

  const team = [
    {
      name: "Prashant R. Shah",
      role: "CEO & Innovation",
      image: "https://ui-avatars.com/api/?name=Prashant+Shah&background=random",
    },
    {
      name: "Vishakha",
      role: "Business Development Manager",
      image: "https://ui-avatars.com/api/?name=Vishakha&background=random",
    },
    {
      name: "Jyoti",
      role: "Developer",
      image: "https://ui-avatars.com/api/?name=Jyoti&background=random",
    },
    {
      name: "Nikhil",
      role: "Apps Developer",
      image: "https://ui-avatars.com/api/?name=Nikhil&background=random",
    },
    {
      name: "Shabnoor",
      role: "HTML UX/UI",
      image: "https://ui-avatars.com/api/?name=Shabnoor&background=random",
    },
    {
      name: "Sachin",
      role: "Web Apps",
      image: "https://ui-avatars.com/api/?name=Sachin&background=random",
    },
    {
      name: "Stuti",
      role: "SEO & SEM",
      image: "https://ui-avatars.com/api/?name=Stuti&background=random",
    },
    {
      name: "Ashish",
      role: "Sales Executive",
      image: "https://ui-avatars.com/api/?name=Ashish&background=random",
    },
    {
      name: "Rajdip",
      role: "Developer",
      image: "https://ui-avatars.com/api/?name=Rajdip&background=random",
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
                Technical Support{" "}
                {/* <span className="text-brand-500">Into Reality</span> */}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Our Technical Support Services ensure that your business stays
                operational, secure, and efficient at all times. With a
                dedicated team of experts, we provide fast, reliable, and
                end-to-end assistance for all your technical needs.
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
                    Why Choose Our Technical Support?
                  </h2>
                  <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                    <p>
                      Our Technical Support Services are designed to keep your
                      business running smoothly by providing fast, reliable, and
                      expert assistance whenever you need it. From resolving
                      day-to-day technical issues to maintaining critical
                      systems, our team ensures minimal downtime and seamless
                      performance.
                    </p>
                    <p>
                      We offer remote and on-site support, helping you quickly
                      tackle software errors, hardware failures, connectivity
                      problems, and more.
                    </p>
                    <p>
                      In addition to troubleshooting, we proactively monitor
                      your systems to prevent issues before they occur. Our
                      support includes regular updates, security enhancements,
                      data protection measures, and performance optimization to
                      keep your technology secure and efficient.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/10 blur-3xl rounded-full"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
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

        {/* Team Section */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Meet Our Team
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The talented individuals behind our success.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center hover:border-slate-700 transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-slate-800"
                    />
                    <h3 className="text-lg font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-brand-400 text-sm">{member.role}</p>
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
