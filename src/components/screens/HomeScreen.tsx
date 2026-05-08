'use client';

import { Icon } from '../Icon';

interface HomeScreenProps {
  user: { name: string; contract: string };
  onPay: () => void;
  onNav: (tab: number) => void;
  onInvoice: () => void;
  onHelp: () => void;
  onSpeak: () => void;
  isDesktop?: boolean;
}

export function HomeScreen({ user, onPay, onNav, onInvoice, onSpeak, isDesktop }: HomeScreenProps) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches';
  const daysToDue = 14;

  const invoiceCard = (
    <div style={{ background: 'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)', borderRadius: 28, padding: '24px 24px 22px', color: '#fff', boxShadow: '0 14px 36px rgba(226,89,5,.32)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,.18) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
        <div style={{ fontSize: 16, fontWeight: 600, opacity: .95 }}>Su factura de mayo</div>
        <div style={{ background: 'rgba(255,255,255,.22)', padding: '6px 12px', borderRadius: 999, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="clock" size={14} color="#fff" />
          Vence en {daysToDue} días
        </div>
      </div>
      <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1, marginTop: 4 }}>$125.400</div>
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.25)', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ fontSize: 13, opacity: .85, marginBottom: 4 }}>Fecha de corte</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>15 May 2026</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 13, opacity: .85, marginBottom: 4 }}>Vence</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>22 May 2026</div>
        </div>
      </div>
      <button onClick={onPay} style={{ width: '100%', marginTop: 20, minHeight: 60, background: '#fff', color: 'var(--o-600)', border: 'none', borderRadius: 16, fontSize: 19, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <Icon name="dollar" size={22} color="var(--o-600)" />
        Pagar ahora
      </button>
    </div>
  );

  const quickAccess = (
    <div>
      <div className="lumi-eyebrow" style={{ marginBottom: 12 }}>Acceso rápido</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
        {[
          { name: 'trendUp', label: 'Mi consumo',    color: 'var(--info-500)', bg: 'var(--info-50)', action: () => onNav(2) },
          { name: 'doc',     label: 'Mi factura',    color: 'var(--o-600)',    bg: 'var(--o-50)',    action: onInvoice },
          { name: 'wrench',  label: 'Reportar daño', color: 'var(--warn-500)', bg: 'var(--warn-50)', action: () => onNav(2) },
        ].map((a, i) => (
          <button key={i} onClick={a.action} style={{ background: 'var(--surface)', border: '1px solid var(--ink-100)', borderRadius: 18, padding: '18px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, minHeight: 100 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={a.name} size={22} color={a.color} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-900)', textAlign: 'center', lineHeight: 1.2 }}>{a.label}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const serviceStatus = (
    <div style={{ marginTop: 20 }}>
      <div className="lumi-eyebrow" style={{ marginBottom: 12 }}>Su servicio</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="lumi-list-row">
          <div className="lumi-icon-bubble" style={{ background: 'var(--ok-50)' }}><Icon name="checkCircle" size={26} color="var(--ok-500)" /></div>
          <div style={{ flex: 1 }}><div className="lumi-body-strong">Servicio activo</div><div className="lumi-small">Sin interrupciones reportadas</div></div>
        </div>
        <div className="lumi-list-row">
          <div className="lumi-icon-bubble" style={{ background: 'var(--info-50)' }}><Icon name="trendUp" size={26} color="var(--info-500)" /></div>
          <div style={{ flex: 1 }}><div className="lumi-body-strong">245 kWh este mes</div><div className="lumi-small">12 kWh menos que abril</div></div>
        </div>
        <div className="lumi-list-row">
          <div className="lumi-icon-bubble" style={{ background: 'var(--o-50)' }}><Icon name="calendar" size={26} color="var(--o-600)" /></div>
          <div style={{ flex: 1 }}><div className="lumi-body-strong">Último pago</div><div className="lumi-small">$118.200 · 15 abril 2026</div></div>
          <div style={{ background: 'var(--ok-50)', color: 'var(--ok-500)', padding: '6px 12px', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>Pagado</div>
        </div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <div className="lumi-page" style={{ padding: '40px 48px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div>
            <div className="lumi-small">{greeting},</div>
            <div className="lumi-h1">{user.name}</div>
          </div>
          <button onClick={onSpeak} aria-label="Leer en voz alta" style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ink-50)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="speaker" size={24} color="var(--ink-700)" />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 28, alignItems: 'start' }}>
          <div>{invoiceCard}</div>
          <div>
            {quickAccess}
            {serviceStatus}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lumi-page" style={{ padding: '70px 20px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
        <div>
          <div className="lumi-small" style={{ marginBottom: 4 }}>{greeting},</div>
          <div className="lumi-h1" style={{ fontSize: 32 }}>{user.name}</div>
        </div>
        <button onClick={onSpeak} aria-label="Leer en voz alta" style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--ink-50)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="speaker" size={24} color="var(--ink-700)" />
        </button>
      </div>

      {invoiceCard}

      <div style={{ marginTop: 28 }}>
        {quickAccess}
      </div>

      {serviceStatus}
      <div style={{ height: 20 }} />
    </div>
  );
}
