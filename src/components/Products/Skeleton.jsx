export default function Skeleton() {
    return (
        <div className="w-[100%] h-[100%] flex flex-col gap-y-3 bg-white p-2 shadow rounded-md hover:scale-101 cursor-pointer transition-transform relative">
            <div className="w-[100%] relative">
                <div className="skeleton w-[100%] aspect-square"></div>
            </div>
            <div className="flex flex-col h-[100px] items-start gap-y-3">
                <div className="flex justify-between w-[100%]">
                    <div className="skeleton w-[60%] h-[30px]"></div>
                    <div className="skeleton w-[30%] h-[30px]"></div>
                </div>
                <div className="w-[100%]">
                    <div className="skeleton w-[100%] h-[30px]"></div>
                </div>
                <div className="mt-auto">
                    <div className="skeleton w-[100px] h-[20px]"></div>
                </div>
            </div>
        </div>
    )
}