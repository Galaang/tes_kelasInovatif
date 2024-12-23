export default function Home() {
  return (
    <div className="px-10">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-3xl font-bold">The Fastest Research Platform Ever</h1>
        <p className="text-sm text-gray-600 mt-4">
          All-in-one AI tools for students and researchers.
        </p>

        {/* Search Form */}
        <form className="max-w-md mx-auto w-full mt-4">   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search or ask a question" 
              required 
            />
            <button type="submit" className="text-slate-500 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Example Questions */}
        <div className="w-full max-w-md mx-auto px-4 mt-5">
          <p className="text-sm text-gray-600">
            Try asking or searching for:
          </p>
          {/* Question Items */}
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

      {/* Popular Tools Section */}
      <h1 className="text-xl font-semibold mb-4">Popular Tools</h1>
      <div className="flex gap-4">
        {/* Chat with PDF Card */}
        <a href="#" className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col items-center justify-center hover:border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mb-4 text-orange-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-900">Chat with PDF</h5>
          <p className="font-normal text-sm text-gray-500">Get all answers backed by citations</p>
        </a>

        {/* AI Writer Card */}
        <a href="#" className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col items-center justify-center hover:border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mb-4 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-900">AI Writer</h5>
          <p className="font-normal text-sm text-gray-500">Write new research papers. Assisted by AI</p>
        </a>
      </div>

      <h1 className="text-xl font-semibold mt-4">
        Best For Researchers
      </h1>
      <a href="#" className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 flex flex-col items-center justify-center hover:border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mb-4 text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
          <h5 className="mb-2 font-semibold tracking-tight text-gray-900">AI Writer</h5>
          <p className="font-normal text-sm text-gray-500">Write new research papers. Assisted by AI</p>
        </a>
    </div>
  );
}
