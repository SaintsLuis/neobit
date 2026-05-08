'use client';

import { useState } from 'react';
import { Icon, LumiLogo } from '../Icon';

interface LoginScreenProps {
  onLogin: (user: { name: string; contract: string }) => void;
  onHelp: () => void;
}

export function LoginScreen({ onLogin, onHelp }: LoginScreenProps) {
  const [contract, setContract] = useState('');
  const [cedula, setCedula]     = useState('');
  const canSubmit = contract.length >= 6 && cedula.length === 4;

  return (
    <div className="lumi-page" style={{ minHeight:'100%', padding:'88px 24px 36px', display:'flex', flexDirection:'column', background:'linear-gradient(180deg,#FFF8F2 0%,#FBFAF8 38%)' }}>
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
        <LumiLogo size={88} />
        <div style={{ textAlign:'center' }}>
          <div style={{ fontSize:14, fontWeight:800, letterSpacing:'.18em', color:'var(--o-600)', marginBottom:8 }}>LUMI</div>
          <div className="lumi-h1" style={{ marginBottom:8 }}>Bienvenido</div>
          <div className="lumi-body" style={{ color:'var(--ink-500)' }}>Ingrese sus datos para continuar</div>
        </div>
      </div>

      <div style={{ marginTop:44, display:'flex', flexDirection:'column', gap:22 }}>
        <div>
          <label htmlFor="contract" style={{ display:'block', marginBottom:10, fontSize:17, fontWeight:700, color:'var(--ink-900)' }}>
            Número de contrato
          </label>
          <input
            id="contract"
            type="text"
            inputMode="numeric"
            className="lumi-input"
            placeholder="Ej. 123-456-789"
            value={contract}
            onChange={e => setContract(e.target.value)}
          />
          <div className="lumi-small" style={{ marginTop:8 }}>Lo encuentra en su factura, arriba a la derecha</div>
        </div>
        <div>
          <label htmlFor="cedula" style={{ display:'block', marginBottom:10, fontSize:17, fontWeight:700, color:'var(--ink-900)' }}>
            Últimos 4 dígitos de su cédula
          </label>
          <input
            id="cedula"
            type="text"
            inputMode="numeric"
            maxLength={4}
            className="lumi-input"
            placeholder="0000"
            value={cedula}
            onChange={e => setCedula(e.target.value.replace(/\D/g, ''))}
            style={{ letterSpacing:'.4em', textAlign:'center', fontSize:28, fontWeight:700 }}
          />
        </div>
      </div>

      <div style={{ marginTop:'auto', paddingTop:32, display:'flex', flexDirection:'column', gap:14 }}>
        <button
          className="lumi-btn-primary"
          disabled={!canSubmit}
          onClick={() => onLogin({ name:'Marta', contract: contract || '123-456-789' })}
        >
          Ingresar
        </button>
        <button onClick={onHelp} style={{ background:'transparent', border:'none', padding:'14px 8px', display:'flex', alignItems:'center', justifyContent:'center', gap:10, color:'var(--ink-700)', fontSize:17, fontWeight:600 }}>
          <Icon name="question" size={22} color="var(--ink-700)" />
          ¿Necesita ayuda para ingresar?
        </button>
        <div style={{ marginTop:6, padding:'14px 16px', background:'var(--ink-50)', borderRadius:14, display:'flex', alignItems:'center', gap:12 }}>
          <Icon name="shield" size={22} color="var(--ok-500)" />
          <div style={{ fontSize:14, fontWeight:600, color:'var(--ink-700)' }}>Sus datos están protegidos</div>
        </div>
      </div>
    </div>
  );
}
