document.getElementById('year').textContent = new Date().getFullYear();
async function applySiteContent(){
  try {
    const r = await fetch('/content/homepage.json', {cache:'no-store'});
    if(!r.ok) return;
    const c = await r.json();
    if(c.headline) document.getElementById('headline').textContent = c.headline;
    if(c.intro) document.getElementById('intro').textContent = c.intro;
    if(c.contactText) document.getElementById('contactText').textContent = c.contactText;
    const phone = c.phone || '+70000000000';
    const shown = c.phoneDisplay || phone;
    const tel = 'tel:' + phone;
    const header = document.getElementById('headerPhone'); header.href=tel; header.textContent=shown;
    const call = document.getElementById('callBtn'); call.href=tel; call.textContent='Позвонить: '+shown;
    const wa = (c.whatsapp || phone.replace(/\D/g,''));
    document.getElementById('waBtn').href='https://wa.me/'+wa;
  } catch(e) { console.info('Content file not available; using default text.'); }
}
applySiteContent();
