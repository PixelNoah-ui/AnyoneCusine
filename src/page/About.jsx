const familyData = [
  {
    name: "Abdulsemed ",
    role: "Founder & Head Chef",
    bio: "Born and raised in Harar, Abdulsemed brings 25 years of culinary expertise and his family's treasured recipes.",
    image: "/images/anyone.jpg",
  },
  {
    name: "Mensur ",
    role: "Sous Chef",
    bio: "Specializing in traditional spice blends, Mensur ensures every dish meets our exacting standards of authenticity.",
    image: "/images/mensur.jpg",
  },
  {
    name: "Mohammed",
    role: "Pastry Chef",
    bio: "Creator of our famous honey bread and traditional Ethiopian desserts that complete your dining experience.",
    image: "images/mame.jpg",
  },
  {
    name: "Jems",
    role: "General Manager",
    bio: "Ensuring every guest feels the warmth of Ethiopian hospitality from the moment they walk in.",
    image: "/images/jems.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img
          src="/images/bg-image.jpg"
          alt="Anyonecuisine"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Our Ethiopian Story
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-white">
              Preserving tradition, sharing flavors, connecting cultures
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto w-full px-4 py-16 dark:bg-slate-800">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              alt="Traditional Ethiopian coffee ceremony"
              className="h-auto w-full rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-amber-900 dark:text-white">
              The Taste of Ethiopia
            </h2>
            <p className="mb-4 text-gray-700 dark:text-slate-300">
              Founded in 2017 EC,{" "}
              <span className="font-semibold text-amber-800 dark:text-amber-400">
                ANYoneCusine
              </span>{" "}
              began as a small family kitchen sharing authentic Ethiopian
              cuisine with our local community. What started as a passion
              project has grown into a beloved restaurant known for its
              traditional recipes passed down through generations.
            </p>
            <p className="mb-4 text-gray-700 dark:text-slate-300">
              Our founder,{" "}
              <span className="font-semibold dark:text-slate-100">
                Abdulsemed Abdulshukur
              </span>
              , brought her grandmother's secret spice blends from Harar,
              creating dishes that tell the story of Ethiopia's rich culinary
              heritage.
            </p>
            <p className="text-gray-700 dark:text-slate-300">
              We take pride in using traditional cooking methods, importing key
              ingredients directly from Ethiopia, and maintaining the authentic
              flavors that make our cuisine unique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-100 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-amber-900 dark:text-white">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-slate-800 dark:shadow-slate-600">
              <div className="mb-4 text-4xl text-amber-600">🌱</div>
              <h3 className="mb-3 text-xl font-semibold text-amber-800 dark:text-amber-400">
                Authenticity
              </h3>
              <p className="text-gray-700 dark:text-slate-300">
                We stay true to traditional recipes and cooking techniques,
                ensuring every dish carries the genuine flavors of Ethiopia.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-slate-800 dark:shadow-slate-600">
              <div className="mb-4 text-4xl text-amber-600">❤️</div>
              <h3 className="mb-3 text-xl font-semibold text-amber-800 dark:text-amber-400">
                Community
              </h3>
              <p className="text-gray-700 dark:text-slate-300">
                Food is about connection. We foster a welcoming space where
                people can gather and share in the Ethiopian tradition of
                communal dining.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-slate-800 dark:shadow-slate-600">
              <div className="mb-4 text-4xl text-amber-600">🌍</div>
              <h3 className="mb-3 text-xl font-semibold text-amber-800 dark:text-amber-400">
                Sustainability
              </h3>
              <p className="text-gray-700 dark:text-slate-300">
                We source ingredients responsibly, support Ethiopian farmers,
                and minimize waste in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto px-4 py-16 dark:bg-slate-800">
        <h2 className="mb-12 text-center text-3xl font-bold text-amber-900 dark:text-white">
          Meet Our Family
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {familyData.map((member, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md dark:bg-slate-900 dark:shadow-slate-600"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-500">
                  {member.name}
                </h3>
                <p className="mb-3 text-amber-600 dark:text-amber-400">
                  {member.role}
                </p>
                <p className="text-gray-700 dark:text-slate-300">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
