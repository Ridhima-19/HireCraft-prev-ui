import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="bg-indigo-900 text-white w-full h-screen p-6">
      <h1 className="text-3xl font-bold mb-10">Hirecraft!</h1>

       <nav className="space-y-4">
           <Link
            to="/"
            className="block w-full text-left px-4 py-2 bg-[#142850] hover:bg-white hover:text-[#142850] rounded-md cursor-pointer transition-colors duration-200"

          >
            Upload JD
          </Link>
        </nav>
    </div>
  );
}






