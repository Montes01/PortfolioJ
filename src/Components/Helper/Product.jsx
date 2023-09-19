
export const Product = ({src, title, desc,setDescription}) => {
  return (
    <div onClick={() => setDescription(desc)} className="hover:scale-105 hover:bg-slate-900 transition-all ease-in-out cursor-pointer p-3 bg-gray-950 gap-2 h-full w-[40%] flex flex-col justify-around items-center text-white">
        <img src={src} className="h-3/5"alt="" />
        <h3>{title}</h3>
    </div>
  )
}
