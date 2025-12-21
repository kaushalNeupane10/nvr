import Image from "next/image";
import data from "@/data/experience";

export default function Experience() {
  return (
        <>
      <section className="bg-[#FFF7E6] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00311F]">
              More Than a Stay — It’s a Feeling
            </h2>
            {/* sub-heading */}
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4B6B5F]">
              Breathe fresh air, enjoy quiet moments, and experience thoughtful comforts that turn simple stays into lasting memories.
            </p>
          </div>

          {/* grid and mapin data */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-[#F3F0E9] shadow-lg p-6 text-center transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* imgages */}
                <div className="relative mx-auto mb-6 h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="w-130 h-130 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* description*/}
                <h3 className="text-xl font-semibold text-[#00311F]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-[#4B6B5F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
