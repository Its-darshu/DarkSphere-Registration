import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Lightbulb, Heart, Trophy } from 'lucide-react';

export function ValueSection() {
  const features = [
    {
      icon: Lightbulb,
      emoji: "🔥",
      title: "Mysterious + Exclusive",
      description: "Join a private circle where minds wander freely, jokes hit hard, and thoughts go deeper than the surface."
    },
    {
      icon: Heart,
      emoji: "😈",
      title: "Bold + Raw",
      description: "Step into a zone built for boys who talk real, think wild, and don’t fear the shadows."
    },
    {
      icon: Trophy,
      emoji: "💀",
      title: "Dark + Poetic",
      description: "Enter the Sphere. Where chaos, humor, and untamed thoughts find their place in the dark."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Why Join
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Dark Sphere is meant for boys who share dark humor, raw thoughts, and unfiltered conversations, that “forward-thinking students” line feels too formal and startup-ish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}