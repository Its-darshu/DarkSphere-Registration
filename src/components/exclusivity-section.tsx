import { motion } from 'motion/react';
import { Lock, Users, Sparkles } from 'lucide-react';

export function ExclusivitySection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
          
          <div className="relative z-10 text-center">
            {/* Lock icon with animation */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 40px rgba(251, 191, 36, 0.6)",
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Lock className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Invitation Only
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Only selected members will be invited to join this exclusive community of student innovators.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-2xl font-bold text-cyan-400 mb-1">100</div>
                <div className="text-sm text-gray-400">Early Members</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-2xl font-bold text-purple-400 mb-1">5%</div>
                <div className="text-sm text-gray-400">Acceptance Rate</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-2xl font-bold text-green-400 mb-1">24h</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </motion.div>
            </div>

            {/* Selection criteria */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Users className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Student Status</h4>
                  <p className="text-gray-400 text-sm">Currently enrolled in university or recent graduate</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Sparkles className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Innovation Focus</h4>
                  <p className="text-gray-400 text-sm">Demonstrated interest in creating or building</p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Lock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Commitment</h4>
                  <p className="text-gray-400 text-sm">Ready to engage and contribute to the community</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}