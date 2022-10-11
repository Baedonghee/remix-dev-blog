import { Link } from "@remix-run/react";

export function NoPosts() {
  return (
    <div className="text-center">
      <h2>No Post!!!!</h2>
      <Link to="/" className="text-cyan-600 hover:opacity-60">
        Main
      </Link>
    </div>
  );
}
