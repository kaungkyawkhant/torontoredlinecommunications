import { useState } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import styles from '../styles/Contact.module.css';

const fallbackEndpoint = 'https://formsubmit.co/ajax/sahulhameed_2004@yahoo.co.in';

/**
 * Contact section with company details and enquiry form.
 * @param {{ sectionRef: React.RefObject<HTMLElement> }} props
 */
export default function Contact({ sectionRef }) {
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || fallbackEndpoint;
  const [submitState, setSubmitState] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  /**
   * Send form payload to endpoint and report state to users.
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get('_honey')) {
      return;
    }

    setSubmitState('submitting');
    setSubmitMessage('Sending your enquiry...');

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitState('success');
      setSubmitMessage('Thank you. Your enquiry has been sent successfully.');
      form.reset();
    } catch (_error) {
      setSubmitState('error');
      setSubmitMessage('Unable to send right now. Please email sahulhameed_2004@yahoo.co.in directly.');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className={`${styles.contact} deferred-section`}>
      <div className="section-container">
        <div className={styles.grid}>
          <div>
            <div className="signal-divider" aria-hidden="true" />
            <h2>GET IN TOUCH</h2>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <MapPin size={18} />
                <div>
                  <strong>Head Office</strong>
                  <p>102-1765 Lawrence Ave E Scarborough, Ontario M1R 2X8 Canada</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Phone size={18} />
                <div>
                  <strong>Phone</strong>
                  <p>+1 (416) 555-0190</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Mail size={18} />
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:sahulhameed_2004@yahoo.co.in">sahulhameed_2004@yahoo.co.in</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={18} />
                <div>
                  <strong>Hours</strong>
                  <p>Mon–Fri: 08:00–17:00 EST</p>
                  <p>24/7 NOC: +1 (416) 555-0191</p>
                </div>
              </div>
            </div>

            <p className={styles.muted}>
              For project enquiries, RFQs, or technical consultations, complete the form and a TRC
              engineer will respond within one business day.
            </p>
          </div>

          {/* Override with VITE_FORM_ENDPOINT in production (Formspree/FormSubmit). */}
          <form className={styles.form} action={formEndpoint} method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="TRC Website Enquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label className={styles.honeypot} htmlFor="companyWebsite">
              Leave this field empty
            </label>
            <input
              id="companyWebsite"
              className={styles.honeypot}
              name="_honey"
              type="text"
              tabIndex="-1"
              autoComplete="off"
            />

            <label htmlFor="fullName">Full Name*</label>
            <input id="fullName" name="fullName" type="text" required />

            <label htmlFor="company">Company*</label>
            <input id="company" name="company" type="text" required />

            <label htmlFor="email">Email*</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" />

            <label htmlFor="enquiryType">Enquiry Type</label>
            <select id="enquiryType" name="enquiryType" defaultValue="Project Enquiry">
              <option>Project Enquiry</option>
              <option>Technical Support</option>
              <option>RFQ</option>
              <option>General</option>
            </select>

            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" rows="6" required />

            <p
              className={`${styles.status} ${
                submitState === 'success'
                  ? styles.statusSuccess
                  : submitState === 'error'
                    ? styles.statusError
                    : ''
              }`}
              aria-live="polite"
            >
              {submitMessage}
            </p>

            <button
              type="submit"
              className={styles.submitBtn}
              aria-label="Submit contact form"
              disabled={submitState === 'submitting'}
            >
              {submitState === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
