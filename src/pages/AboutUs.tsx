import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const FloatingPhoto = ({ src, name, role, className, delay = 0, animation = "animate-float" }: { src: string; name: string; role: string; className: string; delay?: number; animation?: string }) => (
  <div className={`absolute ${className} w-28 md:w-44 lg:w-52 transform`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`${animation} pointer-events-auto`}
    >
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border-4 md:border-8 border-white hover:scale-110 hover:duration-300 transition-transform cursor-pointer">
        <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200">
          <img src={src} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="px-2 py-1 md:px-4 md:py-3 font-sans">
          <h3 className="font-bold text-gray-900 text-[10px] md:text-sm lg:text-base leading-tight">
            {name}
          </h3>
          <p className="text-[8px] md:text-xs text-gray-600">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
);

const MemberCard = ({ src, name, role, colorTheme = "blue" }: { src: string; name: string; role: string; colorTheme?: "blue" | "green" | "cyan" | "teal" | "yellow" }) => {
  const themes = {
    blue: "from-blue-100 to-blue-200 text-blue-600",
    green: "from-green-100 to-green-200 text-green-600",
    cyan: "from-cyan-100 to-cyan-200 text-cyan-600",
    teal: "from-teal-100 to-teal-200 text-teal-600",
    yellow: "from-yellow-100 to-yellow-200 text-yellow-600",
  };

  return (
    <div className="pointer-events-auto h-full">
      <div className="bg-white rounded-lg md:rounded-xl lg:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden border-2 md:border-4 lg:border-8 border-white hover:scale-105 md:hover:scale-110 duration-300 transition-transform cursor-pointer flex flex-col h-full">
        <div className={`aspect-[3/4] overflow-hidden bg-gradient-to-br ${themes[colorTheme]}`}>
          {src ? (
            <img src={src} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full flex items-center justify-center font-display text-4xl`}>?</div>
          )}
        </div>
        <div className="px-2 py-2 md:px-3 md:py-2 lg:px-4 lg:py-3 flex flex-col flex-grow font-sans">
          <h3 className="font-bold text-gray-900 text-[10px] md:text-xs lg:text-sm leading-snug break-words mb-1">
            {name}
          </h3>
          <div className="mt-auto">
            <p className="text-[8px] md:text-[10px] lg:text-xs text-gray-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ prefix, title, subtitle }: { prefix: string; title: string; subtitle?: string }) => (
  <div className="mt-20 mb-10 text-center font-display">
    <h1 className="text-2xl md:text-3xl text-[#BDBAC6] mb-4">
      $ {prefix} <span className="text-white">{title}</span>
    </h1>
    {subtitle && (
      <p className="text-[#BDBAC6] text-sm md:text-base max-w-2xl mx-auto px-4 mt-2">
        {subtitle}
      </p>
    )}
  </div>
);

const AboutUs = () => {
  const divisions = [
    {
      name: "PENGURUS HARIAN",
      subtitle: "Tim inti yang bertanggung jawab atas perencanaan dan pelaksanaan IFEST #14.",
      members: [
        { name: "Alegra Bone Fasia Samosir", role: "Ketua", src: "https://i.ibb.co.com/MDCXNd35/Alegra.png" },
        { name: "Daniel Nomorisa", role: "Sekretaris", src: "https://i.ibb.co.com/XrgDhhVd/Daniel.png" },
        { name: "Tabita Adventina Omegasari", role: "Bendahara", src: "https://i.ibb.co.com/zV02RsV1/Tabita.png" },
      ]
    },
    {
      name: "ACARA",
      subtitle: "Penyelenggara yang mengoordinasikan dan menjalankan acara IFEST #14.",
      members: [
        { name: "Natasya Yosepha Devianica Br Sitepu", role: "Koordinator", src: "https://i.ibb.co.com/jZs1P0kD/Natasya.png" },
        { name: "R Haryo Adhitio Prabowo", role: "Anggota", src: "https://i.ibb.co.com/KjD3VFR2/Haryo.png" },
        { name: "Petrus Leonidas Cokrodiharjo", role: "Anggota", src: "https://i.ibb.co.com/sJcWvd6f/Leon.png" },
        { name: "Clarence Valencia", role: "Anggota", src: "https://i.ibb.co.com/kgYq1CbZ/Aren.png" },
        { name: "Gustav Adam Athar Rakhman", role: "Anggota", src: "https://i.ibb.co.com/vvhdhgTb/Adam.png" },
        { name: "Tristan Hengtie Linardi", role: "Anggota", src: "https://i.ibb.co.com/4nsx22RB/Tristan.png" },
        { name: "Karina Felisitas Lolong", role: "Anggota", src: "https://i.ibb.co.com/F4r3BK9g/Karina.png" },
        { name: "Reynard Justin Wibisana", role: "Anggota", src: "https://i.ibb.co.com/8LQM5gNp/Justin.png" },
      ]
    },
    {
      name: "MULTIMEDIA & DOKUMENTASI",
      subtitle: "Mengelola konten visual dan dokumentasi acara IFEST #14.",
      members: [
        { name: "Aldiondra Ahira Saputra", role: "Koordinator", src: "https://i.ibb.co.com/KcYP7C66/Dion.png" },
        { name: "Raymundus Epifani Mahendra Bayuaji B. N.", role: "Anggota", src: "https://i.ibb.co.com/v4JXV0k3/Raymundus.png" },
        { name: "Kadek Yudi Darmawan", role: "Anggota", src: "https://i.ibb.co.com/yF65nw93/Yudi.png" },
        { name: "Tegar Bima Samudra", role: "Anggota", src: "https://i.ibb.co.com/SH7FbWd/Bima.png" },
        { name: "Maximillian Marveloise Tristiandika", role: "Anggota", src: "https://i.ibb.co.com/ymLh0mwS/Marvel.png" },
        { name: "Vandeco Windy Danarta", role: "Anggota", src: "https://i.ibb.co.com/q3G2SPqj/Vandeco.png" },
        { name: "Amaragathi Gandhes Nrpaduhita Hendartanto", role: "Anggota", src: "https://i.ibb.co.com/ZpyCd0Fy/Amara.png" },
        { name: "Jonea Satwika Ardra", role: "Anggota", src: "https://i.ibb.co.com/B5k0s99N/Ardra.png" },
        { name: "Hadriel Pascale Pagilalo", role: "Anggota", src: "https://i.ibb.co.com/BVnWdFq2/Hadriel.png" },
        { name: "Iwang Petra Dheerendra", role: "Anggota", src: "https://i.ibb.co.com/GvcPPpkv/Petra.png" },
      ]
    },
    {
      name: "SEKRETARIAT",
      subtitle: "Mengelola administrasi serta koordinasi internal acara IFEST #14.",
      members: [
        { name: "Rhexsen Thenzie", role: "Koordinator", src: "https://i.ibb.co.com/hJLXZLMp/Rhexsen.png" },
        { name: "Catharina Cindy Setiawati", role: "Anggota", src: "https://i.ibb.co.com/0RDXk9JV/Cindy.png" },
        { name: "Devina Neisya Setiadi", role: "Anggota", src: "https://i.ibb.co.com/TDjBvxjp/Naya.png" },
        { name: "Elizabeth Edina Laksawana", role: "Anggota", src: "https://i.ibb.co.com/YBL3HmWw/Edina.png" },
        { name: "Willy Susanto", role: "Anggota", src: "https://i.ibb.co.com/9mgkmB99/Willy.png" },
        { name: "Riandy Johansen Tengker", role: "Anggota", src: "https://i.ibb.co.com/4nyWV9Nx/Riiandy.png" },
        { name: "Silvanus Febrianesha Widyatama", role: "Anggota", src: "https://i.ibb.co.com/F4SkGxk0/Widy.png" },
        { name: "M Fajar Bangsawan", role: "Anggota", src: "https://i.ibb.co.com/DP63LrnN/Fajar.png" },
        { name: "Joseph Diamond Marci", role: "Anggota", src: "https://i.ibb.co.com/gFt2bh7K/Joey.png" },
        { name: "Alexandria Audrey Deitra Wijaya", role: "Anggota", src: "https://i.ibb.co.com/bMjdbHhJ/Audrey.png" },
      ]
    },
    {
      name: "PUBLIC AFFAIRS",
      subtitle: "Menjalin komunikasi, relasi, dan citra publik IFEST #14.",
      members: [
        { name: "Graciano Marcel Christianto", role: "Koordinator", src: "https://i.ibb.co.com/k6VWfBcR/Marcel.png" },
        { name: "Grace Christa Michella", role: "Anggota", src: "https://i.ibb.co.com/5WB4WTyJ/Grace.png" },
        { name: "Emanita Chatarina Br Ginting", role: "Anggota", src: "https://i.ibb.co.com/271qQSdD/Eman.png" },
        { name: "Farelino Alexander Kim", role: "Anggota", src: "https://i.ibb.co.com/gMkfMSdY/Farel.png" },
        { name: "Pebi Paulina Manullang", role: "Anggota", src: "https://i.ibb.co.com/sdWSBLjw/Pebi.png" },
        { name: "Nathanael Kahisa Wojtyla", role: "Anggota", src: "https://i.ibb.co.com/Fk5Cr7Gx/Nathanael.png" },
        { name: "Samuel Gavril Eleazra", role: "Anggota", src: "https://i.ibb.co.com/dsGhS247/Samuel.png" },
        { name: "Ni Putu Nadya Maharani", role: "Anggota", src: "https://i.ibb.co.com/PzmDwcPj/Nadya.png" },
      ]
    },
    {
      name: "WEB DEVELOPMENT",
      subtitle: "Mengembangkan dan mengelola website resmi IFEST #14.",
      members: [
        { name: "Joaquin Thiogo", role: "Koordinator", src: "https://i.ibb.co.com/RTmGTjWS/Joaquin.png" },
        { name: "Bagus Tito Wijoyo", role: "Anggota", src: "https://i.ibb.co.com/Kp4DpHK9/Tito.png" },
        { name: "Reinhart Gabriel Marshall", role: "Anggota", src: "https://i.ibb.co.com/XxC7fmGD/Marshall.png" },
        { name: "Bryan Jacquellino", role: "Anggota", src: "https://i.ibb.co.com/BmJgxvW/Bryan.png" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background crt-overlay overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-start py-20 px-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <img src="/src/assets/bintang.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="absolute top-40 left-0 w-64 md:w-96 z-0 pointer-events-none opacity-40">
            <img src="/src/assets/icon/cloud.svg" alt="" className="w-full" />
          </div>
          <div className="absolute top-60 right-0 w-64 md:w-96 z-0 pointer-events-none scale-x-[-1] opacity-40">
            <img src="/src/assets/icon/cloud.svg" alt="" className="w-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center mb-10"
          >
            <h1 className="font-jersey text-5xl md:text-8xl gradient-text-fire mb-6 [filter:drop-shadow(0_0_15px_rgba(231,181,45,0.4))]">
              TENTANG KAMI
            </h1>
            <p className="font-sans text-[#BDBAC6] text-sm md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              Di ICONLAB.ILKOM 2026, tim kami berdedikasi untuk menjadikan setiap rangkaian acara lebih terstruktur,
              interaktif, dan bermakna bagi peserta, sponsor, dan seluruh pihak yang terlibat.
            </p>
          </motion.div>

          {/* Floating Photos - Desktop/Tablet Layout */}
          <div className="relative w-full max-w-7xl h-[400px] md:h-[600px] mt-20 mb-32 hidden md:block">
            <FloatingPhoto
              src="https://i.ibb.co.com/RTmGTjWS/Joaquin.png"
              name="Joaquin Thiogo"
              role="Koordinator Web Dev"
              className="bottom-10 left-[2%] -rotate-12"
              delay={0.1}
              animation="animate-float-slow"
            />
            <FloatingPhoto
              src="https://i.ibb.co.com/TDjBvxjp/Naya.png"
              name="Devina Neisya Setiadi"
              role="Sekretariat"
              className="bottom-20 left-[20%] -rotate-3"
              delay={0.2}
              animation="animate-float"
            />
            <FloatingPhoto
              src="https://i.ibb.co.com/5WB4WTyJ/Grace.png"
              name="Grace Christa Michella"
              role="Public Affairs"
              className="bottom-12 left-[49%] -translate-x-1/2 rotate-6"
              delay={0.3}
              animation="animate-float-fast"
            />
            <FloatingPhoto
              src="https://i.ibb.co.com/XxC7fmGD/Marshall.png"
              name="Reinhart Gabriel Marshall"
              role="Web Dev"
              className="bottom-20 right-[20%] rotate-8"
              delay={0.4}
              animation="animate-float"
            />
            <FloatingPhoto
              src="https://i.ibb.co.com/JjzVJNrL/Bagus.png"
              name="Putu Bagus Susila Dinata Pranoto"
              role="Alumni Web Dev"
              className="bottom-10 right-[2%] rotate-12"
              delay={0.5}
              animation="animate-float-slow"
            />
          </div>

          {/* Simple Grid for Mobile Floating Section */}
          <div className="grid grid-cols-2 gap-4 mt-10 md:hidden z-10">
            {/* Simplified cards for mobile */}
            {[
              { src: "https://i.ibb.co.com/RTmGTjWS/Joaquin.png", name: "Joaquin T.", role: "Web Dev" },
              { src: "https://i.ibb.co.com/TDjBvxjp/Naya.png", name: "Devina N.", role: "Sekretariat" },
              { src: "https://i.ibb.co.com/5WB4WTyJ/Grace.png", name: "Grace C.", role: "Public Affairs" },
              { src: "https://i.ibb.co.com/XxC7fmGD/Marshall.png", name: "Reinhart M.", role: "Web Dev" }
            ].map((m, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-xl text-center">
                <img src={m.src} className="w-full aspect-[3/4] object-cover rounded-lg mb-2" alt="" />
                <p className="text-[10px] font-bold text-white">{m.name}</p>
                <p className="text-[8px] text-gray-400">{m.role}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-10">
            <a
              href="#pengurus-harian"
              className="px-8 py-3 bg-retro-yellow text-black font-display text-xs tracking-wider rounded-full hover:bg-yellow-500 transition-all hover:scale-105 shadow-[0_0_20px_rgba(231,181,45,0.3)]"
            >
              LIHAT SEMUA
            </a>
          </div>
        </section>

        {/* Facts Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <SectionTitle prefix="nano" title="FACTS.txt" subtitle="Kami adalah tim yang terdiri dari berbagai divisi dengan semangat yang sama untuk mengembangkan pionir melalui kompetisi dan workshop teknologi." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { val: "60", label: "ANGGOTA", color: "from-purple-500 to-pink-500" },
              { val: "3", label: "ACARA", color: "from-blue-500 to-cyan-500" },
              { val: "1", label: "TUJUAN", color: "from-green-500 to-emerald-500" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="relative bg-white/5 backdrop-blur-md rounded-2xl px-12 py-8 border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-white/20">
                    <span className={`text-6xl md:text-8xl font-bold font-display bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent tracking-wider`}>
                      {stat.val}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 text-sm md:text-lg mt-4 font-display tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Mission Core Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-black/20 rounded-[3rem] border border-white/5 relative overflow-hidden">
          <img src="/src/assets/icon/char_panda.svg" className="absolute -bottom-10 -right-10 w-64 opacity-10 pointer-events-none" alt="" />
          <SectionTitle prefix="cat" title="VISION_MISSION.json" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-retro-yellow/10 to-transparent p-8 rounded-3xl border-2 border-retro-yellow/30 shadow-2xl relative overflow-hidden group hover:border-retro-yellow/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-retro-yellow/20 rounded-bl-full blur-2xl" />
              <h2 className="font-jersey text-3xl md:text-4xl text-retro-yellow mb-6">VISI</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans">
                Menjadi wadah pengembangan diri yang inklusif dan progresif untuk mendorong generasi muda berinovasi tanpa batas, mengubah keterbatasan menjadi peluang, serta melahirkan talenta informatika yang kreatif, adaptif, dan berdaya saing.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-retro-blue/10 to-transparent p-8 rounded-3xl border-2 border-retro-blue/30 shadow-2xl relative overflow-hidden group hover:border-retro-blue/50 transition-colors"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-retro-blue/20 rounded-bl-full blur-2xl" />
              <h2 className="font-jersey text-3xl md:text-4xl text-retro-blue mb-6">MISI</h2>
              <ul className="space-y-4 font-sans text-gray-300">
                {[
                  "Memberikan kesempatan bagi pelajar dan mahasiswa di Indonesia untuk memperluas wawasan tentang tren dan peluang di bidang informatika.",
                  "Mengasah kemampuan pemecahan masalah melalui pendekatan analitis dan penerapan teknologi.",
                  "Mewadahi pengembangan ide, karya, dan solusi inovatif dengan menjadikan keterbatasan sebagai pemicu kreativitas.",
                  "Membangun lingkungan kolaboratif untuk bertukar gagasan, memperluas relasi, dan berkolaborasi dalam inovasi teknologi."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-retro-blue mt-1">▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl"
          >
            <h2 className="font-jersey text-3xl md:text-4xl text-white mb-8 text-center">NILAI DASAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Inklusif", desc: "Kesempatan setara bagi semua dengan menghargai keberagaman." },
                { title: "Integritas", desc: "Menjunjung kejujuran, transparansi, dan tanggung jawab." },
                { title: "Humanis", desc: "Mengutamakan kenyamanan, aksesibilitas, dan komunikasi yang menghargai." },
                { title: "Unggul", desc: "Mendorong inovasi dan kualitas karya terbaik yang terstruktur." }
              ].map((val, i) => (
                <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                  <h3 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">{val.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Division Grids */}
        {divisions.map((div, i) => (
          <section key={div.name} id={div.name.toLowerCase().replace(/ /g, '-')} className="py-20 px-6 max-w-7xl mx-auto scroll-mt-24">
            <SectionTitle prefix="groups" title={div.name} subtitle={div.subtitle} />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
              {div.members.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 5) * 0.1 }}
                >
                  <MemberCard {...member} colorTheme={i % 2 === 0 ? "blue" : "green"} />
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <FooterSection />
      </main>
    </div>
  );
};

export default AboutUs;
