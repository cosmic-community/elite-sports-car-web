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
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            padding: 60px 20px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .container {
            max-width: 650px;
            margin: 0 auto;
            background: linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%);
            border-radius: 2px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          }
          .header {
            background: linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%);
            padding: 50px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 100%);
            pointer-events: none;
          }
          .header h1 {
            font-size: 28px;
            font-weight: 300;
            letter-spacing: 4px;
            margin: 0;
            color: #ffffff;
            text-transform: uppercase;
            position: relative;
          }
          .header .divider {
            width: 60px;
            height: 1px;
            background: rgba(255, 255, 255, 0.6);
            margin: 20px auto;
          }
          .header p {
            margin: 0;
            color: rgba(255, 255, 255, 0.9);
            font-size: 13px;
            font-weight: 300;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
          }
          .content {
            padding: 50px 40px;
          }
          .field {
            margin-bottom: 32px;
            padding-bottom: 32px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          .field:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 12px;
            font-weight: 400;
          }
          .value {
            font-size: 17px;
            color: #ffffff;
            line-height: 1.7;
            font-weight: 300;
            letter-spacing: 0.3px;
          }
          .value a {
            color: #dc2626;
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 400;
          }
          .value a:hover {
            color: #ef4444;
          }
          .message-box {
            background: rgba(220, 38, 38, 0.06);
            padding: 24px;
            border-radius: 2px;
            border-left: 2px solid #dc2626;
            margin-top: 12px;
          }
          .message-box .value {
            white-space: pre-wrap;
            line-height: 1.8;
          }
          .footer {
            background: #0a0a0a;
            padding: 40px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }
          .footer-brand {
            font-size: 15px;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #ffffff;
            margin-bottom: 20px;
          }
          .footer-divider {
            width: 40px;
            height: 1px;
            background: #dc2626;
            margin: 20px auto;
          }
          .footer p {
            color: rgba(255, 255, 255, 0.4);
            font-size: 12px;
            margin: 8px 0;
            font-weight: 300;
            letter-spacing: 0.5px;
          }
          .footer a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 300;
          }
          .footer a:hover {
            color: #dc2626;
          }
          .footer-hours {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: rgba(255, 255, 255, 0.35);
            font-size: 11px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="header">
            <h1>Elite Sports Cars</h1>
            <div className="divider"></div>
            <p>New Inquiry</p>
          </div>
          
          <div className="content">
            <div className="field">
              <div className="label">Client Name</div>
              <div className="value">{name}</div>
            </div>

            <div className="field">
              <div className="label">Email Address</div>
              <div className="value">
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>

            {phone && (
              <div className="field">
                <div className="label">Contact Number</div>
                <div className="value">
                  <a href={`tel:${phone}`}>
                    {phone}
                  </a>
                </div>
              </div>
            )}

            <div className="field">
              <div className="label">Message</div>
              <div className="message-box">
                <div className="value">
                  {message}
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer-brand">Elite Sports Cars</div>
            <div className="footer-divider"></div>
            <p>123 Luxury Lane, Beverly Hills, CA 90210</p>
            <p>
              <a href="tel:5551234567">(555) 123-4567</a> • 
              <a href="mailto:info@elitesportscars.com">info@elitesportscars.com</a>
            </p>
            <div className="footer-hours">Monday – Saturday, 9:00 AM – 6:00 PM</div>
          </div>
        </div>
      </body>
    </html>
  )
}