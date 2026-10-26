
import { useState } from 'react'

export default function App() {
  const [form, setForm] = useState({name:'', city:'', type:''})
  return (
    <div style={{minHeight:'100vh', background:'#0a0a0a', color:'white', fontFamily:'serif', padding:'20px'}}>
      <header style={{display:'flex', justifyContent:'space-between', maxWidth:'1100px', margin:'0 auto'}}>
        <h1 style={{fontWeight:'bold'}}><span style={{color:'#D4AF37'}}>ELITE</span> MATCHMAKER</h1>
        <a href="https://wa.me/923001234567" style={{background:'#D4AF37', color:'black', padding:'8px 20px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>WhatsApp</a>
      </header>

      <div style={{textAlign:'center', padding:'60px 10px', maxWidth:'800px', margin:'0 auto'}}>
        <p style={{color:'#D4AF37', letterSpacing:'4px', fontSize:'12px'}}>MULTAN'S MOST TRUSTED</p>
        <h2 style={{fontSize:'48px', fontWeight:'bold', lineHeight:'1.1', marginTop:'10px'}}>
          Elite Rishtas For <br/><span style={{color:'#D4AF37', fontStyle:'italic'}}>Elite Families</span>
        </h2>
        <p style={{color:'#aaa', marginTop:'20px'}}>Doctors, Engineers, Business Families, Abroad - 100% Confidential</p>
        <button onClick={()=>document.getElementById('form')?.scrollIntoView({behavior:'smooth'})} style={{background:'white', color:'black', padding:'14px 32px', borderRadius:'30px', fontWeight:'bold', marginTop:'30px', border:'none', fontSize:'16px'}}>
          Find Your Match
        </button>
      </div>

      <div id="form" style={{maxWidth:'500px', margin:'40px auto', background:'white', color:'black', borderRadius:'24px', padding:'30px'}}>
        <h3 style={{fontSize:'24px', fontWeight:'bold', textAlign:'center'}}>Confidential Registration</h3>
        <input placeholder="Full Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{width:'100%', border:'1px solid #ddd', padding:'14px', borderRadius:'12px', marginTop:'20px'}} />
        <div style={{display:'flex', gap:'10px', marginTop:'12px'}}>
          <input placeholder="City" value={form.city} onChange={e=>setForm({...form, city:e.target.value})} style={{flex:1, border:'1px solid #ddd', padding:'14px', borderRadius:'12px'}} />
          <select value={form.type} onChange={e=>setForm({...form, type:e.target.value})} style={{flex:1, border:'1px solid #ddd', padding:'14px', borderRadius:'12px'}}>
            <option value="">For?</option><option>Son</option><option>Daughter</option><option>Brother</option><option>Sister</option>
          </select>
        </div>
        <a href={`https://wa.me/923001234567?text=Salam! Name:${form.name}, City:${form.city}, For:${form.type} - Elite Matchmaker`} style={{display:'block', textAlign:'center', background:'black', color:'white', padding:'16px', borderRadius:'12px', fontWeight:'bold', marginTop:'20px', textDecoration:'none'}}>
          Send On WhatsApp →
        </a>
      </div>

      <footer style={{textAlign:'center', padding:'20px', color:'#666', fontSize:'12px'}}>
        © 2026 Elite Matchmaker Empire - Multan
      </footer>
    </div>
  )
}
