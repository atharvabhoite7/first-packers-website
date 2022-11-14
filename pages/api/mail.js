const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.fullName}\r\n
    Email: ${body.email}\r\n
    Contact Number: ${body.contactno}\r\n
    Budget: ${body.budget}\r\n
    Items: ${body.items}   
    `;
  const data = {
    to: "atharvabhoite264@gmail.com",
    from: "atharvabhoite264@gmail.com",
    subject: "New Enquiry for First Packers and Movers",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
};
