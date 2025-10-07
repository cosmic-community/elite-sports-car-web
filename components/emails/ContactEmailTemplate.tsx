interface ContactEmailTemplateProps {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactEmailTemplate({ 
  name, 
  email, 
  phone, 
  message 
}: ContactEmailTemplateProps) {
  return (
    <html>
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #000000;
            color: #ffffff;
            padding: 40px 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #111111;
            border: 1px solid #1f2937;
            border-radius: 12px;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
            padding: 32px 24px;
            text-align: center;
          }
          .header h1 {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
            color: #ffffff;
          }
          .header p {
            margin-top: 8px;
            color: #fecaca;
            font-size: 14px;
          }
          .content {
            padding: 32px 24px;
          }
          .field {
            margin-bottom: 24px;
            padding-bottom: 24px;
            border-bottom: 1px solid #1f2937;
          }
          .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #9ca3af;
            margin-bottom: 8px;
            font-weight: 600;
          }
          .value {
            font-size: 16px;
            color: #ffffff;
            line-height: 1.6;
          }
          .message-box {
            background-color: #1f2937;
            padding: 16px;
            border-radius: 8px;
            border-left: 4px solid #dc2626;
            margin-top: 8px;
          }
          .footer {
            background-color: #0a0a0a;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #1f2937;
          }
          .footer p {
            color: #6b7280;
            font-size: 12px;
            margin: 4px 0;
          }
          .footer a {
            color: #dc2626;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>🏎️ Elite Sports Cars</h1>
            <p>New Contact Form Submission</p>
          </div>
          
          <div className="content">
            <div className="field">
              <div className="label">From</div>
              <div className="value">{name}</div>
            </div>

            <div className="field">
              <div className="label">Email Address</div>
              <div className="value">
                <a href={`mailto:${email}`} style={{ color: '#dc2626', textDecoration: 'none' }}>
                  {email}
                </a>
              </div>
            </div>

            {phone && (
              <div className="field">
                <div className="label">Phone Number</div>
                <div className="value">
                  <a href={`tel:${phone}`} style={{ color: '#dc2626', textDecoration: 'none' }}>
                    {phone}
                  </a>
                </div>
              </div>
            )}

            <div className="field">
              <div className="label">Message</div>
              <div className="message-box">
                <div className="value" style={{ whiteSpace: 'pre-wrap' }}>
                  {message}
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <p><strong>Elite Sports Car Dealership</strong></p>
            <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
            <p>
              <a href="tel:5551234567">(555) 123-4567</a> • 
              <a href="mailto:info@elitesportscars.com">info@elitesportscars.com</a>
            </p>
            <p style={{ marginTop: 16px }}>Mon-Sat 9AM-6PM</p>
          </div>
        </div>
      </body>
    </html>
  )
}