const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify');
const nodemailer = require('nodemailer');

const { window } = new JSDOM('');
const { sanitize } = DOMPurify(window);

const { smtpHost, smtpUser, smtpPass } = process.env;
const mailTransport = nodemailer.createTransport({
  host: smtpHost,
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;

module.exports = async (req, res) => {
  try {
    const email = sanitize(req.body.email);
    const message = sanitize(req.body.message);

    if (!email || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address' });
    } else if (!message) {
      return res.status(400).json({ error: 'Please enter a message' });
    } else if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Please enter an email fewer than ${MAX_EMAIL_LENGTH} characters`,
      });
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Please enter a message fewer than ${MAX_MESSAGE_LENGTH} characters`,
      });
    }

    const mailOptions = {
      from: 'Portfolio <avimohite2019@gmail.com>',
      to: 'avimohite2019@gmail.com',
      subject: `New message from ${email}`,
      text: `From: ${email}\n\n${message}`,
    };

    await mailTransport.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Rejected', error);
    console.log("avi4")
    return res.status(500).json({ error: 'Message rejected' });
  }
};
