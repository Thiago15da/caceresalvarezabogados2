/* ===== Reset y variables ===== */
*,
*::before,
*::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }

:root{
  --bg-dark: #0F2630;
  --fg-light: #F4E9C6;
  --txt: #24323A;
  --muted: #6A7A84;
  --card: #FFFFFF;
  --shadow: 0 10px 30px rgba(0,0,0,.08);
  --radius: 14px;
}

body{
  font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  color: var(--txt);
  line-height: 1.6;
  background:
    linear-gradient(rgba(255,255,255,.94), rgba(255,255,255,.98)),
    url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=70')
    center/cover fixed no-repeat;
}

.wrap{ max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.wrap.narrow{ max-width: 800px; }
.section{ padding: 64px 0; }
.section.soft{ background: #FAFBFC; }
.lead{ color: var(--muted); margin-top: 6px; }

/* ===== Topbar ===== */
.topbar{
  position: sticky; top: 0; z-index: 20;
  background: rgba(15,38,48,.88);
  backdrop-filter: blur(6px);
  color: var(--fg-light);
}
.topbar .wrap{
  display: flex; align-items: center; justify-content: space-between;
  height: 56px;
}
.brand{ color: var(--fg-light); text-decoration: none; font-weight: 700; letter-spacing: .06em; }

.nav{ display: flex; gap: 18px; }
.nav a{
  color: var(--fg-light); text-decoration: none; font-weight: 600;
  padding: 8px 10px; border-radius: 10px;
}
.nav a:hover{ background: rgba(244,233,198,.12); }

.nav-toggle{
  display: none; width: 44px; height: 36px; border: 0; background: transparent; cursor: pointer;
}
.nav-toggle span{ display:block; height:2px; background:var(--fg-light); margin:7px 0; border-radius:2px; }

/* ===== Hero ===== */
.hero{
  position: relative;
  min-height: 88vh;
  background: url('https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0')
    center/cover no-repeat;
  display: grid; place-items: center;
  color: var(--fg-light); text-align: center;
}
.hero .overlay{
  position: absolute; inset: 0;             /* cubre toda la imagen */
  background: rgba(15,38,48,.86);
  display: grid; place-items: center;
  padding: 20px;
}
.hero-content{ max-width: 900px; padding: 10px; }

.logo-hero{ width: 200px; height: 200px; margin: 0 auto 12px; }
.logo-hero img{
  width: 100%; height: 100%; object-fit: contain; display: block;
  border-radius: 12px; box-shadow: 0 6px 24px rgba(0,0,0,.35);
}
.since{
  margin: 2px 0 16px; font-size: .9rem; letter-spacing: .18em; text-transform: uppercase;
  color: #E9EEF3; opacity: .95;
}
.tagline{ font-size: clamp(1.6rem, 1.6vw + 1rem, 2.2rem); margin: 0 0 18px; }

.cta-row{ display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.btn{
  display: inline-block; border-radius: 30px; padding: 12px 22px; font-weight: 700;
  text-decoration: none; transition: transform .08s ease, background .22s ease;
}
.btn-primary{ background: var(--fg-light); color: var(--bg-dark); }
.btn-primary:hover{ background: #e4d9b2; }
.btn-ghost{ color: var(--fg-light); border: 2px solid rgba(244,233,198,.35); }
.btn-ghost:hover{ background: rgba(244,233,198,.1); }

/* ===== Secciones ===== */
.section h3{ margin: 0 0 16px; font-size: 1.6rem; color: var(--bg-dark); }
.section p{ margin: 0 0 12px; }

/* MVV */
.grid-3{
  display: grid; gap: 22px;
  grid-template-columns: repeat(3, minmax(0,1fr));
}
.panel{
  background: #fff; border-radius: var(--radius); padding: 18px 18px;
  border-left: 4px solid var(--bg-dark); box-shadow: var(--shadow);
}
.panel h4{ margin: 0 0 8px; color: var(--bg-dark); }
.ticks{ list-style: none; padding: 0; margin: 8px 0 0; }
.ticks li::before{ content: "• "; color: var(--bg-dark); margin-right: 6px; }

/* Cards servicios */
.cards{
  display: grid; gap: 18px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
.card{
  background: var(--card); border: 1px solid #e8e8e8; border-radius: 12px; padding: 18px;
  box-shadow: var(--shadow); cursor: pointer; outline: none;
  transition: transform .15s ease, box-shadow .2s ease;
}
.card:hover{ transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0,0,0,.12); }
.card:focus{ box-shadow: 0 0 0 3px rgba(15,38,48,.25); }
.card h5{ margin: 0; color: var(--bg-dark); }
.detalle{ margin-top: 10px; color: var(--muted); }

/* Contacto */
.contact .contact-grid{
  display: grid; gap: 24px; grid-template-columns: 1.1fr .9fr;
}
.contact form{ display: grid; gap: 10px; }
.contact label{ font-weight: 600; }
.contact input, .contact textarea{
  border: 1px solid #D7DEE3; border-radius: 10px; padding: 12px; font: inherit;
}
.contact button.btn{ justify-self: start; }

/* Mapa */
.mapa iframe{ border: 0; border-radius: 14px; box-shadow: var(--shadow); }

/* Footer */
.footer{
  background: var(--bg-dark); color: var(--fg-light); text-align: center; padding: 36px 0 28px;
}
.footer .footer-brand{
  display: flex; justify-content: center; margin-bottom: 12px;
}
.footer .footer-brand img{
  width: 100%; max-width: 300px; height: auto; object-fit: contain;
  filter: contrast(1.03) saturate(1.02);
}
.footer .copy{ margin: 0; opacity: .95; }

/* WhatsApp flotante */
.btn-whatsapp{
  position: fixed; right: 20px; bottom: 20px; z-index: 40;
  background: #25D366; color: #fff; text-decoration: none; font-weight: 700;
  padding: 10px 16px; border-radius: 999px; box-shadow: 0 6px 22px rgba(0,0,0,.3);
}

/* ===== Responsive ===== */
@media (max-width: 920px){
  .contact .contact-grid{ grid-template-columns: 1fr; }
}
@media (max-width: 760px){
  .nav{ display:none; position:absolute; top:56px; right:0; left:0;
        background: rgba(15,38,48,.96); padding: 12px 20px; flex-direction: column; gap: 10px; }
  .nav a{ padding: 10px; border-radius: 10px; }
  .nav.open{ display:flex; }
  .nav-toggle{ display:block; }

  .logo-hero{ width: 160px; height: 160px; }
}

