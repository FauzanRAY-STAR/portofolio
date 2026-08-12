import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  Certificate,
  CheckCircle,
  Code,
  Database,
  DeviceMobile,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  InstagramLogo,
  LinkedinLogo,
  List,
  MapPin,
  Moon,
  PaperPlaneTilt,
  Scan,
  Stack,
  Sun,
  Users,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import {
  SiKotlin,
  SiFlutter,
  SiDart,
  SiAndroidstudio,
  SiGit,
  SiGithub,
  SiGradle,
  SiPhp,
  SiCplusplus,
  SiMysql,
  SiLaravel,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiPython,
} from "react-icons/si";

import {
  caseStudy,
  features,
  featuredTech,
  projects,
  skillGroups,
  timeline,
} from "./data";

const navItems = [
  ["beranda", "Beranda"],
  ["tentang", "Tentang"],
  ["keahlian", "Keahlian"],
  ["proyek", "Proyek"],
  ["pengalaman", "Pengalaman"],
  ["kontak", "Kontak"],
];

const iconMap = {
  DeviceMobile,
  Stack,
  Database,
  Scan,
  Code,
};

const skillIcons = {
  // CATEGORY
  mobile: DeviceMobile,
  architecture: Stack,
  vision: Scan,
  database: Database,
  web: Code,
  tools: Code,

  // MOBILE
  kotlin: SiKotlin,
  flutter: SiFlutter,
  dart: SiDart,
  android: SiAndroidstudio,
  camera: DeviceMobile,

  // ANDROID ARCHITECTURE
  mvvm: Stack,
  viewmodel: Stack,
  navigation: ArrowRight,
  hilt: Stack,
  coroutines: Stack,

  // COMPUTER VISION
  mediapipe: Scan,
  pose: Scan,

  // DATABASE
  room: Database,
  mysql: SiMysql,

  // WEB
  php: SiPhp,
  laravel: SiLaravel,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,

  // PROGRAMMING & TOOLS
  ai: Stack,
  python: SiPython,
  git: SiGit,
  github: SiGithub,
};

const timelineIconMap = {
  education: GraduationCap,
  work: Briefcase,
  organization: Users,
  certificate: Certificate,
};


