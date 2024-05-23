import Heading from '@/components/Commons/Heading';
import AboutCard from '@/components/Section/Home/AboutCard';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen, Handshake, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <svg className="absolut top-[9999px] left-[9999px] h-0 w-0">
        <defs>
          <clipPath id="clipPath1" clipPathUnits="objectBoundingBox">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.695056 0.0112951C0.719828 0.00573387 0.74929 0 0.781191 0C0.832999 0 0.874997 0.0554446 0.874997 0.123839C0.874997 0.131957 0.874406 0.139892 0.873276 0.147574C0.874438 0.155752 0.875033 0.164588 0.874876 0.174102C0.874581 0.191933 0.871658 0.20724 0.867456 0.220162C0.878002 0.242021 0.886061 0.273141 0.879279 0.312695C0.872071 0.354726 0.85126 0.377915 0.841688 0.386763C0.842714 0.390816 0.843601 0.395065 0.84432 0.399514C0.844564 0.399655 0.84481 0.399799 0.84506 0.399947C0.847592 0.401446 0.856733 0.406873 0.866522 0.417554L0.866556 0.417591C0.870724 0.42214 0.911082 0.466172 0.898244 0.540569C0.892303 0.575 0.877138 0.596798 0.867056 0.607964C0.861286 0.614354 0.855687 0.618983 0.851033 0.622275C0.851748 0.622351 0.852478 0.622434 0.853151 0.622519C0.884997 0.662731 0.893973 0.708149 0.892009 0.748963C0.896718 0.748915 0.90145 0.748887 0.906194 0.748887C0.958002 0.748887 1 0.804331 1 0.872726C1 0.94112 0.958002 0.996565 0.906194 0.996565C0.88909 0.996565 0.871888 0.996971 0.853703 0.997403L0.853312 0.997413C0.835522 0.997836 0.816768 0.998282 0.797831 0.998282C0.785521 0.998282 0.77303 0.998671 0.759232 0.999106L0.75875 0.999121C0.745455 0.999541 0.730896 1 0.716146 1C0.700442 1 0.679941 0.99783 0.666782 0.996437C0.662291 0.995962 0.658656 0.995577 0.656358 0.9954C0.637706 0.993962 0.618616 0.994041 0.595933 0.994134L0.595667 0.994135C0.573883 0.994225 0.548626 0.994323 0.522821 0.992104C0.514412 0.991381 0.505277 0.991346 0.493062 0.991482C0.491846 0.991495 0.490586 0.991511 0.489287 0.991527C0.478604 0.99166 0.465287 0.991825 0.451903 0.991124C0.426865 0.989812 0.402904 0.983846 0.386291 0.979709C0.384511 0.979266 0.382816 0.978844 0.381213 0.978451C0.359115 0.973031 0.3359 0.97317 0.300856 0.973412L0.300769 0.973413C0.268911 0.973633 0.226175 0.973928 0.182011 0.960817C0.169777 0.957186 0.159725 0.953965 0.151093 0.951199C0.129986 0.944435 0.117368 0.940391 0.1021 0.939719L0.101702 0.939701C0.100396 0.939645 0.0978321 0.939534 0.0952875 0.939365L0.0951356 0.939355C0.0932249 0.939228 0.0871499 0.938827 0.0807802 0.937519C0.0788598 0.937125 0.0754283 0.936356 0.0712887 0.934964L0.0711927 0.934932C0.0685738 0.934052 0.0583233 0.930609 0.046865 0.921824C0.041172 0.917459 0.0286119 0.9069 0.0177536 0.887007C0.00498963 0.863622 -0.00449545 0.828172 0.00222003 0.787871C0.0080337 0.752981 0.0232753 0.731707 0.0309336 0.72255C0.0392042 0.71266 0.046996 0.706909 0.051027 0.70416C0.0616028 0.696947 0.0717134 0.693669 0.0753906 0.692625C0.078015 0.678007 0.082227 0.66646 0.0857149 0.658567C0.0768537 0.640632 0.069789 0.616345 0.0708617 0.585152C0.0726007 0.534585 0.0955216 0.504415 0.105402 0.493414C0.103642 0.491307 0.10187 0.489036 0.100107 0.486589C0.0906525 0.473468 0.0692831 0.437624 0.0740625 0.384276C0.0777587 0.343019 0.0949095 0.317067 0.106508 0.303762C0.0959296 0.282888 0.0886469 0.255788 0.090312 0.223572C0.092472 0.181782 0.108975 0.154577 0.116066 0.144166C0.130736 0.122628 0.14794 0.110787 0.158549 0.105148C0.189802 0.088537 0.223525 0.0828921 0.246497 0.0808996C0.270732 0.0787975 0.29543 0.0772934 0.321336 0.0772934C0.336815 0.0772934 0.351916 0.0782811 0.36449 0.0791034L0.365393 0.0791625C0.378918 0.0800464 0.389747 0.0807286 0.400202 0.0807286C0.442595 0.0807286 0.482927 0.0784399 0.525436 0.0760276C0.545348 0.0748976 0.565738 0.0737405 0.587042 0.0727788C0.59806 0.0555106 0.609533 0.0461368 0.61342 0.0429766C0.622495 0.0355984 0.630805 0.0310888 0.635047 0.0289264C0.650413 0.0210927 0.66495 0.017449 0.674274 0.015414C0.678848 0.0144158 0.683308 0.0135798 0.686585 0.0129654L0.687152 0.0128592C0.690892 0.0121576 0.693148 0.0117235 0.695056 0.0112951ZM0.16929 0.597732C0.169301 0.597731 0.169447 0.597731 0.169699 0.597735C0.169405 0.597735 0.169279 0.597733 0.16929 0.597732ZM0.112719 0.935295C0.112719 0.935295 0.112759 0.935287 0.11284 0.935271C0.11276 0.935288 0.112718 0.935296 0.112719 0.935295ZM0.691391 0.0501872C0.691002 0.0501278 0.690708 0.0501123 0.69045 0.0500989C0.690333 0.0500927 0.690224 0.050087 0.690117 0.0500777C0.690543 0.0501147 0.690968 0.0501512 0.691391 0.0501872Z"
              fill="black"
            />
          </clipPath>
          <clipPath id="clipPath2" clipPathUnits="objectBoundingBox">
            <path d="M0 0H0.808144V0.856972H0V0Z" fill="black" />
            <path d="M0.213941 0.140036H1V1H0.213941V0.140036Z" fill="black" />
          </clipPath>
          <clipPath id="clipPath3" clipPathUnits="objectBoundingBox">
            <path
              d="M0 0.404133C0 0.18097 0.180909 6.10352e-05 0.404072 6.10352e-05V6.10352e-05C0.627235 6.10352e-05 0.808144 0.18097 0.808144 0.404133V0.452961C0.808144 0.676124 0.627235 0.857033 0.404072 0.857033V0.857033C0.180909 0.857033 0 0.676124 0 0.452961V0.404133Z"
              fill="black"
            />
            <path
              d="M0.213941 0.533126C0.213941 0.316062 0.389906 0.140097 0.60697 0.140097V0.140097C0.824035 0.140097 1 0.316062 1 0.533126V0.607032C1 0.824096 0.824035 1.00006 0.60697 1.00006V1.00006C0.389906 1.00006 0.213941 0.824096 0.213941 0.607032V0.533126Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>
      <div className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-20">
            <div className="col-span-1">
              <div className="pr-9 text-center lg:text-left">
                <h1 className="text-center lg:text-left text-6xl mb-3 text-slate-700 font-semibold">
                  A Tranquil <br />
                  Coffee Haven
                </h1>
                <div className="text-center lg:text-left text-balance text-base leading-8 text-slate-700">
                  <span className="bg-slate-500 text-white p-2">Green Leaf Coffee Shop</span> offers a serene,
                  nature-inspired ambiance that makes it the perfect place to relax and enjoy a coffee break in a lush,
                  tranquil setting.
                </div>
                <Link
                  className={cn(
                    buttonVariants({
                      size: 'lg',
                      variant: 'default',
                    }),
                    'mt-8 mb-8 lg:mb-0',
                  )}
                  href="/products"
                >
                  <ShoppingBasket className="mr-2" />
                  Buy now
                </Link>
              </div>
            </div>
            <div className="col-span-1">
              <div className="w-full max-w-[600px] aspect-square relative mx-auto">
                <Image
                  style={{ clipPath: 'url(#clipPath3)' }}
                  fill
                  src="/image/hero.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="about-us" className="bg-slate-100">
        <div className="max-w-screen-xl mx-auto px-20 py-20 lg:py-28 lg:px-28">
          <Heading as="h2" className="mb-12">
            About Us
          </Heading>
          <p className="leading-6 text-balance text-center text-slate-700 mb-10">
            At Green Leaf Coffee Shop, we blend nature with comfort to create a serene retreat for coffee lovers. Our
            mission is to provide a peaceful space where you can relax, unwind, and savor the moment.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            <AboutCard
              icon={BookOpen}
              title="Our Story"
              description="Founded to offer a peaceful escape and foster community."
            />
            <AboutCard
              icon={Handshake}
              title="Unique Experience"
              description="Enjoy our lush décor and handcrafted beverages for a relaxing visit."
            />
            <AboutCard
              icon={Handshake}
              title="Unique Experience"
              description="Enjoy our lush décor and handcrafted beverages for a relaxing visit."
            />
          </div>
        </div>
      </section>

      <section id="our-products" className="bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 lg:py-28 lg:px-8">
          <Heading as="h2" className="mb-12">
            Our Products
          </Heading>

          <div className="grid grid-cols-2 lg:grid-cols-5">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </section>
    </>
  );
}
