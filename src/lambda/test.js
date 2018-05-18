/* eslint-disable func-names, space-before-function-paren */

exports.handler = function(event, context, callback) {
  const data = true

  if (data) {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        title: 'test',
        message: 'success',
      }),
    })
  }

  return callback({
    statusCode: 500,
    body: JSON.stringify({
      title: 'test',
      message: 'failure',
    }),
  })
}
