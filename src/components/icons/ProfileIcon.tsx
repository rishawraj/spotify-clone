import { SVGProps, useEffect, useRef, useState } from "react";

export function BiPersonCircleComponent(props: SVGProps<SVGSVGElement>) {
  const [clicked, setClicked] = useState(false);
  const myRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (myRef.current && !myRef.current.contains(e.target as Node)) {
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [clicked]);

  return (
    <div
      ref={myRef}
      onClick={handleClick}
      className={clicked ? "custom-profile-clicked" : "custom-profile"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
      >
        <g fill="currentColor">
          <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z"></path>
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          ></path>
        </g>
      </svg>
      <h3>Profile </h3>
      {clicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          {...props}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          {...props}
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      )}

      {/* tooltip */}
      {clicked && (
        <div className="absolute bg-gray-200 text-black p-4 w-36 right-30 top-16">
          <h3>Account</h3>
          <h3>Log out</h3>
        </div>
      )}
    </div>
  );
}
