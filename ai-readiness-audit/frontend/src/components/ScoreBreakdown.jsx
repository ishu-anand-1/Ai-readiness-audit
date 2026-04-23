"use client"

import { motion } from "framer-motion"

const colors = {

  "Metadata":
    "from-cyan-400 to-blue-500",

  "Content Structure":
    "from-purple-400 to-pink-500",

  "AI Extractability":
    "from-green-400 to-emerald-500",

  "Semantic SEO":
    "from-orange-400 to-red-500"
}

export default function ScoreBreakdown({

  breakdown

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
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-8
        md:p-10
        shadow-[0_0_60px_rgba(59,130,246,0.08)]
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
        via-cyan-400/70
        to-transparent
      " />



      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="
        absolute
        top-[-120px]
        right-[-120px]
        w-[320px]
        h-[320px]
        rounded-full
        bg-cyan-500/10
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
          from-cyan-500
          via-blue-500
          to-purple-500
          shadow-[0_0_40px_rgba(59,130,246,0.4)]
        ">

          <span className="
            text-2xl
          ">

            ✦

          </span>

        </div>



        {/* TITLE */}

        <div>

          <p className="
            text-xs
            uppercase
            tracking-[5px]
            text-cyan-300/60
            mb-2
          ">

            AI Performance Metrics

          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          ">

            Score Breakdown

          </h2>

        </div>

      </div>



      {/* ======================================
          SCORE LIST
      ====================================== */}

      <div className="
        relative
        z-10
        space-y-8
      ">

        {
          Object.entries(
            breakdown
          ).map(([key, value], index) => (

            <motion.div

              key={key}

              initial={{
                opacity: 0,
                y: 20
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                delay: index * 0.1
              }}

              whileHover={{
                scale: 1.01
              }}

              className="
                group
                rounded-[28px]
                border
                border-white/5
                bg-black/20
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/20
              "
            >

              {/* ==============================
                  TOP ROW
              ============================== */}

              <div className="
                flex
                items-center
                justify-between
                mb-5
              ">

                {/* LABEL */}

                <div>

                  <h3 className="
                    text-xl
                    font-semibold
                    text-white
                    mb-1
                  ">

                    {key}

                  </h3>

                  <p className="
                    text-gray-400
                    text-sm
                  ">

                    AI optimization analysis

                  </p>

                </div>



                {/* SCORE */}

                <div className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/[0.03]
                  border
                  border-white/10
                ">

                  <span className="
                    text-xl
                    font-bold
                    text-white
                  ">

                    {value}

                  </span>

                </div>

              </div>



              {/* ==============================
                  PROGRESS BAR
              ============================== */}

              <div className="
                relative
                h-4
                overflow-hidden
                rounded-full
                bg-white/5
              ">

                {/* GLOW */}

                <div className="
                  absolute
                  inset-0
                  bg-white/[0.02]
                " />



                {/* FILL */}

                <motion.div

                  initial={{
                    width: 0
                  }}

                  whileInView={{
                    width:
                      `${value * 4}%`
                  }}

                  transition={{
                    duration: 1,
                    ease: "easeOut"
                  }}

                  className={`
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    ${colors[key]}
                    shadow-[0_0_20px_rgba(59,130,246,0.4)]
                  `}
                />

              </div>



              {/* ==============================
                  BOTTOM INFO
              ============================== */}

              <div className="
                mt-4
                flex
                items-center
                justify-between
              ">

                <span className="
                  text-sm
                  text-gray-400
                ">

                  Performance Level

                </span>



                <span className="
                  text-sm
                  text-cyan-300
                  font-medium
                ">

                  {value >= 20
                    ? "Excellent"
                    : value >= 15
                    ? "Good"
                    : value >= 10
                    ? "Average"
                    : "Poor"
                  }

                </span>

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
            bg-cyan-400
            animate-pulse
          " />

          <span className="
            text-sm
            text-gray-400
          ">

            Semantic analysis completed

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

              "AI Metrics",

              "LLM Visibility",

              "Semantic SEO"

            ].map((tag) => (

              <span

                key={tag}

                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.05]
                  text-cyan-300
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