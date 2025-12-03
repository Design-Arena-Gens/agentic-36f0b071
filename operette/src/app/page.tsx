import styles from "./page.module.css";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page} id="hero">
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span className={styles.brand}>Operette</span>
          <nav className={styles.nav} aria-label="التنقل الرئيسي">
            <a href="#hero">الرئيسية</a>
            <a href="#hero">القدرات</a>
            <a href="#contact">الشركاء</a>
            <a href="#contact">الدعم</a>
          </nav>
          <a className={styles.headerLink} href="#contact">
            دخول المنصة
          </a>
        </header>

        <main className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>AUTOMATION PLATFORM</span>
            <h1 className={styles.title}>منصة للأتمتة الذكية… بدون تعقيد.</h1>
            <p className={styles.subtitle}>
              نساعد الشركات الصغيرة والمتوسطة على تبسيط العمل الداخلي، ورفع
              الإنتاجية، واتخاذ القرار بثقة.
            </p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primary}`} href="#contact">
                ابدأ الآن
              </a>
              <a
                className={`${styles.button} ${styles.secondary}`}
                href="mailto:team@operette.com"
              >
                استكشف الإمكانات
              </a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualCard}>
              <svg
                className={styles.visualLines}
                viewBox="0 0 420 320"
                role="img"
              >
                <rect
                  x="32"
                  y="36"
                  width="356"
                  height="224"
                  rx="24"
                  stroke="rgba(240,240,245,0.12)"
                  strokeWidth="1"
                  fill="none"
                />
                <path
                  d="M64 220C110 182 142 170 210 210C274 247 318 210 362 166"
                  stroke="#5E6AD8"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M64 156C94 126 128 118 172 140C214 160 248 160 290 136C324 116 348 92 358 80"
                  stroke="rgba(240,240,245,0.28)"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                />
                <line
                  x1="112"
                  y1="96"
                  x2="112"
                  y2="248"
                  stroke="rgba(240,240,245,0.12)"
                  strokeWidth="0.8"
                  strokeDasharray="4 10"
                />
                <line
                  x1="220"
                  y1="88"
                  x2="220"
                  y2="256"
                  stroke="rgba(240,240,245,0.08)"
                  strokeWidth="0.8"
                  strokeDasharray="4 12"
                />
                <circle
                  cx="292"
                  cy="142"
                  r="7"
                  fill="#5E6AD8"
                  fillOpacity="0.24"
                  stroke="#5E6AD8"
                  strokeWidth="1"
                />
                <circle
                  cx="148"
                  cy="186"
                  r="5"
                  fill="rgba(240,240,245,0.14)"
                  stroke="rgba(240,240,245,0.32)"
                  strokeWidth="0.8"
                />
              </svg>
              <div className={styles.visualMeta}>
                <span>لوحات قيادة حيّة</span>
                <span>تدفقات ذكية بلا ضوضاء</span>
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer} id="contact">
          <div>
            <span>© {year} Operette</span>
            <span className={styles.footerDivider}>—</span>
            <span>كل الحقوق محفوظة</span>
          </div>
          <a href="mailto:team@operette.com" className={styles.footerLink}>
            team@operette.com
          </a>
        </footer>
      </div>
    </div>
  );
}
