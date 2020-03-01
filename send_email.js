module.exports = (from,to,name,text) => {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  const msg = {
    to: to,
    from: from,
    subject: name,
    text: text,

  };
  sgMail.send(msg);

}
