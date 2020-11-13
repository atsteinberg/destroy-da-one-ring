const postOne = (ctx) => {
  const { payload } = ctx.request.body;
  if (payload) {
    ctx.body = { payload }
  }
} ;

module.exports = {
  postOne
}
