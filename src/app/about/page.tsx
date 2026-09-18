'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Building2,
  CheckCircle2,
  Users,
  Stethoscope,
  Calendar,
  Clock,
  ArrowRight,
  Radio,
  Activity,
  Bed,
  Droplet,
  PhoneCall,
  Sparkles,
  ChevronRight,
  Quote
} from 'lucide-react';
import { HOSPITAL_INFO } from '@/data/hospital-info';
import { FACILITIES_DATA } from '@/data/facilities';

export default function AboutPage() {
  const [selectedBlock, setSelectedBlock] = useState<'all' | 'blockA' | 'blockB'>('all');

  const milestones = [
    { year: '1970s', title: 'Surgical Pioneer', desc: 'Dr. M. M. Mahajan began serving Dhar and western MP, performing complex surgeries with dedication.' },
    { year: '2011', title: 'Foundation of Mahajan Hospital', desc: 'Modern multispeciality hospital established at Magajpura to bring superspeciality care to rural and tribal communities.' },
    { year: '2018', title: 'Campus Expansion (Block B)', desc: 'Expanded to 31,000 sq.ft. dual-block campus with 100+ beds, advanced ICU, and specialized OT suites.' },
    { year: 'Present', title: 'NABH Entry-Level Accreditation', desc: 'Certified for high standards in patient safety, advanced CT Scan, 1.5T MRI, and Government-recognized Blood Center.' },
  ];

  const campusBlocks = [
    {
      id: 'blockA',
      name: 'Block A (ओपीडी, एडवांस्ड डायग्नोस्टिक्स व इमरजेंसी विंग)',
      nameEn: 'Block A: Diagnostics, Emergency & OPD Hub',
      desc: 'मल्टीस्पेशलिटी ओपीडी विंग, 24×7 इमरजेंसी एवं ट्रॉमा केयर, 1.5T MRI, मल्टी-स्लाइस सीटी स्कैन, 24×7 पैथोलॉजी लैब, फार्मेसी एवं रजिस्ट्रेशन।',
      features: ['24×7 Emergency & Triage Bay', '1.5 Tesla HD MRI Scan', 'Multi-Slice CT Scan Center', 'Automated Pathology Laboratory', 'Specialist OPD Chambers'],
    },
    {
      id: 'blockB',
      name: 'Block B (सर्जिकल कॉम्प्लेक्स, क्रिटिकल केयर व इनपेशेंट विंग)',
      nameEn: 'Block B: Critical Care, Modular OT & Inpatient Wing',
      desc: 'मॉड्यूलर ऑपरेशन थिएटर्स (लैमिनार फ्लो), 24×7 आईसीयू, एनआईसीयू (नवजात शिशु केयर), शासकीय ब्लड सेंटर एवं 100+ बेड्स डीलक्स/प्राइवेट/जनरल वार्ड्स।',
      features: ['Laminar Flow Modular OTs', 'Multi-bed Critical Care ICU', 'Advanced Neonatal NICU', 'Govt. Licensed Blood Center', '100+ Inpatient Beds & Deluxe Rooms'],
    },
  ];

  return (
    <div className="about-page">
      {/* 1. Page Header Banner */}
      <section className="about-hero-banner">
        <div className="container">
          <div className="banner-content">
            <span className="badge badge-amber">
              <Sparkles size={14} />
              <span>Hospital Profile &amp; Campus Facilities</span>
            </span>
            <h1 className="banner-title">अस्पताल परिचय एवं सुविधाएं (About &amp; Facilities)</h1>
            <p className="banner-desc">
              धार जिले में 31,000 वर्गफीट डुअल-ब्लॉक कैंपस, 100+ बेड्स, 1.5T MRI, 24×7 आईसीयू, ब्लड सेंटर एवं 50 वर्षों की विश्वसनीय सर्जिकल परंपरा।
            </p>
          </div>
        </div>
      </section>

      {/* 2. Director's Desk & Leadership Spotlight */}
      <section className="section section-director" id="directors-desk">
        <div className="container">
          <div className="director-executive-header text-center">
            <div className="executive-badge-pill">
              <Award size={16} className="icon-gold" />
              <span>प्रबंध निदेशक का संदेश • Founder &amp; Leadership Spotlight</span>
            </div>
            <h2 className="executive-main-title">
              चिकित्सा में 50 वर्षों की निष्ठा, विश्वास एवं करुणा
            </h2>
            <p className="executive-sub-title">
              वरिष्ठ सर्जन <strong>डॉ. एम. एम. महाजन</strong> के कुशल मार्गदर्शन में धार एवं संपूर्ण मालवा-निमाड़ क्षेत्र को समर्पित 100-बिस्तरों का आधुनिक मल्टीस्पेशलिटी अस्पताल।
            </p>
          </div>

          <div className="director-premium-card">
            <div className="director-ambient-glow" />

            {/* Left Column: Prestigious Doctor Portrait & Verified Credentials */}
            <div className="director-portrait-side">
              <div className="director-frame-outer">
                <div className="director-frame-inner">
                  <Image
                    src="/images/hosted/Dr.-M.M.-Mahajan-Managing-Director-scaled.jpg"
                    alt="Dr. M. M. Mahajan - Managing Director & Senior Surgeon"
                    width={480}
                    height={560}
                    priority
                    className="director-portrait-img"
                  />
                  <div className="director-status-pill">
                    <span className="pulsing-emerald-dot" />
                    <span>Active Senior Consultant &amp; Mentor</span>
                  </div>
                  <div className="director-banner-ribbon">
                    <Sparkles size={14} className="icon-gold" />
                    <span>Surgical Pioneer Since 1970s</span>
                  </div>
                </div>
              </div>

              <div className="director-identity-box">
                <div className="director-name-row">
                  <h3 className="director-name-hi">{HOSPITAL_INFO.managingDirector.name}</h3>
                  <span className="director-designation-badge">Managing Director</span>
                </div>
                <p className="director-qualifications">
                  Senior Laparoscopic &amp; General Surgeon • 50+ Years Legacy
                </p>
                <div className="director-experience-chip">
                  <ShieldCheck size={16} className="text-teal" />
                  <span>{HOSPITAL_INFO.managingDirector.experience}</span>
                </div>
              </div>

              {/* 3 Prominent Stat Badges */}
              <div className="director-stats-trio">
                <div className="stat-trio-card">
                  <div className="stat-trio-icon-box">
                    <Calendar size={18} className="text-teal" />
                  </div>
                  <span className="stat-trio-val">50+</span>
                  <span className="stat-trio-lbl">Years Legacy</span>
                </div>
                <div className="stat-trio-card">
                  <div className="stat-trio-icon-box">
                    <Activity size={18} className="text-teal" />
                  </div>
                  <span className="stat-trio-val">90,000+</span>
                  <span className="stat-trio-lbl">Surgeries Done</span>
                </div>
                <div className="stat-trio-card">
                  <div className="stat-trio-icon-box">
                    <Bed size={18} className="text-teal" />
                  </div>
                  <span className="stat-trio-val">100+</span>
                  <span className="stat-trio-lbl">Hospital Beds</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inspiring Quote, Leadership Story, and Sign-off */}
            <div className="director-content-side">
              {/* Grand Quote Showcase */}
              <div className="director-grand-quote">
                <div className="quote-mark-watermark">“</div>
                <div className="quote-header-tag">
                  <Quote size={18} className="text-teal" />
                  <span>संस्थापक का संदेश (Founder&apos;s Mission)</span>
                </div>
                <blockquote className="quote-body-hindi">
                  &quot;{HOSPITAL_INFO.managingDirector.message}&quot;
                </blockquote>
                <p className="quote-body-en">
                  &quot;Our lifelong commitment is to ensure that no family in Dhar and surrounding rural areas has to suffer or travel to distant metros for critical surgery, advanced diagnostics, or life-saving emergency care.&quot;
                </p>
                <div className="quote-byline">
                  <div className="byline-line" />
                  <span className="byline-author">— डॉ. एम. एम. महाजन (वरिष्ठ सर्जन एवं प्रबंध निदेशक)</span>
                </div>
              </div>

              {/* 3 Visual Narrative Pillars */}
              <div className="director-story-pillars">
                <div className="story-pillar-item">
                  <div className="pillar-num-badge">01</div>
                  <div className="pillar-body">
                    <h4 className="pillar-title">50 वर्षों की समर्पित सर्जिकल परंपरा (Pioneering Care)</h4>
                    <p className="pillar-desc">
                      1970 के दशक से धार, झाबुआ, अलीराजपुर, बड़वानी एवं खरगोन अंचल में जब जटिल सर्जरी की सुविधाएं अत्यंत सीमित थीं, डॉ. महाजन ने निष्काम सेवा भाव से हजारों मरीजों को नया जीवन दिया और स्थानीय स्तर पर आधुनिक सर्जिकल विश्वास की नींव रखी।
                    </p>
                  </div>
                </div>

                <div className="story-pillar-item">
                  <div className="pillar-num-badge">02</div>
                  <div className="pillar-body">
                    <h4 className="pillar-title">31,000 वर्गफीट आधुनिक डुअल-ब्लॉक परिसर (Campus Growth)</h4>
                    <p className="pillar-desc">
                      उनके दूरदर्शी नेतृत्व में अस्पताल का निरंतर विस्तार हुआ। आज 100-बिस्तरों के विशाल परिसर में 39+ समर्पित विशेषज्ञ, 1.5 Tesla HD MRI, 24×7 सीटी स्कैन, अत्याधुनिक आईसीयू, एनआईसीयू व ब्लड सेंटर एक ही छत के नीचे कार्यरत हैं।
                    </p>
                  </div>
                </div>

                <div className="story-pillar-item">
                  <div className="pillar-num-badge">03</div>
                  <div className="pillar-body">
                    <h4 className="pillar-title">नैतिक व करुणामयी दृष्टिकोण (Patient-First Ethics)</h4>
                    <p className="pillar-desc">
                      &quot;चिकित्सा केवल एक पेशा नहीं, मानव सेवा का पावन संकल्प है&quot; — इसी सिद्धांत पर अस्पताल में पारदर्शी परामर्श, NABH गुणवत्ता मानकों का कड़ाई से पालन एवं आयुष्मान भारत के अंतर्गत वंचित वर्ग को पूर्णतः निशुल्क कैशलेस इलाज प्रदान किया जाता है।
                    </p>
                  </div>
                </div>
              </div>

              {/* Value Badges & Signature Row */}
              <div className="director-footer-row">
                <div className="director-signature-card">
                  <div className="sig-dr-name">Dr. M. M. Mahajan</div>
                  <div className="sig-dr-title">Managing Director &amp; Senior Surgeon</div>
                  <div className="sig-dr-org">Mahajan Multispeciality Hospital, Dhar (M.P.)</div>
                </div>

                <div className="director-cta-buttons">
                  <Link href="/doctors" className="btn btn-primary btn-sm">
                    <Users size={16} />
                    <span>Meet 39+ Doctors</span>
                  </Link>
                  <a href={`tel:${HOSPITAL_INFO.contacts.emergencyMobileRaw}`} className="btn btn-secondary btn-sm">
                    <PhoneCall size={16} />
                    <span>24×7 Emergency</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Heritage Section */}
      <section className="section section-bg-muted" id="vision-heritage">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: '820px', margin: '0 auto 40px' }}>
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>
              <Sparkles size={14} />
              <span>Our Vision &amp; Heritage</span>
            </span>
            <h2 className="heading-lg">विश्वसनीय चिकित्सा, आधुनिक तकनीक व स्थानीय सुलभता</h2>
            <p className="subheading" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#334155' }}>
              महाजन हॉस्पिटल की स्थापना इस विचार के साथ की गई थी कि धार और आसपास के ग्रामीण अंचल के किसी भी परिवार को गंभीर बीमारी, सर्जरी अथवा जांच के लिए बड़े शहरों में भटकना न पड़े।
            </p>
            <p style={{ fontSize: '0.98rem', color: '#64748b', marginTop: '10px', lineHeight: '1.6' }}>
              आज 31,000 वर्गफीट में फैले इस 100-बिस्तरों वाले आधुनिक अस्पताल में 39 से अधिक समर्पित विशेषज्ञ व इंदौर के सुपर-स्पेशलिस्ट विज़िटिंग डॉक्टर्स अपनी नियमित सेवाएं दे रहे हैं।
            </p>
          </div>

          <div className="vision-pillars-grid">
            <div className="vision-pillar-card card">
              <div className="vision-icon-box vision-icon-teal">
                <ShieldCheck size={28} />
              </div>
              <div className="vision-card-body">
                <span className="vision-tag">National Standards</span>
                <h3 className="heading-sm">NABH Entry-Level Certified</h3>
                <p className="vision-card-desc">
                  रोगी सुरक्षा, संक्रमण नियंत्रण एवं गुणवत्तापूर्ण उपचार के राष्ट्रीय मानकों पर खरा। निरंतर उच्च गुणवत्तापूर्ण क्लिनिकल प्रोटोकॉल का पालन।
                </p>
              </div>
            </div>

            <div className="vision-pillar-card card">
              <div className="vision-icon-box vision-icon-blue">
                <Award size={28} />
              </div>
              <div className="vision-card-body">
                <span className="vision-tag">Universal Care</span>
                <h3 className="heading-sm">आयुष्मान भारत सहभागिता</h3>
                <p className="vision-card-desc">
                  पात्र गरीब व मध्यमवर्गीय परिवारों को ₹5 लाख तक का पूर्णतः निशुल्क कैशलेस इलाज। बिना किसी आर्थिक बाधा के सभी को उच्च स्तरीय चिकित्सा उपलब्ध कराना हमारा संकल्प है।
                </p>
              </div>
            </div>

            <div className="vision-pillar-card card">
              <div className="vision-icon-box vision-icon-amber">
                <Building2 size={28} />
              </div>
              <div className="vision-card-body">
                <span className="vision-tag">All-in-One Campus</span>
                <h3 className="heading-sm">एक ही छत के नीचे संपूर्ण सुविधाएं</h3>
                <p className="vision-card-desc">
                  ओपीडी, 1.5T MRI, Multi-Slice CT Scan, 24×7 आईसीयू, ब्लड सेंटर, एनआईसीयू व 24 घंटे फार्मेसी की त्वरित उपलब्धता।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 31,000 Sq. Ft. Dual-Campus Infrastructure (Block A & Block B) */}
      <section className="section section-bg-muted" id="campus-infrastructure">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>
              <Building2 size={14} />
              <span>Campus Architecture</span>
            </span>
            <h2 className="heading-lg">31,000 वर्गफीट डुअल-ब्लॉक परिसर (Dual-Block Campus)</h2>
            <p className="subheading">
              रोगी सुविधा एवं संक्रमण मुक्त वातावरण हेतु अस्पताल को दो सुनियोजित ब्लॉक्स में विभाजित किया गया है।
            </p>
          </div>

          <div className="campus-grid">
            {campusBlocks.map((blk) => (
              <div key={blk.id} className="campus-block-card card">
                <div className="block-card-header">
                  <Building2 size={26} className="text-teal" />
                  <div>
                    <h3 className="heading-sm" style={{ color: '#0b1e33' }}>{blk.name}</h3>
                    <span className="block-sub">{blk.nameEn}</span>
                  </div>
                </div>
                <p className="block-desc">{blk.desc}</p>
                <div className="block-features-grid">
                  {blk.features.map((feat, fIdx) => (
                    <div key={fIdx} className="block-feat-item">
                      <CheckCircle2 size={16} className="text-teal" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detailed Clinical Facilities Breakdown */}
      <section className="section" id="clinical-facilities">
        <div className="container">
          <div className="section-header flex-between flex-wrap gap-4">
            <div>
              <span className="badge badge-teal" style={{ marginBottom: '8px' }}>
                <Activity size={14} />
                <span>Clinical Facilities &amp; Technology</span>
              </span>
              <h2 className="heading-lg">अस्पताल सुविधाएं एवं तकनीक (Clinical Facilities)</h2>
              <p className="subheading" style={{ marginTop: '4px' }}>
                24 घंटे क्रिटिकल केयर, एडवांस इमेजिंग, ब्लड बैंक एवं अत्याधुनिक ऑपरेशन थिएटर्स।
              </p>
            </div>
            <div className="facility-filter-chips">
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'all' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('all')}
              >
                All 6 Facilities
              </button>
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'blockA' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('blockA')}
              >
                Block A (Diagnostics &amp; OPD)
              </button>
              <button
                type="button"
                className={`filter-chip ${selectedBlock === 'blockB' ? 'chip-active' : ''}`}
                onClick={() => setSelectedBlock('blockB')}
              >
                Block B (ICU, OT &amp; Wards)
              </button>
            </div>
          </div>

          <div className="facilities-detailed-grid">
            {FACILITIES_DATA.map((fac) => {
              // Map icon based on facility id
              let FacIcon = Activity;
              if (fac.id === 'icu-critical-care') FacIcon = Activity;
              if (fac.id === 'nicu-neonatal') FacIcon = Bed;
              if (fac.id === 'blood-center') FacIcon = Droplet;
              if (fac.id === 'ct-mri-diagnostics') FacIcon = Radio;
              if (fac.id === 'operation-theatre') FacIcon = Activity;
              if (fac.id === 'inpatient-wards') FacIcon = Bed;

              return (
                <div key={fac.id} className="facility-detail-card card">
                  <div className="fac-card-top">
                    <div className="fac-number-pill">{fac.number}</div>
                    <div className="fac-icon-circle">
                      <FacIcon size={24} className="text-teal" />
                    </div>
                    <div>
                      <h3 className="fac-title-hi">{fac.titleHindi}</h3>
                      <span className="fac-title-en">{fac.titleEnglish}</span>
                    </div>
                  </div>

                  <p className="fac-card-desc">{fac.descriptionHindi}</p>

                  <div className="fac-features-list">
                    {fac.features.map((feat, idx) => (
                      <div key={idx} className="fac-feat-row">
                        <CheckCircle2 size={16} className="text-teal flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="fac-card-footer">
                    {fac.contactNumber ? (
                      <a href={`tel:${fac.contactNumber.replace(/[^0-9]/g, '')}`} className="btn btn-secondary btn-sm">
                        <PhoneCall size={14} />
                        <span>{fac.contactLabel || 'Enquiry'}: {fac.contactNumber}</span>
                      </a>
                    ) : (
                      <Link href="/contact" className="btn btn-secondary btn-sm">
                        <span>Contact Desk</span>
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Hospital Journey & Milestones */}
      <section className="section section-bg-muted">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge badge-teal" style={{ marginBottom: '10px' }}>Journey of Trust</span>
            <h2 className="heading-lg">हमारी विकास यात्रा (Milestones of Care)</h2>
            <p className="subheading">
              एक समर्पित सर्जन के संकल्प से 100-बिस्तरों वाले आधुनिक मल्टीस्पेशलिटी अस्पताल तक की यात्रा।
            </p>
          </div>

          <div className="milestones-timeline">
            {milestones.map((ms, idx) => (
              <div key={idx} className="milestone-card card">
                <div className="ms-year">{ms.year}</div>
                <h3 className="heading-sm" style={{ color: '#0b1e33', marginBottom: '8px' }}>{ms.title}</h3>
                <p className="ms-desc">{ms.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom Action Strip */}
      <section className="section">
        <div className="container">
          <div className="about-cta-card card">
            <div>
              <span className="badge badge-amber" style={{ marginBottom: '8px' }}>24×7 Emergency &amp; OPD</span>
              <h2 className="heading-md" style={{ color: '#0b1e33' }}>
                विश्वसनीय स्वास्थ्य परामर्श अथवा जांच हेतु संपर्क करें
              </h2>
              <p style={{ color: '#475569', marginTop: '6px', fontSize: '0.95rem' }}>
                सोमवार से शनिवार नियमित ओपीडी • 24 घंटे इमरजेंसी, सीटी स्कैन, एमआरआई एवं ब्लड सेंटर खुला है।
              </p>
            </div>
            <div className="about-cta-btns">
              <a
                href={`tel:${HOSPITAL_INFO.contacts.landline1Raw}`}
                className="btn btn-primary"
              >
                <PhoneCall size={18} />
                <span>Call OPD: 07292 - 232900</span>
              </a>
              <Link href="/doctors" className="btn btn-secondary">
                <Users size={18} />
                <span>View 39+ Doctors</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Banner */
        .about-hero-banner {
          background: linear-gradient(135deg, rgba(11, 30, 51, 0.90) 0%, rgba(7, 19, 33, 0.84) 50%, rgba(3, 105, 161, 0.76) 100%), url('/images/hosted/Mahaan01.jpg-1-scaled.jpeg') center 30% / cover no-repeat;
          color: #ffffff;
          padding: 68px 0 56px;
          position: relative;
        }

        .banner-content {
          max-width: 800px;
        }

        .banner-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          margin: 12px 0 10px;
          line-height: 1.2;
          font-family: var(--font-hindi);
        }

        .banner-desc {
          font-size: 1.05rem;
          color: #bae6fd;
          line-height: 1.6;
        }

        /* Executive Director Section */
        .section-director {
          background: radial-gradient(circle at 10% 15%, rgba(2, 132, 199, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 85%, rgba(13, 148, 136, 0.05) 0%, transparent 50%), #f8fafc;
          padding: 64px 0 54px;
          position: relative;
        }

        .director-executive-header {
          margin-bottom: 36px;
        }

        .executive-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(2, 132, 199, 0.08);
          border: 1px solid rgba(2, 132, 199, 0.22);
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #0284c7;
          margin-bottom: 12px;
        }

        .executive-main-title {
          font-size: clamp(1.85rem, 3.2vw, 2.4rem);
          font-weight: 800;
          color: #0b1e33;
          line-height: 1.25;
          margin-bottom: 10px;
          font-family: var(--font-hindi);
        }

        .executive-sub-title {
          font-size: 1.05rem;
          color: #475569;
          max-width: 780px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .director-premium-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 44px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 42px;
          box-shadow: 0 20px 50px -10px rgba(15, 23, 42, 0.08);
          position: relative;
          overflow: hidden;
        }

        .director-ambient-glow {
          position: absolute;
          top: -120px;
          right: -120px;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .director-portrait-side {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .director-frame-outer {
          padding: 4px;
          border-radius: 20px;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 40%, #0b1e33 100%);
          box-shadow: 0 16px 36px rgba(11, 30, 51, 0.16);
          transition: transform 0.3s ease;
        }

        .director-frame-outer:hover {
          transform: translateY(-2px);
        }

        .director-frame-inner {
          position: relative;
          border-radius: 17px;
          overflow: hidden;
          background: #0b1e33;
        }

        .director-portrait-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .director-status-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(11, 30, 51, 0.86);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f8fafc;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pulsing-emerald-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseEmerald 2s infinite;
        }

        @keyframes pulseEmerald {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }

        .director-banner-ribbon {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          background: rgba(11, 30, 51, 0.90);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #bae6fd;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
        }

        .director-identity-box {
          text-align: center;
        }

        .director-name-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .director-name-hi {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0b1e33;
          font-family: var(--font-hindi);
        }

        .director-designation-badge {
          display: inline-block;
          font-size: 0.76rem;
          font-weight: 800;
          color: #0284c7;
          background: #e0f2fe;
          padding: 2px 10px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .director-qualifications {
          font-size: 0.86rem;
          color: #64748b;
          font-weight: 600;
          margin: 6px 0;
        }

        .director-experience-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0369a1;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .director-stats-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .stat-trio-card {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 12px 8px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-trio-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .stat-trio-val {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0284c7;
          line-height: 1.2;
        }

        .stat-trio-lbl {
          font-size: 0.68rem;
          font-weight: 700;
          color: #64748b;
          margin-top: 2px;
          text-transform: uppercase;
        }

        /* Director Content Side */
        .director-content-side {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .director-grand-quote {
          position: relative;
          background: linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%);
          border: 1px solid #bae6fd;
          border-left: 5px solid #0284c7;
          border-radius: 16px;
          padding: 24px 26px;
          overflow: hidden;
        }

        .quote-mark-watermark {
          position: absolute;
          right: 14px;
          bottom: -22px;
          font-size: 6.5rem;
          line-height: 1;
          font-family: Georgia, serif;
          color: rgba(2, 132, 199, 0.08);
          pointer-events: none;
          user-select: none;
        }

        .quote-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .quote-body-hindi {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.65;
          font-style: italic;
          margin-bottom: 8px;
          font-family: var(--font-hindi);
        }

        .quote-body-en {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
          font-style: italic;
          margin-bottom: 12px;
        }

        .quote-byline {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .byline-line {
          height: 2px;
          width: 28px;
          background: #0284c7;
        }

        .byline-author {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0b1e33;
        }

        /* 3 Story Pillars */
        .director-story-pillars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .story-pillar-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .story-pillar-item:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
          border-color: #cbd5e1;
        }

        .pillar-num-badge {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #e0f2fe;
          color: #0284c7;
          font-size: 0.88rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-body {
          flex-grow: 1;
        }

        .pillar-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0b1e33;
          margin-bottom: 4px;
        }

        .pillar-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        /* Footer Row & Sign-off */
        .director-footer-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          flex-wrap: wrap;
        }

        .director-signature-card {
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 12px;
          padding: 8px 16px;
        }

        .sig-dr-name {
          font-size: 1rem;
          font-weight: 800;
          color: #0b1e33;
          font-family: Georgia, serif;
          letter-spacing: 0.02em;
        }

        .sig-dr-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #0284c7;
          text-transform: uppercase;
        }

        .sig-dr-org {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 600;
        }

        .director-cta-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        /* Vision Pillars Grid */
        .vision-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .vision-pillar-card {
          padding: 30px 26px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          border-radius: 16px;
        }

        .vision-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
        }

        .vision-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .vision-icon-teal {
          background: #e0f2fe;
          color: #0284c7;
        }

        .vision-icon-blue {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .vision-icon-amber {
          background: #fef3c7;
          color: #d97706;
        }

        .vision-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #64748b;
          margin-bottom: 6px;
          display: block;
        }

        .vision-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .vision-card-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-top: 10px;
        }

        /* Campus Architecture Grid */
        .campus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .campus-block-card {
          padding: 28px;
        }

        .block-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .block-sub {
          font-size: 0.8rem;
          color: #64748b;
          font-weight: 600;
        }

        .block-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .block-features-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .block-feat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.86rem;
          color: #334155;
          font-weight: 600;
        }

        /* Facilities Detailed Grid */
        .facilities-detailed-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 20px;
        }

        .facility-detail-card {
          padding: 26px;
          display: flex;
          flex-direction: column;
        }

        .fac-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
          position: relative;
        }

        .fac-number-pill {
          position: absolute;
          right: 0;
          top: 0;
          font-size: 0.8rem;
          font-weight: 800;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .fac-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fac-title-hi {
          font-size: 1.12rem;
          font-weight: 800;
          color: #0b1e33;
          font-family: var(--font-hindi);
          margin-bottom: 2px;
        }

        .fac-title-en {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 600;
          display: block;
        }

        .fac-card-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 16px;
        }

        .fac-features-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .fac-feat-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.84rem;
          color: #334155;
          line-height: 1.4;
        }

        .fac-card-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .facility-filter-chips {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-chip {
          padding: 6px 14px;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-chip:hover {
          border-color: #0284c7;
          color: #0284c7;
        }

        .chip-active {
          background: #0284c7 !important;
          color: #ffffff !important;
          border-color: #0284c7 !important;
        }

        /* Milestones Timeline */
        .milestones-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .milestone-card {
          padding: 24px;
        }

        .ms-year {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0284c7;
          margin-bottom: 8px;
        }

        .ms-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        /* Bottom Action Strip */
        .about-cta-card {
          padding: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          background: linear-gradient(135deg, #f0f7fc 0%, #ffffff 100%);
          flex-wrap: wrap;
        }

        .about-cta-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .director-premium-card {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 32px 24px;
          }
          .director-portrait-side {
            max-width: 440px;
            margin: 0 auto;
            width: 100%;
          }
          .vision-pillars-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .campus-grid {
            grid-template-columns: 1fr;
          }
          .facilities-detailed-grid {
            grid-template-columns: 1fr;
          }
          .milestones-timeline {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .director-premium-card {
            padding: 24px 16px;
          }
          .director-stats-trio {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }
          .stat-trio-val {
            font-size: 1.05rem;
          }
          .stat-trio-lbl {
            font-size: 0.62rem;
          }
          .director-grand-quote {
            padding: 18px 16px;
          }
          .quote-body-hindi {
            font-size: 1rem;
          }
          .director-footer-row {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .director-signature-card {
            text-align: center;
          }
          .director-cta-buttons {
            flex-direction: column;
          }
          .director-cta-buttons .btn {
            width: 100%;
            justify-content: center;
          }
          .milestones-timeline {
            grid-template-columns: 1fr;
          }
          .about-cta-card {
            padding: 24px 18px;
            flex-direction: column;
            align-items: flex-start;
          }
          .about-cta-btns {
            width: 100%;
            flex-direction: column;
          }
          .about-cta-btns .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
