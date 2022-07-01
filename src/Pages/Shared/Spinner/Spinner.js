
const Spinner = () => {
  return (
    <div className="w-screen h-screen fixed flex items-center justify-center bg-base-100 z-50">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-16 h-16 border-4 border-blue-400 border-double rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Spinner;