function ImageBox({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={`image-placeholder ${className}`}>{alt}</div>;
  }

  return <img className={className} src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('Semua');
  const [active, setActive] = useState('beranda');
  const [showTop, setShowTop] = useState(false);
  const [sent, setSent] = useState(false);

  const filteredProjects = useMemo(
    () => (filter === 'Semua' ? projects : projects.filter((project) => project.groups.includes(filter))),
    [filter]
  );
  const downloadCV = async () => {
  try {
    const response = await fetch("/FauzanRofifArdiyanto_CV.pdf");

    if (!response.ok) {
      throw new Error("CV tidak ditemukan");
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Fauzan-Rofif-Ardiyanto-CV.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Gagal download CV:", error);
  }
};

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      let current = 'beranda';
      navItems.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setActive(current);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -60px' }
    );

    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 66, behavior: 'smooth' });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner container">
          <button className="brand reset-button" onClick={() => goTo('beranda')} aria-label="Ke Beranda">
            <span className="brand-name">Fauzan Rofif A.</span>
          </button>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map(([id, label]) => (
              <button key={id} className={`nav-link reset-button ${active === id ? 'active' : ''}`} onClick={() => goTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-button"
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label="Ganti mode terang atau gelap"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
  className="button secondary"
  type="button"
  onClick={downloadCV}
>
  <DownloadSimple size={17} />
  Download CV
</button>
            <button className="icon-button mobile-menu-button" type="button" onClick={() => setMenuOpen((v) => !v)} aria-label="Buka menu">
              {menuOpen ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navigasi mobile">
            {navItems.map(([id, label]) => (
              <button key={id} className={`mobile-nav-link reset-button ${active === id ? 'active' : ''}`} onClick={() => goTo(id)}>
                {label}
              </button>
            ))}
            <button
  className="button primary desktop-only"
  type="button"
  onClick={downloadCV}
>
  <DownloadSimple size={17} />
  Download CV
</button>
          </nav>
        )}
      </header>

      <main>
        <section id="beranda" className="hero-section section container">
          <div className="hero-grid" />
          <div className="hero-glow" />
          <div className="hero-content">
            <div className="hero-copy">
              <span className="availability"><span />Available for opportunities</span>
              <div>
                <span className="eyebrow">Hello, I’m</span>
                <h1>Fauzan Rofif<br />Ardiyanto</h1>
                <p className="role">Software Developer &amp; Android Developer</p>
              </div>
              <p className="lead">Saya mengembangkan aplikasi Android dan solusi software yang menghubungkan teknologi, computer vision, dan kebutuhan di dunia nyata.</p>
              <p className="sublead">Berfokus pada Kotlin, pengembangan aplikasi mobile, computer vision, dan teknologi kesehatan yang praktis serta mudah digunakan.</p>
              <div className="button-row">
                <button className="button primary reset-button" onClick={() => goTo('proyek')}>Lihat Proyek <ArrowRight size={17} /></button>
                <button
  className="button primary desktop-only"
  type="button"
  onClick={downloadCV}
>
  <DownloadSimple size={17} />
  Download CV
</button>
              </div>
              <div className="social-row">
                <a className="social-icon" href="https://github.com/FauzanRAY-STAR" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubLogo size={21} /></a>
                <a className="social-icon" href="https://www.linkedin.com/in/fauzanrofif/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo size={21} /></a>
                <a className="social-icon" href="https://www.instagram.com/ardi.fauzan/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramLogo size={21} /></a>
                <a className="social-icon" href="mailto:ardifauzan43@gmail.com" aria-label="Email"><EnvelopeSimple size={21} /></a>
                <span className="location-line"><MapPin size={16} />Purwokerto, Banyumas · Indonesia</span>
              </div>
            </div>

            <div className="hero-photo-wrap">
  <div className="hero-photo-card">
    <img
      src="/profile.png"
      alt="Fauzan Rofif Ardiyanto"
      className="hero-photo"
    />
  </div>

  <span className="tech-tag tag-kotlin">Kotlin</span>
  <span className="tech-tag tag-android">Android</span>
  <span className="tech-tag tag-vision">Computer Vision</span>
  <span className="tech-tag tag-camerax">CameraX</span>
  <span className="tech-tag tag-mediapipe">MediaPipe</span>
</div>
          </div>
        </section>

        <section id="tentang" className="section container bordered reveal">
          <div className="about-layout">
            <div>
              <span className="section-kicker">Tentang</span>
              <h2>Tentang Saya</h2>
              <p>Saya adalah mahasiswa Software Engineering di Telkom University Purwokerto yang memiliki ketertarikan pada pengembangan aplikasi Android, computer vision, serta penerapan teknologi pada bidang kesehatan.</p>
              <p>Saya berfokus membangun aplikasi Android menggunakan Kotlin dan arsitektur aplikasi yang terstruktur. Saat ini, saya mengembangkan aplikasi screening stunting berbasis Android yang memanfaatkan computer vision untuk memperkirakan tinggi badan anak tanpa marker serta menghitung height-for-age z-score berdasarkan standar WHO.</p>
              <p>Saya menyukai proses menghubungkan ide penelitian dengan aplikasi yang dapat digunakan untuk membantu pengukuran, pengambilan keputusan, dan pengumpulan data dalam situasi nyata.</p>
            </div>
            <div className="fact-grid">
              <Fact icon={<MapPin size={16} />} label="Lokasi" value="Purwokerto, Banyumas" />
              <Fact icon={<DeviceMobile size={16} />} label="Fokus" value="Android Development" />
              <Fact icon={<Scan size={16} />} label="Minat" value="Computer Vision & Health-Tech" />
              <Fact icon={<GraduationCap size={16} />} label="Pendidikan" value="Software Engineering" detail="Telkom University Purwokerto" />
            </div>
          </div>
        </section>

        <section id="keahlian" className="section container bordered reveal">
  <span className="section-kicker">Keahlian</span>

  <h2>Keahlian &amp; Tech Stack</h2>

  <p className="section-intro">
    Teknologi dan alat yang saya gunakan untuk membangun aplikasi mobile,
    computer vision, dan solusi software.
  </p>

  <div className="skills-showcase">
    {skillGroups.map((group) => {
      const GroupIcon =
        skillIcons?.[group.icon] ||
        iconMap?.[group.icon] ||
        null;

      return (
        <article
          className="skills-column"
          key={group.name}
        >
          <div className="skills-column-title">
            {GroupIcon && (
              <span className="skills-group-icon">
                <GroupIcon size={22} />
              </span>
            )}

            <h3>{group.name}</h3>
          </div>

          <div className="skills-list">
            {group.items.map((item, index) => {
              /*
                Mendukung dua format:
                "Kotlin"

                ATAU

                {
                  name: "Kotlin",
                  icon: "kotlin"
                }
              */

              const itemName =
                typeof item === "string"
                  ? item
                  : item.name;

              const itemIcon =
                typeof item === "string"
                  ? null
                  : item.icon;

              const ItemIcon =
                itemIcon
                  ? skillIcons?.[itemIcon]
                  : null;

              return (
                <div
                  className="skill-item"
                  key={`${group.name}-${itemName}-${index}`}
                >
                  {ItemIcon && (
                    <span className="skill-item-icon">
                      <ItemIcon size={21} />
                    </span>
                  )}

                  <span>{itemName}</span>
                </div>
              );
            })}
          </div>
        </article>
      );
    })}
  </div>
</section>

        <section id="proyek" className="projects-section bordered reveal">
          <div className="section container featured-project">
            <span className="section-kicker">Featured Project</span>
            <h2 className="featured-title">StunntingApp</h2>
            <p className="project-meta">Android Development · Computer Vision · Health Technology</p>

            <div className="featured-layout">
              <div className="featured-copy">
                <p className="lead-small">StunntingApp adalah aplikasi Android untuk membantu proses screening stunting pada anak usia 24–59 bulan. Aplikasi memperkirakan tinggi badan anak menggunakan kamera smartphone dan pose landmark, kemudian menghitung height-for-age z-score sebagai dukungan proses screening.</p>
                <div className="case-grid">
                  {caseStudy.map((item) => <div className="case-box" key={item.step}><span>{item.step}</span><p>{item.text}</p></div>)}
                </div>
                <div>
                  <h4>Fitur utama</h4>
                  <ul className="feature-list">{features.map((feature) => <li key={feature}><CheckCircle size={17} />{feature}</li>)}</ul>
                </div>
                <div>
                  <h4>Tech stack</h4>
                  <div className="chips">{featuredTech.map((tech) => <span className="chip accent" key={tech}>{tech}</span>)}</div>
                </div>
                <div className="button-row">
                  <a className="button primary" href="https://github.com/FauzanRAY-STAR/StunntingApp" target="_blank" rel="noreferrer"><GithubLogo size={18} />Lihat Repository</a>
                  <a className="button secondary" href="#project-detail">Lihat Detail Proyek <ArrowRight size={17} /></a>
                </div>
              </div>

              <div className="phone-gallery">
                <div className="phone-frame"><div className="phone-notch" /><ImageBox src="/assets/kamera.png" alt="Halaman kamera StunntingApp" className="phone-main" /></div>
                <div className="mini-gallery">
                  <figure><ImageBox src="/assets/result.png" alt="Hasil pengukuran StunntingApp" className="mini-shot" /><figcaption>Hasil pengukuran &amp; z-score</figcaption></figure>
                  <figure><ImageBox src="/assets/history.png" alt="Riwayat pengukuran StunntingApp" className="mini-shot" /><figcaption>Riwayat pengukuran</figcaption></figure>
                </div>
              </div>
            </div>
          </div>

          <div className="section container other-projects">
            <div className="section-heading-row">
              <div><span className="section-kicker">Portofolio</span><h2>Proyek Lainnya</h2></div>
              <div className="filter-row" role="group" aria-label="Filter proyek">
                {['Semua', 'Android', 'Flutter', 'Web', 'Computer Vision'].map((item) => (
                  <button key={item} className={`filter-button ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>{item}</button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article className="card project-card" key={project.name}>
                  <ImageBox src={project.image} alt={`Thumbnail ${project.name}`} className="project-thumb" />
                  <div className="project-card-body">
                    <span className="section-kicker small">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                    <div className="chips">{project.tech.map((tech) => <span className="chip outline" key={tech}>{tech}</span>)}</div>
                    <div className="button-row compact">
                      <a className="button secondary small-button" href={project.repo} target="_blank" rel="noreferrer"><GithubLogo size={16} />GitHub</a>
                      <a className="button ghost small-button" href="#project-detail">Detail <ArrowUpRight size={15} /></a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pengalaman" className="section container bordered reveal">
          <span className="section-kicker">Perjalanan</span>
          <h2>Pengalaman &amp; Pendidikan</h2>
          <div className="timeline">
            {timeline.map((item) => {
              const Icon = timelineIconMap[item.type];
              return (
                <div className="timeline-item" key={`${item.type}-${item.title}`}>
                  <span className="timeline-dot" />
                  <article className="card timeline-card">
                    <div className="timeline-head"><span className="icon-badge"><Icon size={17} /></span><h3>{item.title}</h3><span className="timeline-period">{item.period}</span></div>
                    <strong>{item.org}</strong>
                    <p>{item.note}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </section>

        <section id="kontak" className="contact-section bordered reveal">
          <div className="section container contact-layout">
            <div className="contact-copy">
              <div><span className="section-kicker">Kontak</span><h2>Mari Terhubung</h2><p>Saya terbuka untuk peluang kerja, kolaborasi proyek, dan diskusi mengenai pengembangan aplikasi Android serta solusi software.</p></div>
              <div className="contact-cards">
                <a href="mailto:fauzanrofif.a@gmail.com" className="contact-card"><span className="icon-badge"><EnvelopeSimple size={19} /></span><span><small>Email</small><strong>fauzanrofif.a@gmail.com</strong></span></a>
                <a href="https://wa.me/6281326641615?text=Halo%20Fauzan%2C%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi%20mengenai%20peluang%20kerja%20sama." target="_blank" rel="noreferrer" className="contact-card"><span className="icon-badge"><WhatsappLogo size={19} /></span><span><small>WhatsApp</small><strong>081326641615</strong></span></a>
                <div className="contact-card"><span className="icon-badge"><MapPin size={19} /></span><span><small>Lokasi</small><strong>Purwokerto, Banyumas, Jawa Tengah</strong></span></div>
              </div>
              <div className="button-row">
                <a className="button primary" href="mailto:fauzanrofif.a@gmail.com"><EnvelopeSimple size={17} />Kirim Email</a>
                <a className="button secondary" href="https://wa.me/6281326641615" target="_blank" rel="noreferrer"><WhatsappLogo size={17} />Hubungi via WhatsApp</a>
              </div>
              <div className="button-row compact">
                <a className="button secondary small-button" href="https://github.com/FauzanRAY-STAR" target="_blank" rel="noreferrer"><GithubLogo size={17} />GitHub</a>
                <a className="button secondary small-button" href="https://www.linkedin.com/in/fauzanrofif/" target="_blank" rel="noreferrer"><LinkedinLogo size={17} />LinkedIn</a>
                <a className="button secondary small-button" href="https://www.instagram.com/ardi.fauzan/" target="_blank" rel="noreferrer"><InstagramLogo size={17} />Instagram</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitForm}>
              <h3>Kirim Pesan</h3>
              <div className="form-grid">
                <label>Nama<input name="nama" type="text" placeholder="Nama lengkap" required /></label>
                <label>Email<input name="email" type="email" placeholder="nama@email.com" required /></label>
              </div>
              <label>Subjek<input name="subjek" type="text" placeholder="Peluang kerja / kolaborasi" required /></label>
              <label>Pesan<textarea name="pesan" rows="5" placeholder="Tulis pesan Anda di sini" required /></label>
              <button className="button primary full reset-button" type="submit"><PaperPlaneTilt size={17} />Kirim Pesan</button>
              {sent && <span className="form-status">Terima kasih — form ini masih demo. Hubungkan ke Formspree/EmailJS agar pesan benar-benar terkirim.</span>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer bordered">
        <div className="container footer-inner">
          <div><span>© {new Date().getFullYear()} Fauzan Rofif Ardiyanto</span><small>Dibuat dengan React dan fokus pada pengalaman pengguna serta performa.</small></div>
          <div className="footer-actions">
            <a className="social-icon" href="https://github.com/FauzanRAY-STAR" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubLogo size={19} /></a>
            <a className="social-icon" href="https://www.linkedin.com/in/fauzanrofif/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinLogo size={19} /></a>
            <a className="social-icon" href="https://www.instagram.com/ardi.fauzan/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramLogo size={19} /></a>
            <button className="icon-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Kembali ke atas"><ArrowUp size={19} /></button>
          </div>
        </div>
      </footer>

      <button className={`back-to-top ${showTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Kembali ke atas"><ArrowUp size={20} /></button>
    </div>
  );
}

function Fact({ icon, label, value, detail }) {
  return (
    <article className="card fact-card">
      <span className="fact-label">{icon}{label}</span>
      <strong>{value}</strong>
      {detail && <small>{detail}</small>}
    </article>
  );
}

export default App;