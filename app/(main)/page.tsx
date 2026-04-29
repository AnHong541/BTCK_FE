export default function TrangChu() {
  return (
    <div className="bg-gray-700 min-h-100 flex items-center">
      <div className="max-w-6xl mx-auto px-7 py-16 grid grid-cols-2 gap-12 items-center">
        
        {/*Ảnh */}
        <div className="flex justify-center">
          <div className="rounded-lg overflow-hidden w-80 h-96">
            <img 
              src="https://content.imageresizer.com/images/memes/Surprised-Black-Guy-meme-7.jpg" 
              alt="avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/*Text */}
        <div className="flex flex-col gap-6 bg-gray-500 bg-opacity-20 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white">
            Hello, I'm An.
          </h1>
          
          <p className="text-lg font-bold text-gray-200">
            I am a back-end developer with experience in building robust and efficient web applications.
          </p>
          
          <p className="text-lg font-bold text-gray-200">
            I have a passion for back-end development, UI design, and exploring new technologies.
          </p>

          <button className="bg-green-400 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg w-full transition">
            View Projects
          </button>
        </div>

      </div>
    </div>
  )
}