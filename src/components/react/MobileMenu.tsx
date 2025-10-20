import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '../../routes/routes';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      rotate: 0,
    },
    open: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="lg:hidden">
      <motion.button
        onClick={toggleMenu}
        className="text-foreground hover:text-muted-foreground relative z-50 p-4 opacity-75 focus:outline-hidden"
        aria-label="Toggle Menu"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 min-h-screen bg-black"
          >
            <div className="flex min-h-screen flex-col items-center justify-center">
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col items-center gap-12 py-8"
              >
                {routes.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    variants={itemVariants}
                    className="text-foreground hover:text-primary group relative font-serif text-2xl italic transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsOpen(false);
                      document.body.style.overflow = 'unset';
                    }}
                  >
                    {item.name}
                    <motion.span
                      className="from-primary to-primary/50 absolute -bottom-2 left-0 h-0.5 w-0 bg-linear-to-r transition-all duration-300 group-hover:w-full"
                      whileHover={{ width: '100%' }}
                    />
                  </motion.a>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
