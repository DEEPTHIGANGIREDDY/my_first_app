import "./footer.css"

const FooterComponent =()=>{
    return (
        <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>About Us</h3>
                    <p>Company XYZ is a leading provider of innovative solutions, committed to excellence in every aspect of our business.</p>
                </div>

                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@companyxyz.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <p>&copy; 2023 Company XYZ. All Rights Reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
            </div>
        </div>
    </footer>
    )
}
export default FooterComponent