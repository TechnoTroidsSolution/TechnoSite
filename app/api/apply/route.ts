import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
    
    if (!googleScriptUrl) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Configuration error. Please contact support.' 
        },
        { status: 500 }
      );
    }

    // Call Google Apps Script
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    return NextResponse.json(result);
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit application. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}
