import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Davis",
      rating: 5,
      text: "Exceptional service! My car runs better than ever after their tune-up.",
      avatar: "JD",
    },
    {
      name: "Sarah Wilson",
      rating: 5,
      text: "Honest, reliable, and affordable. They found the issue quickly and fixed it right.",
      avatar: "SW",
    },
    {
      name: "Mike Thompson",
      rating: 4,
      text: "Great customer service and fair pricing. Will definitely be returning for all my car needs.",
      avatar: "MT",
    },
  ];

  return (
    <>
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              {
                "Don't just take our word for it - hear from our satisfied customers"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
