export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <div className="flex items-center justify-center">
        <p>
          Copyright {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
}
