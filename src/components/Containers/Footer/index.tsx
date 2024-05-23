import NodejsDark from '@/components/Icons/Logos/NodejsDark';
import FooterHeading from './FooterHeading';
import FooterNavLink from './FooterNavLink';

const Footer = () => {
  return (
    <footer className="py-4 lg:py-12 bg-slate-200 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          <div className="text-center lg:text-left">
            <div className="relative w-20 h-20 mx-auto lg:mx-0">
              <NodejsDark />
            </div>
            <p className="text-slate-700">
              Find your peace at Green Leaf Coffee Shop. Relax, unwind, and savor the moment with us.
            </p>
          </div>
          <div className="flex flex-col">
            <FooterHeading>Menu</FooterHeading>
            <div className="flex flex-col gap-y-2">
              <FooterNavLink href="/">Coffee & Beverages</FooterNavLink>
              <FooterNavLink href="/">Pastries & Snacks</FooterNavLink>
              <FooterNavLink href="/">Breakfast & Brunch</FooterNavLink>
              <FooterNavLink href="/">Seasonal Specials</FooterNavLink>
            </div>
          </div>
          <div className="flex flex-col">
            <FooterHeading>Visit Us</FooterHeading>
            <div className="flex flex-col gap-y-2">
              <FooterNavLink href="/">Locations</FooterNavLink>
              <FooterNavLink href="/">Opening Hours</FooterNavLink>
              <FooterNavLink href="/">Events & Workshops</FooterNavLink>
              <FooterNavLink href="/">Contact Us</FooterNavLink>
            </div>
          </div>
          <div className="flex flex-col">
            <FooterHeading>Stay Connected</FooterHeading>
            <div className="flex flex-col gap-y-2">
              <FooterNavLink href="/">Newsletter Sign-Up</FooterNavLink>
              <FooterNavLink href="/">Follow Us on Social Media</FooterNavLink>
              <FooterNavLink href="/">Customer Feedback</FooterNavLink>
              <FooterNavLink href="/">Blog & News</FooterNavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
