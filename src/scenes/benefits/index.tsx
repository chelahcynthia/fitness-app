
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import { SelectedPage } from '@/shared/types';



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage}: Props
  ) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
      {/* HEADER */}
      <motion.div
        className="md:my-5 md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <HText>MORE THAN JUST GYM.</HText>
        <p className="my-5 text-sm">
          We provide world class fitness equipment, trainers and classes to
          get you to your ultimate fitness goals with ease. We provide true
          care into each and every member.
        </p>
      </motion.div>

      {/* BENEFITS SECTION */}
      
      
      

      </motion.div>
      </section>
    
  )
}

export default Benefits;