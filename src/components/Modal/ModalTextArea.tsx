import { UseFormRegister, FieldValues } from "react-hook-form";

type ModelTextAreaProps = {
  heading: string;
  placeholder: string;
  width: string;
  id: string;
  register: UseFormRegister<FieldValues>;
};

export const ModelTextArea: React.FC<ModelTextAreaProps> = ({
  heading,
  placeholder,
  width,
  id,
  register,
}) => {
  return (
    <div className={`my-3`}>
      <h3 className="my-2 font-normal text-lg">{heading}</h3>
      <textarea
        {...register(id, { required: true })}
        className={`${
          width || "w-full"
        } w-full outline-none py-4 h-[196px] px-3 border border-black/30 rounded-md`}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};
