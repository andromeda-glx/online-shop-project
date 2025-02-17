/* eslint-disable react/prop-types */
export default function Feature({imgURL}) {
  return (
    <div className={`w-[100%] h-[360px] bg-[url(${imgURL})] bg-contain bg-no-repeat`}>
    </div>
  )
}
