const router = require("express").Router();
// const {
//   Transaction,
//   Brokerage,
//   Agent,
//   Property,
//   Client,
//   Contract,
//   Space,
//   Message,
// } = require("../db");

// router.get("/", async (req, res, next) => {
//   try {
//     //const { page } = req.query;
//     res.send(
//       await Transaction.findAll({
//         include: [
//           Property,
//           Space,
//           {
//             model: Agent,
//             include: [Brokerage, Client, Contract],
//           },
//         ],
//       })
//     );
//   } catch (e) {
//     next(e);
//   }
// });

// router.get("/:transactionId", async (req, res, next) => {
//   try {
//     const { transactionId } = req.params;
//     const transaction = await Transaction.findByPk(transactionId, {
//       include: [
//         Property,
//         {
//           model: Space,
//           include: [Message],
//         },
//         {
//           model: Agent,
//           include: [Brokerage, Client, Contract],
//         },
//       ],
//     });
//     res.send(transaction);
//   } catch (e) {
//     next(e);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const transaction = req.body;
//     const newTransaction = await Transaction.create(transaction);
//     res.send(
//       await Transaction.findByPk(newTransaction.id, { include: Brokerage })
//     );
//   } catch (e) {
//     next(e);
//   }
// });

// router.put("/:transactionId", async (req, res, next) => {
//   try {
//     const { transactionId } = req.params;
//     const transaction = await Transaction.findByPk(transactionId);
//     await transaction.update(req.body);
//     res.send(await Transaction.findByPk(transactionId, { include: Brokerage }));
//   } catch (e) {
//     next(e);
//   }
// });

// router.put("/:transactionId/:brokerageId", async (req, res, next) => {
//   try {
//     const { transactionId, brokerageId } = req.params;
//     const transaction = await Transaction.findByPk(transactionId);
//     await transaction.removeBrokerage(brokerageId);
//     const updatedTransaction = await Transaction.findByPk(transactionId, {
//       include: Brokerage,
//     });
//     res.send(updatedTransaction);
//   } catch (e) {
//     next(e);
//   }
// });

// router.delete("/:transactionId", async (req, res, next) => {
//   try {
//     const { transactionId } = req.params;
//     const transaction = await Transaction.findByPk(transactionId);
//     await transaction.destroy();
//     res.sendStatus(204);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
