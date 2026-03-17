// AI Tools Override
const AI_KEY = "AIzaSyCX5DrwRo94nCE5RqXhaWjmgFPP7AW0ulI";

async function callAI(question, outId){
  const out=document.getElementById(outId);
  out.style.display='block';
  out.innerHTML='<i class="fas fa-spinner fa-spin"></i> AI উত্তর খুঁজছে...';
  try{
    const res=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="+AI_KEY,{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({contents:[{parts:[{text:"তুমি একজন বাংলাদেশ বিশেষজ্ঞ। নিচের প্রশ্নের উত্তর সম্পূর্ণ বাংলায় দাও। ধাপে ধাপে সহজ ভাষায় বলো। প্রয়োজনে website link দাও।\n\nপ্রশ্ন: "+question}]}]})
    });
    const d=await res.json();
    const txt=d.candidates?.[0]?.content?.parts?.[0]?.text||'উত্তর পাওয়া যায়নি।';
    out.innerHTML=txt.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  }catch(e){
    out.innerHTML='❌ সংযোগ সমস্যা। আবার চেষ্টা করুন।';
  }
}

async function askAI(selId, outId){
  const q=document.getElementById(selId)?.value;
  if(!q){alert('একটি অপশন বেছে নিন!');return;}
  await callAI(q, outId);
}

async function askAI2(selId, inputId, outId){
  const q=document.getElementById(inputId)?.value || document.getElementById(selId)?.value;
  if(!q){alert('প্রশ্ন লিখুন বা অপশন বেছে নিন!');return;}
  await callAI(q, outId);
}

