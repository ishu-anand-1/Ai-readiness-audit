"use client"

import { motion } from "framer-motion"

const steps = [

  "Fetching website structure",

  "Analyzing metadata",

  "Evaluating semantic hierarchy",

  "Detecting structured content",

  "Generating AI insights"

]

export default function LoadingScanner() {

  return (

    <div className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-[#030712]/95
      backdrop-blur-2xl
      overflow-hidden
      px-6
    ">

      {/* ======================================
          BACKGROUND GLOW
      ====================================== */}

      <div className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[140px]
        animate-pulse
      " />



      <div className="
        absolute
        bottom-[-200px]
        right-[-200px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/10
        blur-[140px]
        animate-pulse
      " />



      {/* ======================================
          MAIN CARD
      ====================================== */}

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9,
          y: 20
        }}

        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}

        transition={{
          duration: 0.6
        }}

        className="
          relative
          overflow-hidden
          w-full
          max-w-3xl
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-3xl
          p-10
          md:p-14
          shadow-[0_0_80px_rgba(59,130,246,0.12)]
        "
      >

        {/* ==================================
            TOP BORDER GLOW
        ================================== */}

        <div className="
          absolute
          top-0
          left-0
          h-[1px]
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        " />



        {/* ==================================
            SCAN EFFECT
        ================================== */}

        <div className="
          absolute
          inset-0
          overflow-hidden
        ">

          <div className="
            absolute
            top-[-100%]
            left-0
            w-full
            h-[180px]
            bg-gradient-to-b
            from-transparent
            via-cyan-400/10
            to-transparent
            animate-[scan_3s_linear_infinite]
          " />

        </div>



        {/* ==================================
            HEADER
        ================================== */}

        <div className="
          relative
          z-10
          flex
          items-center
          gap-6
          mb-12
        ">

          {/* LOADER */}

          <div className="
            relative
            flex
            items-center
            justify-center
            w-20
            h-20
          ">

            {/* OUTER */}

            <div className="
              absolute
              inset-0
              rounded-full
              border-2
              border-cyan-500/20
            " />



            {/* SPINNER */}

            <div className="
              absolute
              inset-0
              rounded-full
              border-2
              border-transparent
              border-t-cyan-400
              animate-spin
            " />



            {/* CENTER */}

            <div className="
              w-5
              h-5
              rounded-full
              bg-cyan-400
              shadow-[0_0_20px_rgba(34,211,238,0.8)]
            " />

          </div>



          {/* TEXT */}

          <div>

            <p className="
              text-xs
              uppercase
              tracking-[6px]
              text-cyan-300/60
              mb-3
            ">

              AI AUDIT ENGINE

            </p>

            <h2 className="
              text-4xl
              md:text-5xl
              font-black
              text-white
            ">

              Running Analysis

            </h2>

          </div>

        </div>



        {/* ==================================
            STEPS
        ================================== */}

        <div className="
          relative
          z-10
          space-y-5
        ">

          {
            steps.map((step, index) => (

              <motion.div

                key={step}

                initial={{
                  opacity: 0,
                  x: -30
                }}

                animate={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  delay: index * 0.25
                }}

                whileHover={{
                  scale: 1.02
                }}

                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-[24px]
                  border
                  border-white/5
                  bg-black/20
                  p-5
                  transition-all
                  duration-300
                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.03]
                "
              >

                {/* ICON */}

                <div className="
                  relative
                  flex
                  items-center
                  justify-center
                  min-w-[56px]
                  h-[56px]
                  rounded-2xl
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                ">

                  <motion.div

                    animate={{
                      scale: [1, 1.2, 1]
                    }}

                    transition={{
                      repeat: Infinity,
                      duration: 1.5
                    }}

                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-cyan-400
                    "
                  />

                </div>



                {/* TEXT */}

                <div className="
                  flex-1
                ">

                  <p className="
                    text-lg
                    md:text-xl
                    text-white
                    font-medium
                  ">

                    {step}

                  </p>

                </div>



                {/* STATUS */}

                <motion.div

                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 1.5
                  }}

                  className="
                    text-cyan-300
                    text-sm
                  "
                >

                  Processing

                </motion.div>

              </motion.div>
            ))
          }

        </div>



        {/* ==================================
            FOOTER
        ================================== */}

        <div className="
          relative
          z-10
          mt-10
          pt-6
          border-t
          border-white/5
          flex
          items-center
          justify-between
          flex-wrap
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

              AI semantic engine active

            </span>

          </div>



          {/* RIGHT */}

          <div className="
            flex
            items-center
            gap-3
            flex-wrap
          ">

            {
              [

                "LLM Parsing",

                "Semantic SEO",

                "AI Detection"

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

      </motion.div>

    </div>
  )
}