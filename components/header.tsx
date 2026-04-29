import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b bg-yellow-500">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-7 py-4">
                <h1 className="text-xl font-bold text-gray-800">
                    <img src="https://i.pinimg.com/originals/bf/79/0a/bf790a83f973ccba362e4c8ff0d6b352.jpg" alt="Logo" width={80} />
                </h1>

                {/*Navbar*/}
                <nav className="flex items-center gap-6 text-lg">
                    <a href="/">
                        <p className="flex border-b-2 border-transparent hover:border-green-400 transition">
                        Trang Chủ
                        </p>
                    </a>
                    <a href="/">
                        <p className="flex border-b-2 border-transparent hover:border-green-400 transition">
                        Cửa hàng
                        </p>
                    </a>
                </nav>
            </div>
        </header>
    )
};