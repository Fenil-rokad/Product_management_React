// import React from 'react';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cyan-400 p-4 rounded-2xl">
//       <div className="bg-white p-6 shadow-md w-full max-w-sm rounded-3xl">
//         <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

//         <form >
//           <label className="block mb-2 text-sm font-medium">Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border rounded mb-4"
//             placeholder="Enter your email"
//           />

//           <label className="block mb-2 text-sm font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full p-2 border rounded mb-4"
//             placeholder="Enter your password"
//           />
    

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white p-4 sm:p-6 shadow-md w-full max-w-xs sm:max-w-sm rounded-2xl sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <form>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-sm font-medium">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;