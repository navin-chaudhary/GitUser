# 🔧 Gmail Setup Guide for Contact Form

## 🚨 **Current Issue**
Your `.env.local` file is missing the required email credentials. Follow these steps to fix it:

## 📋 **Step-by-Step Setup**

### **Step 1: Enable 2-Factor Authentication**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **"Security"** in the left sidebar
3. Find **"2-Step Verification"** and click **"Get started"**
4. Follow the setup process to enable 2FA

### **Step 2: Generate App Password**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **"Security"** in the left sidebar
3. Under **"2-Step Verification"**, click **"App passwords"**
4. Select **"Mail"** from the dropdown
5. Select **"Other (Custom name)"** and type: `GitHub Finder`
6. Click **"Generate"**
7. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### **Step 3: Update Your .env.local File**
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Gmail credentials:

```env
# Email Configuration
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Example:**
```env
# Email Configuration
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### **Step 4: Restart Your Development Server**
```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## 🔍 **Troubleshooting**

### **If you still get authentication errors:**

1. **Check your Gmail address** - Make sure it's correct and you own it
2. **Verify the app password** - Copy it exactly as shown (including spaces)
3. **Ensure 2FA is enabled** - App passwords only work with 2FA
4. **Check for typos** - No extra spaces or characters

### **Common Issues:**

❌ **Wrong format:**
```env
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=myregularpassword  # ❌ This won't work
```

✅ **Correct format:**
```env
EMAIL_USER=myemail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  # ✅ 16-character app password
```

## 🧪 **Test Your Setup**

1. Go to your contact page: `http://localhost:3001/contact`
2. Fill out the form with test data
3. Submit the form
4. Check your Gmail inbox at `navinchaudhary.dev@gmail.com`
5. You should receive a professional email with the contact form details

## 📧 **What You'll Receive**

When someone submits the contact form, you'll get an email to `navinchaudhary.dev@gmail.com` with:
- ✅ Sender's name
- ✅ Sender's email
- ✅ Their message
- ✅ Timestamp
- ✅ Professional HTML formatting

## 🔒 **Security Notes**

- ✅ App passwords are more secure than regular passwords
- ✅ You can revoke app passwords anytime
- ✅ `.env.local` is already in `.gitignore` (won't be committed)
- ✅ Never share your app password

## 🆘 **Still Having Issues?**

If you're still getting errors after following these steps:

1. **Double-check your Gmail credentials**
2. **Make sure 2FA is enabled**
3. **Verify the app password format**
4. **Restart your development server**
5. **Check the terminal for detailed error messages**

The contact form will work perfectly once you have the correct Gmail credentials! 🚀
