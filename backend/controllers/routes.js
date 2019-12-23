exports.getData = (req, res, next) => {
  res.status(200).json({
    message: 'Here\'s the response!'
  })
}
