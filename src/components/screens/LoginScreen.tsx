'use client'

import { useState } from 'react'
import { Icon, NeobitLogo } from '../Icon'
import Image from 'next/image'

interface LoginScreenProps {
  onLogin: (user: { name: string; contract: string }) => void
  onHelp: () => void
  isDesktop?: boolean
}

function LoginForm({
  cedula,
  setCedula,
  canSubmit,
  onLogin,
  onHelp,
}: {
  cedula: string
  setCedula: (v: string) => void
  canSubmit: boolean
  onLogin: (u: { name: string; contract: string }) => void
  onHelp: () => void
}) {
  const handleCedulaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 4) {
      setCedula(value)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ marginBottom: 24 }}>
        <label
          htmlFor='cedula'
          style={{
            display: 'block',
            fontSize: 'calc(15px * var(--tx-scale))',
            fontWeight: 700,
            color: 'var(--ink-900)',
            marginBottom: 12,
          }}
        >
          Últimos 4 dígitos de su cédula
        </label>
        <input
          id='cedula'
          type='text'
          inputMode='numeric'
          maxLength={4}
          className='login-input'
          placeholder='• • • •'
          value={cedula}
          onChange={handleCedulaChange}
          aria-label='Últimos 4 dígitos de su cédula'
        />
        <span
          style={{
            display: 'block',
            fontSize: 'calc(13px * var(--tx-scale))',
            color: 'var(--ink-400)',
            marginTop: 8,
            fontWeight: 500,
          }}
        >
          Los encontrará en su documento de identidad
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          marginTop: 20,
        }}
      >
        <button
          className='login-btn-submit'
          disabled={!canSubmit}
          onClick={() => onLogin({ name: 'Marta', contract: '123-456-789' })}
        >
          <Icon name='lock' size={18} color='#fff' />
          Ingresar de forma segura
        </button>

        <button className='login-btn-help' onClick={onHelp}>
          <Icon name='question' size={16} color='var(--ink-700)' />
          ¿Necesita ayuda?
        </button>
      </div>

      {/* <div
        style={{
          padding: '12px 16px',
          background: 'var(--ok-50)',
          border: '1.5px solid var(--ok-500)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginTop: 12,
        }}
      >
        <Icon name='shield' size={16} color='var(--ok-500)' />
        <span
          style={{
            fontSize: 'calc(12px * var(--tx-scale))',
            fontWeight: 700,
            color: 'var(--ok-500)',
          }}
        >
          Sus datos están protegidos
        </span>
      </div> */}
    </div>
  )
}

export function LoginScreen({ onLogin, onHelp, isDesktop }: LoginScreenProps) {
  const [cedula, setCedula] = useState('')
  const canSubmit = cedula.length === 4

  if (isDesktop) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div
          style={{
            flex: 1,
            background:
              'linear-gradient(165deg, #1A1411 0%, #2D200F 50%, #3D2C0F 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '64px 56px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: '50%',
              background:
                'radial-gradient(circle,rgba(242,158,8,.15) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -80,
              left: -80,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background:
                'radial-gradient(circle,rgba(226,89,5,.12) 0%,transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              width: '100%',
              maxWidth: 450,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                marginBottom: 56,
              }}
            >
              <NeobitLogo size={56} />
              <span style={{ fontSize: 24, fontWeight: 800, color: '#fff' }}>
                NEOBIT
              </span>
            </div>

            <h1
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: '#fff',
                margin: '0 0 20px',
                lineHeight: 1.1,
              }}
            >
              Gestione su energía desde casa
            </h1>
            <p
              style={{
                fontSize: 18,
                color: 'rgba(255,255,255,.7)',
                lineHeight: 1.6,
                margin: '0 0 56px',
              }}
            >
              Pague fácilmente, revise su consumo y controle su servicio.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: 'shield', text: 'Pagos 100% seguros' },
                { icon: 'zap', text: 'Acceso instantáneo' },
                { icon: 'users', text: 'Para toda la familia' },
              ].map((f) => (
                <div
                  key={f.icon}
                  style={{ display: 'flex', alignItems: 'center', gap: 16 }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'rgba(242,158,8,.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon name={f.icon} size={24} color='var(--o-300)' />
                  </div>
                  <span
                    style={{
                      fontSize: 16,
                      color: 'rgba(255,255,255,.85)',
                      fontWeight: 600,
                    }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            width: 520,
            flexShrink: 0,
            background: 'var(--bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px 56px',
          }}
        >
          <div style={{ width: '100%', maxWidth: 420 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 8px' }}>
              Bienvenido
            </h2>
            <p
              style={{
                color: 'var(--ink-500)',
                margin: '0 0 40px',
                fontSize: 16,
              }}
            >
              Ingrese su cédula para continuar
            </p>
            <LoginForm
              cedula={cedula}
              setCedula={setCedula}
              canSubmit={canSubmit}
              onLogin={onLogin}
              onHelp={onHelp}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className='lumi-page'
      style={{
        minHeight: '100vh',
        padding: '80px 24px 40px',
        display: 'flex',
        flexDirection: 'column',
        background:
          'linear-gradient(180deg, #FFF8F2 0%, #FBFAF8 45%, #F5F2EE 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 24,
            background:
              'linear-gradient(135deg, rgba(242,158,8,.1) 0%, rgba(226,89,5,.05) 100%)',
            border: '2px solid rgba(226,89,5,.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <NeobitLogo size={80} /> */}
          <Image
            src='/logo-celsia.png'
            alt='Neobit Logo'
            width={200}
            height={200}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              fontSize: 'calc(32px * var(--tx-scale))',
              fontWeight: 800,
              margin: '0 0 8px',
            }}
          >
            Bienvenido
          </h1>
          <p
            style={{
              fontSize: 'calc(15px * var(--tx-scale))',
              color: 'var(--ink-500)',
              margin: 0,
            }}
          >
            Ingrese su información de cédula
          </p>
        </div>
      </div>

      <LoginForm
        cedula={cedula}
        setCedula={setCedula}
        canSubmit={canSubmit}
        onLogin={onLogin}
        onHelp={onHelp}
      />

      <div
        style={{
          marginTop: 'auto',
          paddingTop: 24,
          textAlign: 'center',
          fontSize: 12,
          color: 'var(--ink-300)',
        }}
      >
        NEOBIT · v1.0.0
      </div>
    </div>
  )
}
