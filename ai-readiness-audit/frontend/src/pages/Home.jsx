"use client"

import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { motion } from "framer-motion"

import Navbar from "../components/Navbar"

import UrlInput from "../components/UrlInput"

import LoadingScanner from "../components/LoadingScanner"

export default function Home() {

  const navigate =
    useNavigate()

  const [url, setUrl] =
    useState("")

  const [loading, setLoading] =
    useState(false)



  // ==========================================
  // HANDLE ANALYZE
  // ==========================================

  const handleAnalyze = () => {

    if (!url) return

    setLoading(true)

    localStorage.setItem(
      "audit_url",
      url
    )

    setTimeout(() => {

      navigate("/results")

    }, 3500)
  }



  return (

    <main className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#030712]
      text-white
    ">

      {/* ======================================
          NAVBAR
      ====================================== */}

      <Navbar />



      {/* ======================================
          BACKGROUND EFFECTS
      ====================================== */}

      <div className="
        absolute
        inset-0
        overflow-hidden
        -z-10
      ">

        {/* GRID */}

        <div className="
          absolute
          inset-0
          hero-grid
          opacity-20
        " />



        {/* TOP GLOW */}

        <div className="
          absolute
          top-[-250px]
          left-[-200px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
          animate-pulse
        " />



        {/* BOTTOM GLOW */}

        <div className="
          absolute
          bottom-[-250px]
          right-[-200px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-purple-500/10
          blur-[160px]
          animate-pulse
        " />



        {/* CENTER LIGHT */}

        <div className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-500/5
          blur-[120px]
        " />

      </div>



      {/* ======================================
          HERO SECTION
      ====================================== */}

      <section className="
        relative
        z-10
        flex
        flex-col
        items-center
        justify-center
        min-h-screen
        px-6
        text-center
      ">

        {/* ==================================
            BADGE
        ================================== */}

        <motion.div

          initial={{
            opacity: 0,
            y: -20
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.6
          }}

          className="
            mb-10
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            border
            border-cyan-400/10
            bg-cyan-400/[0.05]
            backdrop-blur-xl
          "
        >

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
            tracking-[4px]
            uppercase
          ">

            AI Semantic Intelligence Platform

          </span>

        </motion.div>



        {/* ==================================
            TITLE
        ================================== */}

        <motion.h1

          initial={{
            opacity: 0,
            y: 40
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.8
          }}

          className="
            max-w-6xl
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[110px]
            font-black
            leading-[0.95]
            tracking-tight
          "
        >

          Analyze How

          <br />

          <span className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
          ">

            AI Understands

          </span>

          <br />

          Your Website

        </motion.h1>



        {/* ==================================
            DESCRIPTION
        ================================== */}

        <motion.p

          initial={{
            opacity: 0,
            y: 30
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          transition={{
            delay: 0.2,
            duration: 0.7
          }}

          className="
            mt-10
            max-w-3xl
            text-lg
            md:text-2xl
            text-gray-400
            leading-[2rem]
          "
        >

          Evaluate your website’s
          AI discoverability,
          semantic structure,
          LLM visibility,
          and answer extraction readiness.

        </motion.p>



        {/* ==================================
            URL INPUT
        ================================== */}

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
            delay: 0.4,
            duration: 0.8
          }}

          className="
            w-full
            mt-16
            flex
            justify-center
          "
        >

          <UrlInput

            url={url}

            setUrl={setUrl}

            onAnalyze={handleAnalyze}

            loading={loading}

          />

        </motion.div>



        {/* ==================================
            STATS
        ================================== */}

        <motion.div

          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          transition={{
            delay: 0.8
          }}

          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
            w-full
            max-w-5xl
          "
        >

          {
            [

              {
                title: "AI Discoverability",
                value: "98%"
              },

              {
                title: "Semantic Analysis",
                value: "Advanced"
              },

              {
                title: "LLM Optimization",
                value: "Real-time"
              }

            ].map((item) => (

              <motion.div

                key={item.title}

                whileHover={{
                  scale: 1.03,
                  y: -4
                }}

                className="
                  rounded-[30px]
                  border
                  border-white/5
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  text-left
                "
              >

                <p className="
                  text-gray-400
                  mb-4
                ">

                  {item.title}

                </p>

                <h3 className="
                  text-4xl
                  font-black
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500
                  bg-clip-text
                  text-transparent
                ">

                  {item.value}

                </h3>

              </motion.div>
            ))
          }

        </motion.div>

      </section>



      {/* ======================================
          LOADING OVERLAY
      ====================================== */}

      {
        loading && (

          <LoadingScanner />
        )
      }

    </main>
  )
}