/* eslint-disable react/prop-types */
export default function Button({text}) {
  return (
    <button className="text-xl bg-white text-secondary-theme px-8 py-1 rounded-3xl cursor-pointer hover:scale-102 transition-transform">
        {text}
    </button>
  )
}
