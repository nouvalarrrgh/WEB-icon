import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const Sponsorship = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030841] min-h-screen font-jersey text-white overflow-x-hidden">
      <style>{`
        @keyframes snowFall {
          0% { transform: translateY(-10%) translateX(0); }
          100% { transform: translateY(50%) translateX(-5%); }
        }
        @keyframes sparkle {
          from { opacity: 0.75; }
          to { opacity: 1; }
        }
        .snow {
          position: absolute;
          top: -10%;
          width: 200%;
          height: 200%;
          background-image: 
            radial-gradient(4px 4px at 30px 40px, rgba(190, 190, 195, 0.9), transparent),
            radial-gradient(3px 3px at 80px 120px, rgba(160, 160, 165, 0.8), transparent),
            radial-gradient(5px 5px at 150px 60px, rgba(210, 210, 215, 0.85), transparent),
            radial-gradient(3px 3px at 200px 180px, rgba(170, 170, 175, 0.75), transparent),
            radial-gradient(4px 4px at 250px 100px, rgba(200, 200, 205, 0.9), transparent);
          background-repeat: repeat;
          background-size: 300px 300px;
          animation: snowFall linear infinite;
          opacity: 0.75;
          pointer-events: none;
        }
        .snow-diamond {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 200%;
          height: 240%;
          pointer-events: none;
          background-image:
            radial-gradient(6px 6px at 40px 60px, rgba(255, 255, 255, 1), transparent),
            radial-gradient(5px 5px at 120px 180px, rgba(200, 235, 255, 0.95), transparent),
            radial-gradient(7px 7px at 200px 100px, rgba(220, 240, 255, 0.9), transparent),
            radial-gradient(4px 4px at 300px 220px, rgba(180, 220, 255, 0.9), transparent),
            radial-gradient(8px 8px at 160px 260px, rgba(255, 255, 255, 1), transparent);
          background-repeat: repeat;
          background-size: 320px 320px;
          opacity: 1;
          filter: drop-shadow(0 0 6px rgba(180, 220, 255, 0.9)) drop-shadow(0 0 12px rgba(255, 255, 255, 0.6));
          animation: snowFall 14s linear infinite, sparkle 2.5s ease-in-out infinite alternate;
        }
        .snow-1 { animation-duration: 18s; }
        .snow-2 { animation-duration: 25s; opacity: 0.4; }
        .snow-3 { animation-duration: 35s; opacity: 0.3; }
      `}</style>
      <Navbar />

      <div className="pt-20">
        <section className="w-full bg-[#030841] relative overflow-hidden">
          {/* Background Decorations */}
          <img src="/assets/bg/bintang.svg" className="absolute inset-0 w-full h-full object-cover z-0 opacity-30" alt="Star" />
          <img src="/src/assets/icon/cloud.svg" className="absolute top-16 left-0 w-40 md:w-96 z-0 opacity-40 mix-blend-screen" alt="Cloud" />
          <img src="/src/assets/icon/cloud.svg" className="absolute top-28 right-0 w-40 md:w-96 [transform:scaleX(-1)] z-0 opacity-40 mix-blend-screen" alt="Cloud" />
          <img src="/src/assets/icon/hill.svg" className="absolute w-full h-full object-cover z-0 opacity-20" alt="Hill" />

          <div className="relative max-w-7xl mx-auto px-6 py-4 z-10">
            <div className="mt-10 text-center">
              <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-retro-blue via-retro-red to-retro-yellow bg-clip-text text-transparent font-jersey drop-shadow-[0_0_15px_rgba(31,84,183,0.3)]">
                SPONSORSHIP
              </h1>
              <p className="text-[#BDBAC6] text-lg md:text-xl mt-2">
                Jadilah sponsor dan wujudkan kolaborasi bermakna.
              </p>
              <div className="flex items-center justify-center mt-8">
                <div className="inline-flex rounded-full border-2 border-white p-1 bg-transparent divide-x-2 divide-white">
                  <a href="#paket-utama"
                    className="text-white text-xl px-6 py-2 rounded-l-full hover:bg-retro-yellow hover:text-gray-900 transition-all duration-300">
                    Paket Utama
                  </a>
                  <a href="#paket-pendamping"
                    className="text-white text-xl px-6 py-2 rounded-r-full hover:bg-retro-yellow hover:text-gray-900 transition-all duration-300">
                    Paket Pendamping
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-14 scroll-mt-28" id="paket-utama">
              <h1 className="text-2xl md:text-3xl text-[#BDBAC6]">
                $ chmod 755 <span className="text-white">PAKET_UTAMA</span>
              </h1>
            </div>

            {/* Main Packages */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-24 lg:gap-16 mt-20 mb-10">
              {/* Gold Package */}
              <div className="relative group flex w-full lg:w-auto justify-center">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30">
                  <img src="/src/assets/icon/sponsor_gold.svg" alt="Gold Sponsor"
                    className="w-36 drop-shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1" />
                </div>
                <div className="bg-gradient-to-br from-yellow-50/10 to-retro-yellow/20 rounded-3xl w-full lg:w-80 border-2 border-retro-yellow shadow-[0_0_20px_rgba(231,181,45,0.2)] p-6 hover:shadow-[0_0_30px_rgba(231,181,45,0.4)] lg:hover:scale-105 transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-retro-yellow rounded-bl-full opacity-10"></div>
                  <div className="relative z-10 mt-10">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-xl md:text-2xl text-retro-yellow font-bold text-shadow-sm leading-tight">Gold</h1>
                      <span className="bg-retro-yellow text-gray-900 text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold shadow-sm">POPULER</span>
                    </div>
                    <h2 className="text-[10px] md:text-xs text-gray-300 mb-10 md:mb-12 leading-relaxed">Cocok untuk entrepreneur</h2>
                    <div className="relative inline-block w-full">
                      <img src="/src/assets/icon/char_chicken.svg" alt="Character"
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 pointer-events-none select-none drop-shadow-lg" />
                      <a href="https://wa.me/+6287718652250?text=Halo%20Kak%2C%20saya%20tertarik%20untuk%20menjalin%20kerja%20sama%20sponsorship%20Paket%20Gold%20pada%20acara%20IFEST%20%2314.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20detail%20dan%20benefit%20yang%20tersedia.%20Terima%20kasih." 
                        target="_blank" rel="noopener noreferrer"
                        className="relative bg-retro-yellow text-gray-900 p-3 rounded-xl w-full flex justify-center items-center text-lg font-semibold shadow-md hover:bg-white hover:shadow-lg transition-all duration-300">
                        Pilih Paket
                      </a>
                    </div>
                  </div>
                  <hr className="my-6 border-retro-yellow/30" />
                  <div className="flex-grow relative z-10">
                    <span className="text-base md:text-lg text-retro-yellow font-semibold block mb-4">Anda akan mendapatkan:</span>
                    <ul className="space-y-2.5 text-gray-300">
                      <li className="flex items-start"><CheckIcon color="text-retro-yellow" /> Logo di website, poster, sertifikat, after movie & merchandise</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-yellow" /> Iklan di sosial media panitia</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-yellow" /> Iklan adlibs oleh MC (semua acara)</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-yellow" /> Penayangan iklan video & gambar saat acara</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Platinum Package */}
              <div className="relative group flex w-full lg:w-auto justify-center">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30">
                  <img src="/src/assets/icon/sponsor_platinum.svg" alt="Platinum Sponsor"
                    className="w-36 drop-shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1" />
                </div>
                <div className="bg-gradient-to-br from-red-50/10 to-retro-red/20 rounded-3xl w-full lg:w-80 border-2 border-retro-red shadow-[0_0_20px_rgba(223,43,43,0.2)] p-6 hover:shadow-[0_0_30px_rgba(223,43,43,0.4)] lg:hover:scale-105 transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm">
                  <div className="absolute inset-0 pointer-events-none overflow-hidden z-[0]">
                    <div className="snow snow-1"></div>
                    <div className="snow snow-2"></div>
                    <div className="snow snow-3"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-retro-red rounded-bl-full opacity-10"></div>
                  <div className="relative z-10 mt-10">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-xl md:text-2xl text-retro-red font-bold text-shadow-sm leading-tight">Platinum</h1>
                      <span className="bg-retro-red text-white text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold shadow-sm">PREMIUM</span>
                    </div>
                    <h2 className="text-[10px] md:text-xs text-gray-300 mb-10 md:mb-12 leading-relaxed">Untuk bisnis berkembang</h2>
                    <div className="relative inline-block w-full">
                      <img src="/src/assets/icon/char_panda.svg" alt="Character"
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 pointer-events-none select-none drop-shadow-lg" />
                      <a href="https://wa.me/+6287718652250?text=Halo%20Kak%2C%20saya%20tertarik%20untuk%20menjalin%20kerja%20sama%20sponsorship%20Paket%20Platinum%20pada%20acara%20IFEST%20%2314.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20detail%20dan%20benefit%20yang%20tersedia.%20Terima%20kasih." 
                        target="_blank" rel="noopener noreferrer"
                        className="relative bg-retro-red text-white p-3 rounded-xl w-full flex justify-center items-center text-lg font-semibold shadow-md hover:bg-white hover:text-retro-red hover:shadow-lg transition-all duration-300">
                        Pilih Paket
                      </a>
                    </div>
                  </div>
                  <hr className="my-6 border-retro-red/30" />
                  <div className="flex-grow relative z-10">
                    <span className="text-base md:text-xl text-retro-red font-semibold block mb-4">Anda akan mendapatkan:</span>
                    <ul className="space-y-2.5 text-gray-300">
                      <li className="flex items-start"><CheckIcon color="text-retro-red" /> Semua benefit paket Gold</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-red" /> Logo di jersey panitia & banner</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-red" /> Product placement terbatas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Diamond Package */}
              <div className="relative group flex w-full lg:w-auto justify-center">
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30">
                  <img src="/src/assets/icon/sponsor_diamond.svg" alt="Diamond Sponsor"
                    className="w-36 drop-shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1" />
                </div>
                <div className="bg-gradient-to-br from-blue-50/10 to-retro-blue/20 rounded-3xl w-full lg:w-80 border-2 border-retro-blue shadow-[0_0_20px_rgba(31,84,183,0.3)] p-6 hover:shadow-[0_0_30px_rgba(31,84,183,0.5)] lg:hover:scale-105 transition-all duration-300 relative overflow-hidden flex flex-col backdrop-blur-sm">
                  <div className="snow-diamond"></div>
                  <div className="snow-diamond"></div>
                  <div className="snow-diamond"></div>
                  <div className="snow-diamond"></div>
                  <div className="snow-diamond"></div>
                  <div className="absolute top-0 right-0 w-36 h-36 bg-retro-blue rounded-bl-full opacity-10"></div>
                  <div className="relative z-10 mt-10">
                    <div className="flex items-center justify-between mb-2">
                      <h1 className="text-xl md:text-2xl text-retro-blue font-bold text-shadow-sm leading-tight">Diamond</h1>
                      <span className="bg-gradient-to-r from-retro-blue to-blue-600 text-white text-[10px] md:text-xs px-2 py-1 rounded-full font-semibold shadow-md">TERBAIK</span>
                    </div>
                    <h2 className="text-[10px] md:text-xs text-gray-300 mb-10 md:mb-12 leading-relaxed">Paket ultimate & eksklusif</h2>
                    <div className="relative inline-block w-full">
                      <img src="/src/assets/icon/char_dolphin.svg" alt="Character"
                        className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 pointer-events-none select-none drop-shadow-lg" />
                      <a href="https://wa.me/+6287718652250?text=Halo%20Kak%2C%20saya%20tertarik%20untuk%20menjalin%20kerja%20sama%20sponsorship%20Paket%20Diamond%20pada%20acara%20IFEST%20%2314.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20detail%20dan%20benefit%20yang%20tersedia.%20Terima%20kasih." 
                        target="_blank" rel="noopener noreferrer"
                        className="relative bg-gradient-to-r from-retro-blue to-blue-600 text-white p-3 rounded-xl w-full flex justify-center items-center text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all duration-300">
                        Pilih Paket
                      </a>
                    </div>
                  </div>
                  <hr className="my-6 border-retro-blue/30" />
                  <div className="flex-grow relative z-10">
                    <span className="text-base md:text-xl text-retro-blue font-semibold block mb-4">Anda akan mendapatkan:</span>
                    <ul className="space-y-2.5 text-gray-300">
                      <li className="flex items-start"><CheckIcon color="text-retro-blue" /> Semua benefit paket Platinum</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-blue" /> Logo di jersey & banner (Besar)</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-blue" /> Booth stand di semua acara</li>
                      <li className="flex items-start"><CheckIcon color="text-retro-blue" /> Promosi panggung (15 menit)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Packages Section */}
        <section className="w-full bg-[#030841] relative overflow-hidden py-20" id="paket-pendamping">
          <img src="/src/assets/icon/hum_cat.png" className="absolute w-full h-full object-cover z-0 opacity-20" alt="Background Character" />
          <div className="relative max-w-7xl mx-auto px-6 z-10">
            <h1 className="text-2xl md:text-3xl text-[#BDBAC6] mb-10">
              $ chmod 777 <span className="text-white">PAKET_PENDAMPING</span>
            </h1>
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-10">
              {/* Similar cards for A, B, C could be here */}
              {[
                { title: 'Paket A', price: 'Terlengkap', theme: { bg: 'bg-retro-green', text: 'text-retro-green', border: 'border-retro-green', from: 'from-retro-green/10' }, benefits: ['Posting produk oleh anggota', 'Penjualan produk saat acara', 'Iklan adlibs MC'], wa: 'Paket%20A' },
                { title: 'Paket B', price: 'Standar', theme: { bg: 'bg-retro-blue', text: 'text-retro-blue', border: 'border-retro-blue', from: 'from-retro-blue/10' }, benefits: ['Posting produk oleh anggota', 'Iklan adlibs MC', 'Link medsos'], wa: 'Paket%20B' },
                { title: 'Paket C', price: 'Hemat', theme: { bg: 'bg-retro-orange', text: 'text-retro-orange', border: 'border-retro-orange', from: 'from-retro-orange/10' }, benefits: ['Iklan adlibs MC (2 acara)', 'Link medsos'], wa: 'Paket%20C' }
              ].map((pkg) => (
                <div key={pkg.title} className={`bg-gradient-to-br from-white/5 ${pkg.theme.from} rounded-3xl w-full lg:w-80 border-2 ${pkg.theme.border} shadow-xl p-6 transition-all duration-300 hover:scale-105 flex flex-col backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-2 gap-4">
                    <h1 className={`text-xl font-bold ${pkg.theme.text} leading-tight`}>{pkg.title}</h1>
                    <span className={`${pkg.theme.bg} text-white text-[10px] px-2 py-1 rounded-full whitespace-nowrap`}>{pkg.price}</span>
                  </div>
                  <hr className={`my-4 border-white/10`} />
                  <ul className="space-y-2 text-sm text-gray-300 flex-grow">
                    {pkg.benefits.map(b => (
                      <li key={b} className="flex items-start"><CheckIcon color={pkg.theme.text} /> {b}</li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/+6287718652250?text=Halo%20Kak%2C%20saya%20tertarik%20untuk%20menjalin%20kerja%20sama%20sponsorship%20${pkg.wa}%20pada%20acara%20IFEST%20%2314.%20Mohon%20informasi%20lebih%20lanjut%20terkait%20detail%20dan%20benefit%20yang%20tersedia.%20Terima%20kasih.`} 
                    target="_blank" rel="noopener noreferrer"
                    className={`mt-6 ${pkg.theme.bg} text-white p-3 rounded-xl text-center font-semibold hover:opacity-90 transition-opacity`}>Pilih Paket</a>
                </div>
              ))}
            </div>

            <div className="text-center mt-28">
              <h2 className="text-5xl md:text-6xl text-white [filter:drop-shadow(0_0_10px_white)]">Tertarik?</h2>
              <p className="text-2xl text-gray-400 mt-4 mb-8">Mari lihat detailnya lebih lanjut!</p>
              <div className="flex justify-center">
                <a href="https://drive.google.com/drive/folders/1bcktnf7c1LnY_umuFfvsilVpd08OZ_rq" 
                  target="_blank" rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform">
                  <div className="bg-gradient-to-r from-retro-blue via-retro-red to-retro-yellow px-8 py-4 rounded-xl text-xl font-bold shadow-lg text-white">
                    AMBIL PROPOSAL
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-20">
              <h1 className="text-2xl text-[#BDBAC6] mb-10">$ cd <span className="text-white">CONTACT_PERSON</span></h1>
              <div className="flex flex-wrap justify-center gap-10">
                <ContactCard name="Alegra" phone="+6281294148768" color="from-retro-blue to-blue-700" />
                <ContactCard name="Marcel" phone="+6287718652250" color="from-retro-red to-red-700" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

const CheckIcon = ({ color }: { color: string }) => (
  <svg className={`w-5 h-5 ${color} mr-2.5 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const ContactCard = ({ name, phone, color }: { name: string; phone: string; color: string }) => (
  <a href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" 
    className={`bg-gradient-to-r ${color} p-6 rounded-2xl w-64 text-center transform hover:scale-105 transition-all shadow-xl`}>
    <h3 className="text-2xl font-bold mb-1">{name}</h3>
    <p className="text-white/80">{phone}</p>
    <div className="mt-4 bg-white/20 py-2 rounded-lg text-sm">WhatsApp</div>
  </a>
);

export default Sponsorship;
