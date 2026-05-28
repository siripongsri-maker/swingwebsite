/* Copy strings, both EN and TH, used across the marketing-site UI kit. */
const COPY = {
  en: {
    nav: { main: 'Main', about: 'About us', article: 'Article', donation: 'Donation', contact: 'Contact us' },
    cta: { appt: 'Make an Appointment', support: 'Support us' },
    hero: {
      eyebrow: 'Service Workers in Group Foundation',
      title: 'Value, dignity, equality — in different choices and opportunities.',
      lede: 'SWING is a Thai NGO of and for service workers, improving lives through health, education, and rights advocacy since 2004.'
    },
    mission: {
      eyebrow: 'Our Promise',
      quote: 'Service workers are human beings with potential and capability — they only lack the opportunity to show it.',
      attribution: '— SWING, since 2004'
    },
    services: {
      eyebrow: 'SWING Clinic',
      title: 'Health services for our community',
      lede: 'Our clinic is certified by the Department of Medical Sciences, Ministry of Public Health. Same-day, judgement-free, one-stop care.',
      items: [
        { title: 'HIV, syphilis & hepatitis C screening', desc: 'Comprehensive blood tests, including CD4 counts and Viral Load assessments.', img: '../../assets/asset-36.png' },
        { title: 'STI screening & referral', desc: 'Gonorrhea, chlamydia, with support accessing treatment if results are positive.', img: '../../assets/asset-35.png' },
        { title: 'PrEP & PEP', desc: 'Antiretroviral medication to prevent HIV infection — pre- and post-exposure.', img: '../../assets/asset-37.png' },
        { title: 'Hormone-level testing', desc: 'Specialised endocrine panels for transgender women.', img: '../../assets/ed2.webp' },
        { title: 'Same-Day ART', desc: 'Immediate antiretroviral therapy initiation for new HIV-positive diagnoses.', img: '../../assets/hr4.webp' },
        { title: 'Mobile outreach clinic', desc: 'Bringing testing and PrEP directly to bars, parks, and community spaces.', img: '../../assets/photo-clinic.jpg' }
      ]
    },
    articles: {
      eyebrow: 'New Update',
      title: 'Articles & news',
      lede: 'Reflections from our movement — rights, health, and dignity in Thailand.',
      items: [
        { tag: ['Article', 'News'], title: 'Decoding 3 striking lessons from the #IceRukchanok drama.', excerpt: 'When digging into someone\u2019s past becomes a costly lesson for society — class, political strategy, and human dignity.', date: '31 Dec 2025', img: '../../assets/photo-rights.jpg' },
            { tag: ['News'], title: 'SWING Thailand joins the 3rd Action Plan Workshop to advance gender equality in Thai law.', excerpt: 'Continuing the push to bring sex work under labour-law protections.', date: '8 Oct 2025', img: '../../assets/ed4.webp' },
            { tag: ['Article'], title: 'Background and context: the Gender Justice & Sexual Rights Project.', excerpt: 'A new programme supported by L\u2019initiative and Expertise France.', date: '6 Oct 2025', img: '../../assets/hr3.webp' }
      ]
    },
    footer: {
      name: 'Service Workers in Group Foundation',
      addr: 'Silom64 Building 6th Floor, Silom Road\nSuriyawong, Bangrak Bangkok 10500',
      tel: 'Tel : +66 2632 9502 (Head Office)\nTel : +66 2632 9501 (Clinic)',
      copyright: '\u00A9 2024 SWINGTHAILAND',
      visitors: 'Total visitors  486,915'
    },
    modal: {
      title: 'Make an Appointment',
      lede: 'Walk-ins welcome; bookings get same-day priority. All visits are confidential.',
      name: 'Your name (or chosen name)',
      phone: 'Phone or LINE ID',
      service: 'Service',
      date: 'Preferred date',
      submit: 'Request appointment',
      success: 'We\u2019ve received your request. SWING will reach out within one business day.'
    },
    line: '@swingthailand'
  },
  th: {
    nav: { main: 'หน้าแรก', about: 'เกี่ยวกับเรา', article: 'บทความ', donation: 'สนับสนุนเรา', contact: 'ติดต่อเรา' },
    cta: { appt: 'จองคิวตรวจกับเรา', support: 'สนับสนุนเรา' },
    hero: {
      eyebrow: 'มูลนิธิเพื่อนพนักงานบริการ',
      title: 'คุณค่า ศักดิ์ศรี ความเท่าเทียม ในทางเลือกและโอกาสที่แตกต่าง',
      lede: 'มูลนิธิเพื่อนพนักงานบริการ (SWING) องค์กรของและเพื่อพนักงานบริการ ทำงานเพื่อสุขภาพ การศึกษา และสิทธิ ตั้งแต่ พ.ศ. 2547'
    },
    mission: {
      eyebrow: 'คำมั่นของเรา',
      quote: 'พนักงานบริการคือ "มนุษย์" คนหนึ่งที่มีศักยภาพและมีความสามารถ เพียงแต่ขาดโอกาสที่จะได้แสดงออก',
      attribution: '— SWING ตั้งแต่ พ.ศ. 2547'
    },
    services: {
      eyebrow: 'คลินิก SWING',
      title: 'บริการสุขภาพเพื่อชุมชนของเรา',
      lede: 'คลินิกได้รับการรับรองโดยกรมวิทยาศาสตร์การแพทย์ กระทรวงสาธารณสุข บริการแบบ One-Stop ไม่ตัดสิน รู้ผลในวันเดียว',
      items: [
        { title: 'ตรวจ HIV ซิฟิลิส และไวรัสตับอักเสบ C', desc: 'ตรวจเลือดครอบคลุม รวมถึง CD4 และ Viral Load', img: '../../assets/asset-36.png' },
        { title: 'ตรวจคัดกรองโรคติดต่อทางเพศสัมพันธ์', desc: 'หนองใน คลามิเดีย พร้อมส่งต่อรักษาหากผลเป็นบวก', img: '../../assets/asset-35.png' },
        { title: 'PrEP และ PEP', desc: 'ยาต้านไวรัสเพื่อป้องกันการติดเชื้อ HIV ทั้งก่อนและหลังสัมผัส', img: '../../assets/asset-37.png' },
        { title: 'ตรวจระดับฮอร์โมน', desc: 'แผงตรวจเฉพาะสำหรับหญิงข้ามเพศ', img: '../../assets/ed2.webp' },
        { title: 'Same-Day ART', desc: 'เริ่มยาต้านไวรัสในวันเดียวกันเมื่อผลตรวจ HIV เป็นบวก', img: '../../assets/hr4.webp' },
        { title: 'หน่วยตรวจสุขภาพเคลื่อนที่', desc: 'ออกหน่วยถึงพื้นที่ บาร์ สวนสาธารณะ และพื้นที่ชุมชน', img: '../../assets/photo-clinic.jpg' }
      ]
    },
    articles: {
      eyebrow: 'อัปเดตล่าสุด',
      title: 'บทความและข่าวสาร',
      lede: 'เสียงสะท้อนจากขบวนการของเรา — สิทธิ สุขภาพ และศักดิ์ศรีในประเทศไทย',
      items: [
        { tag: ['บทความ', 'ข่าว'], title: 'ถอด 3 บทเรียนสะเทือนใจจากดราม่า #ไอซ์รักชนก', excerpt: 'เมื่อการขุดอดีตกลายเป็นบทเรียนราคาแพงของสังคม — ชนชั้น ยุทธศาสตร์การเมือง และศักดิ์ศรีความเป็นมนุษย์', date: '31 ธ.ค. 2568', img: '../../assets/photo-rights.jpg' },
            { tag: ['ข่าว'], title: 'SWING ร่วมเวทีพัฒนาแผนปฏิบัติ ครั้งที่ 3 เพื่อความเท่าเทียมในกฎหมายไทย', excerpt: 'เดินหน้าผลักดันให้พนักงานบริการอยู่ใต้กฎหมายแรงงาน', date: '8 ต.ค. 2568', img: '../../assets/ed4.webp' },
            { tag: ['บทความ'], title: 'ที่มาและบริบท: โครงการความยุติธรรมทางเพศและสิทธิทางเพศ', excerpt: 'โครงการใหม่ที่สนับสนุนโดย L\u2019initiative และ Expertise France', date: '6 ต.ค. 2568', img: '../../assets/hr3.webp' }
      ]
    },
    footer: {
      name: 'มูลนิธิเพื่อนพนักงานบริการ',
      addr: 'อาคารสีลม 64 ชั้น 6 ถนนสีลม แขวงสุริยวงศ์\nเขตบางรัก กรุงเทพมหานคร 10500',
      tel: 'โทรศัพท์ : 02-632-9502 (สำนักงาน)\nโทรศัพท์ : 02-632-9501 (คลินิก)',
      copyright: '\u00A9 2567 SWINGTHAILAND',
      visitors: 'ผู้เข้าชมทั้งหมด 486,915'
    },
    modal: {
      title: 'จองคิวตรวจ',
      lede: 'รับ walk-in ทุกวัน นัดล่วงหน้ารู้ผลในวันเดียว ทุกการเข้ารับบริการเป็นความลับ',
      name: 'ชื่อ (หรือชื่อที่อยากให้เราเรียก)',
      phone: 'เบอร์โทรหรือ LINE ID',
      service: 'บริการ',
      date: 'วันที่สะดวก',
      submit: 'ส่งคำขอนัด',
      success: 'รับคำขอเรียบร้อย เจ้าหน้าที่ SWING จะติดต่อกลับภายใน 1 วันทำการ'
    },
    line: '@swingthailand'
  }
};

window.COPY = COPY;
