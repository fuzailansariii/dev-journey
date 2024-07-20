// components/Footer.tsx

import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="mx-4">
      <Separator />
      <div className="container mx-auto text-center text-sm py-3 font-poppins">
        <p>
          &copy; 2024 {"<DevJourney />"} {"|"} All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
