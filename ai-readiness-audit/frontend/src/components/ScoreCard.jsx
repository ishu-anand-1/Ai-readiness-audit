"use client"

import { motion } from "framer-motion"

export default function ScoreCard({

  score,

  grade,

  crawlability,

  readiness

}) {

  const progress =
    Math.min(score, 100)

  return (

    <motion.section

      initial={{
        opacity: 0,
        y: 40
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      transition={{
        duration: 0.7
      }}

      whileHover={{
        y: -4
      }}

      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-8
        md:p-10
        shadow-[0_0_80px_rgba(59,130,246,0.12)]
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
          BACKGROUND GLOWS
      ====================================== */}

      <div className="
        absolute
        top-[-150px]
        right-[-150px]
        w-[400px]
        h-[400px]
        rounded-full
        bg-cyan-500/10
        blur-[140px]
      " />



      <div className="
        absolute
        bottom-[-150px]
        left-[-150px]
        w-[400px]
        h-[400px]
        rounded-full
        bg-purple-500/10
        blur-[140px]
      " />



      {/* ======================================
          CONTENT
      ====================================== */}

      <div className="
        relative
        z-10
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
      ">

        {/* ==================================
            LEFT SIDE
        ================================== */}

        <div>

          {/* LABEL */}

          <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            border-cyan-400/10
            bg-cyan-400/[0.05]
            mb-8
          ">

            <div className="
              w-2
              h-2
              rounded-full
              bg-cyan-400
              animate-pulse
            " />

            <span className="
              text-cyan-300
              text-sm
              tracking-[3px]
              uppercase
            ">

              AI Readiness Analysis

            </span>

          </div>



          {/* TITLE */}

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            leading-none
            mb-6
          ">

            <span className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            ">

              {score}

            </span>

            <span className="
              text-white/30
            ">

              /100

            </span>

          </h2>



          {/* SUBTEXT */}

          <p className="
            text-gray-400
            text-lg
            leading-8
            max-w-xl
          ">

            Your website’s AI discoverability,
            semantic structure,
            and LLM optimization score.

          </p>



          {/* STATS */}

          <div className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
          ">

            {/* GRADE */}

            <motion.div

              whileHover={{
                scale: 1.03
              }}

              className="
                rounded-[28px]
                border
                border-white/5
                bg-black/20
                p-5
              "
            >

              <p className="
                text-gray-400
                text-sm
                mb-3
              ">

                Grade

              </p>

              <h3 className="
                text-3xl
                font-black
                text-green-400
              ">

                {grade}

              </h3>

            </motion.div>



            {/* CRAWLABILITY */}

            <motion.div

              whileHover={{
                scale: 1.03
              }}

              className="
                rounded-[28px]
                border
                border-white/5
                bg-black/20
                p-5
              "
            >

              <p className="
                text-gray-400
                text-sm
                mb-3
              ">

                Crawlability

              </p>

              <h3 className="
                text-xl
                font-bold
                text-cyan-300
              ">

                {crawlability}

              </h3>

            </motion.div>



            {/* STATUS */}

            <motion.div

              whileHover={{
                scale: 1.03
              }}

              className="
                rounded-[28px]
                border
                border-white/5
                bg-black/20
                p-5
              "
            >

              <p className="
                text-gray-400
                text-sm
                mb-3
              ">

                Status

              </p>

              <h3 className="
                text-lg
                font-bold
                text-purple-300
              ">

                {readiness}

              </h3>

            </motion.div>

          </div>

        </div>



        {/* ==================================
            RIGHT SIDE
        ================================== */}

        <div className="
          flex
          items-center
          justify-center
        ">

          <div className="
            relative
            w-[320px]
            h-[320px]
          ">

            {/* OUTER GLOW */}

            <div className="
              absolute
              inset-0
              rounded-full
              bg-cyan-500/10
              blur-[80px]
            " />



            {/* CIRCLE */}

            <svg
              className="
                w-full
                h-full
                -rotate-90
              "
              viewBox="0 0 220 220"
            >

              {/* BACKGROUND */}

              <circle
                cx="110"
                cy="110"
                r="90"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="14"
                fill="transparent"
              />



              {/* PROGRESS */}

              <motion.circle

                cx="110"

                cy="110"

                r="90"

                stroke="url(#gradient)"

                strokeWidth="14"

                fill="transparent"

                strokeLinecap="round"

                strokeDasharray={565}

                initial={{
                  strokeDashoffset: 565
                }}

                animate={{
                  strokeDashoffset:
                    565 -
                    (565 * progress) / 100
                }}

                transition={{
                  duration: 1.5
                }}
              />



              {/* GRADIENT */}

              <defs>

                <linearGradient
                  id="gradient"
                >

                  <stop
                    offset="0%"
                    stopColor="#22d3ee"
                  />

                  <stop
                    offset="50%"
                    stopColor="#3b82f6"
                  />

                  <stop
                    offset="100%"
                    stopColor="#8b5cf6"
                  />

                </linearGradient>

              </defs>

            </svg>



            {/* CENTER */}

            <div className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            ">

              <motion.h3

                initial={{
                  opacity: 0,
                  scale: 0.8
                }}

                animate={{
                  opacity: 1,
                  scale: 1
                }}

                transition={{
                  delay: 0.5
                }}

                className="
                  text-6xl
                  font-black
                  text-white
                "
              >

                {score}

              </motion.h3>

              <p className="
                text-gray-400
                mt-3
                tracking-[3px]
                uppercase
                text-sm
              ">

                AI Score

              </p>

            </div>

          </div>

        </div>

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

            AI semantic evaluation completed

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

              "LLM Ready",

              "AI Visibility",

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