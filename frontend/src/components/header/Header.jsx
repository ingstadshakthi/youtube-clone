import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Header() {

    function submitHandler(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target.search.value);
    }
    return (
        <header className='flex items-center justify-between'>
            <div className='flex items-center'>
                <FaBars size='1.5rem' />
                <Link to='/' className=''>
                    <span className='text-xl font-semibold ml-2'><span className='bg-red-500 px-1 rounded-md text-white'>You</span>Tube</span>
                </Link>
            </div>
            <form className='border flex items-center border-gray-300 rounded-md p-2 sm:w-80 md:w-96 gap-2' onSubmit={submitHandler}>
                <input className='flex-1 outline-none' placeholder='Search...' name='search' ></input>
                <button type='submit'>
                    <FaMagnifyingGlass />
                </button>
            </form>
            <div className='text-end'>
                <Link to='/signup' className='text-cyan-500 '>Login / Signup</Link>
            </div>

        </header >
    )
}
