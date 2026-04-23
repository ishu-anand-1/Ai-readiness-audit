"use client"

import { motion } from "framer-motion"

import { Link } from "react-router-dom"

export default function Navbar() {

  return (

    <motion.header

      initial={{
        opacity: 0,
        y: -30
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.7
      }}

      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-white/10
        bg-[#030712]/70
        backdrop-blur-2xl
      "
    >

      {/* ======================================
          TOP GLOW BORDER
      ====================================== */}

      <div className="
        absolute
        bottom-0
        left-0
        h-[1px]
        w-full
        bg-gradient-to-r
        from-transparent
        via-cyan-400/60
        to-transparent
      " />



      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-8
        py-5
        flex
        items-center
        justify-between
      ">

        {/* ==================================
            LEFT SECTION
        ================================== */}

        <Link to="/">

          <motion.div

            whileHover={{
              scale: 1.03
            }}

            whileTap={{
              scale: 0.97
            }}

            className="
              flex
              items-center
              gap-4
              cursor-pointer
            "
          >

            {/* LOGO */}

            <div className="
              relative
              flex
              items-center
              justify-center
              w-14
              h-14
              rounded-3xl
              bg-gradient-to-br
              from-cyan-500
              via-blue-500
              to-purple-500
              shadow-[0_0_40px_rgba(59,130,246,0.5)]
              overflow-hidden
            ">

              {/* INNER GLOW */}

              <div className="
                absolute
                inset-0
                bg-white/10
              " />



              <span className="
                relative
                z-10
                text-2xl
                font-black
                text-white
              ">

                ✦

              </span>

            </div>



            {/* TEXT */}

            <div>

              <h1 className="
                text-2xl
                md:text-3xl
                font-black
                text-white
                tracking-tight
              ">

                AI Readiness

              </h1>

              <p className="
                text-xs
                uppercase
                tracking-[4px]
                text-cyan-300/60
                mt-1
              ">

                Semantic Audit Platform

              </p>

            </div>

          </motion.div>

        </Link>



        {/* ==================================
            CENTER NAVIGATION
        ================================== */}

        <nav className="
          hidden
          lg:flex
          items-center
          gap-10
        ">

          {
            [

              "Features",

              "AI Analysis",

              "Semantic SEO",

              "API Docs"

            ].map((item) => (

              <motion.a

                key={item}

                href="#"

                whileHover={{
                  y: -2
                }}

                className="
                  relative
                  text-gray-400
                  hover:text-white
                  transition-all
                  duration-300
                  text-sm
                  tracking-wide
                "
              >

                {item}

              </motion.a>
            ))
          }

        </nav>



        {/* ==================================
            RIGHT SECTION
        ================================== */}

        <div className="
          flex
          items-center
          gap-4
        ">

          {/* STATUS */}

          <div className="
            hidden
            md:flex
            items-center
            gap-3
            px-4
            py-2
            rounded-full
            border
            border-green-400/10
            bg-green-400/[0.05]
          ">

            <div className="
              w-2
              h-2
              rounded-full
              bg-green-400
              animate-pulse
            " />

            <span className="
              text-green-300
              text-sm
            ">

              System Active

            </span>

          </div>



          {/* BUTTON */}

          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.96
            }}

            className="
              relative
              overflow-hidden
              px-6
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              via-blue-500
              to-purple-500
              font-semibold
              text-white
              shadow-[0_0_40px_rgba(59,130,246,0.4)]
            "
          >

            {/* SHIMMER */}

            <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              translate-x-[-100%]
              animate-[shimmer_3s_infinite]
            " />



            <span className="
              relative
              z-10
            ">

              Launch Audit

            </span>

          </motion.button>

        </div>

      </div>

    </motion.header>
  )
}