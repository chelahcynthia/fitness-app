import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form"
import CotactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({setSelectedPage}: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placceholder-white`;
  const { register, trigger, formState:{ errors} } = useForm();




  return (
    <div>index</div>
  )
}
export default ContactUs;