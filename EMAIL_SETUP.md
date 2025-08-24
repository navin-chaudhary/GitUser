# Email Setup Instructions

## Setting up Gmail for Contact Form

To enable the contact form to send emails to `navinchaudhary.dev@gmail.com`, follow these steps:

### 1. Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

### 2. Generate App Password
1. Go to your Google Account settings
2. Navigate to Security
3. Under "2-Step Verification", click on "App passwords"
4. Select "Mail" as the app and "Other" as the device
5. Click "Generate"
6. Copy the 16-character password

### 3. Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### 4. Example Configuration
```
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 5. Restart Development Server
After updating the environment variables, restart your development server:
```bash
npm run dev
```

## How It Works

- When someone submits the contact form, an email will be sent to `navinchaudhary.dev@gmail.com`
- The email includes the sender's name, email, and message
- The email is formatted with a professional HTML template
- All contact form submissions will be received in your Gmail inbox

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use app passwords instead of your regular Gmail password
- App passwords are more secure and can be revoked if needed

## Troubleshooting

If emails are not being sent:
1. Check that your Gmail credentials are correct
2. Ensure 2-factor authentication is enabled
3. Verify the app password is correct
4. Check the browser console for any error messages
5. Check the server logs for detailed error information
