'use client'

import { useState } from 'react'
import { Icon } from '../Icon'

interface InformationScreenProps {
  isDesktop?: boolean
}

const months = [
  { m: 'Dic', kwh: 280 },
  { m: 'Ene', kwh: 295 },
  { m: 'Feb', kwh: 268 },
  { m: 'Mar', kwh: 252 },
  { m: 'Abr', kwh: 257 },
  { m: 'May', kwh: 245 },
]

const faqs = [
  {
    q: '¿Cómo leo mi factura?',
    a: 'En la parte superior verá su consumo en kWh. El valor a pagar aparece destacado en la parte de abajo, junto con la fecha de vencimiento.',
  },
  {
    q: '¿Qué hago si tengo un corte de luz?',
    a: 'Puede reportarlo desde la pantalla de Inicio en "Reportar daño", o llamarnos al 01-8000-LUMI. Atendemos las 24 horas.',
  },
  {
    q: '¿Puedo pagar en efectivo?',
    a: 'Sí. En la pantalla de Pagos seleccione "Pago en efectivo" y le daremos un código que puede llevar a cualquier punto Baloto o Efecty.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Sí. Toda la información viaja cifrada y nunca compartimos sus datos con terceros sin su autorización.',
  },
]

export function InformationScreen({ isDesktop }: InformationScreenProps) {
  const [openFaq, setOpenFaq] = useState(0)
  const max = Math.max(...months.map((x) => x.kwh))

  const consumptionCard = (
    <div className='lumi-card' style={{ padding: 22 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 6,
        }}
      >
        <div className='lumi-eyebrow'>Consumo este mes</div>
        <div
          style={{
            background: 'var(--ok-50)',
            color: 'var(--ok-500)',
            padding: '4px 10px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          ↓ 5%
        </div>
      </div>
      <div
        style={{
          fontSize: 44,
          fontWeight: 800,
          letterSpacing: '-.02em',
          lineHeight: 1,
        }}
      >
        245{' '}
        <span
          style={{ fontSize: 22, color: 'var(--ink-500)', fontWeight: 600 }}
        >
          kWh
        </span>
      </div>
      <div className='lumi-small' style={{ marginTop: 6 }}>
        Está consumiendo menos que el mes anterior. ¡Bien hecho!
      </div>
      <div
        style={{
          marginTop: 22,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 8,
          height: 110,
        }}
      >
        {months.map((m, i) => {
          const isLast = i === months.length - 1
          return (
            <div
              key={i}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: `${(m.kwh / max) * 88}px`,
                  background: isLast
                    ? 'linear-gradient(180deg,#F29E08 0%,#E25905 100%)'
                    : 'var(--ink-100)',
                  borderRadius: 6,
                }}
              />
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: isLast ? 'var(--o-600)' : 'var(--ink-500)',
                }}
              >
                {m.m}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  const paymentPointsSection = (
    <div>
      <div className='lumi-eyebrow' style={{ marginBottom: 12 }}>
        Puntos de pago físicos
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          {
            icon: 'bank',
            color: 'var(--info-500)',
            bg: 'var(--info-50)',
            t: 'Bancos Aliados',
            // d: 'Pague en ventanilla en Bancolombia, Banco de Bogotá, Davivienda y BBVA.',
          },
          // {
          //   icon: 'shop',
          //   color: 'var(--warn-500)',
          //   bg: 'var(--warn-50)',
          //   t: 'Almacenes de cadena',
          //   d: 'Cajas de Grupo Éxito, Carulla, Surtimax y Supertiendas Olímpica.',
          // },
          {
            icon: 'cash',
            color: 'var(--ok-500)',
            bg: 'var(--ok-50)',
            t: 'Puntos de recaudo',
            // d: 'Puntos Baloto, Efecty y PagaTodo a nivel nacional.',
          },
        ].map((t, i) => (
          <div
            key={i}
            className='lumi-card'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              padding: 18,
            }}
          >
            <div
              className='lumi-icon-bubble'
              style={{
                background: t.bg,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon name={t.icon} size={24} color={t.color} />
            </div>
            <div style={{ marginTop: 6 }}>
              <div className='lumi-body-strong' style={{ textAlign: 'center' }}>
                {t.t}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const faqSection = (
    <div>
      <div className='lumi-eyebrow' style={{ marginBottom: 12 }}>
        Preguntas frecuentes
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {faqs.map((f, i) => {
          const open = openFaq === i
          return (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--ink-100)',
                borderRadius: 16,
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setOpenFaq(open ? -1 : i)}
                style={{
                  width: '100%',
                  padding: '18px 18px',
                  background: 'transparent',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left',
                }}
              >
                <div className='lumi-body-strong' style={{ flex: 1 }}>
                  {f.q}
                </div>
                <div
                  style={{
                    transform: open ? 'rotate(180deg)' : 'none',
                    transition: 'transform .2s',
                  }}
                >
                  <Icon name='chevDown' size={22} color='var(--ink-500)' />
                </div>
              </button>
              {open && (
                <div
                  className='lumi-body'
                  style={{ padding: '0 18px 18px', color: 'var(--ink-700)' }}
                >
                  {f.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )

  if (isDesktop) {
    return (
      <div className='lumi-page' style={{ padding: '40px 48px 40px' }}>
        <div style={{ marginBottom: 28 }}>
          <div className='lumi-h1' style={{ marginBottom: 6 }}>
            Información
          </div>
          <div className='lumi-body' style={{ color: 'var(--ink-500)' }}>
            Su consumo y respuestas útiles
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            marginBottom: 28,
          }}
        >
          {consumptionCard}
          {paymentPointsSection}
        </div>
        {faqSection}
        <div style={{ height: 20 }} />
      </div>
    )
  }

  return (
    <div className='lumi-page' style={{ padding: '70px 20px 28px' }}>
      <div style={{ marginBottom: 22 }}>
        <div className='lumi-h1' style={{ fontSize: 32, marginBottom: 6 }}>
          Información
        </div>
        <div className='lumi-body' style={{ color: 'var(--ink-500)' }}>
          Su consumo y respuestas útiles
        </div>
      </div>
      <div style={{ marginBottom: 22 }}>{consumptionCard}</div>
      <div style={{ marginBottom: 28 }}>{paymentPointsSection}</div>
      {faqSection}
      <div style={{ height: 20 }} />
    </div>
  )
}
