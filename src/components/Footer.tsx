const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg font-bold tracking-tight text-foreground">
            VBS<span className="text-primary">.</span>
          </div>

          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Very Bad Strategy LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
