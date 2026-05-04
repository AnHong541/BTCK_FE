export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white text-center mb-12">
          ABOUT
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
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="flex-1">
              <div className="text-gray-700 font-mono text-sm leading-relaxed">
                <p className="whitespace-pre-wrap">
                  .... . .-.. .-.. --- / - .... .. ... / .. ... / .- / ... .. -- .--. .-.. . / .. -. - .-. --- -.. ..- -.-. - .. --- -. / .-- .-. .. - - . -.
                  / .. -. / -- --- .-. ... . / -.-. --- -.. . / - --- / -.. . -- --- -. ... - .-. .- - . / .... --- .-- / - . -..- - / -.-. .- -.
                 / -... . / - .-. .- -. ... ..-. --- .-. -- . -.. / .. -. - --- / -.. --- - ... / .- -. -.. / -.. .- ... .... . ...
                 / ..-. --- .-. / -.-. --- -- -- ..- -. .. -.-. .- - .. --- -. / .- -.-. .-. --- ... ... / -.. .. ... - .- -. -.-. . ...
                / ..- ... .. -. --. / .- / - .. -- . .-.. . ... ... / ... -.-- ... - . -- / - .... .- - / .-. . -- .- .. -. ...
                 / ..-. .- ... -.-. .. -. .- - .. -. --. / .- -. -.. / ..- ... . ..-. ..- .-.. / ..-. --- .-. / .-.. . .- .-. -. .. -. --.
                / -... .- ... .. -.-. / . -. -.-. --- -.. .. -. --. / -.-. --- -. -.-. . .--. - ...
                / - --- -.. .- -.-- / .- -. -.. / .... . .-.. .--. ... / -... . --. .. -. -. . .-. ...
                 / ..- -. -.. . .-. ... - .- -. -.. / ... .. --. -. .- .-.. ...
                / -.-. .-.. . .- .-. .-.. -.-- / .- -. -.. / -.-. .-. . .- - .. ...- . .-.. -.--
                / .. -. / .--. .-. .- -.-. - .. -.-. .
                </p>
              </div>

              {/* Alternative: Regular Text Description */}
              {/* <div className="text-gray-700">
                <h2 className="text-2xl font-bold mb-4">Our Product</h2>
                <p className="mb-4">
                  gay lỏd
                </p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t-2 border-gray-600"></div>
      </div>
    </div>
  );
}
