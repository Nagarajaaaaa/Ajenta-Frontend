
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/hero",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/hero"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/quote"
  },
  {
    "renderMode": 2,
    "route": "/logos"
  },
  {
    "renderMode": 2,
    "route": "/about_page"
  },
  {
    "renderMode": 2,
    "route": "/contact_page"
  },
  {
    "renderMode": 2,
    "route": "/about_website_development"
  },
  {
    "renderMode": 2,
    "route": "/about_digital_markating"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5145, hash: '9381aad800f812b851849bccf1ebd6dbf7ff5968b1946cec71e385751908f5f0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1055, hash: 'f148ee99f7e6ee44e1d1ee86cadf1b62ef3650b1c390fb349753816f81d7036b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25266, hash: '4a442d11d68f9d65ed92537c617747871915b8063872c3e02234c1762a285701', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'hero/index.html': {size: 29417, hash: '96daa5c35c118800c9800db07cc005a177ee8ca8a3d350bc37b9da6d1583429e', text: () => import('./assets-chunks/hero_index_html.mjs').then(m => m.default)},
    'contact_page/index.html': {size: 28371, hash: 'ee72afea2ce0a79cc341351bac9a6c0d6d1680e6663a95effe28eba67e588ec0', text: () => import('./assets-chunks/contact_page_index_html.mjs').then(m => m.default)},
    'about_page/index.html': {size: 30559, hash: '5cf8c5a46166feb326c927f686627fde089bedb11342636dc357ecb2db0e18e9', text: () => import('./assets-chunks/about_page_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 26613, hash: '5d988c42740fd70becb2868e25f8b91f241da07125660d8f0bf7c04d3a4b1d72', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'quote/index.html': {size: 24992, hash: '15941282cb908ed51b73468750c689dfb2bd192457647e9a4a1499c18a3a84f9', text: () => import('./assets-chunks/quote_index_html.mjs').then(m => m.default)},
    'about_website_development/index.html': {size: 31294, hash: '4fdc48cb200856ca4fac1a883e8f69d428762f4eac3e06f4e4d2315db1b38752', text: () => import('./assets-chunks/about_website_development_index_html.mjs').then(m => m.default)},
    'about_digital_markating/index.html': {size: 33698, hash: 'eb8db0256cedbdcd2107bd1a2983bbee081a8562ffd1c0d14e03c04617935665', text: () => import('./assets-chunks/about_digital_markating_index_html.mjs').then(m => m.default)},
    'logos/index.html': {size: 25309, hash: '8cd597d188db79606108aebf8cb5b8a716d82d5a6326d908670a8a86700256c9', text: () => import('./assets-chunks/logos_index_html.mjs').then(m => m.default)},
    'styles-MNTBAQWR.css': {size: 316609, hash: 'y9aOWEhRgE4', text: () => import('./assets-chunks/styles-MNTBAQWR_css.mjs').then(m => m.default)}
  },
};
