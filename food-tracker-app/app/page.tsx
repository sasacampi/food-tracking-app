import Image from "next/image";
import Link from "next/link";
import Onboarding from "../public/guy.png";
import Carrot from "../public/carrot.png";

export default function OnboardingPage() {
  return (
    <div
      className={`relative w-full h-screen max-w-[414px] mx-auto font-poppins`}
    >
      {/* Background Image */}
      <Image
        src={Onboarding}
        alt="Onboarding"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0" // Ensure the image is behind the overlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-6 pb-12 bg-black/40 z-10">
        {/* Group Carrot and Content Together */}
        <div className="flex flex-col items-center space-y-4">
          {/* Carrot Image */}
          <div>
            <Image
              src={Carrot}
              alt="Carrot"
              width={50}
              height={50}
              className="z-20"
            />
          </div>

          {/* Main Content */}
          <div className="text-white">
            <h2 className="text-3xl font-Poppins font-bold">
              Comece a sua jornada com a Taco agora!
            </h2>
            <p className="text-md font-sans font-light leading-5.3 mt-2">
              Conte calorias, acompanhe macronutrientes e registre suas
              refeições. A maneira mais fácil e rápida de ficar em forma e
              saudável.
            </p>
          </div>

          {/* Buttons */}
          <div className="w-full max-w-xs space-y-2">
            <button
              className="w-full bg-[#359EFF] text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-[#2a8ee6] transition-colors"
              style={{ backgroundColor: "#359EFF" }} // Fallback for older browsers
            >
              Criar nova conta
            </button>
            <p className="text-white font-sans">
              Já possui uma conta?{" "}
              <Link
                href="/login"
                className="underline font-sans text-blue-300 hover:text-[#1961CD] transition-colors"
              >
                Entre aqui.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
