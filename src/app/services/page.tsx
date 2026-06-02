"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Component,
  Cpu,
  Network,
  Shield,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/ui/FadeUp";
import ServiceCard from "@/components/ui/ServiceCard";

interface Service {
  title: string;
  icon: React.ReactNode;
  body: string;
}

const SERVICES: Service[] = [
  {
    title: "AI & Neural Architectures",
    icon: <Brain className="w-8 h-8 text-current" />,
    body: "Custom agentic systems, cognitive RAG pipelines, and model fine-tuning tailored to defy standard computational bottlenecks.",
  },
  {
    title: "Next-Gen Web Platforms",
    icon: <Globe className="w-8 h-8 text-current" />,
    body: "State-of-the-art Next.js and React architectures built for speed, performance, search engines, and premium aesthetics.",
  },
  {
    title: "High-Fidelity Mobile App Engine",
    icon: <Smartphone className="w-8 h-8 text-current" />,
    body: "Fluid, native iOS and Android experiences utilizing React Native with pixel-perfect responsive micro-animations.",
  },
  {
    title: "DevOps & Intelligent Cloud Scaling",
    icon: <Cloud className="w-8 h-8 text-current" />,
    body: "Multi-region cloud infrastructure, secure container orchestration, and serverless backends engineered to scale gracefully under load.",
  },
  {
    title: "Data Intelligence Pipelines",
    icon: <Database className="w-8 h-8 text-current" />,
    body: "High-throughput analytics engines, real-time data streaming (Kafka/Flink), and analytical dashboards with instant responsiveness.",
  },
  {
    title: "3D & Interactive WebGL Experiences",
    icon: <Component className="w-8 h-8 text-current" />,
    body: "Stunning Three.js, React Three Fiber, and shader designs that engage users through interactive spatial elements.",
  },
  {
    title: "IoT Edge Engineering",
    icon: <Cpu className="w-8 h-8 text-current" />,
    body: "Low-latency edge processing, hardware-firmware communication, and smart sensor network architectures.",
  },
  {
    title: "Decentralized Protocols & Web3",
    icon: <Network className="w-8 h-8 text-current" />,
    body: "Robust distributed ledgers, audited smart contracts, and decentralized interfaces for trustless systems.",
  },
  {
    title: "Cybersecurity Audit & Compliance",
    icon: <Shield className="w-8 h-8 text-current" />,
    body: "Advanced security auditing, vulnerability assessments, encryption schemas, and hardening protocols for SOC2 and HIPAA compliance.",
  },
  {
    title: "Product Strategy & Architecture Advisory",
    icon: <Briefcase className="w-8 h-8 text-current" />,
    body: "High-level technical advisory, system reviews, and product strategy to accelerate delivery and secure engineering efficiency.",
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Set up scroll tracking for the vertical tree trunk line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth scroll spring physics
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen pt-20 md:pt-28 pb-16 md:pb-24 transition-colors duration-300">
      
      {/* Page Hero Header */}
      <section className="py-12 md:py-24 px-6 max-w-4xl mx-auto text-center">
        <FadeUp>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-normal text-[var(--text-primary)] mb-6 tracking-tight">
            Services
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="font-serif text-[var(--text-secondary)] text-xl md:text-2xl leading-relaxed">
            We speciliaze in building scalable, reliable and efficient systems. 
          </p>
        </FadeUp>
      </section>

      {/* Timeline Section */}
      <section ref={containerRef} className="max-w-7xl mx-auto px-6 relative">
        
        {/* 1. Central Single Linked Trunk Line (Desktop) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2 top-[120px] bottom-[120px] w-[4px] hidden md:block z-0 pointer-events-none"
        >
          {/* Faded background track */}
          <div className="absolute inset-0 bg-[var(--text-primary)]/10" />
          {/* Linked animated active line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute inset-0 bg-[var(--text-primary)]"
          />
        </motion.div>

        {/* 2. Mobile Left Single Linked Trunk Line (Mobile) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="absolute left-[14px] top-[48px] bottom-[48px] w-[3px] md:hidden z-0 pointer-events-none"
        >
          {/* Faded background track */}
          <div className="absolute inset-0 bg-[var(--text-primary)]/10" />
          {/* Linked animated active line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute inset-0 bg-[var(--text-primary)]"
          />
        </motion.div>

        {/* Services Rows Wrapper */}
        <div className="space-y-4 md:space-y-0">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className="relative w-full min-h-[220px] py-4 md:py-16"
              >
                
                {/* ----------------- MOBILE LAYOUT (hidden md:block) ----------------- */}
                <div className="block md:hidden pl-10 relative">
                  
                  {/* Mobile Node Dot - Centered on Mobile Trunk Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="absolute top-1/2 -translate-y-1/2 left-[14px] -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-[var(--text-primary)] bg-[var(--bg)] z-20"
                  />

                  {/* Mobile Branch Line */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-60px" }}
                    style={{ originX: 0 }}
                    className="absolute left-[14px] top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-8 z-0"
                    transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Mobile Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-60px" }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    className="w-full"
                  >
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      body={service.body}
                    />
                  </motion.div>
                </div>

                {/* ----------------- DESKTOP LAYOUT (hidden md:grid) ----------------- */}
                <div className="hidden md:grid grid-cols-2 gap-0 relative items-center w-full">
                  
                  {/* Central Node Dot - Centered on Desktop Trunk Line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[var(--text-primary)] bg-[var(--bg)] z-20"
                  />

                  {/* Even Row: Left Card, Right Spacer */}
                  {isEven ? (
                    <>
                      <div className="relative flex items-center justify-end pr-16 w-full">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-80px" }}
                          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                          className="w-full max-w-md z-10"
                        >
                          <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            body={service.body}
                          />
                        </motion.div>

                        {/* Branch pointing Right (to Trunk) */}
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: false, margin: "-80px" }}
                          style={{ originX: 1 }}
                          className="absolute right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-16 z-0"
                          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                      <div className="w-full" /> {/* Spacer */}
                    </>
                  ) : (
                    <>
                      {/* Odd Row: Left Spacer, Right Card */}
                      <div className="w-full" /> {/* Spacer */}
                      
                      <div className="relative flex items-center justify-start pl-16 w-full">
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, margin: "-80px" }}
                          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                          className="w-full max-w-md z-10"
                        >
                          <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            body={service.body}
                          />
                        </motion.div>

                        {/* Branch pointing Left (to Trunk) */}
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: false, margin: "-80px" }}
                          style={{ originX: 0 }}
                          className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[var(--text-primary)] w-16 z-0"
                          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6 max-w-5xl mx-auto text-center mt-8 md:mt-12">
        <FadeUp>
          <div className="bg-accent/5 border border-dashed border-accent/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <h2 className="font-mono text-2xl md:text-3xl text-[var(--text-primary)] mb-3 leading-relaxed">
              Ready to build something great? 
            </h2>
            <p className="font-serif text-[var(--text-secondary)] text-lg mb-8 max-w-lg mx-auto leading-relaxed">
             Let's start working on your next project
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[var(--accent)] text-[var(--bg)] px-8 py-3.5 text-sm font-semibold rounded-full font-mono uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </motion.a>
          </div>
        </FadeUp>
      </section>

    </div>
  );
}


