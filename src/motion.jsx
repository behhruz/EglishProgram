import { motion, useMotionValue, useTransform } from "framer-motion";
import './style.css'

export const MyComponent = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "#00FF00"]
  );

  return (
    <motion.div style={{ background }}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      >
        <h1 className="h1" x={x}>hello</h1>
      </motion.div>
    </motion.div>
  );
};