// Override tool pages
const TP_AI = {
'online-services':()=>`<div class="tph"><h2>🌐 Online Services Apply BD</h2><p>AI দিয়ে বাংলাদেশের অনলাইন সেবা সম্পর্কে জানুন</p></div>
<div class="tb"><label class="fl">কোন সেবা সম্পর্কে জানতে চান?</label>
<select class="fi" id="osv"><option value="">বেছে নিন...</option>
<option value="NID কার্ড সংশোধন করার পদ্ধতি বাংলাদেশে ধাপে ধাপে">NID সংশোধন</option>
<option value="পাসপোর্ট আবেদন করার পদ্ধতি বাংলাদেশে ধাপে ধাপে খরচসহ">পাসপোর্ট আবেদন</option>
<option value="ড্রাইভিং লাইসেন্স করার পদ্ধতি বাংলাদেশে যোগ্যতা ও খরচসহ">ড্রাইভিং লাইসেন্স</option>
<option value="জমির খতিয়ান বের করার অনলাইন পদ্ধতি বাংলাদেশে">জমির খতিয়ান</option>
<option value="জন্ম নিবন্ধন সনদ অনলাইনে করার পদ্ধতি বাংলাদেশে">জন্ম নিবন্ধন</option>
<option value="ট্রেড লাইসেন্স করার পদ্ধতি বাংলাদেশে খরচসহ">ট্রেড লাইসেন্স</option></select>
<button class="ab" onclick="askAI('osv','os-out')" style="margin-top:10px"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="os-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,

'visa-check':()=>`<div class="tph"><h2>🌍 Online Visa Check</h2><p>AI দিয়ে ভিসা তথ্য জানুন বাংলায়</p></div>
<div class="tb"><label class="fl">কোন দেশের ভিসা?</label>
<select class="fi" id="vcv"><option value="">দেশ বেছে নিন...</option>
<option value="ভারত ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে কাগজপত্র ও খরচসহ">ভারত</option>
<option value="মালয়েশিয়া ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে">মালয়েশিয়া</option>
<option value="সৌদি আরব ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে কাজের ভিসাসহ">সৌদি আরব</option>
<option value="দুবাই UAE ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে টুরিস্ট ও কাজের ভিসা">দুবাই (UAE)</option>
<option value="ইতালি ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে কাজের ভিসাসহ">ইতালি</option>
<option value="আমেরিকা USA ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে">আমেরিকা</option>
<option value="কানাডা ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে">কানাডা</option>
<option value="ইংল্যান্ড UK ভিসা আবেদন পদ্ধতি বাংলাদেশ থেকে">ইংল্যান্ড</option></select>
<label class="fl" style="margin-top:8px">অথবা নিজে লিখুন</label>
<input class="fi" id="vcv2" placeholder="যেমন: জাপান ভিসা তথ্য">
<button class="ab" onclick="askAI2('vcv','vcv2','vc-out')"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="vc-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,

'exam-result':()=>`<div class="tph"><h2>🎓 Exam Result Check BD</h2><p>AI দিয়ে পরীক্ষার ফলাফল দেখার পদ্ধতি জানুন</p></div>
<div class="tb"><label class="fl">কোন পরীক্ষার ফলাফল?</label>
<select class="fi" id="erv"><option value="">বেছে নিন...</option>
<option value="JSC পরীক্ষার ফলাফল দেখার পদ্ধতি ও ওয়েবসাইট লিংকসহ">JSC Result</option>
<option value="SSC পরীক্ষার ফলাফল দেখার পদ্ধতি ও ওয়েবসাইট লিংকসহ">SSC Result</option>
<option value="HSC পরীক্ষার ফলাফল দেখার পদ্ধতি ও ওয়েবসাইট লিংকসহ">HSC Result</option>
<option value="জাতীয় বিশ্ববিদ্যালয় ডিগ্রি অনার্স মাস্টার্স ফলাফল দেখার পদ্ধতি">NU Degree/Honours</option>
<option value="প্রাথমিক বৃত্তি পরীক্ষার ফলাফল দেখার পদ্ধতি">প্রাথমিক বৃত্তি</option></select>
<button class="ab" onclick="askAI('erv','er-out')" style="margin-top:10px"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="er-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,

'job-circular':()=>`<div class="tph"><h2>💼 Job Circular Finder BD</h2><p>AI দিয়ে চাকরির তথ্য ও আবেদন পদ্ধতি জানুন</p></div>
<div class="tb"><label class="fl">কোন ধরনের চাকরি?</label>
<select class="fi" id="jcv"><option value="">বেছে নিন...</option>
<option value="বাংলাদেশ সরকারি চাকরি আবেদন পদ্ধতি যোগ্যতা ও প্রস্তুতি">সরকারি চাকরি</option>
<option value="বাংলাদেশ আর্মি সেনাবাহিনী নিয়োগ পদ্ধতি যোগ্যতাসহ">সেনাবাহিনী নিয়োগ</option>
<option value="বাংলাদেশ পুলিশ নিয়োগ পদ্ধতি যোগ্যতা ও বেতন">পুলিশ নিয়োগ</option>
<option value="বাংলাদেশ ব্যাংক জব আবেদন পদ্ধতি ও প্রস্তুতি">ব্যাংক জব</option>
<option value="বাংলাদেশে IT Software চাকরি পাওয়ার উপায় ও দক্ষতা">IT/Software জব</option>
<option value="বাংলাদেশ থেকে বিদেশে চাকরি যাওয়ার পদ্ধতি ও এজেন্সি">বিদেশে চাকরি</option></select>
<label class="fl" style="margin-top:8px">অথবা নিজে লিখুন</label>
<input class="fi" id="jcv2" placeholder="যেমন: NGO চাকরির তথ্য">
<button class="ab" onclick="askAI2('jcv','jcv2','jc-out')"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="jc-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,

'airline':()=>`<div class="tph"><h2>✈️ Airline Ticket Check</h2><p>AI দিয়ে বিমান টিকিট ও ভ্রমণ তথ্য জানুন</p></div>
<div class="tb"><label class="fl">কী জানতে চান?</label>
<select class="fi" id="alv"><option value="">বেছে নিন...</option>
<option value="ঢাকা থেকে দুবাই বিমান টিকিটের আনুমানিক দাম এয়ারলাইন ও সময়সূচি">ঢাকা → দুবাই</option>
<option value="ঢাকা থেকে মালয়েশিয়া বিমান টিকিটের আনুমানিক দাম ও সময়সূচি">ঢাকা → মালয়েশিয়া</option>
<option value="ঢাকা থেকে সৌদি আরব বিমান টিকিটের দাম ও এয়ারলাইন">ঢাকা → সৌদি আরব</option>
<option value="ঢাকা থেকে কলকাতা বিমান টিকিটের দাম ও সময়সূচি">ঢাকা → কলকাতা</option>
<option value="বিমান বাংলাদেশ এয়ারলাইন্স অনলাইন টিকিট বুকিং পদ্ধতি">বিমান বাংলাদেশ টিকিট</option></select>
<label class="fl" style="margin-top:8px">অথবা নিজে লিখুন</label>
<input class="fi" id="alv2" placeholder="যেমন: ঢাকা থেকে লন্ডন টিকিট">
<button class="ab" onclick="askAI2('alv','alv2','al-out')"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="al-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,

'travel-ticket':()=>`<div class="tph"><h2>🎫 Travel Ticket Booking</h2><p>AI দিয়ে ট্রেন ও বাসের টিকিট তথ্য জানুন</p></div>
<div class="tb"><label class="fl">কী জানতে চান?</label>
<select class="fi" id="ttv"><option value="">বেছে নিন...</option>
<option value="বাংলাদেশ রেলওয়ে অনলাইন টিকিট কাটার পদ্ধতি ধাপে ধাপে">ট্রেন টিকিট অনলাইন</option>
<option value="ঢাকা থেকে চট্টগ্রাম ট্রেনের নাম সময়সূচি ও ভাড়া">ঢাকা → চট্টগ্রাম</option>
<option value="ঢাকা থেকে সিলেট ট্রেনের নাম সময়সূচি ও ভাড়া">ঢাকা → সিলেট</option>
<option value="Shohoz অ্যাপ দিয়ে বাস টিকিট কাটার পদ্ধতি">Shohoz বাস টিকিট</option>
<option value="ঢাকা থেকে কক্সবাজার বাসের নাম সময়সূচি ও ভাড়া">ঢাকা → কক্সবাজার</option></select>
<label class="fl" style="margin-top:8px">অথবা নিজে লিখুন</label>
<input class="fi" id="ttv2" placeholder="যেমন: খুলনা থেকে ঢাকা ট্রেন">
<button class="ab" onclick="askAI2('ttv','ttv2','tt-out')"><i class="fas fa-robot"></i> AI দিয়ে জানুন</button>
<div class="ob" id="tt-out" style="margin-top:12px;display:none;line-height:1.9"></div></div>`,
};

// Merge with existing TP on page load
document.addEventListener('DOMContentLoaded', function(){
  if(typeof TP !== 'undefined'){
    Object.assign(TP, TP_AI);
  }
});
