'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Bed,
  Phone,
  PhoneCall,
  ArrowRight,
  Sparkles,
  Users,
  Radio,
  Droplet,
  MapPin,
  Clock,
  Ambulance,
  ChevronRight,
  FileCheck2,
  CheckCircle2,
  Activity,
  Microscope,
  Stethoscope,
  HeartPulse,
  Syringe,
  Baby,
  Eye,
  Check,
  Star,
  Quote,
  Heart,
  Building2
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';
import { DOCTORS_DATA } from '@/data/doctors';
import { FACILITIES_DATA } from '@/data/facilities';

export default function HomePage() {
  const [activeChecklistTab, setActiveChecklistTab] = useState<number>(0);
  const [selectedSpecialtyTab, setSelectedSpecialtyTab] = useState<string>('all');

  // 4 Hospital Helpdesk Action Cards (Docked on Hero)
  const helpdeskCards = [
    {
      title: 'Find Specialist Doctor',
      titleHindi: 'विशेषज्ञ डॉक्टर खोजें',
      icon: Users,
      link: '/doctors',
      isExternal: false,
    },
    {
      title: 'Call Ambulance',
      titleHindi: '24×7 आपातकालीन एम्बुलेंस',
      icon: Ambulance,
      link: `tel:${HOSPITAL_INFO.contacts.ambulanceRaw}`,
      isExternal: false,
    },
    {
      title: 'Get Direction',
      titleHindi: 'अस्पताल मार्ग एवं नक्शा',
      icon: MapPin,
      link: HOSPITAL_INFO.address.googleMapsDirections,
      isExternal: true,
    },
    {
      title: 'Call OPD',
      titleHindi: 'दैनिक ओपीडी परामर्श',
      icon: PhoneCall,
      link: `tel:${HOSPITAL_INFO.contacts.landline1Raw}`,
      isExternal: false,
    },
  ];

  // 4 Interactive Checkpoints
  const visitCheckpoints = [
    {
      id: 0,
      title: '1. डॉक्टर उपलब्धता व ओपीडी समय',
      titleEn: 'Doctor Availability & OPD Timings',
      icon: Clock,
      shortBadge: 'सोम–शनि: 9 AM–2 PM, 4 PM–7 PM',
      highlight: 'अस्पताल आने से पूर्व डॉक्टर का समय व उपलब्धता जांचें',
      points: [
        'नियमित ओपीडी: सोमवार से शनिवार सुबह 09:00 AM से 02:00 PM एवं शाम 04:00 PM से 07:00 PM तक संचालित होती है।',
        'रविवार ओपीडी: प्रातः 10:00 AM से दोपहर 01:00 PM तक (आपातकालीन व ट्रॉमा सेवाएं 24×7 निरंतर चालू रहती हैं)।',
        'इंदौर के सुपर-स्पेशलिस्ट विज़िटिंग कंसल्टेंट्स के परामर्श हेतु पूर्व स्लॉट बुक करना अनुशंसित है।',
      ],
      deskName: 'ओपीडी रिसेप्शन',
      phone: HOSPITAL_INFO.contacts.landline1,
      phoneRaw: HOSPITAL_INFO.contacts.landline1Raw,
    },
    {
      id: 1,
      title: '2. आवश्यक दस्तावेज एवं पहचान पत्र',
      titleEn: 'Required Identification & Cards',
      icon: FileCheck2,
      shortBadge: 'आयुष्मान, आधार व पुरानी पर्ची',
      highlight: 'योजना लाभ व त्वरित रजिस्ट्रेशन हेतु आवश्यक पेपर्स साथ लाएं',
      points: [
        'आयुष्मान भारत लाभार्थी: आयुष्मान कार्ड (ABHA ID), आधार कार्ड एवं समग्र परिवार आईडी मूल रूप में साथ लाएं।',
        'पूर्व चिकित्सीय रिकॉर्ड: मरीज की पिछली डॉक्टर पर्ची, डिस्चार्ज कार्ड, एक्स-रे, सोनोग्राफी अथवा पैथोलॉजी रिपोर्ट जरूर साथ रखें।',
        'निजी स्वास्थ्य बीमा (TPA Cashless): पॉलिसी कार्ड, वैध पहचान पत्र एवं कंपनी का क्लेम फॉर्म सहायता काउंटर पर प्रस्तुत करें।',
      ],
      deskName: 'आयुष्मान एवं टीपीए डेस्क',
      phone: '+91 94072 99900',
      phoneRaw: '9407299900',
    },
    {
      id: 2,
      title: '3. एमआरआई / सीटी स्कैन जांच तैयारी',
      titleEn: 'MRI & CT Scan Preparation',
      icon: Radio,
      shortBadge: '24×7 डायग्नोस्टिक्स एवं गाइडेंस',
      highlight: 'उन्नत इमेजिंग जांचों से पूर्व आवश्यक चिकित्सीय निर्देश',
      points: [
        'खाली पेट (Fasting): पेट के सीटी स्कैन अथवा कंट्रास्ट एमआरआई जांच हेतु मरीज को 4 से 6 घंटे खाली पेट आने की सलाह दी जाती है।',
        'सीरम क्रिएटिनिन रिपोर्ट: कंट्रास्ट जांचों हेतु हाल ही की किडनी फंक्शन (Creatinine) रिपोर्ट आवश्यक होती है।',
        'धातु आभूषण: एमआरआई रूम में प्रवेश से पूर्व घड़ी, आभूषण, चाबियां एवं मोबाइल फोन बाहर लॉकर में सुरक्षित रखें।',
      ],
      deskName: 'रेडियोलॉजी एवं सीटी स्कैन सेंटर',
      phone: HOSPITAL_INFO.contacts.landline1,
      phoneRaw: HOSPITAL_INFO.contacts.landline1Raw,
    },
    {
      id: 3,
      title: '4. भर्ती एवं आपातकालीन सहायता',
      titleEn: 'Emergency Admission & Bed Allocation',
      icon: Bed,
      shortBadge: '24×7 इमरजेंसी रिस्पॉन्स',
      highlight: 'आपातकालीन स्थिति में सीधा कैजुअल्टी एवं इमरजेंसी वार्ड पहुंचें',
      points: [
        '24×7 कैजुअल्टी: सड़क दुर्घटना, ट्रॉमा, अचानक सीने में दर्द अथवा गंभीर स्थिति में सीधा इमरजेंसी वार्ड पहुंचें।',
        'कमरा / वार्ड चयन: डिलक्स एसी, प्राइवेट, सेमी-प्राइवेट अथवा सामान्य वार्ड में सुविधानुसार तत्काल एडमिशन की सुविधा।',
        '24×7 एम्बुलेंस सुविधा: मरीज को धार व आसपास से अस्पताल लाने हेतु इमरजेंसी एम्बुलेंस तुरंत रवाना की जाती है।',
      ],
      deskName: '24×7 इमरजेंसी एवं एडमिशन डेस्क',
      phone: HOSPITAL_INFO.contacts.emergencyMobile,
      phoneRaw: HOSPITAL_INFO.contacts.emergencyMobileRaw,
    },
  ];

  // Filtered doctors for home preview (8 featured doctors)
  const previewDoctors = DOCTORS_DATA.filter((doc) => {
    if (selectedSpecialtyTab === 'all') return true;
    return doc.category === selectedSpecialtyTab;
  }).slice(0, 8);

  const patientTestimonials = [
    {
      quote: 'मेरी पित्त की थैली की पथरी की दूरबीन (Laparoscopic) सर्जरी डॉ. एम. एम. महाजन एवं डॉ. वैभव महाजन सर द्वारा की गई। मात्र दो दिन में स्वस्थ होकर घर आ गया। धार में इतना आधुनिक मॉड्यूलर ऑपरेशन थिएटर होना वरदान है।',
      patientName: 'सुरेश पाटीदार',
      location: 'धार (म.प्र.)',
      treatment: 'लैप्रोस्कोपिक गॉल ब्लैडर सर्जरी',
      rating: 5,
    },
    {
      quote: 'रात 2 बजे अचानक सीने में दर्द होने पर हम इमरजेंसी पहुंचे। डॉक्टरों ने तत्काल ईसीजी, प्राथमिक उपचार व आईसीयू में भर्ती किया। समय पर सही इलाज से पिताजी की जान बच सकी।',
      patientName: 'राजेश वर्मा (परिजन)',
      location: 'बदनावर, धार',
      treatment: '24×7 आईसीयू एवं क्रिटिकल केयर',
      rating: 5,
    },
    {
      quote: 'मेरी पत्नी की हाई-रिस्क डिलीवरी थी। डॉ. माया महाजन मैडम एवं डॉ. आकांक्षा महाजन मैडम की कुशल देखरेख में सुरक्षित प्रसव हुआ। जन्म के बाद बच्चे को एनआईसीयू में तुरंत विशेष देखरेख मिली।',
      patientName: 'अनिल मुवेल',
      location: 'कुक्षी, धार',
      treatment: 'सुरक्षित प्रसूति एवं एनआईसीयू नवजात केयर',
      rating: 5,
    },
  ];

  return (
    <div className="homepage-modern">
      {/* 1. Clean Fullscreen Hospital Hero Banner (Matching Reference Image) */}
      <section className="hero-fullscreen-clean">
        <div className="hero-bg-container">
          <Image
            src="/images/hosted/Mahaan01.jpg-1-scaled.jpeg"
            alt="Mahajan Multispeciality Hospital Campus Dhar"
            fill
            priority
            className="hero-bg-img"
          />
          {/* Subtle Clean Dark Gradient Overlay */}
          <div className="hero-clean-overlay" />
        </div>

        {/* Center Minimal Name Display (Hindi & English) + Know More Button */}
        <div className="hero-center-content container text-center">
          <h1 className="hero-hospital-title">
            <span className="title-hi">महाजन मल्टीस्पेशलिटी हॉस्पिटल</span>
            <span className="title-en">MAHAJAN HOSPITAL DHAR</span>
          </h1>
          <div className="hero-btn-container">
            <Link
              href="/about"
              className="hero-know-more-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                color: '#0284c7',
                fontWeight: 700,
                fontSize: '0.94rem',
                padding: '9px 26px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.28)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>Know More</span>
            </Link>
          </div>
        </div>

        {/* Bottom Helpdesk Facilities Cards (As shown in reference image) */}
        <div className="hero-helpdesk-dock">
          <div className="container">
            <div className="helpdesk-cards-grid">
              {helpdeskCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.link}
                    target={card.isExternal ? '_blank' : undefined}
                    rel={card.isExternal ? 'noopener noreferrer' : undefined}
                    className="helpdesk-action-card"
                  >
                    <div className="helpdesk-icon-wrap">
                      <IconComponent size={30} className="helpdesk-icon" />
                    </div>
                    <span className="helpdesk-card-title">{card.title}</span>
                    <span className="helpdesk-card-sub">{card.titleHindi}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Before You Visit Guide (Interactive Tabbed) */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Clock size={15} />
              <span>मरीज एवं परिजनों के लिए आवश्यक निर्देश</span>
            </span>
            <h2 className="section-main-title">Before You Visit The Hospital</h2>
            <p className="section-sub-title">
              अस्पताल आने से पहले डॉक्टर का समय, आवश्यक दस्तावेज और जांच संबंधी निर्देश जानकर समय की बचत करें।
            </p>
          </div>

          <div className="tabs-navigation-grid">
            {visitCheckpoints.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab-btn-card ${activeChecklistTab === tab.id ? 'tab-btn-active' : ''}`}
                onClick={() => setActiveChecklistTab(tab.id)}
              >
                <div className="tab-btn-icon">
                  <tab.icon size={22} color={activeChecklistTab === tab.id ? '#0284c7' : '#64748b'} />
                </div>
                <div className="tab-btn-text">
                  <div className="tab-title-text">{tab.titleEn}</div>
                  <div className="tab-badge-text">{tab.shortBadge}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="tab-content-box">
            <div className="tab-header-row">
              <div>
                <h3 className="tab-active-title">{visitCheckpoints[activeChecklistTab].title}</h3>
                <p className="tab-active-highlight">{visitCheckpoints[activeChecklistTab].highlight}</p>
              </div>

              <a
                href={`tel:${visitCheckpoints[activeChecklistTab].phoneRaw}`}
                className="btn-tab-call"
              >
                <PhoneCall size={16} />
                <span>कॉल {visitCheckpoints[activeChecklistTab].deskName} ({visitCheckpoints[activeChecklistTab].phone})</span>
              </a>
            </div>

            <div className="tab-points-grid">
              {visitCheckpoints[activeChecklistTab].points.map((pt, i) => (
                <div key={i} className="point-card">
                  <CheckCircle2 size={20} color="#10b981" className="point-icon" />
                  <p className="point-text">{pt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Doctors Showcase Section (39+ Specialists) */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-pill-tag tag-blue">
                <Users size={14} />
                <span>चिकित्सक एवं विशेषज्ञ टीम (39+ Dedicated Doctors)</span>
              </span>
              <h2 className="section-main-title">Consult Dhar&apos;s Leading Specialists</h2>
              <p className="section-sub-title">
                महाजन हॉस्पिटल में 39+ अनुभवी विशेषज्ञ डॉक्टर एवं इंदौर के प्रसिद्ध सुपर-स्पेशलिस्ट नियमित ओपीडी परामर्श हेतु उपलब्ध हैं।
              </p>
            </div>

            <Link href="/doctors" className="btn-view-all">
              <span>View All 39+ Doctors</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="specialty-pills-row">
            {[
              { id: 'all', label: 'All Specialists' },
              { id: 'surgery', label: 'Surgeons (9+)' },
              { id: 'medicine', label: 'Physicians (5+)' },
              { id: 'gynecology', label: 'Gynecology (4+)' },
              { id: 'orthopedics', label: 'Orthopedics (3+)' },
              { id: 'pediatrics', label: 'Pediatrics' },
              { id: 'cardiology', label: 'Cardiology' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${selectedSpecialtyTab === cat.id ? 'filter-pill-active' : ''}`}
                onClick={() => setSelectedSpecialtyTab(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Doctors Grid */}
          <div className="doctors-grid">
            {previewDoctors.map((doc) => (
              <div key={doc.id} className="doctor-card">
                <div className="doc-photo-wrapper">
                  {doc.image ? (
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      width={300}
                      height={340}
                      className="doc-photo"
                    />
                  ) : (
                    <div className="doc-photo-placeholder">
                      <Users size={48} color="#94a3b8" />
                    </div>
                  )}
                  <span className={`doc-badge ${doc.source === 'indore' ? 'badge-indore' : 'badge-resident'}`}>
                    {doc.director ? '⭐ Managing Director' : doc.source === 'hospital' ? 'Resident Specialist' : doc.source === 'indore' ? 'Indore Visiting' : 'Visiting Consultant'}
                  </span>
                </div>

                <div className="doc-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <div className="doc-dept">{doc.department}</div>
                  <p className="doc-role">{doc.role}</p>
                  {doc.qualifications && <p className="doc-qual">{doc.qualifications}</p>}
                  {doc.timing && (
                    <div className="doc-time">
                      <Clock size={13} />
                      <span>{doc.timing}</span>
                    </div>
                  )}

                  <div className="doc-btn-row">
                    <Link href={`/doctors?doc=${doc.id}`} className="btn-doc-profile">
                      Consultation Info
                    </Link>
                    <a href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`} className="btn-doc-call">
                      <PhoneCall size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Modern Infrastructure & Facilities (31,000 sq.ft Dual-Campus) */}
      <section className="section-padding bg-slate-subtle">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Building2 size={14} />
              <span>31,000 वर्गफीट डुअल-ब्लॉक परिसर (Campus Infrastructure)</span>
            </span>
            <h2 className="section-main-title">World-Class Facilities &amp; Technology</h2>
            <p className="section-sub-title">
              Block A (ओपीडी, डायग्नोस्टिक्स व इमरजेंसी) एवं Block B (मॉड्यूलर ओटी, आईसीयू, एनआईसीयू व 100+ बेड्स वार्ड्स)
            </p>
          </div>

          <div className="facilities-showcase-grid">
            {FACILITIES_DATA.slice(0, 6).map((fac) => (
              <div key={fac.id} className="fac-card">
                <div className="fac-image-box">
                  <Image
                    src={fac.image || '/images/hosted/Mahaan01.jpg-1-scaled.jpeg'}
                    alt={fac.title}
                    width={400}
                    height={260}
                    className="fac-photo"
                  />
                  <span className="fac-badge">{fac.highlight}</span>
                </div>
                <div className="fac-content">
                  <h3 className="fac-title">{fac.title}</h3>
                  <div className="fac-title-hi">{fac.titleHindi}</div>
                  <p className="fac-desc">{fac.description}</p>
                  <ul className="fac-bullets">
                    {fac.features.slice(0, 3).map((f, fi) => (
                      <li key={fi}>
                        <Check size={14} color="#0284c7" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '36px' }}>
            <Link href="/facilities" className="btn-view-all-facilities">
              <span>View All Campus Facilities &amp; Equipment</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      {/* 9. Patient Stories & Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill-tag tag-blue">
              <Heart size={14} />
              <span>मरीजों का विश्वास (Patient Experiences)</span>
            </span>
            <h2 className="section-main-title">Trusted by Thousands Across Malwa-Nimar</h2>
            <p className="section-sub-title">
              धार, बदनावर, कुक्षी, सरदारपुर, मनावर एवं झाबुआ अंचल के संतुष्ट मरीजों के वास्तविक अनुभव।
            </p>
          </div>

          <div className="testimonials-grid">
            {patientTestimonials.map((t, idx) => (
              <div key={idx} className="test-card">
                <div className="test-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span className="test-badge">{t.treatment}</span>
                </div>
                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="test-author-row">
                  <div className="test-avatar">{t.patientName.charAt(0)}</div>
                  <div>
                    <div className="test-name">{t.patientName}</div>
                    <div className="test-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styled JSX for homepage scoped styling */}
      <style jsx>{`
        /* 1. Clean Fullscreen Hospital Hero (Matching Reference Image) */
        .hero-fullscreen-clean {
          position: relative;
          min-height: 86vh;
          height: 86vh;
          min-height: 720px;
          max-height: 960px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: stretch;
          overflow: visible;
          background: #091e36;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }

        :global(.hero-bg-img) {
          object-fit: cover !important;
          object-position: center 36% !important;
          filter: brightness(0.96) contrast(1.02);
        }

        .hero-clean-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(6, 20, 42, 0.42) 0%,
            rgba(6, 20, 42, 0.18) 40%,
            rgba(4, 15, 30, 0.58) 100%
          );
          z-index: 2;
        }

        .hero-center-content {
          position: relative;
          z-index: 10;
          margin: 32px auto auto auto;
          padding: 10px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 980px;
        }

        .hero-hospital-title {
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .title-hi {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1.18;
          letter-spacing: -0.01em;
          text-shadow: 0 3px 14px rgba(0, 0, 0, 0.85), 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .title-en {
          font-size: clamp(1.05rem, 1.8vw, 1.5rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.8));
          display: inline-block;
        }

        .hero-btn-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :global(.hero-know-more-btn) {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          background-color: #ffffff !important;
          color: #0284c7 !important;
          font-weight: 700 !important;
          font-size: 0.94rem !important;
          padding: 9px 26px !important;
          border-radius: 8px !important;
          text-decoration: none !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.28) !important;
          border: 1px solid rgba(255, 255, 255, 0.95) !important;
          transition: all 0.25s ease !important;
          cursor: pointer !important;
        }

        :global(.hero-know-more-btn:hover) {
          background-color: #0284c7 !important;
          color: #ffffff !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 22px rgba(2, 132, 199, 0.45) !important;
        }

        /* Docked Hospital Helpdesk Facility Cards (Straddling Hero & Content Section) */
        .hero-helpdesk-dock {
          position: relative;
          z-index: 20;
          width: 100%;
          transform: translateY(-32px);
          margin-bottom: -16px;
        }

        .helpdesk-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 1120px;
          margin: 0 auto;
        }

        .helpdesk-action-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 18px 14px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(226, 232, 240, 0.95);
          transition: all 0.28s ease;
          position: relative;
        }

        .helpdesk-action-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(2, 132, 199, 0.2), 0 6px 16px rgba(0, 0, 0, 0.1);
          border-color: #38bdf8;
          background: #ffffff;
        }

        .helpdesk-icon-wrap {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
          color: #0284c7;
          transition: transform 0.25s ease;
        }

        .helpdesk-action-card:hover .helpdesk-icon-wrap {
          transform: scale(1.08);
        }

        :global(.helpdesk-icon) {
          color: #0284c7;
          stroke-width: 1.8;
        }

        .helpdesk-card-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 2px;
        }

        .helpdesk-card-sub {
          font-size: 0.74rem;
          font-weight: 600;
          color: #0284c7;
          line-height: 1.25;
        }

        /* 3. Before You Visit Tabbed Component */
        .section-padding {
          padding: 70px 0;
        }

        .bg-slate-subtle {
          background: #f8fafc;
        }

        .section-header-center {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 38px;
        }

        .section-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 800;
          padding: 5px 14px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .tag-blue {
          background: #e0f2fe;
          color: #0369a1;
        }

        .section-main-title {
          font-size: clamp(1.75rem, 2.8vw, 2.4rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.25;
          margin-bottom: 12px;
        }

        .section-sub-title {
          font-size: 1.02rem;
          color: #64748b;
          line-height: 1.6;
        }

        .tabs-navigation-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 22px;
        }

        .tab-btn-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .tab-btn-card:hover {
          border-color: #93c5fd;
          transform: translateY(-2px);
        }

        .tab-btn-active {
          border-color: #0284c7;
          background: #f0f9ff;
          box-shadow: 0 4px 16px rgba(2, 132, 199, 0.12);
        }

        .tab-title-text {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
        }

        .tab-badge-text {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 3px;
        }

        .tab-content-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }

        .tab-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 20px;
          margin-bottom: 24px;
          gap: 20px;
          flex-wrap: wrap;
        }

        .tab-active-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 4px;
        }

        .tab-active-highlight {
          font-size: 0.95rem;
          color: #0284c7;
          font-weight: 600;
        }

        .btn-tab-call {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-tab-call:hover {
          background: #16a34a;
          color: #ffffff;
        }

        .tab-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .point-card {
          display: flex;
          gap: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 18px;
          border-radius: 14px;
        }

        .point-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .point-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.55;
        }

        /* 4. Doctors Section */
        .section-header-flex {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .btn-view-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-view-all:hover {
          background: #0284c7;
        }

        .specialty-pills-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .filter-pill {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-pill:hover {
          background: #e2e8f0;
          color: #0f172a;
        }

        .filter-pill-active {
          background: #0284c7;
          border-color: #0284c7;
          color: #ffffff;
        }

        .doctors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .doctor-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .doctor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
        }

        .doc-photo-wrapper {
          position: relative;
          height: 250px;
          background: #f1f5f9;
          overflow: hidden;
        }

        :global(.doc-photo) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: top center !important;
        }

        .doc-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
        }

        .doc-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 9999px;
          backdrop-filter: blur(8px);
        }

        .badge-resident {
          background: rgba(16, 185, 129, 0.9);
          color: #ffffff;
        }

        .badge-indore {
          background: rgba(2, 132, 199, 0.9);
          color: #ffffff;
        }

        .doc-info {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .doc-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .doc-dept {
          font-size: 0.82rem;
          color: #0284c7;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .doc-role {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.4;
          margin-bottom: 6px;
        }

        .doc-qual {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 500;
          margin-bottom: 10px;
        }

        .doc-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          color: #475569;
          margin-top: auto;
          margin-bottom: 14px;
          padding: 6px 10px;
          background: #f8fafc;
          border-radius: 8px;
        }

        .doc-btn-row {
          display: flex;
          gap: 8px;
        }

        .btn-doc-profile {
          flex-grow: 1;
          text-align: center;
          padding: 8px 12px;
          background: #f1f5f9;
          color: #0f172a;
          font-weight: 700;
          font-size: 0.82rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-doc-profile:hover {
          background: #0284c7;
          color: #ffffff;
        }

        .btn-doc-call {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #f0fdf4;
          color: #16a34a;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-doc-call:hover {
          background: #16a34a;
          color: #ffffff;
        }

        /* 5. Facilities Showcase */
        .facilities-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .fac-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          transition: all 0.25s ease;
        }

        .fac-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
        }

        .fac-image-box {
          position: relative;
          height: 200px;
          background: #0f172a;
        }

        :global(.fac-photo) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }

        .fac-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.82);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .fac-content {
          padding: 20px;
        }

        .fac-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .fac-title-hi {
          font-size: 0.85rem;
          color: #0284c7;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .fac-desc {
          font-size: 0.88rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
        }

        .fac-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .fac-bullets li {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: #334155;
          font-weight: 500;
        }

        .btn-view-all-facilities {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.35);
          transition: all 0.25s ease;
        }

        .btn-view-all-facilities:hover {
          background: #0369a1;
          transform: translateY(-2px);
        }

        /* 6. Ayushman Banner */
        .ayushman-highlight-card {
          background: linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%);
          border-radius: 24px;
          padding: 44px;
          color: #ffffff;
          box-shadow: 0 16px 40px rgba(6, 78, 59, 0.25);
        }

        .ayushman-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 36px;
          align-items: center;
        }

        .badge-ayushman-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 0.82rem;
          font-weight: 800;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .ayushman-main-heading {
          font-size: clamp(1.6rem, 2.5vw, 2.3rem);
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 14px;
          color: #ffffff;
        }

        .ayushman-text {
          font-size: 1rem;
          line-height: 1.65;
          color: #d1fae5;
          margin-bottom: 22px;
        }

        .ayushman-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .ayushman-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
        }

        .ayushman-action-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-ayushman-guide {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #065f46;
          font-weight: 800;
          font-size: 0.92rem;
          padding: 12px 22px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-ayushman-guide:hover {
          background: #f0fdf4;
          transform: translateY(-2px);
        }

        .btn-ayushman-helpdesk {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.92rem;
          padding: 12px 20px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-ayushman-helpdesk:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .ayushman-stats-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ayushman-stat-box {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 16px;
          padding: 18px 22px;
          display: flex;
          flex-direction: column;
        }

        .ayushman-stat-number {
          font-size: 1.8rem;
          font-weight: 900;
          color: #fbbf24;
        }

        .ayushman-stat-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #ffffff;
          margin-top: 2px;
        }

        .ayushman-stat-desc {
          font-size: 0.8rem;
          color: #a7f3d0;
          margin-top: 2px;
        }

        /* 7. Specialties */
        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .spec-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 22px;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .spec-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
          border-color: #93c5fd;
        }

        .spec-icon-box {
          width: 52px;
          height: 52px;
          background: #f0f9ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .spec-count {
          font-size: 0.75rem;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          display: inline-block;
          padding: 3px 8px;
          border-radius: 6px;
          margin-bottom: 8px;
          align-self: flex-start;
        }

        .spec-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 3px;
        }

        .spec-title-hi {
          font-size: 0.82rem;
          color: #64748b;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .spec-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .spec-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0284c7;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .spec-link:hover {
          gap: 8px;
        }

        /* 8. Emergency CTA */
        .emergency-cta-section {
          background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%);
          padding: 60px 0;
          color: #ffffff;
        }

        .badge-emergency-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          font-size: 0.85rem;
          font-weight: 800;
          padding: 6px 16px;
          border-radius: 9999px;
          margin-bottom: 16px;
        }

        .emergency-cta-title {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 900;
          margin-bottom: 12px;
          color: #ffffff;
        }

        .emergency-cta-desc {
          font-size: 1.05rem;
          color: #fecaca;
          max-width: 680px;
          margin: 0 auto 28px;
          line-height: 1.6;
        }

        .emergency-btn-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-call-emergency-lg {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          color: #b91c1c;
          font-weight: 900;
          font-size: 1.05rem;
          padding: 16px 30px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          transition: all 0.2s ease;
        }

        .btn-call-emergency-lg:hover {
          background: #fef2f2;
          transform: translateY(-2px);
        }

        .btn-emergency-map {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          padding: 16px 26px;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-emergency-map:hover {
          background: rgba(255, 255, 255, 0.28);
        }

        /* 9. Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .test-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
          display: flex;
          flex-direction: column;
        }

        .test-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 14px;
        }

        .test-badge {
          margin-left: auto;
          font-size: 0.72rem;
          font-weight: 700;
          background: #e0f2fe;
          color: #0369a1;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .test-quote {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .test-author-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .test-avatar {
          width: 42px;
          height: 42px;
          background: #0284c7;
          color: #ffffff;
          font-weight: 800;
          font-size: 1.1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .test-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0f172a;
        }

        .test-loc {
          font-size: 0.78rem;
          color: #64748b;
        }

        /* Responsive Media Queries */
        @media (max-width: 1100px) {
          .helpdesk-cards-grid {
            max-width: 960px;
          }
          .doctors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .specialties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .hero-fullscreen-clean {
            min-height: auto;
            height: auto;
          }
          .hero-center-content {
            margin: 25px auto auto auto;
            padding: 15px 16px 20px;
          }
          .hero-helpdesk-dock {
            transform: translateY(-20px);
            margin-bottom: -10px;
          }
          .helpdesk-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            padding: 0 16px;
          }
          .helpdesk-action-card {
            border-radius: 12px;
            padding: 16px 12px 14px;
          }
          .section-padding {
            padding: 60px 0 50px;
          }
          .ayushman-grid {
            grid-template-columns: 1fr;
          }
          .tabs-navigation-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tab-points-grid {
            grid-template-columns: 1fr;
          }
          .facilities-showcase-grid {
            grid-template-columns: 1fr;
          }
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .hero-fullscreen-clean {
            min-height: auto;
          }
          .hero-center-content {
            margin: 18px auto auto auto;
            padding: 10px 14px 16px;
          }
          .title-hi {
            font-size: 1.85rem;
          }
          .title-en {
            font-size: 1.05rem;
          }
          .hero-helpdesk-dock {
            transform: translateY(-16px);
            margin-bottom: -8px;
          }
          .helpdesk-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            padding: 0 10px;
          }
          .helpdesk-action-card {
            padding: 14px 10px 12px;
          }
          .helpdesk-icon-wrap {
            width: 36px;
            height: 36px;
            margin-bottom: 4px;
          }
          .helpdesk-card-title {
            font-size: 0.86rem;
          }
          .helpdesk-card-sub {
            font-size: 0.7rem;
          }
          .doctors-grid {
            grid-template-columns: 1fr;
          }
          .specialties-grid {
            grid-template-columns: 1fr;
          }
          .tabs-navigation-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
