import Image from "next/image";
import { ServicesBackground } from "../ui/services-background";
import { SectionsSidebar } from "../ui/sections-sidebar";
import { roboto } from "@/app/fonts/fonts";
import Link from "next/link";

export function Services() {
  return (
    <section className="py-12 md:pb-32">
      <div className="flex flex-col md:flex-row md:px-14 px-6 md:gap-20 gap-8 pb-10 md:pb-20">
        <SectionsSidebar
          active="Services"
          from="Services"
        />
        <h2 className="lg:text-8xl sm:text-6xl text-4xl leading-none">
          REVESPORT <br /> SİZE NE SUNABİLİR?
        </h2>
      </div>
      <section className="w-full relative">
        <ServicesBackground />
        <div className="w-full lg:px-44 md:px-14 px-6">
          <div className="w-full flex flex-col-reverse md:flex-row md:gap-28 gap-10 justify-start md:items-center  mb-10">
            <Image
              src="/images/services1.jpg"
              alt="image"
              width={420}
              height={440}
              className="lg:w-[420px] lg:h-[440px] md:w-[300px] md:h-[280px] place-self-start md:place-self-auto object-cover object-center services-images-blur"
            />

            <div>
              <div
                className={`flex gap-4 items-center pb-8 ${roboto.className}`}
              >
                <div className="md:w-4 md:h-4 w-2 h-2 bg-default-white rotate-45"></div>
                <p>01/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" lg:text-4xl text-3xl pb-4">
                  FORM ARACILIĞIYLA BAŞVURUN{" "}
                  <Link
                    href="/apply"
                    className="text-sm underline"
                  >
                    buradan
                  </Link>
                </h2>
                <p className={`opacity-60 text-base ${roboto.className}`}>
                  Formunuza mümkün olan en kısa sürede geri dönerek durumunuzu
                  değerlendireceğiz.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end mb-10">
            <div className="w-fit md:w-full flex flex-col-reverse  md:flex-row-reverse md:gap-28 gap-10 justify-start md:items-center items-start">
              <Image
                src="/images/services2.jpeg"
                alt="image"
                width={420}
                height={440}
                className="lg:w-[420px] lg:h-[440px] md:w-[300px] md:h-[280px] object-cover md:place-self-start place-self-end object-center"
              ></Image>
              <div className="flex flex-col justify-self-start md:justify-self-center">
                <div
                  className={`flex gap-4 items-center pb-8 ${roboto.className}`}
                >
                  <div className="w-2 h-2 bg-default-white rotate-45"></div>
                  <p>02/03</p>
                </div>
                <div className="max-w-[350px]">
                  <h2 className=" lg:text-4xl text-3xl pb-4">
                    SÜRECE BAŞLAYALIM
                  </h2>
                  <p className={`opacity-60 text-base ${roboto.className}`}>
                    Kişiselleştirilmiş bir video da dahil olmak üzere kapsamlı
                    bir danışmanlık hizmeti başlatalım.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row md:gap-28 gap-10 justify-start md:items-center mb-10">
            <Image
              src="/images/services3.jpeg"
              alt="image"
              width={420}
              height={440}
              className="lg:w-[420px] lg:h-[440px] md:w-[300px] md:h-[280px]  place-self-start md:place-self-auto object-cover object-center"
            ></Image>
            <div>
              <div
                className={`flex gap-4 items-center pb-8 ${roboto.className}`}
              >
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>03/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" lg:text-4xl text-3xl pb-4">
                  HAYALLERİNİZ GERÇEK OLUYOR
                </h2>
                <p className={`opacity-60 text-base ${roboto.className}`}>
                  Şimdi sadece harika bir eğitimle bursunuzun tadını çıkarın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
