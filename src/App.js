import bg from "./lol.jpg";
import logo from "./logo.png";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lolwp bg-no-repeat bg-cover">
      <div className="max-w-7xl flex">
        <div className="w-4/12 bg-lolBg">
          <div className="flex flex-col items-center justify-center relative">
            <div className="pt-16">
              <img src={logo} alt="" className="w-10 h-10" />
              <span className="absolute top-[20%] right-[15%]">
                <svg
                  class="w-5 h-5"
                  fill="#b2b2b2"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <h1 className="text-2xl font-medium text-black">Sign in</h1>
            <form className="py-5">
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center relative group">
                  <input
                    className="max-w-[380px] xl:min-w-[320px] w-full h-12 my-2 peer bg-inputBg hover:bg-gray-300 hover:bg-opacity-60 shadow-custom rounded-lg px-4 focus:outline-none transition-all duration-200 ease-in transform placeholder-transparent z-10"
                    placeholder="USERNAME"
                    type="text"
                    required
                    autoComplete="off"
                  />
                  <label className="absolute uppercase left-5 text-sm text-inputTxt peer-placeholder-shown:text-xs peer-placeholder-shown:font-extrabold peer-placeholder-shown:tracking-wider peer-placeholder-shown:text-inputTxt peer-placeholder-shown:top-6 peer-focus:text-[10px] peer-focus:font-extrabold peer-focus:top-2.5 peer-focus:left-2 peer-focus:text-inputTxt transition-all duration-200 top-1.5 z-10">
                    Username
                  </label>
                </div>
                <div className="flex items-center justify-center relative group">
                  <input
                    className="max-w-[380px] xl:min-w-[320px] w-full h-12 my-2 peer bg-inputBg hover:bg-gray-300 hover:bg-opacity-60 shadow-custom rounded-lg px-4 focus:outline-none transition-all duration-200 ease-in transform placeholder-transparent z-10"
                    placeholder="Password"
                    type="text"
                    required
                    autoComplete="off"
                  />
                  <label className="absolute uppercase left-5 text-sm text-inputTxt peer-placeholder-shown:text-xs peer-placeholder-shown:font-extrabold peer-placeholder-shown:tracking-wider peer-placeholder-shown:text-inputTxt peer-placeholder-shown:top-6 peer-focus:text-[10px] peer-focus:font-extrabold peer-focus:top-2.5 peer-focus:left-2 peer-focus:text-inputTxt transition-all duration-200 top-1.5 z-10">
                    Password
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-2 flex-shrink-0 mt-5">
                <span className="px-4 py-1 bg-[#1977f3] flex items-center justify-center rounded-md cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                </span>
                <span className="px-4 py-1 bg-white border flex items-center justify-center rounded-md cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-6 h-6"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                <span className="px-4 py-1 bg-black flex items-center justify-center rounded-md cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg"
                    alt=""
                    className="w-5 h-5"
                  />
                </span>
              </div>
              <div className="flex items-center justify-start mt-3 space-x-2">
                <input type="checkbox" />
                <label className="text-inputTxt font-medium text-sm">
                  Stay signed in
                </label>
              </div>
              <div className="flex items-center justify-center flex-col pt-32 relative">
                <button className="border-2 border-inputBg rounded-2xl p-2">
                  <svg
                    class="w-10 h-10"
                    fill="#ededed"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="flex flex-col items-center justify-center uppercase text-xs leading-5 tracking-tight text-opacity-70 font-extrabold text-inputTxt pt-10">
                  <span>can't sign in?</span>
                  <span>create account</span>
                </div>
                <span className="text-inputTxt font-black text-xs text-opacity-50 absolute -bottom-2 right-0">
                  V40.0.1
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="w-8/12 h-[700px] relative">
          <img src={bg} alt="" className="h-full object-cover" />
          <div className="flex items-start justify-center absolute right-2 top-0">
            <span className="p-4 hover:bg-gray-200 hover:bg-opacity-20 hover:text-white group">
              <svg
                class="w-4 h-4 text-icons group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <span className="p-4 text-icons hover:bg-gray-200 hover:bg-opacity-20 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-question-lg w-3 h-3 text-icons group-hover:text-white"
                viewBox="0 0 16 16"
              >
                <path d="M3 4.075a.423.423 0 0 0 .43.44H4.9c.247 0 .442-.2.475-.445.159-1.17.962-2.022 2.393-2.022 1.222 0 2.342.611 2.342 2.082 0 1.132-.668 1.652-1.72 2.444-1.2.872-2.15 1.89-2.082 3.542l.005.386c.003.244.202.44.446.44h1.445c.247 0 .446-.2.446-.446v-.188c0-1.278.487-1.652 1.8-2.647 1.086-.826 2.217-1.743 2.217-3.667C12.667 1.301 10.393 0 7.903 0 5.645 0 3.17 1.053 3.001 4.075zm2.776 10.273c0 .95.758 1.652 1.8 1.652 1.085 0 1.832-.702 1.832-1.652 0-.985-.747-1.675-1.833-1.675-1.04 0-1.799.69-1.799 1.675z" />
              </svg>
            </span>
            <span className="p-4 hover:bg-gray-200 hover:bg-opacity-20 group">
              <svg
                class="w-4 h-4 text-icons group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </div>
          <span className="bg-settingsBg rounded-lg absolute bottom-[5%] right-[5%] p-1.5 hover:bg-gray-400">
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
