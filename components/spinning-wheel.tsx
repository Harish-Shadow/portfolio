"use client"

import { motion } from "framer-motion"

export default function SpinningWheel() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 w-16 h-16 border-4 border-neutral-900 border-t-transparent rounded-full dark:border-neutral-50"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
  )
}

