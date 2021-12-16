interface InputProps {
  as?: string;
  label: string;
  placeholder: string;
  helper?: string;
  className?: string;
}

export function Input({ as, label, placeholder, helper, className }: InputProps) {
  return (
    <div className={`w-full px-2 mb-6 md:mb-0 ${className}`}>
      <label htmlFor="" className="block uppercase text-gray-700 font-bold mb-2 tracking-wider">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          className="block py-3 px-4 rounded-md text-gray-700 w-full border border-green-500 mb-2 outline-none no-resize appearance-none resize-none h-48"
          placeholder={placeholder}
        />
      ) : (
        <input
          type="text"
          className="block py-3 px-4 rounded-md text-gray-700 w-full border border-green-500 mb-2 outline-none"
          placeholder={placeholder}
        />
      )}
      {helper && <p className="text-sm italic">{helper}</p>}
    </div>
  );
}
