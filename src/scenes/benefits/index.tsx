import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";


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
     <div>
      <h1 className="basis-3/5 font-montserrat text-3xl font-bold"></h1>
     </div>



      </motion.div>
    
      

    </section>
  )
};
export default Benefits;