import { lazy } from "react";

const Hero = lazy(() => import("../Components/home/Hero"));
const ExploreCategories = lazy(
  () => import("../Components/home/ExploreCategories"),
);
const PopularDishes = lazy(() => import("../Components/home/PopularDishes"));
const DiscountBanner = lazy(() => import("../Components/home/DiscountBanner"));
const ProcessOverview = lazy(
  () => import("../Components/home/ProcessOverview"),
);
const CustomerTestimonials = lazy(
  () => import("../Components/home/CustomerTestimonials"),
);

function Home() {
  return (
    <>
      <Hero />
      <ExploreCategories />
      <PopularDishes />
      <DiscountBanner />
      <ProcessOverview />
      <CustomerTestimonials />
    </>
  );
}

export default Home;
