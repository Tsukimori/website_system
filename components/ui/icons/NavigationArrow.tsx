interface NavigationArrowProps {
  direction: "left" | "right";
  className?: string;
}

export function NavigationArrow({
  direction,
  className = "",
}: NavigationArrowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="40"
      viewBox="0 0 16 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-[16px] h-[40px] ${className}`}
    >
      {direction === "left" ? (
        <path d="M14 38L2 20L14 2" />
      ) : (
        <path d="M2 38L14 20L2 2" />
      )}
    </svg>
  );
}
