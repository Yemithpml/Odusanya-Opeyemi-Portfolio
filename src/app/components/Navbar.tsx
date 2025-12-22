export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <ul className="flex justify-center space-x-8 p-4">
        <li><a href="#home" className="text-gray-700 hover:text-blue-500">Home</a></li>
        <li><a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
      </ul>
    </nav>
  );
}
