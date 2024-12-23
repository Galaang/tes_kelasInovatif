export default function Home() {
  return (
    <div className="px-10">
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="text-3xl font-bold">The Fastest Research Platform Ever</h1>
      <p className="text-sm text-gray-600 mt-4">
      All-in-one AI tools for students and researchers.
      </p>

      
<form className="max-w-md mx-auto w-full mt-4">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search or ask a question" required />
        <button type="submit" className="text-slate-500 absolute end-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
    </div>
</form>

    <div className="w-full max-w-md mx-auto px-4 mt-5">
      <p className="text-sm text-gray-600">
        Try asking or searching for:
      </p>
      <div className="flex flex-col space-y-2">
        <p className="hover:underline cursor-pointer text-blue-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>What is the impact of AI on the job market?</span>
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="hover:underline cursor-pointer text-blue-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>What is the impact of AI on the job market?</span>
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <p className="hover:underline cursor-pointer text-blue-500 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-slate-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span>What is the impact of AI on the job market?</span>
        </p>
      </div>
      
    </div>
    </div>
    <div className="">
      <h1 className="text-xl font-semibold">
        Popular Tools
      </h1>
    </div>
    </div>
  );
}
