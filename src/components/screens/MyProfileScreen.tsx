'use client';

import { Icon } from '../Icon';

interface MyProfileScreenProps {
  user: { name: string; contract: string };
}

export function MyProfileScreen({ user }: MyProfileScreenProps) {
  return (
    <div className="lumi-page" style={{ padding:0, paddingBottom:28 }}>
      {/* Banner */}
      <div style={{ height:200, background:'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)', position:'relative', borderRadius:'0 0 32px 32px' }}>
        <div style={{ position:'absolute', top:-30, right:-30, width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(255,255,255,.18) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ padding:'70px 20px 0', color:'#fff', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div className="lumi-h1" style={{ color:'#fff', fontSize:28 }}>Mi perfil</div>
          <button aria-label="Editar perfil" style={{ width:44, height:44, borderRadius:'50%', background:'rgba(255,255,255,.22)', border:'none', backdropFilter:'blur(10px)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Icon name="edit" size={22} color="#fff" />
          </button>
        </div>
      </div>

      {/* Avatar */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', marginTop:-60, padding:'0 20px' }}>
        <div style={{ width:116, height:116, borderRadius:'50%', background:'linear-gradient(135deg,#FFE4BF 0%,#FCC880 100%)', border:'5px solid #fff', boxShadow:'0 8px 24px rgba(226,89,5,.25)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:44, fontWeight:800, color:'var(--o-600)', letterSpacing:'-.03em', position:'relative' }}>
          MR
          <button aria-label="Cambiar foto" style={{ position:'absolute', bottom:0, right:0, width:38, height:38, borderRadius:'50%', background:'var(--o-500)', border:'3px solid #fff', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <Icon name="camera" size={18} color="#fff" />
          </button>
        </div>
        <div style={{ marginTop:14, textAlign:'center' }}>
          <div className="lumi-h2" style={{ marginBottom:4 }}>Marta Restrepo</div>
          <div className="lumi-small" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:6 }}>
            <Icon name="checkCircle" size={16} color="var(--ok-500)" />
            Cuenta verificada · Cliente desde 2014
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ margin:'24px 20px 0', padding:18, background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, display:'flex' }}>
        {[{label:'Antigüedad',v:'12',sub:'años'},{label:'Pagos puntuales',v:'98',sub:'%'},{label:'Contratos',v:'1',sub:'activo'}].map((s, i, arr) => (
          <div key={i} style={{ flex:1, textAlign:'center', borderRight: i < arr.length-1 ? '1px solid var(--ink-100)' : 'none' }}>
            <div style={{ fontSize:24, fontWeight:800, color:'var(--o-600)', letterSpacing:'-.02em' }}>{s.v}<span style={{ fontSize:13, color:'var(--ink-500)', fontWeight:600, marginLeft:2 }}>{s.sub}</span></div>
            <div className="lumi-small" style={{ fontSize:12, marginTop:2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ padding:'0 20px' }}>
        {/* Datos personales */}
        <div className="lumi-eyebrow" style={{ marginTop:28, marginBottom:12 }}>Datos personales</div>
        <div style={{ background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, overflow:'hidden' }}>
          {[
            { icon:'user',     bg:'var(--o-50)',    color:'var(--o-600)',    k:'Nombre completo',    v:'Marta Elena Restrepo Gómez' },
            { icon:'card',     bg:'var(--info-50)', color:'var(--info-500)', k:'Documento',           v:'C.C. •••• 4892' },
            { icon:'phone',    bg:'var(--ok-50)',   color:'var(--ok-500)',   k:'Teléfono',            v:'+57 310 ••• 7634' },
            { icon:'doc',      bg:'var(--warn-50)', color:'var(--warn-500)', k:'Correo',              v:'marta.r@correo.com' },
            { icon:'calendar', bg:'var(--ink-50)',  color:'var(--ink-700)',  k:'Fecha de nacimiento', v:'14 de mayo de 1953' },
          ].map((row, i, arr) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:14, padding:'16px 18px', borderBottom: i < arr.length-1 ? '1px solid var(--ink-100)' : 'none' }}>
              <div className="lumi-icon-bubble" style={{ background:row.bg, width:44, height:44 }}><Icon name={row.icon} size={22} color={row.color} /></div>
              <div style={{ flex:1, minWidth:0 }}>
                <div className="lumi-small" style={{ marginBottom:2 }}>{row.k}</div>
                <div className="lumi-body-strong" style={{ fontSize:16, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{row.v}</div>
              </div>
              <button aria-label={`Editar ${row.k}`} style={{ width:36, height:36, borderRadius:10, background:'transparent', border:'none', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Icon name="edit" size={18} color="var(--ink-300)" />
              </button>
            </div>
          ))}
        </div>

        {/* Mi servicio */}
        <div className="lumi-eyebrow" style={{ marginTop:28, marginBottom:12 }}>Mi servicio</div>
        <div style={{ background:'linear-gradient(135deg,#F29E08 0%,#EC8805 50%,#E25905 100%)', borderRadius:20, padding:18, color:'#fff', boxShadow:'0 10px 24px rgba(226,89,5,.22)', display:'flex', alignItems:'center', gap:14 }}>
          <div style={{ width:48, height:48, borderRadius:14, background:'rgba(255,255,255,.22)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <Icon name="bolt" size={24} color="#fff" />
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:13, opacity:.9 }}>Energía Residencial · Estrato 3</div>
            <div style={{ fontSize:17, fontWeight:800 }}>Contrato {user.contract}</div>
          </div>
          <Icon name="chevRight" size={22} color="#fff" />
        </div>
        <div className="lumi-card" style={{ marginTop:12, display:'flex', gap:14, padding:18 }}>
          <div className="lumi-icon-bubble" style={{ background:'var(--info-50)' }}><Icon name="pin" size={24} color="var(--info-500)" /></div>
          <div style={{ flex:1 }}>
            <div className="lumi-body-strong" style={{ marginBottom:4 }}>Dirección del suministro</div>
            <div className="lumi-body" style={{ color:'var(--ink-700)', lineHeight:1.5 }}>Calle 45 # 23-67<br />Barrio El Prado, Medellín</div>
          </div>
        </div>

        {/* Preferencias */}
        <div className="lumi-eyebrow" style={{ marginTop:28, marginBottom:12 }}>Preferencias</div>
        <div style={{ background:'var(--surface)', border:'1px solid var(--ink-100)', borderRadius:20, overflow:'hidden' }}>
          {[
            { icon:'bell',     bg:'var(--o-50)',    color:'var(--o-600)',    label:'Notificaciones',  sub:'Avisos de vencimiento y pagos' },
            { icon:'shield',   bg:'var(--ok-50)',   color:'var(--ok-500)',   label:'Seguridad',       sub:'Cambiar clave de acceso' },
            { icon:'textSize', bg:'var(--info-50)', color:'var(--info-500)', label:'Accesibilidad',   sub:'Tamaño del texto y voz' },
            { icon:'question', bg:'var(--warn-50)', color:'var(--warn-500)', label:'Ayuda y soporte', sub:'Contáctenos cuando lo necesite' },
          ].map((row, i, arr) => (
            <button key={i} style={{ width:'100%', display:'flex', alignItems:'center', gap:14, padding:'16px 18px', background:'transparent', border:'none', borderBottom: i < arr.length-1 ? '1px solid var(--ink-100)' : 'none', textAlign:'left' }}>
              <div className="lumi-icon-bubble" style={{ background:row.bg, width:44, height:44 }}><Icon name={row.icon} size={22} color={row.color} /></div>
              <div style={{ flex:1 }}>
                <div className="lumi-body-strong" style={{ fontSize:16 }}>{row.label}</div>
                <div className="lumi-small" style={{ fontSize:13 }}>{row.sub}</div>
              </div>
              <Icon name="chevRight" size={20} color="var(--ink-300)" />
            </button>
          ))}
        </div>

        <button style={{ width:'100%', marginTop:24, minHeight:56, background:'transparent', border:'2px solid var(--ink-100)', borderRadius:16, color:'var(--ink-700)', fontSize:17, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
          <Icon name="logout" size={22} color="var(--ink-700)" />
          Cerrar sesión
        </button>
        <div className="lumi-small" style={{ textAlign:'center', marginTop:18, color:'var(--ink-300)' }}>neobit · v1.0.0</div>
      </div>
    </div>
  );
}
