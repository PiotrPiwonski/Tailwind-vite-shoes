export function Sidebar({children, isOpen, onClickClose}) {
    return (
        <div>
            <div className={`z-50 fixed top-0 right-0 w-full h-full bg-white transition
        ${isOpen ? "translate-x-0" : "translate-x-full"} transform duration-300 p-5
        md:w-[50%] lg:w-[35%] shadow-lg overflow-auto`}>
                <button
                    onClick={onClickClose}
                    className="absolute right-4 top-4 p-2 text-black font-bold"
                >
                    X
                </button>
                {children}
            </div>
            {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"/>}
        </div>

    )
}
