import { motion } from 'motion/react';
import { UserPlus, Key, Unlock } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      number: "1",
      title: "Register",
      description: "Submit your application with details about your student status."
    },
    {
      icon: Key,
      number: "2", 
      title: "Receive Key",
      description: "Selected applicants receive a unique security key to access the exclusive platform."
    },
    {
      icon: Unlock,
      number: "3",
      title: "Access Platform",
      description: "Use your security key to unlock the community and start sharing your breakthrough."
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps from application to platform access
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
              )}
              
              {/* Step content */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm px-3 py-1 rounded-full">
                  {step.number}
                </div>
                
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 rounded-full flex items-center justify-center mx-auto mb-6 mt-4"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}