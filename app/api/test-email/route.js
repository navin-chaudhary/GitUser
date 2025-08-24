import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    return NextResponse.json({
      emailUser: emailUser ? 'Set' : 'Not set',
      emailPass: emailPass ? 'Set' : 'Not set',
      hasCredentials: !!(emailUser && emailPass),
      message: emailUser && emailPass 
        ? 'Email credentials are configured correctly' 
        : 'Email credentials are missing or incomplete'
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to check email configuration',
      details: error.message
    }, { status: 500 })
  }
}
