const links = {
  telegramNews: 'https://t.me/true_ecosystem',
  telegramCommunity: 'https://t.me/true_community',
  twitter: 'https://twitter.com/TRUE_Ecosystem',
  facebook: '',
  discord: 'https://discord.gg/xUPvjawmUa',
  linkedin: 'https://www.linkedin.com/company/truefuture',
  bitcointalk: '',
  instagram: 'https://www.instagram.com/true_ecosystem/'
}

export default (context, inject) => {
  inject('links', links)
}
