'use client';

import { useState } from 'react';
import { Icon, NeobitLogo } from '../Icon';

interface LoginScreenProps {
  onLogin: (user: { name: string; contract: string }) => void;
  onHelp: () => void;
  isDesktop?: boolean;
}

function LoginForm({
  contract, cedula, setContract, setCedula, canSubmit, onLogin, onHelp,
}: {
  contract: string; cedula: string;
  setContract: (v: string) => void; setCedula: (v: string) => void;
  canSubmit: boolean;
  onLogin: (u: { name: string; contract: string }) => void;
  onHelp: () => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div>
        <label htmlFor="contract" style={{ display: 'block', marginBottom: 10, fontSize: 17, fontWeight: 700, color: 'var(--ink-900)' }}>
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
        <div className="lumi-small" style={{ marginTop: 8 }}>Lo encuentra en su factura, arriba a la derecha</div>
      </div>
      <div>
        <label htmlFor="cedula" style={{ display: 'block', marginBottom: 10, fontSize: 17, fontWeight: 700, color: 'var(--ink-900)' }}>
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
          style={{ letterSpacing: '.4em', textAlign: 'center', fontSize: 28, fontWeight: 700 }}
        />
      </div>
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <button
          className="lumi-btn-primary"
          disabled={!canSubmit}
          onClick={() => onLogin({ name: 'Marta', contract: contract || '123-456-789' })}
        >
          Ingresar
        </button>
        <button
          onClick={onHelp}
          style={{ background: 'transparent', border: 'none', padding: '14px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: 'var(--ink-700)', fontSize: 17, fontWeight: 600 }}
        >
          <Icon name="question" size={22} color="var(--ink-700)" />
          ¿Necesita ayuda para ingresar?
        </button>
        <div style={{ padding: '14px 16px', background: 'var(--ink-50)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="shield" size={22} color="var(--ok-500)" />
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-700)' }}>Sus datos están protegidos</div>
        </div>
      </div>
    </div>
  );
}

export function LoginScreen({ onLogin, onHelp, isDesktop }: LoginScreenProps) {
  const [contract, setContract] = useState('');
  const [cedula, setCedula]     = useState('');
  const canSubmit = contract.length >= 6 && cedula.length === 4;

  if (isDesktop) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Left: brand panel */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(160deg, #1A1411 0%, #2D200F 55%, #3D2C0F 100%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '64px 56px',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle,rgba(242,158,8,.12) 0%,transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle,rgba(226,89,5,.1) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ width: '100%', maxWidth: 420, position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 52 }}>
              <NeobitLogo size={52} />
              <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: '.12em', color: 'var(--o-400)' }}>NEOBIT</span>
            </div>

            <h1 style={{ fontSize: 44, fontWeight: 800, color: '#fff', margin: '0 0 18px', letterSpacing: '-.02em', lineHeight: 1.1 }}>
              Gestione su energía,<br />desde casa.
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, margin: '0 0 52px' }}>
              Pague su factura, revise su consumo y mantenga su servicio siempre activo.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: 'shield',  text: 'Pagos seguros y protegidos' },
                { icon: 'doc',     text: 'Factura detallada al instante' },
                { icon: 'speaker', text: 'Diseñado para toda la familia' },
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(242,158,8,.15)', border: '1px solid rgba(242,158,8,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={f.icon} size={24} color="var(--o-400)" />
                  </div>
                  <span style={{ fontSize: 17, color: 'rgba(255,255,255,.8)', fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: form panel */}
        <div style={{
          width: 520, flexShrink: 0,
          background: 'var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '48px 56px',
        }}>
          <div style={{ width: '100%', maxWidth: 400 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 8px', color: 'var(--ink-900)' }}>Bienvenido</h2>
            <p style={{ color: 'var(--ink-500)', margin: '0 0 36px', fontSize: 18 }}>Ingrese sus datos para continuar</p>
            <LoginForm
              contract={contract} cedula={cedula}
              setContract={setContract} setCedula={setCedula}
              canSubmit={canSubmit} onLogin={onLogin} onHelp={onHelp}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lumi-page" style={{ minHeight: '100%', padding: '88px 24px 36px', display: 'flex', flexDirection: 'column', background: 'linear-gradient(180deg,#FFF8F2 0%,#FBFAF8 38%)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <NeobitLogo size={88} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: '.18em', color: 'var(--o-600)', marginBottom: 8 }}>NEOBIT</div>
          <div className="lumi-h1" style={{ marginBottom: 8 }}>Bienvenido</div>
          <div className="lumi-body" style={{ color: 'var(--ink-500)' }}>Ingrese sus datos para continuar</div>
        </div>
      </div>

      <div style={{ marginTop: 44, display: 'flex', flexDirection: 'column', gap: 22 }}>
        <LoginForm
          contract={contract} cedula={cedula}
          setContract={setContract} setCedula={setCedula}
          canSubmit={canSubmit} onLogin={onLogin} onHelp={onHelp}
        />
      </div>
    </div>
  );
}
