import createLogger from 'vuex/dist/logger'

export const plugins = [createLogger()]
export const strict = true

export const state = () => ({
  menuItems: [
    { id: 'menu1', name: 'Home', icon: 'bx bx-home-alt', path: '/' },
    { id: 'menu2', name: 'About', icon: 'bx bxs-user', path: '/about' },
    {
      id: 'menu3',
      name: 'Portafolio',
      icon: 'bx bxs-layer',
      path: '/portafolio',
    },
    { id: 'menu4', name: 'Contact', icon: 'bx bxs-chat', path: '/contact' },
    { id: 'menu5', name: 'Blog', icon: 'bx bxs-spreadsheet', path: '/blog' },
  ],
})
