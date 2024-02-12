type ModalDropdownProps = {
  ModelBorderValue: any;
  heading: string;
};

type ItemD = {
  id: number;
  heading: string;
};

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  ModelBorderValue,
  heading,
}) => {
  return (
    <div className={`my-3`}>
      {/* <h3 className="my-2 text-lg">{heading}</h3> */}
      <h3 className="my-2 font-normal text-lg">{heading}</h3>
      <select className="w-full outline-none bg-white text-black border px-3 py-3 border-black/30 rounded-md">
        <option value="" disabled selected hidden>
          Select Store Type
        </option>
        {ModelBorderValue.map((_item: ItemD) => (
          <option key={_item.id} value={_item.heading}>
            <h3>{_item.heading}</h3>
          </option>
        ))}
      </select>
    </div>
  );
};
