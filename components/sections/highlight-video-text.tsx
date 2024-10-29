import { impact, roboto } from "@/app/fonts/fonts";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Camera,
  Mail,
  Phone,
  PlayCircle,
  Trophy,
} from "lucide-react";
import Link from "next/link";

export function HighlightVideoText({}) {
  return (
    <section
      className={cn("w-full bgtext-white py-16 px-4 md:px-8", roboto.className)}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className={cn("space-y-4", impact.className)}>
          <div className="flex items-center gap-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
              HAYALLERİNİZE GİDEN YOL
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-6 h-6" />
            <p className="text-xl md:text-2xl font-semibold">
              HIGHLIGHT VİDEO!
            </p>
          </div>
        </div>

        {/* Main Text */}
        <p className="text-lg text-gray-300">
          Sporda mükemmelliği hedefliyorsunuz. Biz de size bu yolda eşlik
          ediyoruz!
        </p>

        {/* Goals Section */}
        <div className="space-y-3">
          <p className="text-lg">
            Hayalinizdeki üniversiteye adım atmak mı istiyorsunuz?
          </p>

          <p className="text-lg">
            Spor kariyerinizde yeni kapılar aralamaya hazır mısınız?
          </p>

          <p className="text-lg">
            Yeteneğinizi dünyaya göstermenin tam zamanı!
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-slate-900/50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Size Özel Highlight Video Hizmeti:
          </h3>

          <ul className="space-y-2 ml-6 text-gray-300">
            <li className="list-disc">
              Yeteneklerinizi en etkileyici şekilde sergileyen 3-5 dakikalık
              özel prodüksiyon
            </li>
            <li className="list-disc">
              Rekabette öne çıkmanızı sağlayan kusursuz sunumlar
            </li>
            <li className="list-disc">
              Yetenek avcılarının dikkatini çekecek kalitede içerik
            </li>
          </ul>
        </div>

        {/* Why Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Neden Highlight Video?</h3>
          <p className="text-gray-300">
            Çünkü yeteneğiniz, tek bir videoyla binlerce kelimeden daha
            fazlasını anlatabilir. Bu videolar, potansiyelinizi en etkili
            şekilde göstererek başvurularınızı güçlendirir ve sizi
            rakiplerinizden ayırır.
          </p>
        </div>

        {/* Target Section */}

        <div className="text-center space-y-4">
          <p className="text-lg font-bold">
            Sizin için buradayız! Hayallerinize giden yolda desteğimizle fark
            yaratın.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-default-black text-default-white px-6 py-3 rounded-full hover:bg-default-white hover:text-default-black hover:border-default-black transition-colors border border-default-white"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">Bize Ulaşın</span>
            </Link>
            <Link
              href="/apply"
              className="flex items-center gap-2 bg-default-white text-default-black px-6 py-3 rounded-full hover:bg-default-black hover:text-default-white hover:border-default-white border transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-bold">Hemen Başvur</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
