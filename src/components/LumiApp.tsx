'use client';

import { useState, useEffect } from 'react';
import { Icon, NeobitLogo } from './Icon';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { MyProfileScreen } from './screens/MyProfileScreen';
import { InformationScreen } from './screens/InformationScreen';
import { PaymentsScreen, PaymentConfirmScreen, PaymentSuccessScreen } from './screens/PaymentScreens';
import { InvoiceScreen } from './screens/InvoiceScreen';

type User = { name: string; contract: string };
type PayStep = null | 'method' | 'confirm' | 'success';

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'es-CO'; u.rate = 0.95; u.pitch = 1;
  window.speechSynthesis.speak(u);
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

const NAV_TABS = [
  { id: 0, label: 'Inicio',      icon: 'home', iconFill: 'homeFill' },
  { id: 1, label: 'Mi perfil',   icon: 'user', iconFill: 'user' },
  { id: 2, label: 'Información', icon: 'info', iconFill: 'infoFill' },
  { id: 3, label: 'Pagos',       icon: 'card', iconFill: 'cardFill' },
];

// ── Sidebar (desktop only) ────────────────────────────────────
function Sidebar({ active, onChange, onHelp, user }: {
  active: number; onChange: (t: number) => void; onHelp: () => void; user: { name: string } | null;
}) {
  return (
    <aside className="lumi-sidebar">
      <div className="lumi-sidebar-brand">
        <NeobitLogo size={38} />
        <span className="lumi-sidebar-brand-name">NEOBIT</span>
      </div>

      <nav className="lumi-sidebar-nav-items">
        {NAV_TABS.map(t => {
          const isActive = active === t.id;
          return (
            <button key={t.id} className="lumi-sidebar-item" data-active={isActive} onClick={() => onChange(t.id)}>
              <Icon name={isActive ? t.iconFill : t.icon} size={20} color={isActive ? 'var(--o-500)' : 'var(--ink-500)'} />
              {t.label}
            </button>
          );
        })}
      </nav>

      <div className="lumi-sidebar-footer">
        {user && (
          <div className="lumi-sidebar-user">
            <div className="lumi-sidebar-avatar">{user.name[0]}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink-900)' }}>{user.name}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-500)' }}>Cliente activo</div>
            </div>
          </div>
        )}
        <button className="lumi-sidebar-item" onClick={onHelp} style={{ marginTop: 8 }}>
          <Icon name="question" size={20} color="var(--ink-500)" />
          Ayuda
        </button>
      </div>
    </aside>
  );
}

