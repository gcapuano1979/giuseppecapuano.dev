export default function Footer() {
  return (
    <footer
      className="
        mx-auto
        max-w-6xl
        border-t
        border-white/10
        px-6
        py-8
        text-center
        text-sm
        text-zinc-500
      "
    >
      <p>
        © {new Date().getFullYear()} Giuseppe Capuano.
        Built with Next.js, React and TypeScript.
      </p>
    </footer>
  );
}