import { NavLink } from "react-router-dom";

export default function ListNavbar() {
  const menuClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium font-sans transition duration-300 cursor-pointer 
  ${isActive ? "bg-black text-white" : "text-gray-500 hover:bg-black hover:text-white"}`;


  return (
    <ul className="flex gap-4 flex-wrap">
      {/* Menu Utama */}
      <li>
        <NavLink to="/" className={menuClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/produkGuest" className={menuClass}>
          Produk
        </NavLink>
      </li>
   
      
     
   <li className="relative group">
        <span className="px-4 py-2 rounded-full text-sm font-medium font-sans transition duration-300 cursor-pointer text-gray-500 hover:bg-black hover:text-white">
          About Us ▾
        </span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 z-10 text-sm mt-2 w-44">
           <li>
            <NavLink to="/new" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Berita Terkini
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/aboutus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Tentang Kami
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactus" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Kontak Kami
            </NavLink>
          </li>
          <li>
            <NavLink to="/karyawan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Team Vamos
            </NavLink>
          </li>
          
        </ul>
      </li>


      <li className="relative group">
        <span className="px-4 py-2 rounded-full text-sm font-medium font-sans transition duration-300 cursor-pointer text-gray-500 hover:bg-black hover:text-white">
          Apa kata orang ▾
        </span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 z-10 text-sm mt-2 w-44">
          <li>
            <NavLink to="/review" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              FaQ
            </NavLink>
          </li>
    
        </ul>
      </li>



      <li>
        <NavLink to="/pricing" className={menuClass}>
          Harga
        </NavLink>
      </li>


      <li className="relative group">
        <span className="px-4 py-2 rounded-full text-sm font-medium font-sans transition duration-300 cursor-pointer text-gray-500 hover:bg-black hover:text-white">
          Join Us ▾
        </span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg p-2 z-10 text-sm mt-2 w-44">
          <li>
            <NavLink to="/lowongan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Lowongan
            </NavLink>
          </li>
          <li>
            <NavLink to="/layanan" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
              Layanan
            </NavLink>
          </li>
        
        </ul>
      </li>


      <li>
        <a
          href="https://project-uas-sandy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full text-sm font-medium font-sans transition duration-300 cursor-pointer text-gray-500 hover:bg-black hover:text-white"
        >
          Admin Panel
        </a>
      </li>

     
    </ul>
  );
}
