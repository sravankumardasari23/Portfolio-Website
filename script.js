:root{
  --bg:#071025;
  --card: rgba(255,255,255,0.04);
  --accent:#5ad0ff;
  --muted: rgba(255,255,255,0.7);
  --glass: rgba(255,255,255,0.03);
  --maxw:1100px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;background:linear-gradient(180deg,#071025 0%, #0f2a44 100%);color:#eaf6ff}
a{color:var(--accent);text-decoration:none}
.container{display:flex;min-height:100vh;max-width:var(--maxw);margin:30px auto;padding:20px;gap:30px}
.sidebar{width:260px;flex:0 0 260px;background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));border-radius:14px;padding:22px;display:flex;flex-direction:column;justify-content:space-between}
.brand{display:flex;gap:14px;align-items:center}
.avatar{width:64px;height:64px;border-radius:10px;background:linear-gradient(135deg,#5ad0ff,#4aa6ff);display:flex;align-items:center;justify-content:center;font-weight:700;color:#032032}
.brand h1{font-size:18px;margin:0;line-height:1}
.brand h1 span{font-weight:600;color:var(--muted);font-size:13px}
.role{color:var(--muted);font-size:13px;margin-top:6px}

.menu{margin-top:22px;display:flex;flex-direction:column;gap:8px}
.menu a{padding:8px 10px;border-radius:8px;color:var(--muted);font-weight:600}
.menu a.active, .menu a:hover{background:rgba(255,255,255,0.02);color:#fff}

.contacts{margin-top:18px;display:flex;flex-direction:column;gap:8px;font-size:14px}
.resume-btn{display:inline-block;padding:8px 10px;background:var(--accent);color:#042134;border-radius:8px;margin-top:8px;text-align:center;font-weight:700}

.main{flex:1;overflow:auto}
.panel{margin-bottom:26px}
h2{font-size:20px;margin:0 0 14px;color:#fff}
.card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 18px rgba(3,18,30,0.4)}
.intro{display:flex;gap:28px;align-items:flex-start}
.tag{color:var(--muted);margin-top:6px;font-size:15px}

.summary p{margin:0;color:var(--muted);line-height:1.5}
.quick-cards{display:flex;gap:14px;margin-top:18px}
.qc{background:var(--glass);padding:12px;border-radius:10px;min-width:120px}
.qc h4{margin:0 0 6px;font-size:13px}
.meta{color:var(--muted);font-size:13px;margin:6px 0 12px}
.exp{margin-bottom:12px}
.skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.skills-grid div{background:transparent;padding:12px;border-radius:8px;color:var(--muted)}

.projects-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:8px}
.project h3{margin:0 0 6px}
.project p{color:var(--muted)}
.proj-links{margin-top:10px}
.btn{display:inline-block;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);color:var(--muted);margin-right:8px}
.btn.disabled{opacity:0.45;pointer-events:none}

.contact-card p{color:var(--muted);margin:6px 0}

footer{margin-top:20px;color:var(--muted);font-size:13px;}

/* Responsive */
@media (max-width: 900px){
  .container{flex-direction:column;padding:14px}
  .sidebar{width:100%;flex:0 0 auto;order:2}
  .main{order:1}
  .projects-grid{grid-template-columns:1fr}
  .skills-grid{grid-template-columns:1fr}
  .intro{flex-direction:column}
}
