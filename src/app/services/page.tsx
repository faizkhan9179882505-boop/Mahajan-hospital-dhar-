'use client';

import React from 'react';
import Link from 'next/link';
import {
  Stethoscope,
  Radio,
  Droplet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Bed,
  PhoneCall,
  FileText,
  CreditCard,
  Heart,
  Sparkles,
  ChevronRight,
  Clock,
  Ambulance,
  Pill,
  Users
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'medical-surgical',
      title: 'Medical & Surgical Care (चिकित्सा एवं सर्जिकल सेवाएं)',
      desc: 'जनरल मेडिसिन, ओपीडी, इनपेशेंट वार्ड, गहन चिकित्सा (ICU) एवं उन्नत लेप्रोस्कोपिक व जनरल सर्जरी।',
      icon: Stethoscope,
      services: [
        { name: 'Outpatient Consultation (ओपीडी)', desc: '39+ विशेषज्ञ एवं इंदौर के सुपर-स्पेशलिस्ट कंसल्टेंट्स द्वारा दैनिक परामर्श।' },
        { name: 'General & Laparoscopic Surgery', desc: 'दूरबीन विधि द्वारा हर्निया, अपेंडिक्स, पित्ताशय की पथरी एवं जटिल सर्जिकल उपचार।' },
        { name: '24×7 Emergency & Trauma Care', desc: 'आपातकालीन दुर्घटना, कार्डियक एवं ट्रॉमा केयर यूनिट 24 घंटे तत्पर।' },
        { name: 'Critical Care ICU & NICU', desc: 'मल्टी-पैरामीटर वेंटिलेटर, कार्डियक मॉनिटर एवं नवजात शिशु गहन चिकित्सा।' },
        { name: 'Inpatient Wards & Private Rooms', desc: '100+ बिस्तरों की क्षमता, डीलक्स, सेमी-प्राइवेट एवं सामान्य वार्ड सुविधाएं।' },
        { name: 'Gastroenterology & Liver Care', desc: 'पेट, लिवर, आंत एवं पाचन संबंधी विकारों का आधुनिक चिकित्सीय प्रबंधन।' },
      ]
    },
    {
      id: 'diagnostic-imaging',
      title: 'Diagnostic & Imaging Services (जांच एवं इमेजिंग केंद्र)',
      desc: 'धार जिले में अत्याधुनिक सीटी स्कैन, 1.5T एमआरआई, 4D सोनोग्राफी एवं पूर्णतः ऑटोमेटेड पैथोलॉजी लैब।',
      icon: Radio,
      services: [
        { name: '1.5 Tesla MRI Scanner', desc: 'ब्रेन, स्पाइन, जोड़ों और नसों की हाई-डेफिनिशन इमेजिंग जांच।' },
        { name: 'Multi-Slice CT Scan (24×7)', desc: 'सिर की चोट, छाती, पेट एवं आपातकालीन ट्रॉमा स्कैन तुरंत उपलब्ध।' },
        { name: 'Digital X-Ray & Radiography', desc: 'न्यूनतम रेडिएशन व उच्च स्पष्टता युक्त डिजिटल रेडियोग्राफी।' },
        { name: '4D Sonography & Color Doppler', desc: 'गर्भावस्था सोनोग्राफी, वैस्कुलर एवं एब्डोमिनल डॉप्लर जांच।' },
        { name: '24×7 Pathology & Lab Tests', desc: 'बायोकैमिस्ट्री, हेमेटोलॉजी, हार्मोनल जांच एवं त्वरित रिपोर्टिंग।' },
        { name: 'ECG, 2D Echo & Cardiac Testing', desc: 'हृदय की कार्यप्रणाली एवं प्राथमिक कार्डियक डायग्नोस्टिक्स।' },
      ]
    },
    {
      id: 'support-services',
      title: 'Patient Support & Facilities (रोगी सहायता एवं सेवाएं)',
      desc: 'मरीजों एवं उनके परिजनों की सुविधा व सुरक्षा हेतु 24 घंटे सक्रिय सहायक व्यवस्थाएं।',
      icon: Pill,
      services: [
        { name: '24×7 In-House Pharmacy', desc: 'सभी आवश्यक जेन्युइन दवाइयां, सर्जिकल आइटम्स एवं इमरजेंसी ड्रग्स।' },
        { name: '24×7 Ambulance Fleet', desc: 'ऑक्सीजन युक्त लाइफ-सपोर्ट एम्बुलेंस द्वारा मरीज परिवहन सेवा।' },
        { name: 'In-House Nutritious Canteen', desc: 'मरीजों एवं अटेंडेंट्स हेतु स्वच्छ, शुद्ध व सुपाच्य भोजन व्यवस्था।' },
        { name: 'Central Sterile Supply (CSSD)', desc: 'सर्जिकल उपकरणों का आधुनिक संक्रमण-मुक्त स्टरलाइजेशन।' },
        { name: '24×7 Power Backup & RO Water', desc: 'निर्बाध विद्युत आपूर्ति एवं पूरे परिसर में स्वच्छ पेयजल व्यवस्था।' },
        { name: 'Spacious Waiting & Parking', desc: 'मरीजों के परिजनों हेतु आरामदायक बैठक व्यवस्था एवं विस्तृत पार्किंग।' },
      ]
    }
  ];

  const ayushmanDocuments = [
    { name: 'आयुष्मान कार्ड (Ayushman Card / ABHA ID)', desc: 'मूल कार्ड अथवा डिजिटल ई-कार्ड' },
    { name: 'आधार कार्ड (Aadhaar Card)', desc: 'मरीज एवं परिवार के मुखिया का आधार कार्ड' },
    { name: 'समग्र आईडी (Samagra ID)', desc: 'मध्य प्रदेश शासन की परिवार समग्र आईडी' },
    { name: 'राशन कार्ड (Ration Card / BPL)', desc: 'पात्रता पर्ची अथवा राशन कार्ड' },
    { name: 'पूर्व चिकित्सा दस्तावेज (Past Reports)', desc: 'पुरानी जांच रिपोर्ट, प्रिस्क्रिप्शन एवं मेडिकल रिकॉर्ड' }
  ];

  const ayushmanSteps = [
    { num: '1', title: 'ओपीडी परामर्श एवं जांच', desc: 'विशेषज्ञ चिकित्सक द्वारा परीक्षण व भर्ती की संस्तुति।' },
    { num: '2', title: 'आयुष्मान हेल्पडेस्क सत्यापन', desc: 'अस्पताल के आयुष्मान मित्र द्वारा दस्तावेज एवं पात्रता की जांच।' },
    { num: '3', title: 'बायोमेट्रिक ई-केवाईसी', desc: 'शासन के पोर्टल पर बायोमेट्रिक प्रमाणीकरण व प्री-ऑथराइजेशन।' },
    { num: '4', title: 'कैशलेस भर्ती व उपचार', desc: 'दवाइयां, सर्जरी, आईसीयू एवं जांचें पूर्णतः निशुल्क।' },
    { num: '5', title: 'शून्य शुल्क डिस्चार्ज', desc: 'उपचार उपरांत बिना किसी शुल्क के सकुशल डिस्चार्ज व दवाइयां।' }
  ];

  const tpaPartners = [
    'Star Health Insurance',
    'HDFC ERGO General',
    'ICICI Lombard',
    'Care Health (Religare)',
    'Niva Bupa Health',
    'Bajaj Allianz',
    'Medi Assist TPA',
    'Paramount Health TPA',
    'MD India TPA',
    'Vidal Health TPA',
    'Heritage Health TPA',
    'FHPL Insurance TPA'
  ];

  const bloodComponents = [
    {
      title: 'Whole Blood Units (संपूर्ण रक्त)',
      subtitle: '24×7 Emergency Supply',
      desc: 'मेजर सर्जरी, दुर्घटना ट्रॉमा एवं गंभीर हीमोग्लोबिन कमी वाले आपातकालीन मरीजों हेतु पूर्णतः जांची गई सुरक्षित रक्त इकाइयां।'
    },
    {
      title: 'Packed Red Blood Cells (PRBC)',
      subtitle: 'लाल रक्त कणिकाएं',
      desc: 'क्रिटिकल केयर, क्रोनिक एनीमिया, डायलिसिस एवं हृदय रोगियों हेतु आवश्यक रेड ब्लड सेल्स कंपोनेंट।'
    },
    {
      title: 'Fresh Frozen Plasma (FFP)',
      subtitle: 'प्लाज्मा घटक',
      desc: 'रक्तस्राव विकार, लिवर संबंधी बीमारियों, सेप्सिस एवं बर्न इंजरी के मरीजों के लिए उच्च गुणवत्तायुक्त प्लाज्मा।'
    },
    {
      title: 'Platelet Concentrates (RDPC)',
      subtitle: 'प्लेटलेट्स कंसन्ट्रेट्स',
      desc: 'डेंगू, थ्रोम्बोसाइटोपेनिया एवं प्लेटलेट्स की तीव्र कमी के आपातकालीन मामलों में तत्काल जीवनरक्षक कंपोनेंट।'
    }
  ];

  return (
    <div className="services-page">
      {/* 1. Header Banner */}
      <section className="services-hero-banner">
        <div className="container">
          <span className="badge badge-amber">
            <Sparkles size={14} />
            <span>Comprehensive Medical Services &amp; Facilities</span>
          </span>
          <h1 className="banner-title">Hospital Services, Blood Center &amp; PM Ayushman</h1>
          <p className="banner-desc">
            31,000 वर्गफीट के आधुनिक परिसर में ओपीडी, इनपेशेंट वार्ड, मॉड्यूलर ओटी, 1.5T एमआरआई, सीटी स्कैन, 24×7 पैथोलॉजी, शासकीय मान्यता प्राप्त ब्लड सेंटर एवं आयुष्मान भारत कैशलेस उपचार।
          </p>

          {/* Quick Anchor Jump Pills */}
          <div className="hero-anchors-row">
            <a href="#medical-surgical" className="hero-anchor-chip">
              <Stethoscope size={15} />
              <span>Medical &amp; Surgical</span>
            </a>
            <a href="#diagnostic-imaging" className="hero-anchor-chip">
              <Radio size={15} />
              <span>1.5T MRI &amp; CT Scan</span>
            </a>
            <a href="#ayushman" className="hero-anchor-chip anchor-chip-gold">
              <ShieldCheck size={15} />
              <span>PM Ayushman Bharat (Free)</span>
            </a>
            <a href="#blood-center" className="hero-anchor-chip anchor-chip-red">
              <Droplet size={15} />
              <span>24×7 Blood Center</span>
            </a>
            <a href="#support-services" className="hero-anchor-chip">
              <Pill size={15} />
              <span>Pharmacy &amp; Support</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Core Clinical Services Grid */}
      <section className="section">
        <div className="container">
          <div className="categories-stack">
            {serviceCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div key={cat.id} id={cat.id} className="category-block">
                  <div className="cat-header">
                    <div className="cat-icon-box">
                      <IconComp size={24} className="text-teal" />
                    </div>
                    <div>
                      <h2 className="cat-title">{cat.title}</h2>
                      <p className="cat-desc">{cat.desc}</p>
                    </div>
                  </div>

                  <div className="grid-3">
                    {cat.services.map((srv, sIdx) => (
                      <div key={sIdx} className="card card-hover service-card">
                        <div className="service-card-top">
                          <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                          <h3 className="service-name">{srv.name}</h3>
                        </div>
                        <p className="service-desc">{srv.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SECTION: PM AYUSHMAN BHARAT & CASHLESS TPA */}
      <section className="section section-ayushman-highlight" id="ayushman">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
            <span className="badge badge-gold" style={{ marginBottom: '10px' }}>
              <ShieldCheck size={14} />
              <span>Govt. Healthcare Scheme &amp; Cashless TPA</span>
            </span>
            <h2 className="heading-lg">PM Ayushman Bharat &amp; Cashless TPA Insurance</h2>
            <p className="subheading" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155' }}>
              महाजन मल्टीस्पेशलिटी हॉस्पिटल में आयुष्मान भारत योजना अंतर्गत पात्र परिवारों को ₹5 लाख तक का पूर्णतः निशुल्क कैशलेस इलाज एवं 12+ प्रमुख निजी स्वास्थ्य बीमा कंपनियों के साथ मेडिक्लेम भर्ती सुविधा उपलब्ध है।
            </p>
          </div>

          {/* 3 Scheme Cards */}
          <div className="grid-3" style={{ marginBottom: '36px' }}>
            <div className="card card-hover ayushman-feature-card">
              <div className="ayushman-icon-box bg-gold-soft">
                <ShieldCheck size={26} className="text-amber" />
              </div>
              <h3 className="heading-sm" style={{ color: '#0b1e33', marginBottom: '8px' }}>₹5 लाख तक का निशुल्क उपचार</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                भर्ती के दौरान डॉक्टर परामर्श, सामान्य व लेप्रोस्कोपिक सर्जरी, आईसीयू, दवाइयां, जांचें एवं वार्ड बेड चार्ज 100% निशुल्क।
              </p>
            </div>

            <div className="card card-hover ayushman-feature-card">
              <div className="ayushman-icon-box bg-teal-soft">
                <FileText size={26} className="text-teal" />
              </div>
              <h3 className="heading-sm" style={{ color: '#0b1e33', marginBottom: '8px' }}>समर्पित आयुष्मान हेल्पडेस्क</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                अस्पताल परिसर में आयुष्मान मित्र द्वारा तत्काल ई-केवाईसी, बायोमेट्रिक ऑथराइजेशन एवं क्लेम अप्रूवल में पूर्ण सहायता।
              </p>
            </div>

            <div className="card card-hover ayushman-feature-card">
              <div className="ayushman-icon-box bg-blue-soft">
                <CreditCard size={26} className="text-blue" />
              </div>
              <h3 className="heading-sm" style={{ color: '#0b1e33', marginBottom: '8px' }}>12+ निजी बीमा कैशलेस नेटवर्क</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.6' }}>
                Star Health, HDFC ERGO, ICICI Lombard, Care, Niva Bupa सहित प्रमुख टीपीए के साथ बिना किसी अग्रिम भुगतान के भर्ती।
              </p>
            </div>
          </div>

          {/* Documents & Steps Grid */}
          <div className="grid-2">
            {/* Required Documents Checklist */}
            <div className="card ayushman-detail-card">
              <div className="detail-card-head">
                <FileText size={20} className="text-teal" />
                <h3 className="heading-sm" style={{ color: '#0b1e33' }}>भर्ती हेतु आवश्यक दस्तावेज (Checklist)</h3>
              </div>
              <div className="doc-items-stack">
                {ayushmanDocuments.map((doc, idx) => (
                  <div key={idx} className="doc-item-row">
                    <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                    <div>
                      <strong style={{ display: 'block', color: '#0b1e33', fontSize: '0.92rem' }}>{doc.name}</strong>
                      <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{doc.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* TPA Partner Pills */}
              <div className="tpa-pills-wrap">
                <span className="tpa-label">Cashless Insurance Partners:</span>
                <div className="tpa-chips-container">
                  {tpaPartners.map((p, pIdx) => (
                    <span key={pIdx} className="tpa-chip">{p}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 5 Simple Admission Steps */}
            <div className="card ayushman-detail-card">
              <div className="detail-card-head">
                <CheckCircle2 size={20} className="text-teal" />
                <h3 className="heading-sm" style={{ color: '#0b1e33' }}>कैशलेस भर्ती की सरल प्रक्रिया (5 Steps)</h3>
              </div>
              <div className="steps-timeline-stack">
                {ayushmanSteps.map((st, idx) => (
                  <div key={idx} className="step-timeline-row">
                    <div className="step-num-bubble">{st.num}</div>
                    <div className="step-body">
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0b1e33', marginBottom: '2px' }}>{st.title}</h4>
                      <p style={{ fontSize: '0.84rem', color: '#64748b', margin: 0, lineHeight: '1.45' }}>{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ayushman-help-banner">
                <div>
                  <strong>आयुष्मान अथवा टीपीए भर्ती संबंधी सहायता?</strong>
                  <p style={{ margin: '2px 0 0', fontSize: '0.84rem', color: '#475569' }}>
                    सीधे हमारे आयुष्मान डेस्क पर संपर्क करें या कॉल करें।
                  </p>
                </div>
                <a href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`} className="btn btn-primary btn-sm">
                  <PhoneCall size={14} />
                  <span>Call: {HOSPITAL_INFO.contacts.landline1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEDICATED SECTION: GOVT-RECOGNIZED 24×7 BLOOD CENTER */}
      <section className="section section-blood-highlight" id="blood-center">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
            <span className="badge badge-red" style={{ marginBottom: '10px' }}>
              <Droplet size={14} />
              <span>24×7 Life-Saving Clinical Unit</span>
            </span>
            <h2 className="heading-lg">Govt.-Recognized 24×7 Blood Center</h2>
            <p className="subheading" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155' }}>
              धार एवं पश्चिमी मध्य प्रदेश का आधुनिक कंपोनेंट सेपरेशन युक्त शासकीय मान्यता प्राप्त ब्लड सेंटर। 24 घंटे कड़े सुरक्षा मानकों एवं आपातकालीन तत्परता के साथ सुरक्षित रक्त व कंपोनेंट्स की उपलब्धता।
            </p>
          </div>

          {/* 4 Blood Component Cards */}
          <div className="grid-2" style={{ marginBottom: '36px' }}>
            {bloodComponents.map((comp, idx) => (
              <div key={idx} className="card card-hover blood-comp-card">
                <div className="blood-comp-top">
                  <div className="blood-icon-circle">
                    <Droplet size={22} className="text-red" />
                  </div>
                  <div>
                    <h3 className="blood-comp-title">{comp.title}</h3>
                    <span className="blood-comp-sub">{comp.subtitle}</span>
                  </div>
                </div>
                <p className="blood-comp-desc">{comp.desc}</p>
              </div>
            ))}
          </div>

          {/* 3 Blood Safety Features & Emergency Action */}
          <div className="blood-safety-banner card">
            <div className="safety-points-grid">
              <div className="safety-point">
                <ShieldCheck size={24} className="text-red flex-shrink-0" />
                <div>
                  <strong>100% Tested &amp; Screened</strong>
                  <p>HIV, HBV, HCV, मलेरिया एवं सिफलिस की आधुनिक स्वचालित स्क्रीनिंग के उपरांत ही रक्त जारी किया जाता है।</p>
                </div>
              </div>

              <div className="safety-point">
                <Clock size={24} className="text-red flex-shrink-0" />
                <div>
                  <strong>24×7 Emergency Supply</strong>
                  <p>दुर्घटना, सिजेरियन डिलीवरी, ऑर्थोपेडिक व क्रिटिकल सर्जरी हेतु सभी ब्लड ग्रुप्स की निरंतर उपलब्धता।</p>
                </div>
              </div>

              <div className="safety-point">
                <Heart size={24} className="text-red flex-shrink-0" />
                <div>
                  <strong>Voluntary Donor Support</strong>
                  <p>नियमित स्वैच्छिक रक्तदान शिविर एवं आपातकालीन स्थिति हेतु पंजीकृत डोनर्स की तत्पर डायरेक्टरी।</p>
                </div>
              </div>
            </div>

            <div className="blood-emergency-action">
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 800, marginBottom: '4px' }}>
                  आपातकालीन रक्त आवश्यकता अथवा डोनर पूछताछ?
                </h4>
                <p style={{ color: '#fecaca', fontSize: '0.88rem', margin: 0 }}>
                  ब्लड सेंटर हेल्पलाइन अथवा हॉस्पिटल इमरजेंसी डेस्क पर 24 घंटे सीधे संपर्क करें।
                </p>
              </div>
              <div className="flex-center gap-3" style={{ flexWrap: 'wrap' }}>
                <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-white btn-sm">
                  <PhoneCall size={15} />
                  <span>Call Emergency: {HOSPITAL_INFO.contacts.emergencyMobile}</span>
                </a>
                <a href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`} className="btn btn-outline-white btn-sm">
                  <span>OPD Desk: {HOSPITAL_INFO.contacts.landline1}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Action CTA */}
      <section className="section-bg-navy section-sm">
        <div className="container flex-between flex-wrap gap-4">
          <div>
            <h3 className="heading-sm" style={{ color: '#ffffff', marginBottom: '4px' }}>
              Need an OPD Consultation or Diagnostic Test?
            </h3>
            <p style={{ color: '#94a3b8', margin: 0 }}>
              Book an appointment online or contact our OPD desk for timing details.
            </p>
          </div>
          <div className="flex-center gap-3" style={{ flexWrap: 'wrap' }}>
            <a
              href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
              className="btn btn-primary"
            >
              <PhoneCall size={16} />
              <span>Call OPD: 07292 - 232900</span>
            </a>
            <Link href="/doctors" className="btn btn-outline-white">
              <Users size={16} />
              <span>View Doctors Directory</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.92) 0%, rgba(15, 23, 42, 0.86) 50%, rgba(2, 132, 199, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 40% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 54px;
          position: relative;
        }

        .banner-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 800;
          line-height: 1.2;
          margin: 14px 0 10px;
          color: #ffffff;
        }

        .banner-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
          max-width: 820px;
        }

        .hero-anchors-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .hero-anchor-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .hero-anchor-chip:hover {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .anchor-chip-gold {
          background: rgba(245, 158, 11, 0.20);
          border-color: rgba(245, 158, 11, 0.45);
          color: #fef08a;
        }

        .anchor-chip-red {
          background: rgba(239, 68, 68, 0.22);
          border-color: rgba(239, 68, 68, 0.45);
          color: #fecaca;
        }

        .categories-stack {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .category-block {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          scroll-margin-top: 100px;
        }

        .cat-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }

        .cat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #f0f9ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cat-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0b1e33;
          margin-bottom: 4px;
        }

        .cat-desc {
          font-size: 0.92rem;
          color: #64748b;
          line-height: 1.5;
        }

        .service-card {
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card-top {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
        }

        .service-name {
          font-size: 1rem;
          font-weight: 700;
          color: #0b1e33;
          line-height: 1.3;
        }

        .service-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.55;
          flex-grow: 1;
        }

        /* Ayushman Section */
        .section-ayushman-highlight {
          background: linear-gradient(180deg, #f0fdf4 0%, #f8fafc 100%);
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          scroll-margin-top: 80px;
        }

        .ayushman-feature-card {
          padding: 26px 22px;
        }

        .ayushman-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .bg-gold-soft {
          background: #fef3c7;
        }

        .bg-teal-soft {
          background: #ccfbf1;
        }

        .bg-blue-soft {
          background: #dbeafe;
        }

        .badge-gold {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .ayushman-detail-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .detail-card-head {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .doc-items-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .doc-item-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .tpa-pills-wrap {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px dashed #e2e8f0;
        }

        .tpa-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: block;
          margin-bottom: 8px;
        }

        .tpa-chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tpa-chip {
          font-size: 0.75rem;
          font-weight: 600;
          color: #0369a1;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .steps-timeline-stack {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .step-timeline-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .step-num-bubble {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0284c7;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ayushman-help-banner {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        /* Blood Center Section */
        .section-blood-highlight {
          background: #ffffff;
          scroll-margin-top: 80px;
        }

        .badge-red {
          background: #fef2f2;
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        .blood-comp-card {
          padding: 24px 26px;
        }

        .blood-comp-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }

        .blood-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fee2e2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .blood-comp-title {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0b1e33;
          margin-bottom: 2px;
        }

        .blood-comp-sub {
          font-size: 0.78rem;
          font-weight: 700;
          color: #dc2626;
          text-transform: uppercase;
        }

        .blood-comp-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        .blood-safety-banner {
          padding: 32px;
          background: #ffffff;
          border: 1px solid #fecaca;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(239, 68, 68, 0.06);
        }

        .safety-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 28px;
        }

        .safety-point {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .safety-point strong {
          display: block;
          color: #0b1e33;
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

        .safety-point p {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
          margin: 0;
        }

        .blood-emergency-action {
          background: linear-gradient(135deg, #991b1b 0%, #b91c1c 60%, #dc2626 100%);
          border-radius: 14px;
          padding: 22px 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .text-teal {
          color: #0284c7;
        }

        .text-red {
          color: #dc2626;
        }

        .text-amber {
          color: #d97706;
        }

        .text-blue {
          color: #1d4ed8;
        }

        @media (max-width: 1024px) {
          .safety-points-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
        }

        @media (max-width: 768px) {
          .category-block {
            padding: 20px;
          }
          .cat-header {
            flex-direction: column;
            gap: 12px;
          }
          .blood-safety-banner {
            padding: 20px 16px;
          }
          .blood-emergency-action {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-anchors-row {
            gap: 6px;
          }
          .hero-anchor-chip {
            font-size: 0.76rem;
            padding: 5px 10px;
          }
        }
      `}</style>
    </div>
  );
}
