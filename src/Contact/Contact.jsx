export default function Contacts() {

  const contactInfo = [
    { icon: 'fa-envelope text-info', bg: 'bg-info', title: 'Email Us', content: 'support@movieplatform.com' },
    { icon: 'fa-map-marker-alt text-warning', bg: 'bg-warning', title: 'Our Location', content: 'ismailia, Egypt' },
    { icon: 'fa-phone text-primary', bg: 'bg-primary', title: 'Call Us', content: '+20 1050946687' }
  ];

  const pStyle = { color: '#64748b', fontWeight: '500' };

  return (
    <div className='container my-5 py-5 text-white'>
      <div className="row g-5 align-items-center">
        <div className="col-md-5">
          <div className="brdr w-25 mb-3"></div>
          <h2 className='h1 fw-bold'>Get in <br /> touch with <br /> us</h2>
          <p style={pStyle} className='fs-5'>Have questions or suggestions? We'd love to hear from you.</p>
          
          <div className="mt-5">
            {contactInfo.map((item, i) => (
              <div key={i} className={`d-flex align-items-center ${i !== contactInfo.length - 1 ? 'mb-4' : ''}`}>
                <div className={`${item.bg} bg-opacity-10 p-3 rounded-circle me-3`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h4 className='h6 mb-0'>{item.title}</h4>
                  <p style={pStyle} className='small mb-0'>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="brdr w-100 mt-5"></div>
        </div>

        <div className="col-md-7">
          <div className="p-5 rounded-4 shadow bg-dark bg-opacity-25 border border-secondary border-opacity-25 ripple-effect">
            <form>
              <div className="row g-3">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', half: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', half: true },
                  { id: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?' },
                  { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message here...' }
                ].map((input, i) => (
                  <div key={i} className={input.half ? 'col-md-6' : 'col-12'}>
                    <div className="form-group mb-3">
                      <label htmlFor={input.id} className="form-label small ">{input.label}</label>
                      {input.type === 'textarea' ? (
                        <textarea className="form-control" id={input.id} rows="5" placeholder={input.placeholder}></textarea>
                      ) : (
                        <input type={input.type} className="form-control" id={input.id} placeholder={input.placeholder} />
                      )}
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <button type="submit" className="btn btn-info w-100 py-3 fw-bold text-white shadow-sm border-0">
                    Send Message <i className="fas fa-paper-plane ms-2 small"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
