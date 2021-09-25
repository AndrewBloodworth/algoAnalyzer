const router = require("express").Router();
// const { Message, Space, Contract } = require("../db");

module.exports = router;

// GET /api/spaces
// router.get("/:spaceId", async (req, res, next) => {
//   try {
//     const { spaceId } = req.params;
//     // const space = await Space.findByPk(spaceId, {
//     //   include: [
//     //     {
//     //       model: Message,
//     //       include: [Contract],
//     //     },
//     //   ],
//     // });

//     res.send(space);
//   } catch (err) {
//     next(err);
//   }
// });

// // POST /api/messages
// router.post("/:spaceId/messages", async (req, res, next) => {
//   // We don't have proper users yet (we'll get there soon, though!).
//   // Instead, we'll findOrCreate an author by name, for simplicity.
//   // Of course, you wouldn't want to do this in a real chat app!
//   try {
//     // const { spaceId } = req.params;
//     // const message = await Message.create(req.body, {
//     //   returning: true,
//     //   include: [Contract],
//     // });

//     // const space = await Space.findByPk(spaceId);
//     // await space.addMessage(message);

//     // await message.addContracts([]);
//     res.send(message);
//   } catch (err) {
//     next(err);
//   }
// });

// // PUT /api/messages
// router.put("/:messageId", async (req, res, next) => {
//   try {
//     const messageId = req.params.messageId;
//     const message = await Message.findByPk(messageId);
//     await message.update(req.body);
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });

// // DELETE /api/messages
// router.delete("/:messageId", async (req, res, next) => {
//   try {
//     const id = req.params.messageId;
//     await Message.destroy({ where: { id } });
//     res.status(204).end();
//   } catch (err) {
//     next(err);
//   }
// });
