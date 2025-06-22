import AboutMe from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import ContactUs from "../components/ContactUs/ContactUs";
import EfficientSection from "../components/Efficient/EfficientSection";
import Excellence from "../components/Excellence/Excellence";
import SeeYouSoon from "../components/SeeYouSoon/SeeYouSoon";

type Props = {}

const Home = (_props: Props) => {
	return (
		<>
			<EfficientSection />
			<Excellence />
			<AboutMe />
			<Blogs />
			<ContactUs />
			<SeeYouSoon />
		</>
	)
}

export default Home;
