const axios = require('axios');

const handler = async (event, _context) => {
  try {
    const data = JSON.parse(event.body);
    console.log(data);

    await axios.post(
      'https://api.sendinblue.com/v3/smtp/email',
      {
        sender: {
          email: 'akademiaskateboardingu@gmail.com',
          name: 'Formularz Zapisowy'
        },
        replyTo: {
          name: data.name,
          email: data.email
        },
        to: [
          {
            email: 'akademiaskateboardingu@gmail.com',
            name: 'Adam Szulc'
          }
        ],
        subject: 'Zapisy na zajęcia',
        htmlContent: `<html>
            <head></head>
            <body>
              <p>Opiekun: ${data.name}</p>
              <p>Dziecko: ${data.childName}</p>
              <p>Email: ${data.email}</p>
              <p>Telefon: ${data.phone}</p>
              <p>Wiek dziecka: ${data.age}</p>
              <p>Dzień i godzina: ${data.time}</p>
            </body>
          </html>`
      },
      {
        headers: {
          'content-type': 'application/json',
          'api-key': process.env.VITE_EMAIL_API_KEY,
          accept: 'application/json'
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'Wiadomość wysłana poprawnie. Skontaktujemy się z Tobą mailowo lub telefonicznie.'
      })
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Wysyłanie wiadomości nie powiodło się. Spróbuj ponownie za kilka minut.'
      })
    };
  }
};

module.exports = { handler };
