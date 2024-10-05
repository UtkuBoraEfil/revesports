import Image from "next/image";
import { ServicesBackground } from "./ui/services-background";

export function Services() {
  return (
    <section className=" pt-8 pb-32">
      <div className="flex px-14 gap-20 pb-20">
        <div className="flex flex-col gap-4 font-roboto">
          <p className="pl-6 opacity-50">Revesport</p>
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-default-white rotate-45"></div>
            <p>Services</p>
          </div>
          <p className="pl-6 opacity-50">The Reason</p>
        </div>
        <h2 className="text-8xl leading-none">
          WHAT CAN REVESPORT <br /> OFFER YOU?
        </h2>
      </div>
      <section className="w-full relative">
        <ServicesBackground />
        <div className="w-full px-44">
          <div className="w-full flex gap-28 justify-start items-center mb-10">
            <Image
              src="/images/services1.jpeg"
              alt="image"
              width={420}
              height={440}
              className="w-[420px] h-[440px] object-cover object-center"
            ></Image>
            <div>
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>01/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" text-4xl pb-4">APPLY THROUGH FORM</h2>
                <p className="opacity-60 font-roboto">
                  We will get back to your form as soon as possible and evaluate
                  your situation.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row-reverse gap-28 justify-start items-center mb-10">
            <Image
              src="/images/services2.jpeg"
              alt="image"
              width={420}
              height={440}
              className="w-[420px] h-[440px] object-cover object-center"
            ></Image>
            <div>
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>02/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" text-4xl pb-4">START TO PROCESS</h2>
                <p className="opacity-60 font-roboto">
                  Let's start a comprehensive counselling service, including a
                  personalised video.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-28 justify-start items-center mb-10">
            <Image
              src="/images/services3.jpeg"
              alt="image"
              width={420}
              height={440}
              className="w-[420px] h-[440px] object-cover object-center"
            ></Image>
            <div>
              <div className="flex gap-4 items-center pb-8 font-roboto">
                <div className="w-2 h-2 bg-default-white rotate-45"></div>
                <p>03/03</p>
              </div>
              <div className="max-w-[350px]">
                <h2 className=" text-4xl pb-4">DREAM COMES TRUE</h2>
                <p className="opacity-60 font-roboto">
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
