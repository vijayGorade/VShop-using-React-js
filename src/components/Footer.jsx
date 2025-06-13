function Footer() {
    return (
        <>
            <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
                <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                    <div className="row">
                        <div className="col-lg-3 mb-3">
                            <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"  aria-label="Brand">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 94" role="img" className="d-block me-2" height="32" width="40">
                                    <title>Brand</title>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284..."></path>
                                </svg>
                                <span className="fs-5">VShop</span>
                            </a>
                            <p>Designed and built with love by Gorade vijay Ramesh.</p>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">Home</li>
                                <li className="mb-2">About</li>
                                <li className="mb-2">Services</li>
                                <li className="mb-2">Contact</li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5>Support</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">FAQ</li>
                                <li className="mb-2">Help Center</li>
                                <li className="mb-2">Privacy Policy</li>
                                <li className="mb-2">Terms of Service</li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-3 mb-3">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">Facebook</li>
                                <li className="mb-2">Twitter</li>
                                <li className="mb-2">Instagram</li>
                                <li className="mb-2">LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
