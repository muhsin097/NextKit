module.exports = {
  async index(ctx) {
    ctx.send({ status: "ok", timestamp: Date.now() });
  },
};
