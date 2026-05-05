"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function PageLayout({ icon, title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-wood-900 font-body text-gold-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden border-b border-gold-400/20 bg-gradient-to-b from-wood-800 to-wood-900 py-16">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #c8a96e 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <Link 
            href="/" 
            className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-400 transition-colors hover:text-gold-200"
          >
            <ArrowLeftOutlined className="transition-transform group-hover:-translate-x-1" />
            Trang chủ
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <span className="text-5xl">{icon}</span>
            <div>
              <h1 className="text-4xl font-display font-bold text-gold-200 mb-2 leading-tight">
                {title}
              </h1>
              <p className="text-sm text-gold-100/60 max-w-xl">
                {subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <main className="container mx-auto max-w-4xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}

interface CardProps {
  tag: string;
  title: string;
  sub: string;
  desc: string;
  href?: string;
}

export function HistoryCard({ tag, title, sub, desc, href }: CardProps) {
  const content = (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 h-full w-1 bg-gold-400 opacity-30 transition-opacity group-hover:opacity-100" />
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-display text-xl font-bold text-gold-200 transition-colors group-hover:text-gold-100">{title}</h3>
        <span className="rounded-full bg-gold-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-400 border border-gold-400/20">
          {tag}
        </span>
      </div>
      
      <div className="mb-3 text-xs font-medium uppercase tracking-wider text-gold-400/70 italic">
        {sub}
      </div>
      
      <p className="text-sm leading-relaxed text-gold-100/60 transition-colors group-hover:text-gold-100/80">
        {desc}
      </p>
    </div>
  );

  return (
    <motion.div 
      whileHover={{ scale: 1.01, x: 5 }}
      className="group relative overflow-hidden rounded-xl border border-gold-400/20 bg-wood-800/50 p-6 transition-all hover:border-gold-400/50 hover:bg-wood-700/50"
    >
      {href ? <Link href={href}>{content}</Link> : content}
    </motion.div>
  );
}
