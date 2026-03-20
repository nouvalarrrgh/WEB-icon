import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cloudFooter from "@/assets/cloud.svg";
import bintangBg from "@/assets/bintang.svg";

const faqs = [
  {
    question: "Apa itu ICON.LAB?",
    answer: "ICON.LAB adalah acara tahunan yang diselenggarakan oleh HIMA ILKOM sebagai wadah pengembangan minat dan kreativitas di bidang teknologi dan informatika.",
  },
  {
    question: "ICON.LAB ada acara apa saja?",
    answer: "ICON.LAB memiliki rangkaian acara yang seru tentunya, yaitu Game Development, Lomba KTI, dan Mobile Legend.",
  },
  {
    question: "Siapa saja yang boleh ikut ICON.LAB?",
    answer: "ICON.LAB membuka peluang bagi baik bagi pelajar dan mahasiswa sesuai dengan ketentuan masing-masing lomba.",
  },
  {
    question: "ICON.LAB diadakan setiap tahun atau hanya tahun ini saja?",
    answer: "ICON.LAB dilaksanakan setiap tahunnya.",
  },
  {
    question: "Apakah ICON.LAB dilaksanakan secara offline?",
    answer: "Lomba dalam ICON.LAB dilaksanakan secara hybrid, dimana babak final dilaksanakan secara offline.",
  },
  {
    question: "Dimana saya bisa mendapatkan informasi terbaru?",
    answer: "Informasi terbaru terkait ICON.LAB dapat dilihat melalui website dan Instagram resmi.",
  },
  {
    question: "Jika ada pertanyaan lain, harus ke mana?",
    answer: "Tenang saja, pertanyaan lain terkait ICON.LAB dapat menghubungi panitia melalui kontak yang tersedia di website atau melalui akun Instagram resmi.",
  },
  {
    question: "Apakah seluruh anggota harus membuat akun?",
    answer: "Tidak perlu, yang membuat akun hanyalah ketua tim.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(0 0% 100% / 0.2) 1px, transparent 1px),
            linear-gradient(90deg, hsl(0 0% 100% / 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover [transform:scaleX(-1)] z-0 pointer-events-none opacity-30" />
      <img src={cloudFooter} className="absolute bottom-0 w-full h-auto object-cover z-0 pointer-events-none opacity-80" alt="Cloud Footer" />
      {/* Gradient overlay to darken cloud */}
      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-b from-transparent to-background/80 z-[1] pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-[10px] text-retro-cyan text-glow-cyan tracking-[0.4em]">[ HELP MENU ]</span>
          <h2 className="font-display text-xl sm:text-3xl mt-4 gradient-text leading-relaxed">
            FAQ
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b-2 border-primary/15 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="flex-1 mr-3">
                  <span className="text-retro-yellow text-glow-yellow font-display text-[10px]">[?]</span>{" "}
                  <span className="text-foreground hover:text-primary transition-colors text-base leading-relaxed">
                    {faq.question}
                  </span>
                </span>
                <span className={`text-primary text-glow font-display text-sm flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  {openIndex === index ? "+" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 text-muted-foreground text-base leading-relaxed pl-6"
                >
                  <span className="text-retro-green text-glow font-display text-[10px]">[►]</span>{" "}
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
