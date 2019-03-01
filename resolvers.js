const user = {
  _id: '1',
  name: 'robert',
  email: 'robert@test.com',
  picture: 'randomurl.com'
}

module.exports = {
  Query: {
    me: () => user
  }
}
