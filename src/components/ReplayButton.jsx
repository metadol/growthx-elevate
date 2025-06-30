const ReplayButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed cursor-pointer bottom-8 p-3 bg-black text-white rounded-lg flex items-center gap-2 shadow-lg "
    style={{
      boxShadow: `
        0 4px 8px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.15)
      `
    }}

  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M1 4v6h6M23 20v-6h-6" stroke="currentColor" strokeWidth="2" />
      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke="currentColor" strokeWidth="2" />
    </svg>
    <span className="text-sm font-semibold">Replay</span>
  </button>
);

export default ReplayButton;
