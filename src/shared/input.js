export const Select = ({ label, options, register, name }) => {
  return (
    <div className="text-[13px] w-full">
      <label className="text-main font-normal font-euclid mb-2">{label}</label>
      <select
        className="w-full p-2 text-text  border border-border rounded "
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
        <label className="text-main font-normal font-euclid mb-2">
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
              className={`w-full text-sm font-euclid font-normal p-2 text-black border border-border rounded-md ${
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
