import { useState } from "react"
import { motion } from "framer-motion"

export default function Component() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const features = [
    {
      title: "Boards",
      description: "Boards allow you to organize projects visually. They help you group tasks and track progress at a glance.",
      image: "./kanri_preview.webp",
    },
    {
      title: "Columns",
      description: "Columns represent workflow stages. They enable you to move tasks through different phases of completion.",
      image: "./kanri_columns.webp",
    },
    {
      title: "Cards",
      description: "Cards represent individual tasks or items. They contain details and can be easily moved between columns.",
      image: "./kanri_cards.webp",
    },
  ]
  return (
    <section className="w-full py-12 md:pb-24 lg:pb-32">
      <div className="container grid gap-6 lg:grid-cols-2 w-full px-0">
        <div className="flex flex-col justify-center space-y-4">
          <ul className="grid gap-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className={`cursor-pointer rounded-lg p-4 transition-colors hover:bg-muted ${
                  index === selectedFeature ? "bg-muted text-violet-400" : "text-foreground"
                }`}
                onClick={() => setSelectedFeature(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <motion.div
            className="hidden lg:block absolute inset-0 bg-gradient-to-r w-[600px] h-[400px] from-blue-600 to-primary rounded-xl blur-3xl opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={features[selectedFeature].image}
            width={700}
            height={420}
            alt={features[selectedFeature].title}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full z-20 relative"
            key={selectedFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  )
}