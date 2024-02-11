import { ModeToggle } from "./mode-toggle";
import { Navbar } from "./navbar";

export default function Header() {
  return (
    <header className="py-5 flex items-center justify-between container">
      <h1>Garden Site</h1>
      <Navbar />
      <ModeToggle />
    </header>
  );
}
