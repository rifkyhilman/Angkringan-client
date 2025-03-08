import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PaymentSuccess = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500); // Auto close dalam 1.5 detik

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div 
        className="flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-2xl max-w-sm mx-auto overflow-hidden"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <motion.div 
          className="bg-green-500 p-6 rounded-full shadow-lg"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <CheckCircle size={72} className="text-white" />
        </motion.div>
        <motion.h2 
          className="text-2xl font-bold text-gray-800 mt-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Pembayaran Berhasil
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default PaymentSuccess;
