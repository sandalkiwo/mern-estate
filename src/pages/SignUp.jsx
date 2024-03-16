import {Link} from "react-router-dom";

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto items-center'>
      <h1 className="text-3xl text-center font-semibold my-7">
        SignUp
      </h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          SIGN Up
        </button>
      </form>
      <div className="">
        <p>Have an Account?</p>
        <Link to="/signin">
          <spa className='text-blue-700'>Sign In</spa>
        </Link>
      </div>
    </div>);
}
