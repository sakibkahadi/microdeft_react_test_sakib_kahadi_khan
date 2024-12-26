const Button = ({ text, onClick }: { text: string; onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative border items-center justify-start inline-block w-fit px-10 py-3 overflow-hidden font-medium transition-all bg-[#0072bd] drop-shadow-lg rounded-lg  group "
    >
      <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100  transition-all border-slate-800 rounded-lg "></span>
      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        {text}
      </span>
    </div>
  );
};

export default Button;
