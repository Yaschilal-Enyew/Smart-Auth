export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        font-family: Arial, sans-serif;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      .header {
        background-color: #4f46e5;
        color: #ffffff;
        padding: 20px;
        text-align: center;
      }

      .content {
        padding: 30px 20px;
        color: #333;
      }

      .otp-code {
        font-size: 36px;
        font-weight: bold;
        letter-spacing: 12px;
        color: #4f46e5;
        text-align: center;
        margin: 30px 0;
      }

      .footer {
        background-color: #f0f0f0;
        text-align: center;
        font-size: 12px;
        color: #888;
        padding: 20px;
      }

      @media screen and (max-width: 600px) {
        body {
          padding: 10px;
        }

        .container {
          width: 100% !important;
        }

        .otp-code {
          font-size: 28px;
          letter-spacing: 10px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 style="margin: 0;">Smart Auth</h1>
        <p style="margin: 0;">Verify Your Email Address</p>
      </div>
      <div class="content">
        <h2>Hello 👋,</h2>
        <p>We received a request to verify the email address below:</p>

        <div
          style="margin: 20px 0; padding: 10px 15px; background-color: #f0f0f0; border-left: 4px solid #4f46e5;"
        >
          <strong>Email:</strong> <span style="color: #4f46e5;">{{email}}</span>
        </div>

        <p>Please use the following 6-digit code to verify your email:</p>

        <div class="otp-code">
          {{otp}}
        </div>

        <p style="font-size: 14px; color: #555;">
          This code is valid for 10 minutes. If you didn’t request this, please ignore this email.
        </p>

        <p style="font-size: 14px; color: #555;">— The SmartAuth Team</p>
      </div>
      <div class="footer">
        &copy; 2025 SmartAuth. All rights reserved.
      </div>
    </div>
  </body>
</html>`

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Password Reset OTP</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f9fafb;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .email-container {
      max-width: 500px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
      overflow: hidden;
    }

    .email-header {
      background-color: #2563eb;
      color: white;
      text-align: center;
      padding: 20px 15px;
    }

    .email-header h1 {
      margin: 0;
      font-size: 24px;
    }

    .email-content {
      padding: 25px 20px;
      text-align: center;
      color: #333;
    }

    .email-content p {
      margin: 16px 0;
      font-size: 16px;
    }

    .otp-box {
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 10px;
      background-color: #f3f4f6;
      display: inline-block;
      padding: 12px 24px;
      border-radius: 8px;
      color: #2563eb;
      margin: 20px 0;
    }

    .user-email {
      font-weight: 500;
      color: #2563eb;
    }

    .email-footer {
      background-color: #f1f5f9;
      text-align: center;
      padding: 15px;
      font-size: 12px;
      color: #777;
    }

    @media screen and (max-width: 600px) {
      body {
        padding: 10px;
      }

      .otp-box {
        font-size: 24px;
        padding: 10px 18px;
        letter-spacing: 8px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>SmartAuth</h1>
      <p>Password Reset OTP</p>
    </div>

    <div class="email-content">
      <p>Hello 👋,</p>
      <p>We received a request to reset the password for your account:</p>

      <p class="user-email">{{email}}</p>

      <p>Use the OTP below to proceed with your password reset:</p>

      <div class="otp-box">{{otp}}</div>

      <p>This OTP will expire in 15 minutes. If you didn’t request this, just ignore this email.</p>
      <p>Thanks,<br />The SmartAuth Team</p>
    </div>

    <div class="email-footer">
      &copy; 2025 SmartAuth. All rights reserved.
    </div>
  </div>
</body>
</html>`