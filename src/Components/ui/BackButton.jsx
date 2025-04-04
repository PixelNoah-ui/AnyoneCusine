import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer items-center gap-1 transition-colors duration-200 hover:text-amber-600 hover:underline"
      onClick={() => navigate(-1)}
    >
      <HiOutlineChevronLeft />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
