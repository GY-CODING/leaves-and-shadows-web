import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
// const { google } = require('googleapis')

export async function POST (request: Request): Promise<any> {
  const requestBody = await request.json()
  const email = requestBody.email
  const username = requestBody.username

  console.log(email, username)

  console.log('Datos recibidos en la solicitud POST:', { email, username })
  const CLIENT_ID = '42576277457-bcqddg56kc24fkmnidcciusloe7kak0e.apps.googleusercontent.com'
  const CLIENT_SECRET = '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'
  const REFRESH_TOKEN = '1//04Dw2WsEImwnuCgYIARAAGAQSNwF-L9IrNsTbo4t6eduB9uHkGTWCd9XzwTlqdLYLF7PjzociRfl12q8-bGU636_yz-gPk4kdvlI'
  //   const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
  const MY_EMAIL = 'gycoding05@gmail.com'

  //   const oAuth2Client = new google.auth.OAuth2(
  //     CLIENT_ID,
  //     CLIENT_SECRET,
  //     REDIRECT_URI
  //   )

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: MY_EMAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN
    }
  })
  console.log(transporter)

  try {
    await transporter.sendMail({
      from: 'GYCoding',
      to: email,
      subject: `Website activity from ${email}`,
      html: `
            <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .body {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        margin: 0;
        padding: 0;
    }

    div {
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;
    }

    .principalbody {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 100%;
        flex-direction: column;
        background-color: #FFF;
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .link:hover{
        cursor:pointer
    }
</style>

<body class="body">
    <div class="principalbody">
        <p style="text-align: center;">
            <img src="https://github.com/GY-CODING/fallofthegods-img-repo/blob/f4694ccd381bd7a7a2abe826ca8249adf18c9212/gy_images/gycoding_logo.png?raw=true"
                width="100" alt="GYCoding"
                style="-ms-interpolation-mode: bicubic;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none; align-self: center;" />
        </p>
        <h1 style="align-self: center; text-align: center;">${username}, welcome to GYCODING!</h1>
        <p style="align-self: center;text-align: center;"">
            You have been successfully registered.
        </p>

        <p class="link" style=" color:#FFF;text-decoration:none;text-align: center; align-self: center; background-color: rgb(156,
            0, 217); padding: 10px;border-radius: 10px;">
            GO TO GYCODING
        </p>
        <p style="align-self: center; text-align: center;">Thanks!</p>
        <p style="text-align: center; color: #A9B3BC;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;">
            If you did not make this request, please contact us by replying to this mail.
        </p>
    </div>
    <script>
        document.querySelector('.link').addEventListener('click', () => {
            window.location.href = 'https://gycoding.com';
        });
    </script>
</body>

</html>
            `
    })

    return NextResponse.json({ message: 'Success: email was sent' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error: email was not sent' }, { status: 500 })
  }
}
