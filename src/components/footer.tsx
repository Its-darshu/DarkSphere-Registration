import { motion } from 'motion/react';
import { Mail, Shield, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              DarkSphere
            </h3>
            <p className="text-gray-400 text-sm">
              An exclusive community for the next generation of innovators.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3 md:items-center">
            <motion.a
              href="#privacy"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Shield className="w-4 h-4" />
              <span 
                className="text-xs text-white/60 hover:text-white/80 cursor-pointer hover:underline transition-all duration-200"
                onClick={() => setShowPrivacyModal(true)}
              >
                Privacy Policy
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); setShowContactModal(true); }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-right">
            <p className="text-gray-500 text-sm">
              © 2025 DarkSphere
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Building the future, one idea at a time.
            </p>
          </div>
        </motion.div>

        {/* Bottom border glow */}
        <motion.div
          className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-400">
              We respect your privacy. Data is only used for registration and access verification.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-gray-300">
            
            <div className="space-y-4">
              <section>
                <h3 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h3>
                <p className="text-sm leading-relaxed">
                  We collect minimal information necessary for community access and verification. This includes your email address, 
                  educational institution, and basic profile information to ensure you meet our student eligibility requirements.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">2. How We Use Your Information</h3>
                <p className="text-sm leading-relaxed">
                  Your information is used solely for registration verification, community access management, and sending 
                  important updates about the platform. We do not share, sell, or distribute your personal information to third parties.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">3. Data Security</h3>
                <p className="text-sm leading-relaxed">
                  We implement industry-standard security measures to protect your personal information. All data is encrypted 
                  in transit and at rest, and access is strictly limited to authorized personnel for verification purposes only.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">4. Data Retention</h3>
                <p className="text-sm leading-relaxed">
                  We retain your information only as long as necessary to provide platform access and maintain community integrity. 
                  You may request data deletion at any time by contacting our support team.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">5. Your Rights</h3>
                <p className="text-sm leading-relaxed">
                  You have the right to access, update, or delete your personal information. You may also opt out of 
                  non-essential communications while maintaining platform access.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">6. Contact Information</h3>
                <p className="text-sm leading-relaxed">
                  For any privacy-related questions or requests, please contact us at darshan99806@gmail.com. 
                  We will respond to all inquiries within 48 hours.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-white mb-2">7. Policy Updates</h3>
                <p className="text-sm leading-relaxed">
                  This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. 
                  We will notify all active members of any significant changes via email.
                </p>
              </section>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-gray-500">
                Last updated: September 2025
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="max-w-md bg-slate-900 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-400">
              Reach out to contact.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-gray-300">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-white">Darshan</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/darshan-5109252b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                linkedin
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <a
                href="mailto:darshan99806@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                darshan99806@gmail.com
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}