// Buttons compoenent - note the onselet prop is a custom prop, any number of these ca be set

export default function TabButton({ children, isSelected, ...props }) {
  console.log("Tab Execute");

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
