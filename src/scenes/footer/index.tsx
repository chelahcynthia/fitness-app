import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Our gym is a state-of-the-art fitness facility dedicated 
            to helping individuals achieve their health and wellness 
            goals. With cutting-edge equipment, diverse classes, 
            and expert trainers, we provide a supportive and motivating 
            environment for all fitness levels. Join our thriving 
            community and embark on your transformative journey today.          
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Cynthia Chelangat</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Hello World!</p>
          <p>(+254)716759285</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
