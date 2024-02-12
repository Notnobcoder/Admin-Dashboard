import { FieldValues, UseFormRegister } from "react-hook-form";

type ModalInputProps = {
  heading: string;
  placeholder: string;
  width: string;
  id: string;
  register: UseFormRegister<FieldValues>;
};

export const ModalInput: React.FC<ModalInputProps> = ({
  heading,
  placeholder,
  width,
  id,
  register,
}) => {
  return (
    <div className={`my-3`}>
      <h3 className="my-2 font-normal text-lg">{heading}</h3>
      <input
        {...register(id, { required: true })}
        id={id}
        className={`${
          width || "w-full"
        } outline-none border border-black/30 rounded-md px-4 py-3`}
        placeholder={placeholder}
      />
    </div>
  );
};
