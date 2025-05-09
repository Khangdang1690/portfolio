# Contact Form Setup Instructions

This contact form is configured to send emails using Nodemailer with a Gmail account. Follow these steps to set up the email functionality:

## 1. Create `.env.local` File

Create a `.env.local` file in the root of your project with the following content:

```
# Email Settings
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-app-password
```

## 2. Generate an App Password for Gmail

Since Gmail doesn't allow direct password authentication for third-party apps by default, you'll need to generate an app password:

1. Go to your Google Account settings at [myaccount.google.com](https://myaccount.google.com/)
2. Enable 2-Step Verification if you haven't already
3. Go to "Security" > "App passwords"
4. Select "Other (Custom name)" from the dropdown
5. Enter a name like "Portfolio Contact Form"
6. Click "Generate"
7. Copy the generated 16-character password
8. Paste this password as the `EMAIL_PASS` value in your `.env.local` file

## 3. Update the API Route

In `src/app/api/contact/route.ts`, enable the actual email sending by uncommenting these lines:

```typescript
// For demonstration - log instead of actually sending
// In production, uncomment the line below and remove the log
console.log("Would send email:", mailOptions);

// Uncomment to actually send the email
// await transporter.sendMail(mailOptions);
```

Change it to:

```typescript
// Send the email
await transporter.sendMail(mailOptions);
```

## 4. Test Your Form

Once configured, your contact form should successfully send emails to the address specified in the `to` field of the mailOptions.

## Security Notes

- Never commit your `.env.local` file to version control
- Consider using a service like [SendGrid](https://sendgrid.com/) or [Resend](https://resend.com/) for production applications
- For higher security in production, consider using environment variables in your hosting platform rather than in a file 