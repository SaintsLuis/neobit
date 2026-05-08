'use client';

import { Icon } from '../Icon';

interface InvoiceScreenProps {
  user: { name: string; contract: string };
  onPay: () => void;
  onBack: () => void;
}

const breakdown = [
  { label:'Consumo de energía', kwh:'245 kWh', amount:98200 },
  { label:'Cargo fijo',         kwh: null,     amount:12500 },
  { label:'Alumbrado público',  kwh: null,     amount:6800 },
  { label:'Aseo',               kwh: null,     amount:5400 },
  { label:'Contribución',       kwh: null,     amount:2500 },
];

const fmt = (n: number) => '$' + n.toLocaleString('es-CO');

export function InvoiceScreen({ user, onPay, onBack }: InvoiceScreenProps) {
  const total = breakdown.reduce((s, x) => s + x.amount, 0);

  return (
    <div className="lumi-page" style={{ paddingBottom:28 }}>
      {/* Header */}
      <div style={{ padding:'64px 16px 16px', display:'flex', alignItems:'center', gap:12 }}>
        <button onClick={onBack} aria-label="Volver" style={{ width:44, height:44, borderRadius:'50%', background:'var(--surface)', border:'1px solid var(--ink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name="chevLeft" size={22} color="var(--ink-700)" />
        </button>
        <div className="lumi-h2" style={{ flex:1 }}>Mi factura</div>
        <button aria-label="Descargar" style={{ width:44, height:44, borderRadius:'50%', background:'var(--surface)', border:'1px solid var(--ink-100)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name="download" size={22} color="var(--ink-700)" />
        </button>
      </div>

      <div style={{ padding:'0 20px' }}>
        {/* Hero */}
        <div style={{ background:'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)', borderRadius:28, padding:'24px 24px 22px', color:'#fff', boxShadow:'0 14px 36px rgba(226,89,5,.32)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:-40, right:-40, width:180, height:180, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,255,255,.18) 0%,transparent 70%)' }} />
          <div style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'5px 12px', borderRadius:999, background:'rgba(255,255,255,.22)', fontSize:13, fontWeight:700, marginBottom:10 }}>
            <Icon name="clock" size={14} color="#fff" />
            Pendiente · Vence en 14 días
          </div>
          <div style={{ fontSize:14, opacity:.9, marginBottom:6 }}>Total a pagar — mayo 2026</div>
          <div style={{ fontSize:52, fontWeight:800, letterSpacing:'-.02em', lineHeight:1 }}>{fmt(total)}</div>
          <div style={{ marginTop:18, paddingTop:16, borderTop:'1px solid rgba(255,255,255,.25)', display:'flex', justifyContent:'space-between', gap:12 }}>
            <div><div style={{ fontSize:13, opacity:.85, marginBottom:4 }}>Período</div><div style={{ fontSize:15, fontWeight:700 }}>15 abr — 14 may</div></div>
            <div style={{ textAlign:'right' }}><div style={{ fontSize:13, opacity:.85, marginBottom:4 }}>Vence</div><div style={{ fontSize:15, fontWeight:700 }}>22 mayo 2026</div></div>
          </div>
        </div>

        {/* Datos */}
        <div className="lumi-eyebrow" style={{ marginTop:24, marginBottom:12 }}>Datos de la factura</div>
        <div style={{ background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, overflow:'hidden' }}>
          {[['Titular','Marta Restrepo'],['Contrato', user.contract],['Servicio','Energía Residencial'],['Estrato','3'],['N° factura','F-2026-0584']].map(([k, v], i, arr) => (
            <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 18px', borderBottom: i < arr.length-1 ? '1px solid var(--ink-100)' : 'none' }}>
              <div className="lumi-small">{k}</div>
              <div className="lumi-body-strong" style={{ fontSize:15 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Desglose */}
        <div className="lumi-eyebrow" style={{ marginTop:24, marginBottom:12 }}>Desglose del cobro</div>
        <div style={{ background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, padding:6 }}>
          {breakdown.map((row, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'14px 14px', borderBottom: i < breakdown.length-1 ? '1px solid var(--ink-100)' : 'none' }}>
              <div style={{ flex:1 }}>
                <div className="lumi-body-strong" style={{ fontSize:16 }}>{row.label}</div>
                {row.kwh && <div className="lumi-small" style={{ fontSize:13 }}>{row.kwh}</div>}
              </div>
              <div className="lumi-body-strong" style={{ fontSize:16, color:'var(--ink-900)' }}>{fmt(row.amount)}</div>
            </div>
          ))}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 14px', background:'var(--o-50)', borderRadius:14, margin:4 }}>
            <div className="lumi-body-strong" style={{ fontSize:17 }}>Total</div>
            <div style={{ fontSize:24, fontWeight:800, color:'var(--o-600)', letterSpacing:'-.02em' }}>{fmt(total)}</div>
          </div>
        </div>

        {/* Comparación */}
        <div style={{ marginTop:16, padding:18, background:'var(--ok-50)', borderRadius:18, display:'flex', alignItems:'center', gap:14 }}>
          <div className="lumi-icon-bubble" style={{ background:'#fff', width:44, height:44 }}><Icon name="trendUp" size={22} color="var(--ok-500)" /></div>
          <div style={{ flex:1 }}>
            <div className="lumi-body-strong" style={{ fontSize:15 }}>Pagó $7.000 menos que en abril</div>
            <div className="lumi-small" style={{ fontSize:13 }}>¡Buen trabajo cuidando su consumo!</div>
          </div>
        </div>

        {/* Acciones */}
        <div style={{ marginTop:24, display:'flex', flexDirection:'column', gap:12 }}>
          <button className="lumi-btn-primary" onClick={onPay}>
            <Icon name="dollar" size={22} color="#fff" />
            Pagar {fmt(total)}
          </button>
          <button className="lumi-btn-secondary">
            <Icon name="download" size={22} color="var(--o-600)" />
            Descargar factura PDF
          </button>
        </div>
      </div>
    </div>
  );
}
