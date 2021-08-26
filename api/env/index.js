module.exports = {
  admin: {
    host: process.env.HOST_ADMIN || '',
    apiKey: process.env.API_KEY_ADMIN || '',
  },
  smtp: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
}
