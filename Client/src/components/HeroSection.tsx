import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleJoin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();

    if (trimmed) {
      navigate(`/signup?email=${encodeURIComponent(trimmed)}`);
      return;
    }

    navigate("/signup");
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pt-16 pb-10 sm:block sm:min-h-0 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20"
    >
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <div className="relative mx-auto max-w-6xl">
          <DecorativeMarks />

          <div className="relative z-10 mx-auto max-w-5xl pt-0 sm:pt-12 md:pt-14">
            <h1 className="text-[2.45rem] font-normal leading-[1.02] text-slate-800 min-[380px]:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[4rem]">
              Turning{" "}
              <span className="font-black text-slate-950">learners</span> into
              builders with{" "}
              <span className="relative inline-block font-black text-slate-950">
                real missions
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-red-500 md:h-2" />
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[20rem] text-sm font-medium leading-6 text-slate-600 min-[420px]:max-w-sm sm:max-w-2xl sm:text-base md:mt-8 md:text-lg md:leading-8">
              Tech Assassin gives students the team, mentorship, feedback, and
              project runway they need to move from learning to building.
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-14 max-w-sm sm:mt-16 sm:max-w-xl md:mt-20">
            <p className="mb-3 text-[11px] font-black uppercase text-slate-800 sm:mb-4 sm:text-sm md:mb-5">
              Join us
            </p>
            <form onSubmit={handleJoin} className="flex items-center justify-center gap-2 sm:gap-4">
              <label className="sr-only" htmlFor="hero-email">
                Email address
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email"
                className="h-11 min-w-0 flex-1 rounded-lg border border-slate-100 bg-white px-4 text-sm font-medium text-slate-900 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.65)] outline-none transition-colors placeholder:text-slate-400 focus:border-red-300 sm:h-14 sm:px-6 sm:text-base md:h-16 md:px-7 md:text-lg"
              />
              <button
                type="submit"
                aria-label="Join Tech Assassin"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700 sm:h-14 sm:w-14 md:h-16 md:w-16"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const DecorativeMarks = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 h-full">
    <CodeFace
      className="-left-3 top-[34%] hidden scale-75 min-[380px]:block sm:left-[1%] sm:top-[38%] sm:scale-100"
      rotate="-rotate-12"
      body="bg-emerald-400"
      accent="border-emerald-400"
    />
    <CodeFace
      className="left-[26%] top-[4%] hidden md:block"
      rotate="rotate-6"
      body="bg-yellow-100"
      accent="border-yellow-100"
    />
    <CodeFace
      className="right-[27%] top-[4%] hidden md:block"
      rotate="-rotate-6"
      body="bg-orange-300"
      accent="border-orange-300"
    />
    <CodeFace
      className="-right-3 top-[34%] hidden scale-75 min-[380px]:block sm:right-[1%] sm:top-[38%] sm:scale-100"
      rotate="rotate-12"
      body="bg-blue-300"
      accent="border-blue-300"
    />
  </div>
);

const CodeFace = ({
  className,
  rotate,
  body,
  accent,
}: {
  className: string;
  rotate: string;
  body: string;
  accent: string;
}) => (
  <div className={`absolute ${className}`}>
    <div className={`relative h-16 w-16 rounded-2xl ${body} ${rotate} shadow-lg sm:h-20 sm:w-20`}>
      <div className={`absolute inset-0 rounded-2xl border-4 ${accent} opacity-40`} />
      <div className="absolute left-3 top-4 h-2 w-2 rounded-full bg-slate-900/70 sm:left-4 sm:top-5" />
      <div className="absolute right-3 top-4 h-2 w-2 rounded-full bg-slate-900/70 sm:right-4 sm:top-5" />
      <div className="absolute bottom-4 left-1/2 h-2 w-6 -translate-x-1/2 rounded-full bg-slate-900/50 sm:bottom-5 sm:w-8" />
    </div>
  </div>
);

export default HeroSection;