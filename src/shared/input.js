import "./style.scss";
export const Select = ({ label, options, register, name }) => {
  return (
    <div className="text-[13px] w-full">
      <label className="text-main font-normal font-euclid mb-2">{label}</label>
      <select
        className="w-full p-2 text-text  input-signup "
        {...register}
        name={name}
      >
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
    </div>
  );
};
export const Input = ({
  label,
  placeholder,
  type,
  bg,
  register,
  name,
  value,
  onChange,
  suffix,
}) => {
  return (
    <>
      <div className="text-[13px] w-full">
        <label
          form="input-id"
          className="text-main font-normal text-sm font-euclid inline-block mb-1"
        >
          {label}
        </label>
        <div className="flex flex-col">
          <div className="relative">
            <input
              required
              name={name}
              value={value}
              onChange={onChange}
              {...register}
              type={type}
              placeholder={placeholder}
              id="input-id"
              className={`w-full text-sm font-euclid font-normal p-2 text-black input-signup ${
                bg ? "bg-main" : "bg-white"
              }`}
            />
            {suffix && (
              <div className="absolute text-black inset-y-0 right-0 flex items-center pr-3">
                {suffix}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
