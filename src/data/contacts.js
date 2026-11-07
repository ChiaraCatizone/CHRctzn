// I contatti mostrati nel footer, nell'ordine in cui compaiono.
// - id: sceglie l'icona (vedi AppFooter.vue)
// - label: il testo della pillola
// - href: il link (mailto: per l'email)
import { github, linkedin } from './cv'

export const contacts = [
  { id: 'email', label: 'Email', href: 'mailto:catizonec@gmail.com' },
  { id: 'linkedin', label: 'LinkedIn', href: linkedin },
  { id: 'github', label: 'GitHub', href: github },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/foxy_shellton/' },
  { id: 'threads', label: 'Threads', href: 'https://www.threads.com/@foxy_shellton' },
]
