'use client';

import { useState, useEffect } from 'react';
import { Icon } from '../Icon';

function StepIndicator({ step, labels }: { step: number; labels: string[] }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18 }}>
      {labels.map((label, i) => {
        const active = i <= step;
        return (
          <div key={i} style={{ display:'flex', alignItems:'center', gap:8, flex: i < labels.length - 1 ? 1 : undefined }}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
              <div style={{ width:32, height:32, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background: active ? 'var(--o-500)' : 'var(--ink-100)', color: active ? '#fff' : 'var(--ink-500)', fontSize:14, fontWeight:800 }}>
                {i < step ? <Icon name="check" size={16} color="#fff" /> : (i + 1)}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color: active ? 'var(--o-600)' : 'var(--ink-500)', textAlign:'center' }}>{label}</div>
            </div>
            {i < labels.length - 1 && (
              <div style={{ flex:1, height:2, marginBottom:22, background: i < step ? 'var(--o-500)' : 'var(--ink-100)', borderRadius:2 }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

interface PaymentsScreenProps {
  onSelectMethod: (method: string) => void;
  onBack: () => void;
}

export function PaymentsScreen({ onSelectMethod, onBack }: PaymentsScreenProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const methods = [
    { id:'card', icon:'card', color:'var(--info-500)', bg:'var(--info-50)', title:'Tarjeta de crédito o débito', desc:'Pago inmediato y seguro' },
    { id:'pse',  icon:'bank', color:'var(--ok-500)',   bg:'var(--ok-50)',   title:'PSE — desde su banco',       desc:'Transferencia bancaria' },
    { id:'cash', icon:'cash', color:'var(--o-600)',    bg:'var(--o-50)',    title:'Pago en efectivo',           desc:'En Baloto, Efecty o Bancolombia' },
  ];

  return (
    <div className="lumi-page" style={{ padding:'70px 20px 28px', display:'flex', flexDirection:'column', minHeight:'100%' }}>
      <div style={{ marginBottom:18 }}>
        <div className="lumi-h1" style={{ fontSize:32, marginBottom:6 }}>Pagar</div>
        <div className="lumi-body" style={{ color:'var(--ink-500)' }}>Elija cómo desea pagar</div>
      </div>
      <StepIndicator step={0} labels={['Método','Confirmar','Listo']} />

      <div style={{ background:'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)', borderRadius:24, padding:22, color:'#fff', marginBottom:24, boxShadow:'0 12px 28px rgba(226,89,5,.25)' }}>
        <div style={{ fontSize:14, opacity:.9, marginBottom:6 }}>Valor a pagar</div>
        <div style={{ fontSize:48, fontWeight:800, letterSpacing:'-.02em', lineHeight:1 }}>$125.400</div>
        <div style={{ marginTop:16, paddingTop:14, borderTop:'1px solid rgba(255,255,255,.25)', display:'flex', justifyContent:'space-between', fontSize:14 }}>
          <div><div style={{ opacity:.85, marginBottom:2 }}>Referencia</div><div style={{ fontWeight:700 }}>123-456-789-2026-05</div></div>
          <div style={{ textAlign:'right' }}><div style={{ opacity:.85, marginBottom:2 }}>Vence</div><div style={{ fontWeight:700 }}>22 May</div></div>
        </div>
      </div>

      <div className="lumi-eyebrow" style={{ marginBottom:12 }}>Método de pago</div>
      <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:24 }}>
        {methods.map(m => {
          const isSel = selected === m.id;
          return (
            <button key={m.id} onClick={() => setSelected(m.id)} style={{ padding:18, background:'var(--surface)', border: isSel ? '2px solid var(--o-500)' : '2px solid var(--ink-100)', borderRadius:18, display:'flex', alignItems:'center', gap:14, boxShadow: isSel ? '0 0 0 4px var(--o-50)' : 'none', transition:'all .15s', textAlign:'left' }}>
              <div className="lumi-icon-bubble" style={{ background:m.bg }}><Icon name={m.icon} size={26} color={m.color} /></div>
              <div style={{ flex:1 }}>
                <div className="lumi-body-strong">{m.title}</div>
                <div className="lumi-small">{m.desc}</div>
              </div>
              <div style={{ width:28, height:28, borderRadius:'50%', border: isSel ? '2px solid var(--o-500)' : '2px solid var(--ink-100)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                {isSel && <div style={{ width:14, height:14, borderRadius:'50%', background:'var(--o-500)' }} />}
              </div>
            </button>
          );
        })}
      </div>

      <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:10 }}>
        <button className="lumi-btn-primary" disabled={!selected} onClick={() => selected && onSelectMethod(selected)}>
          Continuar <Icon name="chevRight" size={22} color="#fff" />
        </button>
      </div>
    </div>
  );
}

interface PaymentConfirmScreenProps {
  method: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function PaymentConfirmScreen({ method, onConfirm, onCancel }: PaymentConfirmScreenProps) {
  const [processing, setProcessing] = useState(false);
  const methodNames: Record<string, string> = { card:'Tarjeta de crédito/débito', pse:'PSE', cash:'Pago en efectivo' };
  const doConfirm = () => { setProcessing(true); setTimeout(() => onConfirm(), 1400); };

  return (
    <div className="lumi-page" style={{ padding:'70px 20px 28px', display:'flex', flexDirection:'column', minHeight:'100%' }}>
      <div style={{ marginBottom:18 }}>
        <div className="lumi-h1" style={{ fontSize:32, marginBottom:6 }}>Revise su pago</div>
        <div className="lumi-body" style={{ color:'var(--ink-500)' }}>Antes de confirmar</div>
      </div>
      <StepIndicator step={1} labels={['Método','Confirmar','Listo']} />

      <div style={{ background:'var(--surface)', border:'2px solid var(--o-100)', borderRadius:24, padding:22, marginBottom:22 }}>
        <div className="lumi-eyebrow" style={{ marginBottom:14 }}>Resumen</div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', paddingBottom:16, borderBottom:'1px solid var(--ink-100)' }}>
          <div className="lumi-body" style={{ color:'var(--ink-500)' }}>Total a pagar</div>
          <div style={{ fontSize:32, fontWeight:800, color:'var(--o-600)', letterSpacing:'-.02em' }}>$125.400</div>
        </div>
        <div style={{ paddingTop:16, display:'flex', flexDirection:'column', gap:12 }}>
          {[['Servicio','Energía Residencial'],['Contrato','123-456-789'],['Período','Mayo 2026'],['Vence','22 mayo 2026'],['Método', methodNames[method] || 'Tarjeta']].map(([k, v], i) => (
            <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
              <div className="lumi-small">{k}</div>
              <div className="lumi-body-strong" style={{ fontSize:16 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:16, borderRadius:16, background:'var(--info-50)', display:'flex', gap:12, alignItems:'center', marginBottom:22 }}>
        <Icon name="shield" size={28} color="var(--info-500)" />
        <div className="lumi-small" style={{ color:'var(--ink-700)', fontWeight:600 }}>Esta operación es segura y está cifrada de extremo a extremo.</div>
      </div>

      <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:12 }}>
        <button className="lumi-btn-primary" disabled={processing} onClick={doConfirm}>
          {processing ? (
            <><div style={{ width:22, height:22, border:'3px solid rgba(255,255,255,.4)', borderTopColor:'#fff', borderRadius:'50%', animation:'spin .8s linear infinite' }} />Procesando…</>
          ) : (
            <><Icon name="shield" size={22} color="#fff" />Confirmar pago</>
          )}
        </button>
        <button className="lumi-btn-secondary" onClick={onCancel} disabled={processing}>Cancelar</button>
      </div>
    </div>
  );
}

interface PaymentSuccessScreenProps {
  onHome: () => void;
  onSpeak?: ((text: string) => void) | null;
}

export function PaymentSuccessScreen({ onHome, onSpeak }: PaymentSuccessScreenProps) {
  const ref = 'NEO-' + Date.now().toString().slice(-8);

  useEffect(() => {
    if (onSpeak) onSpeak('¡Pago exitoso! Su factura del mes de mayo por ciento veinticinco mil cuatrocientos pesos ha sido pagada.');
  }, []);

  return (
    <div className="lumi-page" style={{ padding:'70px 20px 28px', display:'flex', flexDirection:'column', minHeight:'100%' }}>
      <StepIndicator step={2} labels={['Método','Confirmar','Listo']} />

      <div style={{ display:'flex', justifyContent:'center', marginTop:20, marginBottom:24 }}>
        <div style={{ width:130, height:130, borderRadius:'50%', background:'var(--ok-50)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', animation:'lumi-pop .5s cubic-bezier(.34,1.56,.64,1)' }}>
          <div style={{ position:'absolute', inset:18, borderRadius:'50%', background:'var(--ok-500)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Icon name="check" size={56} color="#fff" />
          </div>
        </div>
      </div>

      <div style={{ textAlign:'center', marginBottom:28 }}>
        <div className="lumi-h1" style={{ fontSize:32, marginBottom:8 }}>¡Pago exitoso!</div>
        <div className="lumi-body" style={{ color:'var(--ink-500)' }}>Su factura ha sido pagada</div>
      </div>

      <div style={{ background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, padding:22, marginBottom:22 }}>
        <div style={{ textAlign:'center', paddingBottom:16, borderBottom:'1px dashed var(--ink-100)' }}>
          <div className="lumi-small" style={{ marginBottom:4 }}>Monto pagado</div>
          <div style={{ fontSize:36, fontWeight:800, color:'var(--ink-900)', letterSpacing:'-.02em' }}>$125.400</div>
        </div>
        <div style={{ paddingTop:16, display:'flex', flexDirection:'column', gap:12 }}>
          {[
            ['N° de comprobante', ref],
            ['Fecha', new Date().toLocaleDateString('es-CO', { day:'numeric', month:'long', year:'numeric' })],
            ['Servicio', 'Energía Residencial'],
            ['Estado', 'Aprobado ✓'],
          ].map(([k, v], i) => (
            <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:12 }}>
              <div className="lumi-small">{k}</div>
              <div className="lumi-body-strong" style={{ fontSize:15, textAlign:'right' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop:'auto', display:'flex', flexDirection:'column', gap:12 }}>
        <button className="lumi-btn-primary" onClick={onHome}><Icon name="home" size={22} color="#fff" />Volver al inicio</button>
        <button className="lumi-btn-ghost">Descargar comprobante</button>
      </div>
    </div>
  );
}
