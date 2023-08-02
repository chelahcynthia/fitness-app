import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import HText from "@/shared/HText";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setselectedPage} : Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
      onViewportEnter={() => setselectedPage(SelectedPage.Benefits)}
      >
     {/* HEADER SECTION */}
     <motion.div
     className="md:my-5 md:w-3/5"
     initial="hidden"
     whileInView={{ once:true, amount: 0.5}}
     viewport={{ duration: 0.5 }}
     transition={{ duration: 0.5 }}
     variants={{
      hidden: { opacity: 0, x: -50},
      visible: { opacity: 1, x: 0 },

     }}
     >
      <HText>MORE THAN JUST GYM.</HText>
      <p className="my-5 text-sm">
        We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease.
        We provide true care into each and every member 
      </p>
     </motion.div>



      </motion.div>
    
      

    </section>
  )
};

export default Benefits;