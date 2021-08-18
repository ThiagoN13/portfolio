module.exports = {
  admin: {
    host: process.env.HOST_ADMIN || 'http://localhost:1337'
  },
  smtp: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}
