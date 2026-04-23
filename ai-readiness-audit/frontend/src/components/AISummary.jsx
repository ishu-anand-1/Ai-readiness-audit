"use client"

import { motion } from "framer-motion"

export default function AISummary({

  summary

}) {

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
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-8
        md:p-10
        shadow-[0_0_60px_rgba(59,130,246,0.08)]
        transition-all
        duration-500
      "
    >

      {/* ======================================
          TOP GLOW BORDER
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
        w-[300px]
        h-[300px]
        rounded-full
        bg-cyan-500/10
        blur-[100px]
      " />



      <div className="
        absolute
        bottom-[-120px]
        left-[-120px]
        w-[300px]
        h-[300px]
        rounded-full
        bg-purple-500/10
        blur-[100px]
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


        {/* TEXT */}

        <div>

          <p className="
            text-xs
            uppercase
            tracking-[5px]
            text-cyan-300/60
            mb-2
          ">

            AI Semantic Intelligence

          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-white
          ">

            How AI Understands
            Your Website

          </h2>

        </div>

      </div>



      {/* ======================================
          SUMMARY BOX
      ====================================== */}

      <motion.div

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        transition={{
          delay: 0.4
        }}

        className="
          relative
          z-10
          rounded-[28px]
          border
          border-white/5
          bg-black/20
          p-8
          md:p-10
          overflow-hidden
        "
      >

        {/* SHIMMER EFFECT */}

        <div className="
          absolute
          inset-0
          opacity-20
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          animate-pulse
        " />



        {/* TEXT */}

        <motion.p

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            duration: 1
          }}

          className="
            relative
            z-10
            text-gray-300
            leading-[2.2rem]
            text-lg
            md:text-xl
            font-light
          "
        >

          {summary}

        </motion.p>

      </motion.div>



      {/* ======================================
          FOOTER INFO
      ====================================== */}

      <div className="
        relative
        z-10
        mt-8
        flex
        flex-wrap
        items-center
        justify-between
        gap-4
        border-t
        border-white/5
        pt-6
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

            AI semantic interpretation completed

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

              "Semantic Analysis",

              "AI Discoverability"

            ].map((tag) => (

              <span

                key={tag}

                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-cyan-400/10
                  bg-cyan-400/5
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