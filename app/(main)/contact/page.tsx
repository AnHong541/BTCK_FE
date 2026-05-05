"use client";

import { motion } from "framer-motion";
import { MailOutlined, FacebookOutlined, PhoneOutlined } from "@ant-design/icons";

const CONTACTS = [
  { label: 'Email', value: '...................@gmail.com', href: '', icon: MailOutlined },
  { label: 'Facebook', value: 'https://www.facebook.com/an.tranvohong.5', href: 'https://www.facebook.com/an.tranvohong.5', isLink: true, icon: FacebookOutlined },
  { label: 'Điện thoại', value: '0*..................1', href: '', icon: PhoneOutlined },
];

function ContactItem({ label, value, href, isLink, icon: Icon }: typeof CONTACTS[0] & { isLink?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-start gap-4 pb-6 border-b border-gold-400/20 last:border-b-0">
        <div className="text-gold-400 text-2xl mt-1 group-hover:scale-110 transition-transform">
          <Icon />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gold-200 mb-2 uppercase tracking-wider">{label}</h3>
          {isLink ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-100/80 hover:text-gold-300 transition-colors break-all"
            >
              {value}
            </a>
          ) : (
            <p className="text-gold-100/80">{value}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-wood-900 py-12 md:py-20 px-6 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-gold-200 tracking-wider">
            LIÊN HỆ
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-300 mx-auto rounded-full" />
        </motion.div>

        {/* Content Box */}
        <motion.div
          variants={itemVariants}
          className="bg-wood-800/40 border border-gold-400/30 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start rounded-2xl shadow-2xl hover:border-gold-400/50 transition-all duration-300"
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="flex-shrink-0 w-48 h-56 md:w-64 md:h-80 rounded-xl object-cover shadow-xl border border-gold-400/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div className="flex-1 w-full">
            <div className="space-y-8">
              {CONTACTS.map((contact) => (
                <ContactItem key={contact.label} {...contact} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-12 md:mt-16 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
        />
      </motion.div>
    </div>
  );
}
