"use client"

import { motion } from "framer-motion"

export default function Recommendations({

  recommendations

}) {

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 40
      }}

      whileInView={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.7
      }}

      viewport={{
        once: true
      }}

      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-green-500/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-8
        md:p-10
        shadow-[0_0_60px_rgba(34,197,94,0.08)]
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
        via-green-400/70
        to-transparent
      " />



      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="
        absolute
        bottom-[-120px]
        right-[-120px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-green-500/10
        blur-[120px]
      " />



      {/* ======================================
          HEADER
      ====================================== */}

      <div className="
        relative
        z-10
        flex
        items-center
        gap-5
        mb-10
      ">

        {/* ICON */}

        <div className="
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-3xl
          bg-gradient-to-br
          from-green-400
          via-emerald-500
          to-cyan-500
          shadow-[0_0_40px_rgba(34,197,94,0.4)]
        ">

          <span className="
            text-2xl
          ">

            ✓

          </span>

        </div>



        {/* TITLE */}

        <div>

          <p className="
            text-xs
            uppercase
            tracking-[5px]
            text-green-300/60
            mb-2
          ">

            AI Optimization Strategy

          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          ">

            Recommendations

          </h2>

        </div>

      </div>



      {/* ======================================
          RECOMMENDATION LIST
      ====================================== */}

      <div className="
        relative
        z-10
        space-y-5
      ">

        {
          recommendations.map((recommendation, index) => (

            <motion.div

              key={recommendation}

              initial={{
                opacity: 0,
                x: -20
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                delay: index * 0.1
              }}

              whileHover={{
                scale: 1.02,
                x: 6
              }}

              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-green-500/10
                bg-green-500/[0.05]
                p-6
                transition-all
                duration-300
                hover:border-green-400/30
                hover:bg-green-500/[0.08]
              "
            >

              {/* HOVER GLOW */}

              <div className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
                bg-gradient-to-r
                from-green-500/5
                to-cyan-500/5
              " />



              {/* CONTENT */}

              <div className="
                relative
                z-10
                flex
                items-start
                gap-5
              ">

                {/* CHECK ICON */}

                <div className="
                  flex
                  items-center
                  justify-center
                  min-w-[52px]
                  h-[52px]
                  rounded-2xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green-300
                  text-xl
                ">

                  ✓

                </div>



                {/* TEXT */}

                <div>

                  <h3 className="
                    text-lg
                    md:text-xl
                    font-semibold
                    text-white
                    mb-2
                  ">

                    {recommendation}

                  </h3>

                  <p className="
                    text-gray-400
                    leading-7
                  ">

                    Implementing this improvement
                    can strengthen AI discoverability,
                    semantic understanding,
                    and answer extraction quality.

                  </p>

                </div>

              </div>

            </motion.div>
          ))
        }

      </div>



      {/* ======================================
          FOOTER INFO
      ====================================== */}

      <div className="
        relative
        z-10
        mt-10
        pt-6
        border-t
        border-white/5
        flex
        flex-wrap
        items-center
        justify-between
        gap-4
      ">

        {/* LEFT */}

        <div className="
          flex
          items-center
          gap-3
        ">

          <div className="
            w-2
            h-2
            rounded-full
            bg-green-400
            animate-pulse
          " />

          <span className="
            text-sm
            text-gray-400
          ">

            AI optimization improvements available

          </span>

        </div>



        {/* TAGS */}

        <div className="
          flex
          items-center
          gap-3
          flex-wrap
        ">

          {
            [

              "LLM Optimization",

              "Semantic SEO",

              "AI Visibility"

            ].map((tag) => (

              <span

                key={tag}

                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-green-400/10
                  bg-green-500/[0.05]
                  text-green-300
                  text-sm
                "
              >

                {tag}

              </span>
            ))
          }

        </div>

      </div>

    </motion.section>
  )
}