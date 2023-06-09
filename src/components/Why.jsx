import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";

const Data = [
  {
    image: image1,
    Tittle: "One on One Mentorship",
  },
  {
    image: image2,
    Tittle: "Top Mentors",
  },
  {
    image: image3,
    Tittle: "Experienced On-Site Mentors",
  },
  {
    image: image4,
    Tittle: "Confidential Conversations",
  },
  {
    image: image5,
    Tittle: "Commutiy Support",
  },
  {
    image: image6,
    Tittle: "Authentic Guidance",
  },
];

const Why = () => {
 
  return (
    <div  className="bg-gradient-to-r from-[#e8f4ef] to-[#faebe5]  p-8 flex flex-col items-center justify-center  rounded-lg">
      <div
      >
      <h1 className="text-3xl md:text-5xl font-semibold">
        Why{" "}
        <span className="bg-gradient-to-l from-cyan-500 via-cyan-300 to-cyan-500 text-transparent  bg-clip-text font-bold ">
        MentorHeal?
        </span>
      </h1>
      </div>
      <div 
      className="grid grid-cols-1 md:grid-cols-6 justify-center place-items-center  my-20 text-center gap-16">
        {Data.map((item, index) => {
          return (
            <div
              className="space-y-5 flex flex-col items-center hover:scale-105 duration-300 ease-in-out "
              key={index}
            >
              <img src={item.image} className="max-w-[230px] md:max-w-full" />
              <h1>{item.Tittle}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
