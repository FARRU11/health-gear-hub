const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">VitalCare Medical</h3>
          <p className="mt-2 text-sm text-muted-foreground">Trusted healthcare equipment for home and clinic.</p>
        </div>
        <div>
          <h4 className="font-medium">Help</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Shipping & Returns</li>
            <li>Warranty</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Email: support@vitalcare.example</li>
            <li>Phone: +1 (555) 234-5678</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">© {new Date().getFullYear()} VitalCare Medical. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
