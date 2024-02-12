import Image from "next/image";

// --------- utils

const embroidaryThreadColor = [
  { id: 1, imageLinks: "/Images/EThreadColor/e1.png", color: "#127d45" },
  { id: 1, imageLinks: "/Images/EThreadColor/e2.png", color: "#607102" },
  { id: 1, imageLinks: "/Images/EThreadColor/e3.png", color: "#a35207" },
  { id: 1, imageLinks: "/Images/EThreadColor/e4.png", color: "#b5c864" },
  { id: 1, imageLinks: "/Images/EThreadColor/e5.png", color: "#a7a7a7" },
  { id: 1, imageLinks: "/Images/EThreadColor/e6.png", color: "#882d79" },
  { id: 1, imageLinks: "/Images/EThreadColor/e7.png", color: "#b5a698" },
  { id: 1, imageLinks: "/Images/EThreadColor/e8.png", color: "#5FC033" },
  { id: 1, imageLinks: "/Images/EThreadColor/e9.png", color: "#5FC033" },
  { id: 1, imageLinks: "/Images/EThreadColor/e10.png", color: "#1ba852" },
  { id: 1, imageLinks: "/Images/EThreadColor/e12.png", color: "#646464" },
  { id: 1, imageLinks: "/Images/EThreadColor/e13.png", color: "#a6be5a" },
  { id: 1, imageLinks: "/Images/EThreadColor/e14.png", color: "#576216" },
  { id: 1, imageLinks: "/Images/EThreadColor/e15.png", color: "#b50092" },
  { id: 1, imageLinks: "/Images/EThreadColor/e16.png", color: "#c4c4c4" },
  { id: 1, imageLinks: "/Images/EThreadColor/e17.png", color: "#b7154d" },
];

export const ThreadColor = ({ heading }: { heading: string }) => {
  return (
    <div className="my-3">
      <div className="mb-2">
        <h2 className="font-[500] text-xl">{heading}</h2>
      </div>
      <div className="grid md:grid-cols-8 grid-cols-6 gap-4">
        {embroidaryThreadColor.map((item) => (
          <div key={item.id} className="">
            <Image
              src={item.imageLinks}
              width={20}
              height={20}
              className="w-10 h-10"
              alt="image alt"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
