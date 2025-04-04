import Button from "../ui/Button";

function Hero() {
  return (
    <div className="relative h-[80vh] w-full bg-gradient-to-br bg-[url('/images/bg-image.webp')] from-gray-800 to-gray-300 bg-cover">
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="ml-7 max-w-xl">
          <h1 className="mb-4 text-4xl font-bold text-slate-50 md:text-5xl lg:mt-6 lg:text-6xl">
            Authentic Ethiopian Cuisine
          </h1>
          <p className="mb-8 text-base font-normal text-slate-50">
            Experience the rich flavors and traditions of Ethiopia delivered
            fresh to your door. Our dishes are prepared with authentic spices
            and recipes passed down through generations.
          </p>
          <div className="flex space-x-4">
            <Button variant="primary" size="lg" to="/menu">
              Order Now
            </Button>
            <Button variant="secondary" size="lg" to="/menu">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