// ── Tab Bar (mobile only) ─────────────────────────────────────
function TabBar({ active, onChange }: { active: number; onChange: (t: number) => void }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--ink-100)',
      paddingTop: 8,
      paddingBottom: 'max(20px, env(safe-area-inset-bottom, 8px))',
      display: 'flex',
      zIndex: 30,
    }}>
      {NAV_TABS.map(t => {
        const isActive = active === t.id;
        return (
          <button key={t.id} className="lumi-tab" data-active={isActive} onClick={() => onChange(t.id)}>
            <Icon name={isActive ? t.iconFill : t.icon} size={26} color={isActive ? 'var(--o-500)' : 'var(--ink-500)'} />
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── Help FAB (mobile only) ────────────────────────────────────
function HelpFab({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="Ayuda" style={{
      position: 'absolute', bottom: 'calc(max(20px, env(safe-area-inset-bottom, 8px)) + 88px)',
      right: 16, width: 52, height: 52, borderRadius: '50%',
      background: 'var(--ink-900)', color: '#fff', border: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 6px 18px rgba(26,20,17,.24)', zIndex: 40,
    }}>
      <Icon name="question" size={24} color="#fff" />
    </button>
  );
}

// ── Help Sheet ───────────────────────────────────────────────
interface HelpSheetProps {
  open: boolean;
  onClose: () => void;
  tweaks: { textScale: number; voiceOnNav: boolean };
  onTweak: (key: string, value: number | boolean) => void;
}

function HelpSheet({ open, onClose, tweaks, onTweak }: HelpSheetProps) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 100, background: 'rgba(26,20,17,.5)', animation: 'lumi-fade .2s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: 'var(--surface)', borderRadius: '28px 28px 0 0', padding: '14px 20px 36px', animation: 'lumi-sheet-up .3s cubic-bezier(.2,.8,.3,1)', maxHeight: '85%', overflow: 'auto' }}>
        <div style={{ width: 44, height: 5, borderRadius: 999, background: 'var(--ink-100)', margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="lumi-h2">¿Necesita ayuda?</div>
          <button onClick={onClose} style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--ink-50)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="x" size={22} color="var(--ink-700)" />
          </button>
        </div>
        <div className="lumi-small" style={{ marginBottom: 22 }}>Estamos aquí para ayudarle</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
          {[
            { icon: 'phone',    color: 'var(--ok-500)', bg: 'var(--ok-50)', title: 'Llamar al servicio al cliente', sub: '01-8000-NEOBIT · Las 24 horas, gratis' },
            { icon: 'whatsapp', color: 'var(--ok-500)', bg: 'var(--ok-50)', title: 'Escribirnos por WhatsApp',       sub: 'Respuesta inmediata' },
          ].map((c, i) => (
            <button key={i} className="lumi-list-row" style={{ minHeight: 76 }}>
              <div className="lumi-icon-bubble" style={{ background: c.bg }}><Icon name={c.icon} size={26} color={c.color} /></div>
              <div style={{ flex: 1 }}><div className="lumi-body-strong">{c.title}</div><div className="lumi-small">{c.sub}</div></div>
              <Icon name="chevRight" size={22} color="var(--ink-300)" />
            </button>
          ))}
        </div>

        <div className="lumi-eyebrow" style={{ marginBottom: 12 }}>Accesibilidad</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          <div className="lumi-list-row" style={{ minHeight: 76 }}>
            <div className="lumi-icon-bubble" style={{ background: 'var(--o-50)' }}><Icon name="textSize" size={26} color="var(--o-600)" /></div>
            <div style={{ flex: 1 }}><div className="lumi-body-strong">Tamaño del texto</div><div className="lumi-small">Hacer todo más grande</div></div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[{ v: 1, s: 14 }, { v: 1.15, s: 18 }, { v: 1.3, s: 22 }].map((opt, i) => (
                <button key={i} onClick={() => onTweak('textScale', opt.v)} style={{ width: 44, height: 44, borderRadius: 12, background: tweaks.textScale === opt.v ? 'var(--o-500)' : 'var(--ink-50)', color: tweaks.textScale === opt.v ? '#fff' : 'var(--ink-700)', border: 'none', fontSize: opt.s, fontWeight: 800 }}>A</button>
              ))}
            </div>
          </div>

          <button onClick={() => onTweak('voiceOnNav', !tweaks.voiceOnNav)} className="lumi-list-row" style={{ minHeight: 76 }}>
            <div className="lumi-icon-bubble" style={{ background: 'var(--info-50)' }}><Icon name="speaker" size={26} color="var(--info-500)" /></div>
            <div style={{ flex: 1, textAlign: 'left' }}>
              <div className="lumi-body-strong">Lectura por voz</div>
              <div className="lumi-small">{tweaks.voiceOnNav ? 'Activada — leerá cada pantalla' : 'Desactivada'}</div>
            </div>
            <div style={{ width: 56, height: 32, borderRadius: 16, background: tweaks.voiceOnNav ? 'var(--ok-500)' : 'var(--ink-100)', position: 'relative', transition: 'background .2s' }}>
              <div style={{ position: 'absolute', top: 3, left: tweaks.voiceOnNav ? 27 : 3, width: 26, height: 26, borderRadius: '50%', background: '#fff', transition: 'left .2s', boxShadow: '0 2px 4px rgba(0,0,0,.2)' }} />
            </div>
          </button>
        </div>

        <button onClick={onClose} className="lumi-btn-primary" style={{ marginTop: 12 }}>Volver</button>
      </div>
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────
export function LumiApp() {
  const [user, setUser]               = useState<User | null>(null);
  const [tab, setTab]                 = useState(0);
  const [payStep, setPayStep]         = useState<PayStep>(null);
  const [payMethod, setPayMethod]     = useState<string | null>(null);
  const [showInvoice, setShowInvoice] = useState(false);
  const [helpOpen, setHelpOpen]       = useState(false);
  const [tweaks, setTweaks]           = useState({ textScale: 1, voiceOnNav: false });
  const isDesktop                     = useIsDesktop();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.lumi-app-root');
    if (root) root.style.setProperty('--tx-scale', String(tweaks.textScale));
  }, [tweaks.textScale]);

  useEffect(() => {
    if (!tweaks.voiceOnNav || !user || payStep !== null) return;
    const labels = ['Inicio', 'Mi perfil', 'Información', 'Pagos'];
    speak('Pantalla de ' + labels[tab]);
  }, [tab, tweaks.voiceOnNav, user]);

  const updateTweak = (key: string, value: number | boolean) =>
    setTweaks(prev => ({ ...prev, [key]: value }));

  const startPayment  = () => setPayStep('method');
  const inPaymentFlow = payStep !== null;
  const showChrome    = !!user && !inPaymentFlow && !showInvoice;

  const contentPaddingBottom = showChrome && !isDesktop
    ? 'calc(100px + env(safe-area-inset-bottom, 0px))'
    : '48px';

  let screen: React.ReactNode;
  if (!user) {
    screen = <LoginScreen onLogin={u => { setUser(u); setTab(0); }} onHelp={() => setHelpOpen(true)} isDesktop={isDesktop} />;
  } else if (showInvoice) {
    screen = <InvoiceScreen user={user} onPay={() => { setShowInvoice(false); setPayStep('method'); }} onBack={() => setShowInvoice(false)} isDesktop={isDesktop} />;
  } else if (payStep === 'method') {
    screen = <PaymentsScreen onSelectMethod={m => { setPayMethod(m); setPayStep('confirm'); }} onBack={() => setPayStep(null)} isDesktop={isDesktop} />;
  } else if (payStep === 'confirm') {
    screen = <PaymentConfirmScreen method={payMethod!} onConfirm={() => setPayStep('success')} onCancel={() => setPayStep('method')} isDesktop={isDesktop} />;
  } else if (payStep === 'success') {
    screen = <PaymentSuccessScreen onHome={() => { setPayStep(null); setTab(0); }} onSpeak={tweaks.voiceOnNav ? speak : null} isDesktop={isDesktop} />;
  } else {
    if (tab === 0) screen = <HomeScreen user={user} onPay={startPayment} onNav={setTab} onInvoice={() => setShowInvoice(true)} onHelp={() => setHelpOpen(true)} onSpeak={() => speak(`Hola ${user.name}. Su factura del mes de mayo es de ciento veinticinco mil cuatrocientos pesos. Vence en 14 días.`)} isDesktop={isDesktop} />;
    else if (tab === 1) screen = <MyProfileScreen user={user} isDesktop={isDesktop} />;
    else if (tab === 2) screen = <InformationScreen isDesktop={isDesktop} />;
    else if (tab === 3) screen = <PaymentsScreen onSelectMethod={m => { setPayMethod(m); setPayStep('confirm'); }} onBack={() => setTab(0)} isDesktop={isDesktop} />;
  }

  return (
    <div className="app-shell">
      {showChrome && isDesktop && (
        <Sidebar active={tab} onChange={setTab} onHelp={() => setHelpOpen(true)} user={user} />
      )}

      <div className="lumi-app lumi-app-root" style={{
        flex: 1,
        height: '100%',
        position: 'relative',
        background: 'var(--bg)',
        overflow: 'hidden',
        ['--tx-scale' as string]: tweaks.textScale,
      }}>
        <div className="lumi-scroll" style={{ height: '100%', overflowY: 'auto', paddingBottom: contentPaddingBottom }}>
          <div className={isDesktop ? 'lumi-desktop-content' : undefined}>
            {screen}
          </div>
        </div>

        {showChrome && !isDesktop && <HelpFab onClick={() => setHelpOpen(true)} />}
        {showChrome && !isDesktop && <TabBar active={tab} onChange={setTab} />}
        <HelpSheet open={helpOpen} onClose={() => setHelpOpen(false)} tweaks={tweaks} onTweak={updateTweak} />
      </div>
    </div>
  );
}
