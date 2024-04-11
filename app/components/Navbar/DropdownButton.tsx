// "use client"
// import Link from "next/link";
// import { useState } from "react";
// import './style.css';


// export default function DropdownButton() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };
    
//     return(
//         <div className="relative dropdown-button">
//       <button
//         onClick={toggleMenu}
//         className="flex items-center gap-2 text-lg hover:text-orange-500 transition-all duration-300"
//       >
//         Servicios
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className={`h-5 w-5 transform origin-center transition duration-200 ease-out ${
//             isMenuOpen ? 'rotate-180' : ''
//           }`}
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 10.59l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.28z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button>
//       {isMenuOpen && (
//         <div className="w-40 absolute top-full mt-3 shadow-lg menu-dropdown-header">
//           <Link href="#webdesign" onClick={closeMenu} className="block  px-4 py-2 hover:bg-orange-500 font-medium transition-all duration-200">
//               Diseño Web
//           </Link>
//           <Link href="#uxuidesign" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-500 font-medium transition-all duration-200">
//               Diseño UX/UI
//           </Link>
//           <Link href="#ediciondevideo" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-500 font-medium transition-all duration-200">
//               Edicion de Video
//           </Link>
//           <Link href="#metaads" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-500 font-medium transition-all duration-200">
//               Anuncios Meta ADS
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }
