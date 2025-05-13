/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";

export default function Home() {
  const glowVariants = {
    animate: {
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.05, 1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gradient-to-b from-[#0b0c1b] to-[#07061c] text-white font-sans min-h-screen">
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-4 border-b border-gray-700">
        <img
          src="/logo.svg"
          alt="Acadlayer Logo"
          className="h-6 sm:h-8 w-auto"
        />
        <motion.a
          href="https://bento.me/AcadLayerHQ"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#456FE7] text-xs sm:text-sm px-3 sm:px-4 py-2 hover:bg-[#4061FD] rounded-lg font-bold inline-block text-center"
        >
          Join Us
        </motion.a>
      </header>

      <section className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-[#0B0B15] overflow-hidden">
        <motion.div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500 blur-[100px] sm:blur-[150px] z-0"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1 top-0 transform -translate-y-1/2 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 bg-blue-500 blur-[100px] sm:blur-[150px] z-0"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-[90%] sm:max-w-3xl md:max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute -right-10 sm:-right-16 md:-right-20 -top-1/4 sm:-top-1/3 z-0 hidden sm:block">
            <motion.img
              src="./assets/edProcess.svg"
              alt="Education Process"
              className="h-32 sm:h-40 md:h-48 w-auto"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 0.7, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>
          <div className="absolute -left-10 sm:-left-16 md:-left-20 top-1/3 z-0 hidden sm:block">
            <motion.img
              src="./assets/chain.svg"
              alt="Chain"
              className="h-36 sm:h-44 md:h-52 w-auto"
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 0.7, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            />
          </div>
          <motion.h2
            variants={textVariants}
            className="text-lg sm:text-xl md:text-3xl text-[#F1EBEB] font-bold mb-4 sm:mb-6"
          >
            Welcome to Acadlayer
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent leading-tight font-sans mb-6 sm:mb-8"
          >
            The Future of Education is Driven <br />
            by On-Chain Innovation.
          </motion.h1>
          <motion.a
            href="https://acadlayer.gitbook.io/acadlayer"
            target="_blank"
            rel="noopener noreferrer"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-lg cursor-pointer text-sm sm:text-base inline-block"
          >
            Whitepaper
          </motion.a>
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-16 py-12 sm:py-16 space-y-10 md:space-y-0 md:space-x-8 lg:space-x-12">
        <motion.div
          className="w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6"
          >
            About Acadlayer
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8"
          >
            Acadlayer is a decentralized education protocol revolutionizing
            learning and skill verification through blockchain. It enables
            tokenized learning, decentralized governance, and zk-proof-based
            certifications. To ensure scalability, security, and
            interoperability, we're building Acadlayer—a dedicated subnet on
            Avalanche's P-Chain—empowering global, verifiable, and accessible
            education.
          </motion.p>
          <motion.button
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 px-3 sm:px-4 py-2  hover:bg-blue-700 text-xs sm:text-sm cursor-pointer rounded-lg"
          >
            Know More
          </motion.button>
        </motion.div>
        <motion.img
          src="/assets/skillsCard.svg"
          alt="Profile Card"
          className="w-full md:w-1/2 max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </section>

      <section className="relative mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl bg-[#0A0F2C] flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8 lg:space-x-12 border border-blue-500 shadow-[0_0_20px_5px_rgba(0,102,255,0.5)]">
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-[-1] bg-gradient-to-r from-blue-500 to-transparent blur-2xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/goal.svg"
            alt="Trophy and Target"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-white"
          >
            Our Driving Purpose
          </motion.h3>
          <motion.ul
            className="text-sm sm:text-base md:text-lg space-y-4 sm:space-y-6"
            variants={containerVariants}
          >
            <motion.li
              variants={textVariants}
              className="flex items-start gap-2 sm:gap-3"
            >
              <img
                src="/assets/check.svg"
                alt="Check Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5"
              />
              <p>
                Tokenized educational experiences connecting learners,
                educators, and employers.
              </p>
            </motion.li>
            <motion.li
              variants={textVariants}
              className="flex items-start gap-2 sm:gap-3"
            >
              <img
                src="/assets/check.svg"
                alt="Check Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5"
              />
              <p>Secure on-chain credentialing using zk-proof technology.</p>
            </motion.li>
            <motion.li
              variants={textVariants}
              className="flex items-start gap-2 sm:gap-3"
            >
              <img
                src="/assets/check.svg"
                alt="Check Icon"
                className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5"
              />
              <p>
                Interactive achievements, quizzes, XP rewards, and user-driven
                content.
              </p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      <section className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <motion.h3
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Ecosystem Integration
        </motion.h3>
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            variants={textVariants}
            src="/assets/decentraclasses.svg"
            alt="DecentraClasses"
            className="h-8 sm:h-10"
          />
          <motion.img
            variants={textVariants}
            src="/assets/blockdevs.svg"
            alt="Block Devs"
            className="h-8 sm:h-10"
          />
          <motion.img
            variants={textVariants}
            src="/assets/instalearn.svg"
            alt="Insta Learn"
            className="h-8 sm:h-10"
          />
        </motion.div>
      </section>

      <section className="relative mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 p-4 sm:p-6 md:p-8 lg:p-12 rounded-3xl bg-[#0A0F2C] flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8 lg:space-x-12 border border-blue-500 shadow-[0_0_20px_5px_rgba(0,102,255,0.5)]">
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none z-[-1] bg-gradient-to-r from-blue-500 to-transparent blur-2xl"
          variants={glowVariants}
          animate="animate"
        />
        <motion.div
          className="w-full md:w-1/2 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={textVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-white"
          >
            Join Our Community
          </motion.h3>
          <motion.p
            variants={textVariants}
            className="text-sm sm:text-md md:text-lg text-gray-300 mb-4 sm:mb-6"
          >
            Connect with innovators, and be part of the movement. Get exclusive
            early access and stay updated on launch news.
          </motion.p>
          <motion.button
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#456FE7] text-xs sm:text-sm px-3 sm:px-4 py-2 hover:bg-[#4061FD] rounded-lg font-bold"
          >
            Join Us
          </motion.button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/rafiki.svg"
            alt="Community"
            className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
          />
        </motion.div>
      </section>

      <footer className="px-4 sm:px-8 md:px-16 py-8 sm:py-10 border-t border-gray-700">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={textVariants}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <img src="/logo.svg" alt="Acadlayer Logo" className="h-4 sm:h-5" />
            <span>Acadlayer</span>
            <span>Future of Knowledge</span>
          </motion.div>
          <motion.div
            variants={textVariants}
            className="flex items-center space-x-2 sm:space-x-4"
          >
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
}
