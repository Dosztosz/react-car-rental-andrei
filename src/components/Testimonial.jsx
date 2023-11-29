import { Carousel } from "@material-tailwind/react";
import quoteIcon from "../assets/quote-icon.svg";

const Testimonial = () => {
  return <div>
    <img src={quoteIcon} alt="" className="mx-auto" />
    <h3 className="text-light-gray text-3xl text-center tracking-wider">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda delectus quia, eius illo repudiandae similique animi aliquid quam sapiente asperiores quasi modi ducimus veniam ad corrupti voluptates nihil error doloribus quidem. Vero sit nostrum perferendis iusto laboriosam sint incidunt harum consequuntur maxime, tempora, error libero at tenetur recusandae illo nulla!
    </h3>

    <p className="text-dark-gray font-bold text-center upperccase mt-[30px]">
      James Rodrigo
    </p>
  </div>
};

export default Testimonial;
