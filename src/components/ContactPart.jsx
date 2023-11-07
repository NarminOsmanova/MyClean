
const ContactPart = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span className="mb-3">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </span>
            </div>
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span>mailsadlfkjskdrhfksd@mail.ru</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <span>
                +994 50 xxx xx xx
                <br />
                +994 55 xxx xx xx
              </span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="d-flex">
              <span>
                <i className="fa-brands fa-facebook-f"></i>
              </span>
              <span>
                <i className="fa-brands fa-square-instagram"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contain">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25359.846247992737!2d49.83296335130851!3d40.39759151211717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a6bd%3A0xa8c2cbf267a83fbd!2zSGV5ZMmZciDGj2xpeWV2IE3JmXJryZl6aQ!5e0!3m2!1saz!2saz!4v1698738651477!5m2!1saz!2saz"
          width="100%"
          height="690"
          allowfullscreen=""
          loading="lazy"
          data-referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPart;
