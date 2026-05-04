export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          CONTACT
        </h1>

        {/* Main Content Box */}
        <div>
          {/* Yellow Background Section */}
          <div className="bg-yellow-400 p-8 flex gap-8 items-center rounded-2xl">
            {/* Image Section */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/logo.png"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="flex-1">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Email:</h2>
                  <p className="text-lg text-white font-semibold">
                    ...................@gmail.com
                  </p>
                  <div className="border-b-2 border-gray-700 mt-4"></div>
                </div>

                {/* Facebook */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">FACEBOOK:</h2>
                  <a
                    href="https://www.facebook.com/an.tranvohong.5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white font-semibold hover:underline"
                  >
                    https://www.facebook.com/an.tranvohong.5
                  </a>
                  <div className="border-b-2 border-gray-700 mt-4"></div>
                </div>

                {/* Phone */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">PHONE:</h2>
                  <p className="text-lg text-white font-semibold">
                    0*..................1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-gray-600"></div>
      </div>
    </div>
  );
}
