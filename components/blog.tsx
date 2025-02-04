"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and why it&apos;s a great choice for your next web project.",
  },
  {
    title: "Introduction to Machine Learning",
    description: "Discover the fundamentals of machine learning and its applications in web development.",
  },
  {
    title: "Debugging Tips for Web Developers",
    description: "Improve your debugging skills with these practical tips and techniques.",
  },
]

export default function Blog() {
  return (
    <section className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

