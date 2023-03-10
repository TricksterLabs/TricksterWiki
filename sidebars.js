/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  docsSidebar: [
    'intro',
    'links',
    'team',
    'legal',
    'art',
    {
      type: 'category',
      label: 'Lore',
      collapsed: true,
      items: [
        'lore/chapter1',
        'lore/chapter2',
        'lore/chapter3',
        'lore/chapter4',
        'lore/chapter5',
        'lore/chapter6',
        'lore/chapter7',
        'lore/chapter8',
        'lore/chapter9',
        'lore/chapter10',
      ],
    },
    'stellar-crystals',
    'tokenomics',
    'loyalty',
    'rarity',
    'staking',
    'community',
    'governance',
    'pro-relay',
    'data-analytics',
    {
      type: 'category',
      label: 'Wallet Manager',
      collapsed: true,
      items: [
        'wallet-manager/purpose',
        'wallet-manager/architecture',
        'wallet-manager/features',
        {
          type: 'category',
          label: 'Official Plugins',
          collapsed: true,
          items: [
            'wallet-manager/official-plugins/browser',
            'wallet-manager/official-plugins/market',
            'wallet-manager/official-plugins/swap',
            'wallet-manager/official-plugins/trade',
            'wallet-manager/official-plugins/message',
            'wallet-manager/official-plugins/image-generator',
            'wallet-manager/official-plugins/minter',
            'wallet-manager/official-plugins/market-bot',
            'wallet-manager/official-plugins/swap-bot',
          ],
        },
        'wallet-manager/community-plugins',
        {
          type: 'link',
          label: 'Github Link',
          href: 'https://github.com/TricksterLabs/TricksterWallet'
        },
      ],
    }
  ]
};

module.exports = sidebars;