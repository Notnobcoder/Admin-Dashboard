export const CardComponent = () => {
  return (
    <div className="flex rounded-2xl bg-[#f6f6f8] shadow-sm">
      <div className="bg-black flex items-center rounded-l-md px-1 ">
        <h3 className="text-white">01</h3>
      </div>
      <div className="p-4 w-full">
        <h2 className="text-sm">Appointment ID : 76820</h2>
        <div className="flex items-center justify-between w-full ">
          <h2 className="text-lg font-bold">Bijay Sahoo</h2>
          <p className="text-xs bg-green-600 rounded-full p-1 text-white">
            Convert to Quick Order
          </p>
        </div>
        <div>
          <h4 className="text-xs text-black/40 my-2  border-1 border-dashed"></h4>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm gap-2">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.5387 12.0352L10.819 6.25054L8.94764 7.58908C8.54335 7.87853 8.00665 7.87853 7.60236 7.58908L5.7328 6.25239L1.04856 12.0529C1.27435 12.1573 1.52083 12.2129 1.77321 12.2129H14.7768C15.0428 12.2129 15.3028 12.1512 15.5387 12.0352ZM4.75695 5.55442L0 2.1519V10.3809C0 10.671 0.0667899 10.9543 0.190915 11.2084L4.75695 5.55442ZM16.55 2.1519L11.7954 5.55257L16.378 11.1681C16.4903 10.9244 16.55 10.6557 16.55 10.3809V2.1519ZM0.27012 0.85978L8.275 6.58518L16.2799 0.85978C16.2095 0.743757 16.1262 0.635068 16.0304 0.536754C15.6983 0.192962 15.2473 0 14.7768 0H1.77321C1.30272 0 0.851733 0.192962 0.519551 0.536754C0.423797 0.635068 0.340458 0.743757 0.27012 0.85978Z"
                fill="#F703D0"
              />
            </svg>
            <h3>bijay@lovoj.com</h3>
          </div>
          <div className="flex items-center text-sm gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1475_2919)">
                <path
                  d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0001 10.8641 14 10.9467Z"
                  fill="#F703D0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1475_2919">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h3>9876786545</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
