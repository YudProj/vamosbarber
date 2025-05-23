import { NavLink } from "react-router-dom";

export default function ListNavbar() {
  const menuClass = ({ isActive }) =>
    `px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer 
   ${isActive ? "bg-gray-800 text-white" : "text-gray-500 hover:bg-gray-800 hover:text-white"}`;

  return (
    <ul className="flex gap-4 flex-wrap">
      {/* Menu Utama */}
      <li>
        <NavLink to="/" className={menuClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/product" className={menuClass}>
          Produk
        </NavLink>
      </li>
      <li>
        <NavLink to="/karyawan" className={menuClass}>
          Team Vamos
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={menuClass}>
          FaQ
        </NavLink>
      </li>
      {/* Menu Error */}
      {/* <li>
        <NavLink to="/401" className={menuClass}>
          Error 401
        </NavLink>
      </li> */}


      <li>
        <NavLink to="/aboutus" className={menuClass}>
         Tentang Kami
        </NavLink>
      </li>

      
      <li>
        <NavLink to="/contactus" className={menuClass}>
          Kontak Kami
        </NavLink>
      </li>


      
      <li>
        <NavLink to="/pricing" className={menuClass}>
          Harga
        </NavLink>
      </li>


      <li>
        <NavLink to="/review" className={menuClass}>
          Review
        </NavLink>
      </li>

      {/* <li>
        <NavLink to="/402" className={menuClass}>
          Error 402
        </NavLink>
      </li>
      <li>
        <NavLink to="/403" className={menuClass}>
          Error 403
        </NavLink>
      </li> */}
    </ul>
  );
}
