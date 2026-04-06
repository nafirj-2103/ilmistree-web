import { Header } from "../home/Header";
import { SecondaryNavbar } from "../home/SecondaryNavbar";
import { Footer } from "../home/Footer";

const subjects = [
  "Physics",
  "Maths",
  "Biology",
  "Chemistry",
  "Computer",
  "English",
  "Urdu",
  "Islamiat",
];

export default function PctbPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SecondaryNavbar />

      <section className="w-full bg-white">
        <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a0003] via-[#3d0008] to-[#6b0010]">
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#ee1c25]/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-[#ee1c25]/5 blur-2xl pointer-events-none" />
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#ee1c25] to-transparent" />

          <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#ee1c25]/20 border border-[#ee1c25]/40 rounded-full px-4 py-1.5 mb-5">
                <span className="text-[#ee1c25] text-xs font-semibold tracking-wider uppercase">
                  PCTB Official Textbooks
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                9th Class Textbooks{" "}
                <span className="bg-gradient-to-r from-[#ee1c25] to-[#ff6b6b] bg-clip-text text-transparent">
                  PDF — All Subjects
                </span>
              </h2>

              <div className="flex items-start gap-3 mb-8">
                <div className="w-1 min-h-full bg-[#ee1c25] rounded-full self-stretch mt-1" />
                <p className="text-gray-300 text-base leading-relaxed">
                  Students can easily access official Punjab Curriculum &amp; Textbook Board (PCTB)
                  9th class digital PDFs. Physics, Chemistry, Mathematics, Biology, Computer
                  Science, English, Urdu, and Islamiat — all in one place for quick viewing and
                  download.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {subjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/15 hover:bg-[#ee1c25]/30 hover:border-[#ee1c25]/60 transition-colors cursor-default"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
              {[
                { value: "9+", label: "Subjects" },
                { value: "80K+", label: "Downloads" },
                { value: "4.7?", label: "Avg Rating" },
                { value: "Free", label: "Always" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center gap-1.5 bg-white/5 border border-white/10 rounded-2xl p-5 min-w-[110px] backdrop-blur-sm"
                >
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                  <span className="text-gray-400 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
