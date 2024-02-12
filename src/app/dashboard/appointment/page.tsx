import { Button } from "@/components/Button";
import { Inputs } from "@/components/Inputs";
import { searchIcon } from "@/imageLinks";
import Image from "next/image";
import { CardComponent } from "./(components)/CardComponent";
import Link from "next/link";

// util search image
const SearchImage = () => {
  return (
    <div>
      <Image src={searchIcon} width={20} height={20} alt="search icon" />
    </div>
  );
};

const Appointment = () => {
  return (
    <div>
      <div className="flex font-poppins flex-col gap-4 items-center md:flex-row">
        <Inputs
          placeholder="Search By Name"
          icon={<SearchImage />}
          name="hello"
        />
        <Link href={"/dashboard/appointment/add-appointment"}>
          <Button placeholder="Add Appointment" />
        </Link>
      </div>
      {/* gird item 3 */}
      <div className="grid gap-8 grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {/* start item */}
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default Appointment;
