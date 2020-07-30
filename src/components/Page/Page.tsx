import React, { FC } from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Page: FC = ({
  children,
}) => {
  return (
    <motion.div
      className="Page"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};

export default Page;