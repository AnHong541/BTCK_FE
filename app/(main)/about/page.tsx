"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      {/* Container */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-center mb-4 text-gold-200 tracking-wider">
            GIỚI THIỆU
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gold-400 to-gold-300 mx-auto rounded-full" />
        </motion.div>

        {/* Content Box */}
        <motion.div
          variants={itemVariants}
          className="bg-wood-800/40 border border-gold-400/30 backdrop-blur-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center rounded-2xl shadow-2xl hover:border-gold-400/50 transition-all duration-300"
        >
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="flex-shrink-0 w-48 h-56 md:w-64 md:h-80 rounded-xl object-cover shadow-xl border border-gold-400/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div className="flex-1">
            <p className="text-gold-100/90 text-base md:text-lg leading-relaxed space-y-4">
              <span className="block">
                Trang web này được xây dựng nhằm lưu trữ và tái hiện những mốc lịch sử hào hùng của dân tộc Việt Nam thông qua công nghệ bản đồ tương tác hiện đại.
              </span>
              <span className="block">
                Chúng tôi tập trung vào việc giới thiệu các chiến dịch lịch sử quan trọng, những nhân vật anh hùng, và các địa điểm có ý nghĩa lịch sử sâu sắc.
              </span>
              <span className="block">
                Bằng cách kết hợp công nghệ số với kiến thức lịch sử, chúng tôi mong muốn khơi dậy lòng tự hào dân tộc và giáo dục thế hệ trẻ về những giá trị lịch sử đồng thời.
              </span>
              <span className="block text-gold-300 font-semibold">
                "Lịch sử là gương chiếu cho tương lai"
              </span>
            </p>
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
