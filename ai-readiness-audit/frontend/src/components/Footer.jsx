"use client"

import { motion } from "framer-motion"

export default function Footer() {

  return (

    <motion.footer

      initial={{
        opacity: 0,
        y: 40
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.8
      }}

      viewport={{
        once: true
      }}

      className="
        relative
        overflow-hidden
        mt-32
        border-t
        border-white/10
        bg-white/[0.02]
        backdrop-blur-2xl
      "
    >

      {/* ======================================
          TOP GLOW LINE
      ====================================== */}

      <div className="
        absolute
        top-0
        left-0
        h-[1px]
        w-full
        bg-gradient-to-r
        from-transparent
        via-cyan-400/60
        to-transparent
      " />



      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="
        absolute
        top-[-100px]
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[300px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
      " />



      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-20
      ">

        {/* ======================================
            TOP SECTION
        ====================================== */}

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-12
        ">

          {/* ==================================
              LEFT SIDE
          ================================== */}

          <div>

            <motion.div

              whileHover={{
                scale: 1.05
              }}

              className="
                flex
                items-center
                gap-4
                mb-6
              "
            >

              {/* LOGO */}

              <div className="
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-3xl
                bg-gradient-to-br
                from-cyan-500
                via-blue-500
                to-purple-500
                shadow-[0_0_40px_rgba(59,130,246,0.4)]
              ">

                <span className="
                  text-2xl
                  font-black
                ">

                  ✦

                </span>

              </div>


              {/* TITLE */}

              <div>

                <h2 className="
                  text-2xl
                  font-black
                  text-white
                ">

                  AI Readiness Audit

                </h2>

                <p className="
                  text-gray-400
                  text-sm
                  tracking-[3px]
                  uppercase
                ">

                  AI Discoverability Platform

                </p>

              </div>

            </motion.div>


            {/* DESCRIPTION */}

            <p className="
              max-w-xl
              text-gray-400
              leading-8
              text-lg
            ">

              Analyze how AI systems,
              search engines, and large
              language models interpret
              your website structure,
              semantic SEO, and AI
              discoverability.

            </p>

          </div>



          {/* ==================================
              RIGHT SIDE
          ================================== */}

          <div className="
            flex
            flex-col
            items-center
            md:items-end
            gap-5
          ">

            {/* STATUS */}

            <div className="
              flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-green-400/10
              bg-green-400/5
            ">

              <div className="
                w-3
                h-3
                rounded-full
                bg-green-400
                animate-pulse
              " />

              <span className="
                text-green-300
                text-sm
              ">

                AI Engine Operational

              </span>

            </div>


            {/* TAGS */}

            <div className="
              flex
              flex-wrap
              justify-center
              md:justify-end
              gap-3
            ">

              {
                [

                  "LLM Ready",

                  "Semantic SEO",

                  "AI Visibility",

                  "Crawl Intelligence"

                ].map((tag) => (

                  <motion.div

                    key={tag}

                    whileHover={{
                      scale: 1.08
                    }}

                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-gray-300
                      text-sm
                      transition-all
                      duration-300
                    "
                  >

                    {tag}

                  </motion.div>
                ))
              }

            </div>

          </div>

        </div>



        {/* ======================================
            BOTTOM SECTION
        ====================================== */}

        <div className="
          mt-16
          pt-8
          border-t
          border-white/5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        ">

          {/* COPYRIGHT */}

          <p className="
            text-gray-500
            text-sm
          ">

            © 2026 AI Readiness Audit.
            All rights reserved.

          </p>



          {/* LINKS */}

          <div className="
            flex
            items-center
            gap-8
          ">

            {
              [

                "Privacy",

                "Security",

                "Documentation",

                "API"

              ].map((item) => (

                <motion.a

                  key={item}

                  whileHover={{
                    y: -2
                  }}

                  href="#"

                  className="
                    text-gray-400
                    hover:text-cyan-300
                    transition-all
                    duration-300
                    text-sm
                  "
                >

                  {item}

                </motion.a>
              ))
            }

          </div>

        </div>

      </div>

    </motion.footer>
  )
}