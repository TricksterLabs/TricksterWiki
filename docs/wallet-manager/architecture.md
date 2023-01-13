---
title: Architecture
# description: Trickster Team
---

# Architecture

---

We currently have an MVP (minimum viable product) available over at [TricksterWallet](https://github.com/TricksterLabs/TricksterWallet). There will be breaking changes. Initially we will only support Cardano with more adapters in the future. (The community is free to submit pull requests)

## Tech Stack

- [NodeJS](https://nodejs.org/en/) (open-source, cross-platform JavaScript runtime environment.)
- [TypeScript](https://www.typescriptlang.org/) (compilable to JavaScript, because most of web3 is ran in the browser and would make integration with current DAPPs a breeze)
- [QuasarJS](https://quasar.dev/) (VueJS based framework to easily make user interfaces)
- [ElectronJS](https://www.electronjs.org/) (works on all operating systems)
- [Dexie.js](https://dexie.org/) (browser-based, easy to work with, persistant database)
- [TyphonJS](https://github.com/StricaHQ/typhonjs) (open-source Cardano Wallet adapter)
- [CryptoJS](https://github.com/brix/crypto-js) (industry standard encryption methods for dealing with sensitive data)

## API Stack

- [Koios.Rest](https://koios.rest/) (open-source postgresql based self-hostable API to communicate with the Cardano Blockchain)
- [OpenCNFT](https://api.opencnft.io/1/) (proprietary API for Cardano NFT data analytics, this will be later switched to our own version)

## Operating Systems

- Windows
- Linux
- MacOS

## Extra

- UI is using the main thread
- Background tasks are using a secondary thread
- Queue system in place to meet API limits
- Modular in nature to support multiple blockchain adapters and community plugins

---