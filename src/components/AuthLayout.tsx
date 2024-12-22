import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
  backgroundImage: string;
}

export function AuthLayout({ children, backgroundImage }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block lg:w-1/2 relative overflow-hidden"
      >
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20" />
      </motion.div>
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}