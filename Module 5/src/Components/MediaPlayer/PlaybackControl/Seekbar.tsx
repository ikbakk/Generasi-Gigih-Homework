const Seekbar = () => {
  return (
    <div className="flex w-full items-center justify-center gap-2 text-primaryWhite">
      <p>00:00</p>
      <input
        readOnly
        className="w-2/3"
        type="range"
        value={0}
        min={0}
        max={100}
      />
      <p>03:00</p>
    </div>
  );
};

export default Seekbar;
