import { motion } from 'motion/react';
import { AlertTriangle, Key } from 'lucide-react';

export function NoticeBanner() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-900/50 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border-2 border-amber-400/30 backdrop-blur-sm p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Static border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/50 shadow-lg shadow-amber-400/20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Admin icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Notice content */}
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <div className="px-3 py-1 bg-amber-400/20 border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
                  ADMIN NOTICE
                </div>
                <Key className="w-4 h-4 text-amber-400" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Limited Access Policy
              </h3>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-amber-300">Seats are limited.</strong> Access is granted only through a security key. Keys are given to selected members based on application review and community fit.
              </p>
            </div>
          </div>
          
          {/* Security emphasis */}
          <motion.div
            className="mt-8 pt-6 border-t border-amber-400/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-sm">Security Key Required</span>
              </div>
              <div className="w-1 h-4 bg-gray-600" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                <span className="text-sm">Invitation Only</span>
              </div>
              <div className="w-1 h-4 bg-gray-600" />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-sm">Curated Access</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}