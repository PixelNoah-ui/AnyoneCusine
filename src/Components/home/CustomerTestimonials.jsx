import QouteCard from "../ui/QouteCard";

const testimonials = [
  {
    name: "Yasen Mohammed",
    location: "Addis Abeba",
    quote:
      ' "The Doro Wat was incredible! It reminded me of my grandmother is  cooking back in Ethiopia."',
    image: "/images/yasin.jpg",
    id: 1,
  },
  {
    name: "Yumna Queen",
    location: "Jemo",
    quote:
      '"I have tried Ethiopian food in many places, but this is by far the most authentic and delicious."',
    image: "/images/yumni.jpg",
    id: 2,
  },
  {
    name: "Merwan Abdela",
    location: "Ayer tena",
    quote:
      '"The vegetarian options are amazing. The Shiro and Misir Wat are my favorites!"',
    image: "/images/merwan.jpg",
    id: 3,
  },
];

function CustomerTestimonials() {
  return (
    <div className="px-4 py-16 dark:bg-slate-800 dark:text-white">
      <div className="container mx-auto">
        <h1 className="mb-7 text-center text-3xl font-bold">
          What Our Customers Say
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((qoutes) => (
            <QouteCard qoutes={qoutes} key={qoutes.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
