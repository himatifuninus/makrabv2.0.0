import { useController } from "react-hook-form";

const Checkbox = (props) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);
  return (
    <section className="py-4  max-w-xs  w-[80vw]">
      <input type="checkbox" {...{ ...props, ...field }} />
      <label htmlFor={props.name} className="p-2">
        Dengan mendaftar makrab berarti saya menyetujui ketentuan dan tata
        tertib yang telah ditentukan
      </label>
    </section>
  );
};

export default Checkbox;
