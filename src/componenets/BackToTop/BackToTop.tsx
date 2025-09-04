
import { Icons } from '../../assets/Svgs/index';

const BackToTop: React.FC = () => {


  return (
    <button
      className="fixed bottom-8 right-8 bg-blue1 hover:bg-blue2 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
      aria-label="Back to top"
    >
      <Icons.UpArrow />
    </button>
  );
};

export default BackToTop;