"use client"

import {

  useEffect,

  useState

} from "react"

import { motion } from "framer-motion"

import Navbar from "../components/Navbar"

import ScoreCard from "../components/ScoreCard"

import ScoreBreakdown from "../components/ScoreBreakdown"

import IssuesList from "../components/IssuesList"

import Recommendations from "../components/Recommendations"

import AISummary from "../components/AISummary"

import Footer from "../components/Footer"

import LoadingScanner from "../components/LoadingScanner"

import { analyzeWebsite }
from "../services/api"



export default function Results() {

  const [data, setData] =
    useState(null)

  const [loading, setLoading] =
    useState(true)



  // ==========================================
  // RUN AUDIT
  // ==========================================

  useEffect(() => {

    const runAudit =
      async () => {

        try {

          const url =
            localStorage.getItem(
              "audit_url"
            )

          const result =
            await analyzeWebsite(url)

          setData(result)

        } catch (error) {

          console.error(error)

        } finally {

          setLoading(false)
        }
      }

    runAudit()

  }, [])



  // ==========================================
  // LOADING STATE
  // ==========================================

  if (loading) {

    return <LoadingScanner />
  }



  // ==========================================
  // ERROR STATE
  // ==========================================

  if (!data) {

    return (

      <div className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#030712]
        text-white
      ">

        <div className="
          text-center
        ">

          <h2 className="
            text-4xl
            font-black
            mb-4
          ">

            Failed To Load Audit

          </h2>

          <p className="
            text-gray-400
          ">

            Something went wrong
            while analyzing the website.

          </p>

        </div>

      </div>
    )
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
          left-[-250px]
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        " />



        {/* BOTTOM GLOW */}

        <div className="
          absolute
          bottom-[-250px]
          right-[-250px]
          w-[700px]
          h-[700px]
          rounded-full
          bg-purple-500/10
          blur-[180px]
        " />

      </div>



      {/* ======================================
          HEADER SECTION
      ====================================== */}

      <section className="
        relative
        z-10
        pt-40
        pb-20
        px-6
      ">

        <div className="
          max-w-7xl
          mx-auto
        ">

          <motion.div

            initial={{
              opacity: 0,
              y: 30
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.7
            }}

            className="
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-10
            "
          >

            {/* LEFT */}

            <div>

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
                  tracking-[4px]
                  uppercase
                ">

                  AI Audit Completed

                </span>

              </div>



              <h1 className="
                text-5xl
                md:text-7xl
                font-black
                leading-tight
              ">

                Website AI

                <span className="
                  block
                  bg-gradient-to-r
                  from-cyan-400
                  via-blue-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                ">

                  Readiness Report

                </span>

              </h1>



              <p className="
                mt-8
                max-w-3xl
                text-xl
                text-gray-400
                leading-9
              ">

                Deep analysis of your
                website’s AI discoverability,
                semantic structure,
                crawlability,
                and LLM optimization readiness.

              </p>

            </div>



            {/* RIGHT */}

            <motion.div

              whileHover={{
                scale: 1.03
              }}

              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                p-8
                min-w-[320px]
              "
            >

              <p className="
                text-gray-400
                mb-4
              ">

                Audit Target

              </p>

              <h3 className="
                text-xl
                font-bold
                break-all
                text-white
              ">

                {data.url}

              </h3>



              <div className="
                mt-8
                flex
                items-center
                gap-3
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
                ">

                  Analysis Successful

                </span>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </section>



      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <section className="
        relative
        z-10
        px-6
        pb-24
      ">

        <div className="
          max-w-7xl
          mx-auto
          space-y-10
        ">

          {/* SCORE CARD */}

          <ScoreCard

            score={
              data.overall_score
            }

            grade={
              data.grade
            }

            crawlability={
              data.crawlability
            }

            readiness={
              data.readiness_status
            }
          />



          {/* BREAKDOWN */}

          <ScoreBreakdown

            breakdown={
              data.score_breakdown
            }
          />



          {/* GRID */}

          <div className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-10
          ">

            <IssuesList

              issues={
                data.issues_found
              }
            />



            <Recommendations

              recommendations={
                data.recommendations
              }
            />

          </div>



          {/* AI SUMMARY */}

          <AISummary

            summary={
              data.ai_summary
            }
          />



          {/* EXTRA INFO */}

          <motion.div

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.6
            }}

            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >

            {
              [

                {
                  title:
                    "Processing Time",

                  value:
                    `${data.processing_time_seconds}s`
                },

                {
                  title:
                    "AI Readability",

                  value:
                    data.ai_readability
                },

                {
                  title:
                    "Top Keyword",

                  value:
                    data.top_keywords?.[0]
                }

              ].map((item) => (

                <motion.div

                  key={item.title}

                  whileHover={{
                    y: -4,
                    scale: 1.02
                  }}

                  className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-2xl
                    p-8
                  "
                >

                  <p className="
                    text-gray-400
                    mb-4
                  ">

                    {item.title}

                  </p>

                  <h3 className="
                    text-3xl
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

        </div>

      </section>



      {/* ======================================
          FOOTER
      ====================================== */}

      <Footer />

    </main>
  )
}