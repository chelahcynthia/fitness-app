import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, sculpt your body, and boost your metabolism with our dynamic weight training classes, suitable for all levels.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
    description: 
    "Find balance, flexibility, and inner peace in our soothing yoga sessions, designed to harmonize your mind, body, and spirit."
  },
  {
    name: "Ab Core Classes",
    description:
      " Target and strengthen your core muscles with our focused AB core classes, essential for overall stability and a powerful physique..",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling fitness adventures that challenge your limits and ignite your sense of exploration, all within our gym.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
    description: 
    "Experience a comprehensive approach to fitness through our well-rounded classes, covering cardio, strength, flexibility, and endurance"
  },
  {
    name: "Training Classes",
    description:
      "Master proper form and technique in our training exercise classes, led by expert instructors who prioritize your safety and progress..",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
                Discover a world of diverse and engaging classes designed to cater to 
                all fitness levels and interests. From high-intensity workouts to mindful 
                yoga sessions, our expert instructors are passionate about creating an inclusive and 
                motivating environment where you can explore new ways to challenge yourself 
                and achieve your goals. With a wide variety of classes available, you'll 
                never run out of exciting options to keep your fitness journey fresh and enjoyable.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
      
    </section>
  );
};

export default OurClasses;
