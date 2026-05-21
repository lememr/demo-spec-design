export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} AgentOS. Código aberto no{" "}
          <a
            href="https://github.com/lememr/agentos"
            className="text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
