function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inline Lucide-style SVG icons as React components */

function Icon({
  name,
  size = 20,
  className = '',
  style = {}
}) {
  const paths = {
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    }),
    shield: /*#__PURE__*/React.createElement("path", {
      d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    }),
    book: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    globe: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })),
    'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12.83a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
    }),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22,6 12,13 2,6"
    })),
    'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 5 19 12 12 19"
    })),
    'external-link': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "15 3 21 3 21 9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "14",
      x2: "21",
      y2: "3"
    })),
    check: /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }),
    'check-circle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01"
    })),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "16",
      y1: "2",
      x2: "16",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8",
      y1: "2",
      x2: "8",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "10",
      x2: "21",
      y2: "10"
    })),
    activity: /*#__PURE__*/React.createElement("polyline", {
      points: "22 12 18 12 15 21 9 3 6 12 2 12"
    }),
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "2",
      y: "2",
      width: "20",
      height: "20",
      rx: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      y1: "6.5",
      x2: "17.51",
      y2: "6.5"
    })),
    twitter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M4 4l16 16"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M20 4L4 20"
    })),
    youtube: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.54A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
    }), /*#__PURE__*/React.createElement("polygon", {
      points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
    })),
    tiktok: /*#__PURE__*/React.createElement("path", {
      d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
    }),
    line: /*#__PURE__*/React.createElement("path", {
      d: "M12 3C7 3 3 6.4 3 10.6c0 2.7 1.7 5 4.3 6.4-.1.4-.7 2.5-.8 2.9 0 0 0 .2.1.3.1.1.2.1.3 0 .3-.1 3.4-2.2 3.9-2.5.4 0 .8.1 1.2.1 5 0 9-3.4 9-7.6S17 3 12 3z"
    }),
    menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "21",
      y2: "18"
    })),
    'chevron-right': /*#__PURE__*/React.createElement("polyline", {
      points: "9 18 15 12 9 6"
    }),
    donate: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21a9 9 0 1 0-18 0"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true"
  }, paths[name] || null);
}
window.Icon = Icon;
function Header({
  lang,
  setLang,
  navigate,
  page,
  onAppt
}) {
  const t = DATA[lang];
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  React.useEffect(() => {
    setMenuOpen(false);
  }, [page]);
  const navLinks = [{
    key: 'home',
    label: t.nav.home
  }, {
    key: 'about',
    label: t.nav.about
  }, {
    key: 'services',
    label: t.nav.services
  }, {
    key: 'articles',
    label: t.nav.articles
  }, {
    key: 'support',
    label: t.nav.support
  }, {
    key: 'contact',
    label: t.nav.contact
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: `site-header${scrolled ? ' scrolled' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-header__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "site-header__brand",
    onClick: e => {
      e.preventDefault();
      navigate('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../project/assets/swing-logo-high.png",
    alt: "SWING"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-header__brand-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "site-header__brand-name"
  }, "SWING"), /*#__PURE__*/React.createElement("span", {
    className: "site-header__brand-sub"
  }, lang === 'en' ? 'Service Workers in Group' : 'มูลนิธิเพื่อนพนักงานบริการ'))), /*#__PURE__*/React.createElement("nav", {
    className: "site-header__nav",
    "aria-label": "Main navigation"
  }, navLinks.map(({
    key,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: `#${key}`,
    className: page === key ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      navigate(key);
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "site-header__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lang-toggle",
    role: "group",
    "aria-label": "Language"
  }, /*#__PURE__*/React.createElement("button", {
    className: lang === 'th' ? 'active' : '',
    onClick: () => setLang('th'),
    "aria-pressed": lang === 'th'
  }, "TH"), /*#__PURE__*/React.createElement("button", {
    className: lang === 'en' ? 'active' : '',
    onClick: () => setLang('en'),
    "aria-pressed": lang === 'en'
  }, "EN")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--sm",
    onClick: onAppt
  }, t.nav.appt), /*#__PURE__*/React.createElement("button", {
    className: `hamburger${menuOpen ? ' open' : ''}`,
    onClick: () => setMenuOpen(o => !o),
    "aria-label": "Toggle menu",
    "aria-expanded": menuOpen
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))))), /*#__PURE__*/React.createElement("nav", {
    className: `mobile-nav${menuOpen ? ' open' : ''}`,
    "aria-label": "Mobile navigation"
  }, navLinks.map(({
    key,
    label
  }) => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: `#${key}`,
    className: page === key ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      navigate(key);
    }
  }, label)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    style: {
      marginTop: 12,
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => {
      setMenuOpen(false);
      onAppt();
    }
  }, t.nav.appt)));
}
window.Header = Header;
function Footer({
  lang,
  navigate
}) {
  const t = DATA[lang].footer;
  const nav = DATA[lang].nav;
  const socials = [{
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/SWINGThailandTH/'
  }, {
    name: 'Instagram',
    icon: 'instagram',
    href: '#'
  }, {
    name: 'X / Twitter',
    icon: 'twitter',
    href: '#'
  }, {
    name: 'YouTube',
    icon: 'youtube',
    href: '#'
  }, {
    name: 'TikTok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@swingthailand'
  }, {
    name: 'LINE',
    icon: 'line',
    href: '#'
  }];
  const pages = ['home', 'about', 'services', 'articles', 'support', 'contact'];
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "site-footer__inner"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../project/assets/swing-logo-high.png",
    alt: "SWING"
  }), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__tagline"
  }, t.tagline), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__addr"
  }, /*#__PURE__*/React.createElement("strong", null, t.name), t.addr, '\n\n', t.tel), /*#__PURE__*/React.createElement("div", {
    className: "footer-social",
    style: {
      marginTop: 20
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    title: s.name,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, t.quick_links), /*#__PURE__*/React.createElement("nav", {
    className: "footer-nav"
  }, pages.map(key => /*#__PURE__*/React.createElement("a", {
    key: key,
    href: `#${key}`,
    onClick: e => {
      e.preventDefault();
      navigate(key);
    }
  }, nav[key])))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, lang === 'en' ? 'Follow us' : 'ติดตามเรา'), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__addr"
  }, lang === 'en' ? 'Stay up to date with clinic hours, events, and advocacy updates on our channels.' : 'ติดตามช่องทางของเราเพื่อรับข่าวสารคลินิก กิจกรรม และการรณรงค์'), /*#__PURE__*/React.createElement("div", {
    className: "footer-social",
    style: {
      marginTop: 16
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    title: s.name,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-newsletter"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "footer-email"
  }, t.newsletter_label), /*#__PURE__*/React.createElement("div", {
    className: "footer-newsletter__input"
  }, /*#__PURE__*/React.createElement("input", {
    id: "footer-email",
    type: "email",
    placeholder: t.newsletter_placeholder,
    "aria-label": t.newsletter_label
  }), /*#__PURE__*/React.createElement("button", {
    type: "button"
  }, t.newsletter_cta)), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__addr"
  }, lang === 'en' ? 'One short email per month. No spam, ever.' : 'อีเมลสั้นๆ เดือนละครั้ง ไม่มีสแปม')))), /*#__PURE__*/React.createElement("div", {
    className: "site-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, t.copyright), /*#__PURE__*/React.createElement("span", null, lang === 'en' ? 'Total visitors: 486,915' : 'ผู้เข้าชมทั้งหมด: 486,915')));
}
window.Footer = Footer;
/* Shared primitive components used across pages */

function Wave({
  src,
  flip = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `wave${flip ? ' wave--flipv' : ''}`
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    "aria-hidden": "true"
  }));
}
function SectionHeader({
  eyebrow,
  title,
  lede,
  dark = false
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "section__title"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "section__lede"
  }, lede));
}
function PageHero({
  eyebrow,
  title,
  lede
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "page-hero"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "page-hero__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "page-hero__title"
  }, title), lede && /*#__PURE__*/React.createElement("p", {
    className: "page-hero__lede"
  }, lede));
}
function ServiceCard({
  item
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "service-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "service-card__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "service-card__title"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "service-card__desc"
  }, item.desc));
}
function ArticleCard({
  item,
  lang,
  onClick
}) {
  const chipColors = ['chip--pink', 'chip--purple', 'chip--outline'];
  return /*#__PURE__*/React.createElement("button", {
    className: "article-card",
    onClick: () => onClick(item)
  }, /*#__PURE__*/React.createElement("div", {
    className: "article-card__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: "",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "article-card__title"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "article-card__excerpt"
  }, item.excerpt)), /*#__PURE__*/React.createElement("div", {
    className: "article-card__meta"
  }, item.tag.map((tg, i) => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: `chip ${chipColors[i % chipColors.length]}`
  }, tg)), /*#__PURE__*/React.createElement("span", {
    className: "article-card__date"
  }, item.date)));
}
function LocationCard({
  loc
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "location-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "location-card__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "location-card__name"
  }, loc.name), /*#__PURE__*/React.createElement("div", {
    className: "location-card__addr"
  }, loc.addr), loc.tel && /*#__PURE__*/React.createElement("div", {
    className: "location-card__detail"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, loc.tel, loc.tel_clinic ? `\n${loc.tel_clinic}` : '')), /*#__PURE__*/React.createElement("div", {
    className: "location-card__detail"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), /*#__PURE__*/React.createElement("span", null, loc.hours)), /*#__PURE__*/React.createElement("a", {
    href: loc.map_link,
    className: "location-card__map",
    target: "_blank",
    rel: "noopener noreferrer"
  }, loc.name.includes('Map') ? 'View' : loc.map_link.includes('love2test') ? 'View on Love2Test' : 'View on Google Maps', /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 13
  })));
}
function CtaBand({
  lang,
  navigate,
  onAppt
}) {
  const isEn = lang === 'en';
  return /*#__PURE__*/React.createElement("div", {
    className: "cta-band"
  }, /*#__PURE__*/React.createElement("h2", null, isEn ? 'Ready to take care of your health?' : 'พร้อมดูแลสุขภาพของคุณแล้วหรือยัง?'), /*#__PURE__*/React.createElement("p", null, isEn ? 'All services are confidential. Walk-ins welcome. Our clinics are here for you.' : 'บริการทุกอย่างเป็นความลับ รับ Walk-in ยินดีต้อนรับทุกท่าน คลินิกของเราพร้อมให้บริการ'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--secondary btn--lg",
    onClick: onAppt
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  }), DATA[lang].nav.appt), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--outline btn--lg",
    onClick: () => navigate('contact')
  }, DATA[lang].nav.contact)));
}
window.Wave = Wave;
window.SectionHeader = SectionHeader;
window.PageHero = PageHero;
window.ServiceCard = ServiceCard;
window.ArticleCard = ArticleCard;
window.LocationCard = LocationCard;
window.CtaBand = CtaBand;
function AppointmentModal({
  lang,
  onClose
}) {
  const t = DATA[lang].modal_appt;
  const svcs = DATA[lang].services.items.map(s => s.title);
  const locs = DATA[lang].locations.map(l => l.name);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    service: svcs[0],
    location: locs[0],
    date: '',
    note: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  function submit(e) {
    e.preventDefault();
    setDone(true);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": t.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  })), done ? /*#__PURE__*/React.createElement("div", {
    className: "modal-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-success__check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 36
  })), /*#__PURE__*/React.createElement("h2", null, lang === 'en' ? 'Thank you' : 'ขอบคุณ'), /*#__PURE__*/React.createElement("p", {
    className: "modal__lede"
  }, t.success), /*#__PURE__*/React.createElement("p", {
    className: "modal-success__sub"
  }, t.success_sub), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    style: {
      marginTop: 20
    },
    onClick: onClose
  }, lang === 'en' ? 'Done' : 'ปิด')) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("h2", null, t.title), /*#__PURE__*/React.createElement("p", {
    className: "modal__lede"
  }, t.lede), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-name"
  }, t.name), /*#__PURE__*/React.createElement("input", {
    id: "appt-name",
    value: form.name,
    onChange: set('name'),
    required: true,
    autoComplete: "name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-phone"
  }, t.phone), /*#__PURE__*/React.createElement("input", {
    id: "appt-phone",
    value: form.phone,
    onChange: set('phone'),
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-service"
  }, t.service), /*#__PURE__*/React.createElement("select", {
    id: "appt-service",
    value: form.service,
    onChange: set('service')
  }, svcs.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-location"
  }, t.location), /*#__PURE__*/React.createElement("select", {
    id: "appt-location",
    value: form.location,
    onChange: set('location')
  }, locs.map(l => /*#__PURE__*/React.createElement("option", {
    key: l,
    value: l
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-date"
  }, t.date), /*#__PURE__*/React.createElement("input", {
    id: "appt-date",
    type: "date",
    value: form.date,
    onChange: set('date'),
    required: true,
    min: new Date().toISOString().split('T')[0]
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "appt-note"
  }, t.note), /*#__PURE__*/React.createElement("textarea", {
    id: "appt-note",
    value: form.note,
    onChange: set('note'),
    rows: 3,
    style: {
      minHeight: 72
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--primary btn--lg",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  }), t.submit))));
}
function ArticleModal({
  lang,
  article,
  onClose
}) {
  if (!article) return null;
  const chipColors = ['chip--pink', 'chip--purple', 'chip--outline'];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-scrim",
    onClick: onClose,
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: 600
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 20,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: 999,
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: article.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, article.tag.map((tg, i) => /*#__PURE__*/React.createElement("span", {
    key: tg,
    className: `chip ${chipColors[i % chipColors.length]}`
  }, tg))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 20,
      lineHeight: 1.3,
      marginBottom: 0
    }
  }, article.title))), /*#__PURE__*/React.createElement("p", {
    className: "modal__lede",
    style: {
      marginBottom: 16
    }
  }, article.excerpt), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--fg-1)',
      marginBottom: 20
    }
  }, article.body), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      background: 'var(--paper-2)',
      borderRadius: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--fg-3)',
      marginBottom: 20
    }
  }, lang === 'en' ? 'Full article available on swingthailand.org — this is a representative excerpt.' : 'บทความฉบับเต็มอยู่ที่ swingthailand.org — นี่เป็นตัวอย่างบางส่วน'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--outline",
    onClick: onClose
  }, lang === 'en' ? 'Back' : 'กลับ'), /*#__PURE__*/React.createElement("a", {
    href: "https://www.swingthailand.org/en",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn--ghost",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, lang === 'en' ? 'Visit SWING website' : 'เยี่ยมชมเว็บไซต์ SWING', /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 14
  })))));
}
window.AppointmentModal = AppointmentModal;
window.ArticleModal = ArticleModal;
function Home({
  lang,
  navigate,
  onAppt,
  onArticle
}) {
  const t = DATA[lang];
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "hero__logo",
    src: "../project/assets/swing-logo-high.png",
    alt: "SWING Foundation"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow"
  }, t.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, t.hero.title), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, t.hero.lede), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--lg",
    onClick: onAppt
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 18
  }), t.hero.cta_appt), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--outline btn--lg",
    onClick: () => navigate('about')
  }, t.hero.cta_about, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-12.png"
  }), /*#__PURE__*/React.createElement("div", {
    className: "stats-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stats-bar__inner"
  }, t.stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-item__value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "stat-item__label"
  }, s.label))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-56.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--purple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner section__inner--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, t.mission.eyebrow), /*#__PURE__*/React.createElement("div", {
    className: "mission__quote-wrap"
  }, /*#__PURE__*/React.createElement("blockquote", {
    className: "mission__quote"
  }, t.mission.quote), /*#__PURE__*/React.createElement("div", {
    className: "mission__attribution"
  }, t.mission.attribution)))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-11.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: t.programmes.eyebrow,
    title: t.programmes.title,
    lede: t.programmes.lede
  }), /*#__PURE__*/React.createElement("div", {
    className: "pillars"
  }, t.programmes.items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pillar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar__icon-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pillar__title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pillar__desc"
  }, p.desc)), /*#__PURE__*/React.createElement("button", {
    className: "pillar__link btn btn--ghost",
    onClick: () => navigate(p.link)
  }, lang === 'en' ? 'Learn more' : 'เรียนรู้เพิ่มเติม', /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-57.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: t.services.eyebrow,
    title: t.services.title,
    lede: t.services.lede
  }), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, t.services.items.slice(0, 6).map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    item: s
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    onClick: () => navigate('services')
  }, lang === 'en' ? 'All services & locations' : 'บริการและสาขาทั้งหมด', /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-12.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: t.articles.eyebrow,
    title: t.articles.title,
    lede: t.articles.lede
  }), /*#__PURE__*/React.createElement("div", {
    className: "articles-grid"
  }, t.articles.items.slice(0, 3).map((a, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: i,
    item: a,
    lang: lang,
    onClick: onArticle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--outline",
    onClick: () => navigate('articles')
  }, t.articles.all, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    navigate: navigate,
    onAppt: onAppt
  }));
}
window.Home = Home;
function About({
  lang,
  navigate,
  onAppt
}) {
  const t = DATA[lang];
  const a = t.about;
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: a.eyebrow,
    title: a.title,
    lede: a.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, a.history_title), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'Twenty years, one mission.' : 'ยี่สิบปี หนึ่งพันธกิจ'), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, a.timeline.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-item__year"
  }, item.year), /*#__PURE__*/React.createElement("div", {
    className: "timeline-item__text"
  }, item.event)))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-56.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, a.values_title), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'Principles that guide everything we do' : 'หลักการที่นำทางทุกสิ่งที่เราทำ'), /*#__PURE__*/React.createElement("div", {
    className: "values-grid"
  }, a.values.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "value-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "value-card__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: v.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "value-card__title"
  }, v.title), /*#__PURE__*/React.createElement("div", {
    className: "value-card__desc"
  }, v.desc))))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-11.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--purple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, t.programmes.eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 12
    }
  }, t.programmes.title), /*#__PURE__*/React.createElement("p", {
    className: "section__lede"
  }, t.programmes.lede), /*#__PURE__*/React.createElement("div", {
    className: "pillars",
    style: {
      marginTop: 0
    }
  }, t.programmes.items.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "pillar",
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pillar__icon-wrap",
    style: {
      background: 'rgba(255,0,153,0.18)',
      color: '#FFB8D9'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pillar__title",
    style: {
      color: 'white'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "pillar__desc",
    style: {
      color: 'rgba(255,255,255,0.75)'
    }
  }, p.desc)), /*#__PURE__*/React.createElement("button", {
    className: "pillar__link",
    style: {
      color: '#FFB8D9'
    },
    onClick: () => navigate(p.link)
  }, lang === 'en' ? 'Learn more' : 'เรียนรู้เพิ่มเติม', /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-12.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner section__inner--narrow",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, a.partners_title), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      fontSize: 'clamp(24px,3vw,36px)',
      marginBottom: 36
    }
  }, lang === 'en' ? 'We work with organisations that share our values.' : 'เราทำงานร่วมกับองค์กรที่มีคุณค่าเดียวกัน'), /*#__PURE__*/React.createElement("div", {
    className: "partners-strip"
  }, a.partners.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "partner-chip"
  }, p))))), /*#__PURE__*/React.createElement("section", {
    className: "section section--sm section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, ['../project/assets/photo-clinic.jpg', '../project/assets/photo-rights.jpg', '../project/assets/ed4.webp', '../project/assets/hr3.webp'].map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1',
      borderRadius: 16,
      overflow: 'hidden',
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--fg-3)',
      textAlign: 'center',
      marginTop: 14
    }
  }, lang === 'en' ? 'All photography is community-sourced — real clinics, real outreach, real people.' : 'ภาพถ่ายทั้งหมดมาจากชุมชน — คลินิกจริง การออกหน่วยจริง คนจริง'))), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    navigate: navigate,
    onAppt: onAppt
  }));
}
window.About = About;
function Services({
  lang,
  navigate,
  onAppt
}) {
  const t = DATA[lang];
  const s = t.services;
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: s.eyebrow,
    title: lang === 'en' ? 'Comprehensive care, no conditions.' : 'การดูแลอย่างครอบคลุม ไม่มีเงื่อนไข',
    lede: s.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, lang === 'en' ? 'Our services' : 'บริการของเรา'), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "services-grid"
  }, s.items.map((item, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    item: item
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--swing-purple-deep)',
      padding: '32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'rgba(255,0,153,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--swing-pink)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'white',
      marginBottom: 4
    }
  }, lang === 'en' ? 'Certified by the Department of Medical Sciences' : 'ได้รับการรับรองจากกรมวิทยาศาสตร์การแพทย์'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.65)'
    }
  }, lang === 'en' ? 'Ministry of Public Health, Thailand · All services meet national health standards' : 'กระทรวงสาธารณสุข ประเทศไทย · บริการทั้งหมดเป็นไปตามมาตรฐานสาธารณสุขแห่งชาติ'))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-56.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner section__inner--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, lang === 'en' ? 'What to expect' : 'คุณจะได้รับอะไร'), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'A visit built around you.' : 'การเข้ารับบริการที่ออกแบบมาเพื่อคุณ'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 20
    }
  }, (lang === 'en' ? [{
    icon: 'shield',
    title: 'Confidential',
    desc: 'Every visit is private. We never share your information without your consent.'
  }, {
    icon: 'activity',
    title: 'Same-day results',
    desc: 'Most tests return results the same day. No waiting weeks for peace of mind.'
  }, {
    icon: 'users',
    title: 'Community-led staff',
    desc: 'Our team includes people with lived experience. You will not be judged.'
  }, {
    icon: 'heart',
    title: 'Free or low-cost',
    desc: 'Services are free or low-cost. We never turn anyone away for inability to pay.'
  }] : [{
    icon: 'shield',
    title: 'เป็นความลับ',
    desc: 'ทุกการเข้ารับบริการเป็นส่วนตัว เราไม่แชร์ข้อมูลของคุณโดยไม่ได้รับความยินยอม'
  }, {
    icon: 'activity',
    title: 'ผลตรวจในวันเดียว',
    desc: 'การตรวจส่วนใหญ่รายงานผลในวันเดียวกัน ไม่ต้องรอเป็นสัปดาห์'
  }, {
    icon: 'users',
    title: 'เจ้าหน้าที่จากชุมชน',
    desc: 'ทีมของเรารวมถึงคนที่มีประสบการณ์ตรง คุณจะไม่ถูกตัดสิน'
  }, {
    icon: 'heart',
    title: 'ฟรีหรือราคาต่ำ',
    desc: 'บริการฟรีหรือราคาต่ำ เราไม่เคยปฏิเสธใครเพราะไม่สามารถจ่ายได้'
  }]).map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "value-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "value-card__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "value-card__title"
  }, item.title), /*#__PURE__*/React.createElement("div", {
    className: "value-card__desc"
  }, item.desc))))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-11.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, lang === 'en' ? 'Clinic locations' : 'สาขาคลินิก'), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'Three clinics, one community.' : 'สามสาขา หนึ่งชุมชน'), /*#__PURE__*/React.createElement("div", {
    className: "locations-grid"
  }, t.locations.map((loc, i) => /*#__PURE__*/React.createElement(LocationCard, {
    key: i,
    loc: loc
  }))))), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    navigate: navigate,
    onAppt: onAppt
  }));
}
window.Services = Services;
function Articles({
  lang,
  navigate,
  onArticle
}) {
  const t = DATA[lang];
  const a = t.articles;
  const allTags = lang === 'en' ? ['All', 'Article', 'News', 'Health', 'Rights', 'Film'] : ['ทั้งหมด', 'บทความ', 'ข่าว', 'สุขภาพ', 'สิทธิ', 'ภาพยนตร์'];
  const [activeTag, setActiveTag] = React.useState(allTags[0]);
  const filtered = activeTag === allTags[0] ? a.items : a.items.filter(item => item.tag.includes(activeTag));
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: a.eyebrow,
    title: a.title,
    lede: a.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-bar",
    role: "group",
    "aria-label": lang === 'en' ? 'Filter by category' : 'กรองตามหมวดหมู่'
  }, allTags.map(tag => /*#__PURE__*/React.createElement("button", {
    key: tag,
    className: `filter-btn${activeTag === tag ? ' active' : ''}`,
    onClick: () => setActiveTag(tag),
    "aria-pressed": activeTag === tag
  }, tag))), filtered.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "articles-grid"
  }, filtered.map((item, i) => /*#__PURE__*/React.createElement(ArticleCard, {
    key: item.slug,
    item: item,
    lang: lang,
    onClick: onArticle
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 0',
      color: 'var(--fg-3)',
      fontFamily: 'var(--font-body)'
    }
  }, lang === 'en' ? 'No articles in this category yet.' : 'ยังไม่มีบทความในหมวดหมู่นี้'), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--outline",
    style: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  }, lang === 'en' ? 'Load more articles' : 'โหลดบทความเพิ่มเติม'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--fg-3)',
      marginTop: 10
    }
  }, lang === 'en' ? 'More articles available at swingthailand.org' : 'บทความเพิ่มเติมที่ swingthailand.org')))), /*#__PURE__*/React.createElement("section", {
    className: "section section--muted section--sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner section__inner--narrow",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, lang === 'en' ? 'Stay informed' : 'รับข่าวสาร'), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      fontSize: 'clamp(26px,3vw,38px)',
      marginBottom: 16
    }
  }, lang === 'en' ? 'Never miss an update.' : 'ไม่พลาดข่าวสาร'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'var(--fg-2)',
      marginBottom: 28,
      lineHeight: 1.6
    }
  }, lang === 'en' ? 'One short email per month with our latest news, clinic updates, and advocacy wins.' : 'อีเมลสั้นๆ เดือนละครั้ง พร้อมข่าวล่าสุด อัปเดตคลินิก และชัยชนะในการรณรงค์'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      maxWidth: 440,
      margin: '0 auto',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: DATA[lang].footer.newsletter_placeholder,
    style: {
      flex: 1,
      padding: '14px 18px',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      outline: 'none',
      background: 'white'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    style: {
      borderRadius: 0,
      padding: '14px 22px'
    }
  }, DATA[lang].footer.newsletter_cta)))));
}
window.Articles = Articles;
function Support({
  lang,
  navigate,
  onAppt
}) {
  const t = DATA[lang];
  const s = t.support;
  const amounts = ['500 ฿', '1,500 ฿', '5,000 ฿', '20,000 ฿'];
  const [selected, setSelected] = React.useState('1,500 ฿');
  const [custom, setCustom] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [volunteered, setVolunteered] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: s.eyebrow,
    title: s.title,
    lede: s.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, s.impact_title), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'Every baht goes directly to programmes.' : 'ทุกบาทไปยังโครงการโดยตรง'), /*#__PURE__*/React.createElement("div", {
    className: "impact-grid"
  }, s.impact.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "impact-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "impact-item__amount"
  }, item.amount), /*#__PURE__*/React.createElement("div", {
    className: "impact-item__desc"
  }, item.desc)))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-56.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--purple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, s.donate_title), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      color: 'white',
      marginBottom: 48
    }
  }, lang === 'en' ? 'Choose your impact.' : 'เลือกผลกระทบของคุณ'), /*#__PURE__*/React.createElement("div", {
    className: "donate-box"
  }, /*#__PURE__*/React.createElement("h3", null, s.donate_title), /*#__PURE__*/React.createElement("p", {
    className: "donate-box__lede"
  }, s.donate_lede), submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--swing-pink-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'var(--swing-pink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--swing-purple-deep)',
      marginBottom: 8
    }
  }, lang === 'en' ? 'Thank you for your support!' : 'ขอบคุณสำหรับการสนับสนุนของคุณ!'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg-2)',
      marginBottom: 20,
      lineHeight: 1.6
    }
  }, lang === 'en' ? 'Please use the bank details below to complete your transfer. Every contribution makes a difference.' : 'กรุณาใช้รายละเอียดธนาคารด้านล่างเพื่อทำการโอนให้เสร็จสมบูรณ์ ทุกการสนับสนุนสร้างความแตกต่าง'), /*#__PURE__*/React.createElement("div", {
    className: "bank-box"
  }, s.bank)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "donate-amounts"
  }, amounts.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: `donate-btn${selected === a ? ' selected' : ''}`,
    onClick: () => {
      setSelected(a);
      setCustom('');
    }
  }, a)), /*#__PURE__*/React.createElement("input", {
    type: "number",
    placeholder: lang === 'en' ? 'Other amount' : 'จำนวนอื่น',
    value: custom,
    onChange: e => {
      setCustom(e.target.value);
      setSelected('');
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      padding: '10px 16px',
      borderRadius: 999,
      border: '1.5px solid var(--ink-100)',
      background: 'white',
      color: 'var(--fg-1)',
      outline: 'none',
      width: 130
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--lg",
    style: {
      width: '100%',
      justifyContent: 'center',
      marginBottom: 20
    },
    onClick: () => setSubmitted(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 18
  }), lang === 'en' ? `Donate ${selected || (custom ? custom + ' ฿' : '')}` : `บริจาค ${selected || (custom ? custom + ' ฿' : '')}`)), !submitted && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--swing-purple-deep)',
      marginBottom: 8
    }
  }, s.bank_title), /*#__PURE__*/React.createElement("div", {
    className: "bank-box"
  }, s.bank))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-11.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--swing-pink)',
      marginBottom: 14
    }
  }, s.volunteer_title), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.5vw, 42px)',
      color: 'var(--swing-purple-deep)',
      lineHeight: 1.1,
      marginBottom: 20,
      textWrap: 'balance'
    }
  }, lang === 'en' ? 'Skills, time, resources — it all matters.' : 'ทักษะ เวลา ทรัพยากร — ทุกอย่างมีความหมาย'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--fg-2)',
      marginBottom: 24
    }
  }, s.volunteer_lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, (lang === 'en' ? ['Medical professionals', 'Translators', 'Legal advocates', 'Graphic designers', 'IT support', 'Educators'] : ['บุคลากรทางการแพทย์', 'นักแปล', 'ทนายความ', 'นักออกแบบ', 'ฝ่าย IT', 'นักการศึกษา']).map((role, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "chip chip--purple"
  }, role)))), /*#__PURE__*/React.createElement("div", null, volunteered ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 32,
      background: 'white',
      borderRadius: 20,
      border: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--swing-pink-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'var(--swing-pink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--swing-purple-deep)',
      marginBottom: 8
    }
  }, lang === 'en' ? 'Message received!' : 'ได้รับข้อความแล้ว!'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg-2)',
      lineHeight: 1.6
    }
  }, lang === 'en' ? 'Our team will be in touch within 3 working days.' : 'ทีมของเราจะติดต่อกลับภายใน 3 วันทำการ')) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'white',
      borderRadius: 20,
      padding: 28,
      border: '1px solid var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, DATA[lang].contact.form_name), /*#__PURE__*/React.createElement("input", {
    placeholder: lang === 'en' ? 'Your name' : 'ชื่อของคุณ'
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, DATA[lang].contact.form_email), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: DATA[lang].footer.newsletter_placeholder
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, lang === 'en' ? 'How can you help?' : 'คุณสามารถช่วยได้อย่างไร?'), /*#__PURE__*/React.createElement("textarea", {
    placeholder: lang === 'en' ? 'Tell us about your skills and availability…' : 'บอกเราเกี่ยวกับทักษะและความพร้อมของคุณ…'
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary",
    style: {
      width: '100%',
      justifyContent: 'center'
    },
    onClick: () => setVolunteered(true)
  }, lang === 'en' ? 'Get in touch' : 'ติดต่อเรา', /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  }))))))), /*#__PURE__*/React.createElement(CtaBand, {
    lang: lang,
    navigate: navigate,
    onAppt: onAppt
  }));
}
window.Support = Support;
function Contact({
  lang,
  navigate,
  onAppt
}) {
  const t = DATA[lang];
  const c = t.contact;
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const socials = [{
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/SWINGThailandTH/'
  }, {
    name: 'Instagram',
    icon: 'instagram',
    href: '#'
  }, {
    name: 'X',
    icon: 'twitter',
    href: '#'
  }, {
    name: 'YouTube',
    icon: 'youtube',
    href: '#'
  }, {
    name: 'TikTok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@swingthailand'
  }, {
    name: 'LINE',
    icon: 'line',
    href: '#'
  }];
  return /*#__PURE__*/React.createElement("main", {
    className: "page-enter"
  }, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: c.eyebrow,
    title: c.title,
    lede: c.lede
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__eyebrow"
  }, lang === 'en' ? 'Find us' : 'ค้นหาเรา'), /*#__PURE__*/React.createElement("h2", {
    className: "section__title",
    style: {
      marginBottom: 48
    }
  }, lang === 'en' ? 'Three locations across Thailand.' : 'สามสาขาทั่วประเทศไทย'), /*#__PURE__*/React.createElement("div", {
    className: "locations-grid"
  }, t.locations.map((loc, i) => /*#__PURE__*/React.createElement(LocationCard, {
    key: i,
    loc: loc
  }))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-56.png"
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--purple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#FFB8D9',
      marginBottom: 12
    }
  }, lang === 'en' ? 'Send a message' : 'ส่งข้อความ'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px,3vw,36px)',
      color: 'white',
      marginBottom: 28,
      lineHeight: 1.15
    }
  }, lang === 'en' ? 'We read every message.' : 'เราอ่านทุกข้อความ'), submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderRadius: 20,
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(255,0,153,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      color: 'var(--swing-pink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'white',
      marginBottom: 8
    }
  }, lang === 'en' ? 'Message sent!' : 'ส่งข้อความแล้ว!'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.6
    }
  }, lang === 'en' ? 'We\'ll get back to you within 2 working days.' : 'เราจะตอบกลับภายใน 2 วันทำการ')) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 20,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'rgba(255,255,255,0.75)'
    }
  }, c.form_name), /*#__PURE__*/React.createElement("input", {
    value: form.name,
    onChange: set('name'),
    required: true,
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(255,255,255,0.1)',
      color: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'rgba(255,255,255,0.75)'
    }
  }, c.form_email), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: set('email'),
    required: true,
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(255,255,255,0.1)',
      color: 'white'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'rgba(255,255,255,0.75)'
    }
  }, c.form_subject), /*#__PURE__*/React.createElement("input", {
    value: form.subject,
    onChange: set('subject'),
    required: true,
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(255,255,255,0.1)',
      color: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'rgba(255,255,255,0.75)'
    }
  }, c.form_msg), /*#__PURE__*/React.createElement("textarea", {
    value: form.message,
    onChange: set('message'),
    required: true,
    style: {
      background: 'rgba(255,255,255,0.08)',
      borderColor: 'rgba(255,255,255,0.1)',
      color: 'white',
      minHeight: 120
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--primary btn--lg",
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  }), c.form_send))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#FFB8D9',
      marginBottom: 12
    }
  }, lang === 'en' ? 'Direct contact' : 'ติดต่อโดยตรง'), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(24px,3vw,36px)',
      color: 'white',
      marginBottom: 32,
      lineHeight: 1.15
    }
  }, lang === 'en' ? 'Prefer to call or message?' : 'ต้องการโทรหรือส่งข้อความ?'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(255,0,153,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--swing-pink)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'white',
      marginBottom: 4
    }
  }, lang === 'en' ? 'Phone' : 'โทรศัพท์'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.7,
      whiteSpace: 'pre-line'
    }
  }, t.footer.tel))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'rgba(255,0,153,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--swing-pink)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 14,
      color: 'white',
      marginBottom: 4
    }
  }, lang === 'en' ? 'Address' : 'ที่อยู่'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.7,
      whiteSpace: 'pre-line'
    }
  }, t.footer.addr))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: '#06C755',
      border: 'none',
      borderRadius: 14,
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      cursor: 'pointer',
      transition: 'all var(--t-fast)'
    },
    onMouseEnter: e => e.currentTarget.style.background = '#05a847',
    onMouseLeave: e => e.currentTarget.style.background = '#06C755'
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 18,
      color: 'white'
    }
  }, "L"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'white'
    }
  }, c.line_cta), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.8)'
    }
  }, c.line_id)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 14
    }
  }, c.social_title), /*#__PURE__*/React.createElement("div", {
    className: "footer-social"
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    title: s.name,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15
  })))))))), /*#__PURE__*/React.createElement(Wave, {
    src: "../project/assets/asset-12.png",
    flip: true
  }), /*#__PURE__*/React.createElement("section", {
    className: "section section--sm section--muted"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section__inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-100)',
      borderRadius: 20,
      height: 260,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 12,
      border: '1.5px dashed var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 32,
    style: {
      color: 'var(--ink-300)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--fg-3)',
      textAlign: 'center',
      lineHeight: 1.5
    }
  }, lang === 'en' ? 'Interactive map — Silom64 Building, Bangkok\n(Integrate Google Maps or Mapbox for production)' : 'แผนที่แบบโต้ตอบ — อาคารสีลม 64 กรุงเทพฯ\n(เชื่อมต่อ Google Maps หรือ Mapbox สำหรับเวอร์ชัน production)'), /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com/?q=SWING+Foundation+Bangkok",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn--outline btn--sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "external-link",
    size: 14
  }), lang === 'en' ? 'Open in Google Maps' : 'เปิดใน Google Maps')))));
}
window.Contact = Contact;
function App() {
  const [lang, setLang] = React.useState('th');
  const [page, setPage] = React.useState('home');
  const [showAppt, setShowAppt] = React.useState(false);
  const [article, setArticle] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  function navigate(target) {
    setPage(target);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    window.history.pushState(null, '', `#${target}`);
  }
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '') || 'home';
    const valid = ['home', 'about', 'services', 'articles', 'support', 'contact'];
    setPage(valid.includes(hash) ? hash : 'home');
  }, []);
  React.useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const valid = ['home', 'about', 'services', 'articles', 'support', 'contact'];
      setPage(valid.includes(hash) ? hash : 'home');
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);
  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'SWING Foundation Thailand — Value, Dignity, Equality' : 'มูลนิธิเพื่อนพนักงานบริการ SWING — คุณค่า ศักดิ์ศรี ความเท่าเทียม';
  }, [lang]);
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);
  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }
  function onLineClick() {
    showToast(lang === 'en' ? 'Opening LINE — add @swingthailand' : 'กำลังเปิด LINE — เพิ่ม @swingthailand');
  }
  const pageProps = {
    lang,
    navigate,
    onAppt: () => setShowAppt(true)
  };
  const pages = {
    home: /*#__PURE__*/React.createElement(Home, _extends({}, pageProps, {
      onArticle: setArticle
    })),
    about: /*#__PURE__*/React.createElement(About, pageProps),
    services: /*#__PURE__*/React.createElement(Services, pageProps),
    articles: /*#__PURE__*/React.createElement(Articles, _extends({}, pageProps, {
      onArticle: setArticle
    })),
    support: /*#__PURE__*/React.createElement(Support, pageProps),
    contact: /*#__PURE__*/React.createElement(Contact, pageProps)
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang,
    navigate: navigate,
    page: page,
    onAppt: () => setShowAppt(true)
  }), pages[page] || pages.home, /*#__PURE__*/React.createElement(Footer, {
    lang: lang,
    navigate: navigate
  }), /*#__PURE__*/React.createElement("button", {
    className: "line-widget",
    onClick: onLineClick,
    "aria-label": "Chat on LINE @swingthailand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "line-widget__dot"
  }, "L"), /*#__PURE__*/React.createElement("span", null, "@swingthailand")), showAppt && /*#__PURE__*/React.createElement(AppointmentModal, {
    lang: lang,
    onClose: () => setShowAppt(false)
  }), article && /*#__PURE__*/React.createElement(ArticleModal, {
    lang: lang,
    article: article,
    onClose: () => setArticle(null)
  }), toast && /*#__PURE__*/React.createElement("div", {
    className: "toast",
    role: "status"
  }, toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));