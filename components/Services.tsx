import Image from "next/image";
import { ServicesBackground } from "./ui/services-background";

export function Services() {
  return (
    <section className=" pt-8 md:pb-32 pb-12">
      <div className="flex flex-col  md:flex-row  md:px-14 px-6  md:gap-20 gap-10 pb-20">
        <div className="flex flex-col gap-4 font-roboto min-w-fit text-sm md:text-base">
          <p className="pl-6 opacity-50">Revesport</p>
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-default-white rotate-45"></div>
            <p>Services</p>
          </div>
          <p className="pl-6 opacity-50">The Reason</p>
        </div>
        <h2 className="lg:text-8xl text-6xl leading-none">
          WHAT CAN REVESPORT <br /> OFFER YOU?
        </h2>
      </div>
      <section className="w-full relative">
        <ServicesBackground />
        <div className="w-full lg:px-44 md:px-14 px-6">
          <div className="w-full flex flex-col-reverse md:flex-row md:gap-28 gap-10 justify-start md:items-center  mb-10">
            <Image
              src="/images/services1.jpeg"
              alt="image"
              width={420}
              height={440}
              className="lg:w-[420px] lg:h-[440px] md:w-[300px] md:h-[280px] place-self-start md:place-self-auto object-cover object-center"
            ></Image>
            <div>
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="md:w-4 md:h-4 w-2 h-2 bg-default-white rotate-45"></div>
                <p>01/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" lg:text-4xl text-3xl pb-4">APPLY THROUGH FORM</h2>
                <p className="opacity-60 font-roboto text-xs lg:text-basis">
                  We will get back to your form as soon as possible and evaluate
                  your situation.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse  md:flex-row-reverse md:gap-28 gap-10 justify-start md:items-center items-end mb-10">
            <Image
              src="/images/services2.jpeg"
              alt="image"
              width={420}
              height={440}
              className="lg:w-[420px] lg:h-[440px] md:w-[300px] md:h-[280px] object-cover md:place-self-start place-self-end object-center"
            ></Image>
            <div>
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>02/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" lg:text-4xl text-3xl pb-4">START TO PROCESS</h2>
                <p className="opacity-60 font-roboto text-xs lg:text-basis">
                  Let&apos;s start a comprehensive counselling service, including a
                  personalised video.
                </p>
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
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>03/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" lg:text-4xl text-3xl pb-4">DREAM COMES TRUE</h2>
                <p className="opacity-60 font-roboto text-xs lg:text-basis">
                  Now just enjoy the scholarship with the great education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
