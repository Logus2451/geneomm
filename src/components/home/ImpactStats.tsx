import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Section from '../ui/Section';
import { Award, HeartHandshake, TestTube, Users } from 'lucide-react';

const stats = [
  { icon: Award, value: 15, label: "Years of Experience", suffix: '+' },
  { icon: HeartHandshake, value: 30000, label: "Patients Helped", suffix: '+' },
  { icon: TestTube, value: 100000, label: "Genetic Tests Performed", suffix: '+' },
  { icon: Users, value: 20000, label: "Family Consultations", suffix: '+' },
];

const AnimatedCounter = ({ to, suffix }: { to: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>{count.toLocaleString('en-US')}{suffix}</span>;
};


const ImpactStats: React.FC = () => {
  return (
    <Section className="bg-white !py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-200 rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 min-h-[180px] flex flex-col justify-center"
          >
            <stat.icon className="text-primary h-12 w-12 mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-2xl md:text-4xl font-bold text-primary mb-2 overflow-hidden">
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm md:text-base text-neutral-800 font-medium leading-tight">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ImpactStats;
