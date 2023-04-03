const Lock = ({ width = "18", height = "18", className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3173 7.08585V5.4756C12.3173 3.59085 10.7888 2.06235 8.90406 2.06235C7.01931 2.0541 5.48481 3.5751 5.47656 5.4606V5.4756V7.08585"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.7622 15.9372H6.0315C4.461 15.9372 3.1875 14.6645 3.1875 13.0932V9.87647C3.1875 8.30522 4.461 7.03247 6.0315 7.03247H11.7622C13.3327 7.03247 14.6062 8.30522 14.6062 9.87647V13.0932C14.6062 14.6645 13.3327 15.9372 11.7622 15.9372Z"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.89844 10.652V12.3178"
        stroke="#23262F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Lock;
