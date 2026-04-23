"use client"

import { motion } from "framer-motion"

export default function UrlInput({

  url,

  setUrl,

  onAnalyze,

  loading

}) {

  return (

    <motion.div

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

      className="
        relative
        overflow-hidden
        w-full
        max-w-5xl
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-2xl
        p-4
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
        blur-[120px]
      " />



      {/* ======================================
          CONTENT
      ====================================== */}

      <div className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        items-center
        gap-4
      ">

        {/* ==================================
            INPUT CONTAINER
        ================================== */}

        <motion.div

          whileHover={{
            scale: 1.01
          }}

          className="
            flex
            items-center
            gap-4
            flex-1
            w-full
            rounded-[28px]
            border
            border-white/5
            bg-black/20
            px-6
            py-5
            transition-all
            duration-300
            focus-within:border-cyan-400/30
            focus-within:bg-cyan-400/[0.03]
          "
        >

          {/* ICON */}

          <div className="
            flex
            items-center
            justify-center
            w-12
            h-12
            rounded-2xl
            bg-cyan-400/10
            border
            border-cyan-400/20
            text-cyan-300
            text-xl
          ">

            🌐

          </div>



          {/* INPUT */}

          <input

            value={url}

            onChange={(e) =>
              setUrl(e.target.value)
            }

            placeholder="
              https://yourwebsite.com
            "

            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              text-lg
              placeholder:text-gray-500
            "
          />

        </motion.div>



        {/* ==================================
            BUTTON
        ================================== */}

        <motion.button

          onClick={onAnalyze}

          disabled={loading}

          whileHover={{
            scale: 1.03
          }}

          whileTap={{
            scale: 0.96
          }}

          className="
            group
            relative
            overflow-hidden
            w-full
            lg:w-auto
            px-10
            py-6
            rounded-[28px]
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-500
            font-semibold
            text-white
            text-lg
            shadow-[0_0_40px_rgba(59,130,246,0.4)]
            transition-all
            duration-300
            disabled:opacity-70
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
            group-hover:translate-x-[100%]
            transition-transform
            duration-1000
          " />



          {/* CONTENT */}

          <div className="
            relative
            z-10
            flex
            items-center
            justify-center
            gap-3
          ">

            {
              loading
                ? (
                  <>
                    <div className="
                      w-5
                      h-5
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                      animate-spin
                    " />

                    <span>

                      Running AI Audit...

                    </span>
                  </>
                )
                : (
                  <>
                    <span>

                      Analyze Website

                    </span>

                    <motion.span

                      animate={{
                        x: [0, 5, 0]
                      }}

                      transition={{
                        repeat: Infinity,
                        duration: 1.5
                      }}
                    >

                      →

                    </motion.span>
                  </>
                )
            }

          </div>

        </motion.button>

      </div>



      {/* ======================================
          BOTTOM TAGS
      ====================================== */}

      <div className="
        relative
        z-10
        mt-5
        flex
        flex-wrap
        items-center
        gap-3
      ">

        {
          [

            "LLM Optimization",

            "Semantic SEO",

            "AI Discoverability",

            "Structured Data"

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

    </motion.div>
  )
}