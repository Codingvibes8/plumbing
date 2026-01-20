import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  serviceType: string;
  date: string;
  timeSlot: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  serviceType,
  date,
  timeSlot,
}) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
    <h1 style={{ color: '#0f172a' }}>Booking Confirmation</h1>
    <p>Hi <strong>{name}</strong>,</p>
    <p>Thank you for choosing Plumbing Pros! We have received your booking request.</p>
    
    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', margin: '20px 0' }}>
      <h3 style={{ margin: '0 0 12px 0', color: '#334155' }}>Appointment Details:</h3>
      <p style={{ margin: '4px 0' }}><strong>Service:</strong> {serviceType}</p>
      <p style={{ margin: '4px 0' }}><strong>Date:</strong> {date}</p>
      <p style={{ margin: '4px 0' }}><strong>Time:</strong> {timeSlot}</p>
    </div>

    <p>One of our team members will review your request and contact you shortly to confirm the appointment.</p>
    
    <p style={{ marginTop: '30px', fontSize: '14px', color: '#64748b' }}>
      If you have any urgent questions, please call us at (555) 123-4567.
    </p>
  </div>
);
