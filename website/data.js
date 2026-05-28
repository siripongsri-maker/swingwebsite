/* ============================================================
   SWING Foundation — Bilingual site content
   EN + TH for all pages and components
   ============================================================ */

const DATA = {
  en: {
    lang: 'en',
    nav: {
      home: 'Home',
      about: 'About us',
      services: 'Services',
      articles: 'Articles',
      support: 'Support us',
      contact: 'Contact',
      appt: 'Make an Appointment',
    },

    hero: {
      eyebrow: 'Service Workers in Group Foundation',
      title: 'Value, dignity, equality — in different choices and opportunities.',
      lede: 'SWING is a Thai NGO of and for service workers, improving lives through health, education, and rights advocacy since 2004.',
      cta_appt: 'Make an Appointment',
      cta_about: 'Our Story',
    },

    stats: [
      { value: '20+', label: 'Years of service' },
      { value: '3', label: 'Clinic locations' },
      { value: '486K+', label: 'Community members reached' },
      { value: '100K+', label: 'Health services annually' },
    ],

    mission: {
      eyebrow: 'Our Promise',
      quote: 'Service workers are human beings with potential and capability — they only lack the opportunity to show it.',
      attribution: '— SWING, since 2004',
    },

    programmes: {
      eyebrow: 'What we do',
      title: 'Three pillars of support',
      lede: 'Every programme we run is designed by and for the community we serve.',
      items: [
        {
          icon: 'heart',
          title: 'Health',
          desc: 'Three certified clinics in Bangkok and Pattaya offering HIV testing, PrEP, PEP, hormone care, STI screening, and Same-Day ART — free or low-cost, no-judgment.',
          link: 'services',
        },
        {
          icon: 'book',
          title: 'Education',
          desc: 'English-language classes and non-formal education routes (kor-sor-nor) opening doors for service workers outside the formal education system.',
          link: 'about',
        },
        {
          icon: 'shield',
          title: 'Rights & Advocacy',
          desc: 'Campaigning to repeal the 1996 Prostitution Act, pushing for labour-law protections, marriage equality, and the title-prefix bill.',
          link: 'about',
        },
      ],
    },

    services: {
      eyebrow: 'SWING Clinic',
      title: 'Health services for our community',
      lede: 'Certified by the Department of Medical Sciences, Ministry of Public Health. Same-day results, one-stop care, no judgement.',
      items: [
        {
          title: 'HIV, Syphilis & Hepatitis C Screening',
          desc: 'Comprehensive blood tests including CD4 counts and Viral Load assessments. Know your status, same day.',
          img: 'assets/asset-36.png',
        },
        {
          title: 'STI Screening & Referral',
          desc: 'Gonorrhea, chlamydia, and full STI panel — with access to treatment and specialist referral if positive.',
          img: 'assets/asset-35.png',
        },
        {
          title: 'PrEP & PEP',
          desc: 'Antiretroviral medication to prevent HIV — both pre-exposure prophylaxis and emergency post-exposure.',
          img: 'assets/asset-37.png',
        },
        {
          title: 'Hormone-Level Testing',
          desc: 'Specialised endocrine panels for transgender women, supporting safe and monitored hormone therapy.',
          img: 'assets/ed2.webp',
        },
        {
          title: 'Same-Day ART',
          desc: 'Immediate antiretroviral therapy initiation on the same day as a new HIV-positive diagnosis.',
          img: 'assets/hr4.webp',
        },
        {
          title: 'Mobile Outreach Clinic',
          desc: 'Our outreach team brings testing and PrEP directly to bars, parks, and community spaces across Bangkok.',
          img: 'assets/photo-clinic.jpg',
        },
      ],
    },

    articles: {
      eyebrow: 'Latest updates',
      title: 'Articles & News',
      lede: 'Reflections from our movement — rights, health, and dignity in Thailand.',
      all: 'View all articles',
      items: [
        {
          slug: 'ice-rukchanok',
          tag: ['Article', 'Rights'],
          title: 'Decoding 3 striking lessons from the #IceRukchanok drama.',
          excerpt: 'When digging into someone\'s past becomes a costly lesson for society — class, political strategy, and human dignity in the age of viral pile-ons.',
          date: '31 Dec 2025',
          img: 'assets/photo-rights.jpg',
          body: 'The #IceRukchanok controversy sparked a national conversation about the cost of online shaming. This piece examines how the episode reflects deeper tensions around class, gender, and political participation in Thailand.',
        },
        {
          slug: 'action-plan-workshop',
          tag: ['News'],
          title: 'SWING joins the 3rd Action Plan Workshop to advance gender equality in Thai law.',
          excerpt: 'Our team joined civil society partners to push for structural reforms that bring sex work under full labour-law protections.',
          date: '8 Oct 2025',
          img: 'assets/ed4.webp',
          body: 'The workshop brought together NGO leaders, legal experts, and government representatives to review progress on Thailand\'s gender equality action plan. SWING presented evidence on the health and safety benefits of decriminalisation.',
        },
        {
          slug: 'gender-justice-project',
          tag: ['Article'],
          title: 'Background and context: the Gender Justice & Sexual Rights Project.',
          excerpt: 'A new programme supported by L\'initiative and Expertise France, addressing intersecting rights for LGBTQ+ and sex-worker communities.',
          date: '6 Oct 2025',
          img: 'assets/hr3.webp',
          body: 'The Gender Justice & Sexual Rights Project connects legal, health, and advocacy interventions to address structural barriers facing LGBTQ+ persons and sex workers in Thailand.',
        },
        {
          slug: 'prep-milestone',
          tag: ['Health', 'News'],
          title: 'SWING Clinic reaches 10,000 PrEP patients served.',
          excerpt: 'A milestone moment for HIV prevention in Thailand — and a testament to the trust the community places in our services.',
          date: '2 Sep 2025',
          img: 'assets/asset-56.png',
          body: 'Since launching PrEP services in 2016, SWING Clinic has grown to serve thousands of patients annually. Our same-day PrEP initiation protocol is now cited as a model across Southeast Asia.',
        },
        {
          slug: 'giant-swing-documentary',
          tag: ['Article', 'Film'],
          title: 'GIANT SWING: a documentary about living through COVID as a sex worker.',
          excerpt: 'Co-produced with AHF Thailand, the 2022 short film frames the lockdown years through the lives of service workers in Bangkok.',
          date: '14 Jun 2025',
          img: 'assets/hr4.webp',
          body: 'GIANT SWING follows six service workers through the COVID lockdowns — job loss, eviction, the failure of the \'5,000 baht\' relief scheme to reach them. The film has been screened at human rights festivals across Asia.',
        },
        {
          slug: 'title-prefix-bill',
          tag: ['Rights', 'News'],
          title: 'The title-prefix bill: what it means for transgender people in Thailand.',
          excerpt: 'SWING explains the คำนำหน้านาม bill and its importance for welfare access and dignity for transgender Thais.',
          date: '1 May 2025',
          img: 'assets/ed2.webp',
          body: 'The title-prefix bill would allow transgender people in Thailand to legally change the gendered prefix on their national ID. This has downstream effects on healthcare access, employment, and legal protections.',
        },
      ],
    },

    about: {
      eyebrow: 'Our Story',
      title: 'Founded by and for the community',
      lede: 'In 2004, a coalition of sex workers and rights activists came together in Bangkok. Twenty years on, we\'re still here — and still led by the people we serve.',
      history_title: 'Two decades of work',
      timeline: [
        { year: '2004', event: 'SWING founded in Bangkok by a coalition of sex workers and advocates.' },
        { year: '2007', event: 'First dedicated clinic opens at Silom — certified by the Ministry of Public Health.' },
        { year: '2012', event: 'Mobile outreach clinic launched, reaching bars and parks across Bangkok.' },
        { year: '2016', event: 'PrEP services introduced at SWING Clinic — among the first in Thailand.' },
        { year: '2019', event: 'Same-Day ART protocol adopted, minimising time between diagnosis and treatment.' },
        { year: '2020', event: 'COVID response: emergency food parcels, harm-reduction kits, and rights advocacy during lockdowns.' },
        { year: '2022', event: 'GIANT SWING documentary released, co-produced with AHF Thailand.' },
        { year: '2024', event: 'Three-clinic network (Silom, Saphankhwai, Pattaya) reaches 486,000+ community visits.' },
      ],
      values_title: 'What drives us',
      values: [
        { icon: 'heart', title: 'Community-led', desc: 'Our leadership, staff, and volunteers include current and former service workers. Decisions are made by the people most affected.' },
        { icon: 'shield', title: 'Harm reduction', desc: 'We meet people where they are. Our services are non-judgmental, low-barrier, and designed around real lives, not ideal ones.' },
        { icon: 'users', title: 'Collective advocacy', desc: 'Individual health is inseparable from structural change. We work alongside communities to challenge the laws and stigmas that cause harm.' },
        { icon: 'globe', title: 'International solidarity', desc: 'We collaborate with global partners — APCOM, AHF, Expertise France — while remaining grounded in Thailand\'s specific context.' },
      ],
      partners_title: 'Partners & supporters',
      partners: ['AHF Thailand', 'Expertise France', "L'initiative", 'APCOM', 'Department of Medical Sciences', 'Ministry of Public Health (Thailand)'],
    },

    locations: [
      {
        name: 'SWING Silom (Head Office & Clinic)',
        addr: 'Silom64 Building, 6th Floor\nSilom Road, Suriyawong, Bangrak\nBangkok 10500',
        tel: '02-632-9502',
        tel_clinic: '02-632-9501',
        hours: 'Mon–Fri 09:00–17:00\nClinic: Mon–Fri 10:00–16:00',
        map_link: 'https://maps.google.com/?q=SWING+Foundation+Bangkok',
      },
      {
        name: 'SWING Saphankhwai Clinic',
        addr: 'Near Saphankhwai BTS Station\nPhahon Yothin Road, Bangkok',
        tel: '02-632-9502',
        hours: 'Tue & Thu 11:00–17:00',
        map_link: 'https://love2test.org/en/clinic/swing-saphankhwai',
      },
      {
        name: 'SWING Pattaya Clinic',
        addr: 'Pattaya, Chonburi Province\n(Contact head office for exact address)',
        tel: '02-632-9502',
        hours: 'By appointment',
        map_link: 'https://maps.google.com/?q=SWING+Pattaya',
      },
    ],

    support: {
      eyebrow: 'Support us',
      title: 'Help us keep going',
      lede: 'Our services are free or low-cost. Funding from donors like you keeps the clinics open, the outreach vans moving, and the advocacy campaigns running.',
      impact_title: 'Your donation in action',
      impact: [
        { amount: '500 ฿', desc: 'Funds one HIV test kit for a community member who can\'t afford it.' },
        { amount: '1,500 ฿', desc: 'Covers a one-month PrEP supply for a patient who needs it most.' },
        { amount: '5,000 ฿', desc: 'Supports a full day of mobile outreach — testing, condoms, harm-reduction kits.' },
        { amount: '20,000 ฿', desc: 'Pays one month of English classes for service workers seeking new opportunities.' },
      ],
      donate_title: 'Make a donation',
      donate_lede: 'All donations go directly to programmes. SWING is a registered foundation under Thai law.',
      bank_title: 'Bank transfer',
      bank: 'Bangkok Bank · Account name: มูลนิธิเพื่อนพนักงานบริการ\nAccount number: 148-3-08983-4\nBranch: Silom Road',
      volunteer_title: 'Volunteer & partner',
      volunteer_lede: 'We welcome medical professionals, translators, legal advocates, and corporate partners. Contact us to talk about how you can help.',
    },

    contact: {
      eyebrow: 'Get in touch',
      title: 'We\'re here for you',
      lede: 'Walk-ins are always welcome at our clinics. All visits are confidential.',
      form_name: 'Your name',
      form_email: 'Email address',
      form_subject: 'Subject',
      form_msg: 'Message',
      form_send: 'Send message',
      social_title: 'Follow SWING',
      line_cta: 'Chat on LINE',
      line_id: '@swingthailand',
    },

    footer: {
      name: 'Service Workers in Group Foundation',
      th_name: 'มูลนิธิเพื่อนพนักงานบริการ',
      addr: 'Silom64 Building, 6th Floor, Silom Road\nSuriyawong, Bangrak, Bangkok 10500',
      tel: '+66 2632 9502 (Head Office)\n+66 2632 9501 (Clinic)',
      copyright: '© 2024 SWING Foundation Thailand',
      tagline: 'Value · Dignity · Equality',
      newsletter_placeholder: 'your@email.com',
      newsletter_cta: 'Subscribe',
      newsletter_label: 'Monthly newsletter',
      quick_links: 'Quick links',
    },

    modal_appt: {
      title: 'Make an Appointment',
      lede: 'Walk-ins welcome; bookings get same-day priority. All visits are confidential.',
      name: 'Your name (or chosen name)',
      phone: 'Phone or LINE ID',
      service: 'Service',
      location: 'Clinic location',
      date: 'Preferred date',
      note: 'Notes (optional)',
      submit: 'Request appointment',
      success: 'We\'ve received your request. SWING will reach out within one business day.',
      success_sub: 'All visits are 100% confidential.',
    },
  },

  th: {
    lang: 'th',
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      articles: 'บทความ',
      support: 'สนับสนุนเรา',
      contact: 'ติดต่อเรา',
      appt: 'จองคิวตรวจ',
    },

    hero: {
      eyebrow: 'มูลนิธิเพื่อนพนักงานบริการ',
      title: 'คุณค่า ศักดิ์ศรี ความเท่าเทียม ในทางเลือกและโอกาสที่แตกต่าง',
      lede: 'มูลนิธิเพื่อนพนักงานบริการ (SWING) องค์กรของและเพื่อพนักงานบริการ ทำงานด้านสุขภาพ การศึกษา และสิทธิมนุษยชน ตั้งแต่ พ.ศ. 2547',
      cta_appt: 'จองคิวตรวจกับเรา',
      cta_about: 'เรื่องราวของเรา',
    },

    stats: [
      { value: '20+', label: 'ปีแห่งการให้บริการ' },
      { value: '3', label: 'คลินิกทั่วประเทศ' },
      { value: '486K+', label: 'สมาชิกชุมชนที่ได้รับบริการ' },
      { value: '100K+', label: 'บริการสุขภาพต่อปี' },
    ],

    mission: {
      eyebrow: 'คำมั่นของเรา',
      quote: 'พนักงานบริการคือ "มนุษย์" คนหนึ่งที่มีศักยภาพและมีความสามารถ เพียงแต่ขาดโอกาสที่จะได้แสดงออก',
      attribution: '— SWING ตั้งแต่ พ.ศ. 2547',
    },

    programmes: {
      eyebrow: 'งานของเรา',
      title: 'สามเสาหลักในการสนับสนุน',
      lede: 'ทุกโครงการที่เราดำเนินการ ออกแบบโดยและเพื่อชุมชนที่เราให้บริการ',
      items: [
        {
          icon: 'heart',
          title: 'สุขภาพ',
          desc: 'คลินิกที่ได้รับการรับรอง 3 แห่งในกรุงเทพฯ และพัทยา ให้บริการตรวจ HIV, PrEP, PEP, ฮอร์โมน, คัดกรอง STI และ Same-Day ART ฟรีหรือราคาต่ำ ไม่ตัดสิน',
          link: 'services',
        },
        {
          icon: 'book',
          title: 'การศึกษา',
          desc: 'คลาสภาษาอังกฤษและเส้นทางการศึกษานอกระบบ (กศน.) เปิดประตูโอกาสให้พนักงานบริการที่ออกจากระบบการศึกษาปกติ',
          link: 'about',
        },
        {
          icon: 'shield',
          title: 'สิทธิและการสนับสนุน',
          desc: 'รณรงค์ให้ยกเลิก พ.ร.บ. ป้องกันและปราบปรามการค้าประเวณี พ.ศ. 2539 ผลักดันกฎหมายแรงงาน ความเท่าเทียมทางการสมรส และร่างกฎหมายคำนำหน้านาม',
          link: 'about',
        },
      ],
    },

    services: {
      eyebrow: 'คลินิก SWING',
      title: 'บริการสุขภาพเพื่อชุมชนของเรา',
      lede: 'ได้รับการรับรองโดยกรมวิทยาศาสตร์การแพทย์ กระทรวงสาธารณสุข บริการแบบ One-Stop รู้ผลในวันเดียว ไม่ตัดสิน',
      items: [
        {
          title: 'ตรวจ HIV ซิฟิลิส และไวรัสตับอักเสบ C',
          desc: 'ตรวจเลือดครอบคลุม รวมถึง CD4 และ Viral Load รู้ผลในวันเดียว',
          img: 'assets/asset-36.png',
        },
        {
          title: 'ตรวจคัดกรองโรคติดต่อทางเพศสัมพันธ์',
          desc: 'หนองใน คลามิเดีย และแผงตรวจ STI ครบถ้วน พร้อมส่งต่อรักษาหากผลเป็นบวก',
          img: 'assets/asset-35.png',
        },
        {
          title: 'PrEP และ PEP',
          desc: 'ยาต้านไวรัสเพื่อป้องกัน HIV ทั้งก่อนและหลังสัมผัสเชื้อ',
          img: 'assets/asset-37.png',
        },
        {
          title: 'ตรวจระดับฮอร์โมน',
          desc: 'แผงตรวจต่อมไร้ท่อเฉพาะทางสำหรับหญิงข้ามเพศ สนับสนุนการบำบัดด้วยฮอร์โมนอย่างปลอดภัย',
          img: 'assets/ed2.webp',
        },
        {
          title: 'Same-Day ART',
          desc: 'เริ่มยาต้านไวรัสในวันเดียวกับการวินิจฉัย HIV ครั้งใหม่',
          img: 'assets/hr4.webp',
        },
        {
          title: 'หน่วยตรวจสุขภาพเคลื่อนที่',
          desc: 'ทีมของเราออกหน่วยตรวจและแจก PrEP ถึงบาร์ สวนสาธารณะ และพื้นที่ชุมชนทั่วกรุงเทพฯ',
          img: 'assets/photo-clinic.jpg',
        },
      ],
    },

    articles: {
      eyebrow: 'อัปเดตล่าสุด',
      title: 'บทความและข่าวสาร',
      lede: 'เสียงสะท้อนจากขบวนการของเรา — สิทธิ สุขภาพ และศักดิ์ศรีในประเทศไทย',
      all: 'ดูบทความทั้งหมด',
      items: [
        {
          slug: 'ice-rukchanok',
          tag: ['บทความ', 'สิทธิ'],
          title: 'ถอด 3 บทเรียนสะเทือนใจจากดราม่า #ไอซ์รักชนก',
          excerpt: 'เมื่อการขุดอดีตกลายเป็นบทเรียนราคาแพงของสังคม — ชนชั้น ยุทธศาสตร์การเมือง และศักดิ์ศรีความเป็นมนุษย์',
          date: '31 ธ.ค. 2568',
          img: 'assets/photo-rights.jpg',
          body: 'ดราม่า #ไอซ์รักชนก จุดประกายบทสนทนาระดับชาติเกี่ยวกับต้นทุนของการประจาน',
        },
        {
          slug: 'action-plan-workshop',
          tag: ['ข่าว'],
          title: 'SWING ร่วมเวทีพัฒนาแผนปฏิบัติ ครั้งที่ 3 เพื่อความเท่าเทียมทางเพศในกฎหมายไทย',
          excerpt: 'ทีมของเราร่วมกับพันธมิตรภาคประชาสังคมผลักดันการปฏิรูปโครงสร้างที่นำพนักงานบริการเข้าสู่ระบบคุ้มครองแรงงาน',
          date: '8 ต.ค. 2568',
          img: 'assets/ed4.webp',
          body: 'การประชุมเชิงปฏิบัติการรวมผู้นำ NGO ผู้เชี่ยวชาญด้านกฎหมาย และตัวแทนรัฐบาล',
        },
        {
          slug: 'gender-justice-project',
          tag: ['บทความ'],
          title: 'ที่มาและบริบท: โครงการความยุติธรรมทางเพศและสิทธิทางเพศ',
          excerpt: 'โครงการใหม่ที่สนับสนุนโดย L\'initiative และ Expertise France',
          date: '6 ต.ค. 2568',
          img: 'assets/hr3.webp',
          body: 'โครงการความยุติธรรมทางเพศและสิทธิทางเพศเชื่อมโยงมาตรการด้านกฎหมาย สุขภาพ และการสนับสนุน',
        },
        {
          slug: 'prep-milestone',
          tag: ['สุขภาพ', 'ข่าว'],
          title: 'คลินิก SWING ให้บริการ PrEP ครบ 10,000 ราย',
          excerpt: 'เหตุการณ์สำคัญในการป้องกัน HIV ของประเทศไทย — และพิสูจน์ความไว้วางใจที่ชุมชนมีต่อบริการของเรา',
          date: '2 ก.ย. 2568',
          img: 'assets/asset-56.png',
          body: 'ตั้งแต่เปิดให้บริการ PrEP ในปี 2559 คลินิก SWING ขยายการให้บริการผู้ป่วยหลายพันรายต่อปี',
        },
        {
          slug: 'giant-swing-documentary',
          tag: ['บทความ', 'ภาพยนตร์'],
          title: 'GIANT SWING: สารคดีว่าด้วยการมีชีวิตอยู่ผ่าน COVID ในฐานะพนักงานบริการ',
          excerpt: 'ผลิตร่วมกับ AHF Thailand สารคดีสั้น พ.ศ. 2565 บอกเล่าช่วงล็อคดาวน์ผ่านชีวิตพนักงานบริการในกรุงเทพฯ',
          date: '14 มิ.ย. 2568',
          img: 'assets/hr4.webp',
          body: 'GIANT SWING ติดตามพนักงานบริการหกคนผ่านการล็อคดาวน์ COVID',
        },
        {
          slug: 'title-prefix-bill',
          tag: ['สิทธิ', 'ข่าว'],
          title: 'ร่างกฎหมายคำนำหน้านาม: ความหมายต่อคนข้ามเพศในประเทศไทย',
          excerpt: 'SWING อธิบายร่างกฎหมายคำนำหน้านาม (คำนำหน้านาม) และความสำคัญต่อการเข้าถึงสวัสดิการและศักดิ์ศรีของคนข้ามเพศไทย',
          date: '1 พ.ค. 2568',
          img: 'assets/ed2.webp',
          body: 'ร่างกฎหมายคำนำหน้านามจะอนุญาตให้คนข้ามเพศในประเทศไทยเปลี่ยนคำนำหน้าในบัตรประชาชนได้',
        },
      ],
    },

    about: {
      eyebrow: 'เรื่องราวของเรา',
      title: 'ก่อตั้งโดยและเพื่อชุมชน',
      lede: 'ในปี พ.ศ. 2547 กลุ่มพนักงานบริการและนักกิจกรรมด้านสิทธิมารวมตัวกันในกรุงเทพฯ ยี่สิบปีผ่านไป เรายังอยู่ที่นี่ — และยังคงนำทีมโดยคนที่เราให้บริการ',
      history_title: 'สองทศวรรษแห่งการทำงาน',
      timeline: [
        { year: '2547', event: 'SWING ก่อตั้งในกรุงเทพฯ โดยกลุ่มพนักงานบริการและนักสนับสนุน' },
        { year: '2550', event: 'คลินิกแห่งแรกเปิดที่สีลม ได้รับการรับรองจากกระทรวงสาธารณสุข' },
        { year: '2555', event: 'เปิดหน่วยตรวจสุขภาพเคลื่อนที่ ออกหน่วยทั่วกรุงเทพฯ' },
        { year: '2559', event: 'นำบริการ PrEP มาให้บริการที่คลินิก SWING — หนึ่งในแห่งแรกของประเทศไทย' },
        { year: '2562', event: 'นำโปรโตคอล Same-Day ART มาใช้ ลดเวลาระหว่างการวินิจฉัยและการรักษา' },
        { year: '2563', event: 'รับมือ COVID: แจกอาหาร ชุดลดอันตราย และสนับสนุนสิทธิในช่วงล็อคดาวน์' },
        { year: '2565', event: 'ออกฉายสารคดี GIANT SWING ร่วมผลิตกับ AHF Thailand' },
        { year: '2567', event: 'เครือข่ายสามคลินิก (สีลม สะพานควาย พัทยา) ให้บริการครบ 486,000+ ครั้ง' },
      ],
      values_title: 'สิ่งที่ขับเคลื่อนเรา',
      values: [
        { icon: 'heart', title: 'ชุมชนเป็นผู้นำ', desc: 'ผู้นำ พนักงาน และอาสาสมัครของเรา รวมถึงพนักงานบริการปัจจุบันและอดีต การตัดสินใจทำโดยผู้ที่ได้รับผลกระทบมากที่สุด' },
        { icon: 'shield', title: 'การลดอันตราย', desc: 'เราพบผู้คนในสถานที่ที่พวกเขาอยู่ บริการของเราไม่ตัดสิน มีอุปสรรคน้อย และออกแบบตามชีวิตจริง ไม่ใช่ชีวิตในอุดมคติ' },
        { icon: 'users', title: 'การสนับสนุนร่วมกัน', desc: 'สุขภาพของแต่ละคนแยกไม่ออกจากการเปลี่ยนแปลงเชิงโครงสร้าง เราทำงานร่วมกับชุมชนเพื่อท้าทายกฎหมายและตราบาปที่ก่อให้เกิดความเสียหาย' },
        { icon: 'globe', title: 'ความเป็นน้ำหนึ่งใจเดียวระหว่างประเทศ', desc: 'เราร่วมมือกับพันธมิตรระดับโลก — APCOM, AHF, Expertise France — ขณะที่ยังคงยึดมั่นในบริบทเฉพาะของประเทศไทย' },
      ],
      partners_title: 'พันธมิตรและผู้สนับสนุน',
      partners: ['AHF Thailand', 'Expertise France', "L'initiative", 'APCOM', 'กรมวิทยาศาสตร์การแพทย์', 'กระทรวงสาธารณสุข (ประเทศไทย)'],
    },

    locations: [
      {
        name: 'สำนักงานใหญ่และคลินิก SWING สีลม',
        addr: 'อาคารสีลม 64 ชั้น 6\nถนนสีลม แขวงสุริยวงศ์ เขตบางรัก\nกรุงเทพมหานคร 10500',
        tel: '02-632-9502',
        tel_clinic: '02-632-9501',
        hours: 'จ.–ศ. 09:00–17:00\nคลินิก: จ.–ศ. 10:00–16:00',
        map_link: 'https://maps.google.com/?q=SWING+Foundation+Bangkok',
      },
      {
        name: 'คลินิก SWING สะพานควาย',
        addr: 'ใกล้สถานี BTS สะพานควาย\nถนนพหลโยธิน กรุงเทพฯ',
        tel: '02-632-9502',
        hours: 'อ. และ พฤ. 11:00–17:00',
        map_link: 'https://love2test.org/en/clinic/swing-saphankhwai',
      },
      {
        name: 'คลินิก SWING พัทยา',
        addr: 'พัทยา ชลบุรี\n(ติดต่อสำนักงานใหญ่เพื่อรับที่อยู่)',
        tel: '02-632-9502',
        hours: 'นัดหมายล่วงหน้า',
        map_link: 'https://maps.google.com/?q=SWING+Pattaya',
      },
    ],

    support: {
      eyebrow: 'สนับสนุนเรา',
      title: 'ช่วยเราให้เดินหน้าต่อ',
      lede: 'บริการของเราฟรีหรือราคาต่ำ การสนับสนุนจากผู้บริจาคช่วยให้คลินิกเปิดอยู่ รถออกหน่วยเคลื่อนที่ และแคมเปญรณรงค์ดำเนินต่อไปได้',
      impact_title: 'เงินบริจาคของคุณในการปฏิบัติจริง',
      impact: [
        { amount: '500 ฿', desc: 'จัดหาชุดตรวจ HIV หนึ่งชุดสำหรับสมาชิกชุมชนที่ไม่สามารถจ่ายได้' },
        { amount: '1,500 ฿', desc: 'ครอบคลุมยา PrEP หนึ่งเดือนสำหรับผู้ที่ต้องการมากที่สุด' },
        { amount: '5,000 ฿', desc: 'สนับสนุนการออกหน่วยเคลื่อนที่หนึ่งวัน — ตรวจ ถุงยาง ชุดลดอันตราย' },
        { amount: '20,000 ฿', desc: 'จ่ายค่าคลาสภาษาอังกฤษหนึ่งเดือนสำหรับพนักงานบริการที่แสวงหาโอกาสใหม่' },
      ],
      donate_title: 'บริจาค',
      donate_lede: 'เงินบริจาคทั้งหมดไปยังโครงการโดยตรง SWING เป็นมูลนิธิที่จดทะเบียนถูกต้องตามกฎหมายไทย',
      bank_title: 'โอนเงินผ่านธนาคาร',
      bank: 'ธนาคารกรุงเทพ · ชื่อบัญชี: มูลนิธิเพื่อนพนักงานบริการ\nเลขที่บัญชี: 148-3-08983-4\nสาขา: ถนนสีลม',
      volunteer_title: 'อาสาสมัครและพันธมิตร',
      volunteer_lede: 'เรายินดีรับบุคลากรทางการแพทย์ นักแปล ทนายความ และพันธมิตรองค์กร ติดต่อเราเพื่อพูดคุยว่าคุณจะช่วยได้อย่างไร',
    },

    contact: {
      eyebrow: 'ติดต่อเรา',
      title: 'เราอยู่ที่นี่เพื่อคุณ',
      lede: 'ยินดีรับ Walk-in ทุกวันที่คลินิกของเรา ทุกการเข้ารับบริการเป็นความลับ',
      form_name: 'ชื่อของคุณ',
      form_email: 'ที่อยู่อีเมล',
      form_subject: 'หัวข้อ',
      form_msg: 'ข้อความ',
      form_send: 'ส่งข้อความ',
      social_title: 'ติดตาม SWING',
      line_cta: 'แชทบน LINE',
      line_id: '@swingthailand',
    },

    footer: {
      name: 'มูลนิธิเพื่อนพนักงานบริการ',
      th_name: 'Service Workers in Group Foundation',
      addr: 'อาคารสีลม 64 ชั้น 6 ถนนสีลม\nแขวงสุริยวงศ์ เขตบางรัก กรุงเทพฯ 10500',
      tel: '+66 2632 9502 (สำนักงาน)\n+66 2632 9501 (คลินิก)',
      copyright: '© 2567 มูลนิธิเพื่อนพนักงานบริการ',
      tagline: 'คุณค่า · ศักดิ์ศรี · ความเท่าเทียม',
      newsletter_placeholder: 'อีเมลของคุณ',
      newsletter_cta: 'สมัคร',
      newsletter_label: 'รับข่าวสารรายเดือน',
      quick_links: 'ลิงก์ด่วน',
    },

    modal_appt: {
      title: 'จองคิวตรวจ',
      lede: 'รับ walk-in ทุกวัน นัดล่วงหน้ารู้ผลในวันเดียว ทุกการเข้ารับบริการเป็นความลับ',
      name: 'ชื่อ (หรือชื่อที่อยากให้เราเรียก)',
      phone: 'เบอร์โทรหรือ LINE ID',
      service: 'บริการ',
      location: 'สาขาคลินิก',
      date: 'วันที่สะดวก',
      note: 'หมายเหตุ (ถ้ามี)',
      submit: 'ส่งคำขอนัด',
      success: 'รับคำขอเรียบร้อย เจ้าหน้าที่ SWING จะติดต่อกลับภายใน 1 วันทำการ',
      success_sub: 'การเข้ารับบริการทุกครั้งเป็นความลับ 100%',
    },
  },
};

window.DATA = DATA;
