(function(){
var tw=document.querySelector('.tw');
if(!tw)return;

// Section 10 HTML
tw.insertAdjacentHTML('beforeend',`
<div class="sd"><span>TOLL SECTION 10</span></div>
<div class="tg">
  <div class="tc hot" onclick="ST('birth-reg')" style="border-color:#86efac;background:#f0fdf4">
    <button class="sb">☆</button><div class="ti">🏛️</div>
    <div class="tn" style="color:#166534">জন্ম নিবন্ধন আবেদন</div>
  </div>
  <div class="tc" onclick="window.open('bdris-final.html','_blank')">
    <button class="sb">☆</button><div class="ti">📝</div>
    <div class="tn">জন্ম নিবন্ধন সংশোধন</div>
  </div>
  <div class="tc" onclick="window.open('birth-cert-v4.html','_blank')">
    <button class="sb">☆</button><div class="ti">📄</div>
    <div class="tn">জন্ম সনদ PDF মেকার</div>
  </div>
  <div class="tc" onclick="window.open('birth-certificate-maker.html','_blank')">
    <button class="sb">☆</button><div class="ti">🗂️</div>
    <div class="tn">Birth Certificate Maker</div>
  </div>
  <div class="tc" onclick="window.open('warish-sanad.html','_blank')">
    <button class="sb">☆</button><div class="ti">⚖️</div>
    <div class="tn">ওয়ারিশ সনদপত্র মেকার</div>
  </div>
  <div class="tc" onclick="window.open('area-info.html','_blank')">
    <button class="sb">☆</button><div class="ti">🗺️</div>
    <div class="tn">বাংলাদেশ এলাকা তথ্য</div>
  </div>
  <div class="tc" onclick="window.open('birth-registration.html','_blank')">
    <button class="sb">☆</button><div class="ti">📋</div>
    <div class="tn">জন্ম নিবন্ধন ফর্ম</div>
  </div>
</div>`);

// birth-reg tool content
if(typeof TP!=='undefined'){
TP['birth-reg']=()=>`
<div class="tph"><h2>🏛️ জন্ম নিবন্ধন সহায়তা কেন্দ্র</h2><p>সব জন্ম নিবন্ধন সেবা এক জায়গায়</p></div>
<div class="tb">
<div style="background:#E6F1FB;border:1px solid #B5D4F4;border-radius:10px;padding:14px;margin-bottom:16px;font-size:13px;color:#0C447C;line-height:1.9">
<strong>গুরুত্বপূর্ণ:</strong> জন্মের ৪৫ দিনের মধ্যে নিবন্ধন করলে কোনো ফি নেই।
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
<button class="ab gn" onclick="window.open('birth-registration.html','_blank')" style="margin:0"><i class="fas fa-file-alt"></i> নতুন আবেদন ফর্ম</button>
<button class="ab" onclick="window.open('https://bdris.gov.bd','_blank')" style="margin:0;background:linear-gradient(135deg,#0f766e,#0d9488)"><i class="fas fa-external-link-alt"></i> bdris.gov.bd</button>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
<button class="ab" onclick="window.open('bdris-final.html','_blank')" style="margin:0;background:linear-gradient(135deg,#7c3aed,#8b5cf6)"><i class="fas fa-edit"></i> সংশোধন আবেদন</button>
<button class="ab" onclick="window.open('birth-cert-v4.html','_blank')" style="margin:0;background:linear-gradient(135deg,#b45309,#d97706)"><i class="fas fa-file-pdf"></i> সনদ PDF মেকার</button>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
<button class="ab" onclick="window.open('birth-certificate-maker.html','_blank')" style="margin:0;background:linear-gradient(135deg,#0e7490,#0891b2)"><i class="fas fa-certificate"></i> Birth Certificate Maker</button>
<button class="ab" onclick="window.open('warish-sanad.html','_blank')" style="margin:0;background:linear-gradient(135deg,#be185d,#ec4899)"><i class="fas fa-scroll"></i> ওয়ারিশ সনদপত্র</button>
</div>
<button class="ab" onclick="window.open('area-info.html','_blank')" style="background:linear-gradient(135deg,#166534,#16a34a)"><i class="fas fa-map-marker-alt"></i> বাংলাদেশ এলাকা তথ্য সিস্টেম</button>
</div>`;
}
})();
