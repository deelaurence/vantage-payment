interface ButtonProps {
    loading: boolean;
    text: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ loading, text }) => {
    return (
      <button
        className={`text-white mt-6 mb-4 w-full h-12 py-3 rounded-lg text-lg font-semibold ${
          loading ? 'bg-primaryColor100' : 'bg-primaryColor'
        }`}
        disabled={loading}
      >
       {loading?
       <div className="*:h-2  *:rounded-full *:w-2 *:bg-white flex justify-center gap-3 ">
        <p className="animate-pulse3"></p>
        <p className="animate-pulse2"></p>
        <p className="animate-pulse1"></p>
       </div>
       
       :

       <div>{text}</div>}
      </button>
    );
  };
  
  export default Button;
  