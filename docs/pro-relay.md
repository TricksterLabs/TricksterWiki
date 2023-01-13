---
title: Pro Relay
# description: Trickster Team
---

# Pro Relay

---

## Purpose

The purpose of **Pro Relay** is to decrease transaction propagation times.


## Transaction Trip on Cardano

How the lottery works:

- **John** sends a transaction to a **Marry's** Cardano Relay Node Submit API in Germany.
- **Marry's** node receives the transaction and stores it in temporary memory, it is number 277 in the queue.
- **Smith's** node in Belgium asks Marry for any extra transactions it might not have in the queue.
- **Marry's** node sends the missing transactions to **Smith's** node.
- **Smith's** node receives the missing transactions. In his memory, John is now number 295 in the queue.
- **Frank's** node in USA asks **Smith's** node for any missing transactions.
- **Smith's** node is compliant and sends the transactions to **Frank's** node.
- **Frank's** node receives the missing transactions. In his memory, John is now number 725 in the queue.
- ... about every 20 seconds, a validator node is elected pseudo-randomly to create a block of data with transactions.
- If Germany wins, John will have his transaction validated because he was further down in the queue.
- If USA wins, John will have to wait a bit more for his transaction to be validated, because he is further up in the queue in that location.

## Premium Solution

We will be hosting a scalable API with custom endpoints. This feature is available by spending **$TRICK** tokens. Once we receive your transaction, we submit it to all the submit-api endpoints in the world, ensuring your transaction gets propagated as fast as possible. This is the fastest way possible to ensure you get that most desired mint or whatever your scope may be for it's usage. This will be available on all blockchains but it matters more on Cardano since it doesn't have a transaction processing auction system like Ethereum.

---