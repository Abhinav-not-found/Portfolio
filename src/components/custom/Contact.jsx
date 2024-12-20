import { LinkedinLogo, GithubLogo, At } from "@phosphor-icons/react";
import NodeImage from '../../assets/images/Nodejs.png'
import ExpressImage from '../../assets/images/Expressjs.png'
import ReactImage from '../../assets/images/Reactjs.png'
import MongoDbImage from '../../assets/images/Mongodb.png'

const Contact = () => {
  return (
    <div className="mt-10 flex items-start justify-between">
      <div className="flex gap-5">
        <LinkedinLogo className="cursor-pointer size-7 hover:text-blue-500 " size={32} />
        <GithubLogo className="cursor-pointer size-7 hover:text-green-500" size={32} />
        <At className="cursor-pointer size-7 hover:text-red-500" size={32} />
      </div>
      <div className="flex gap-5 items-center">
        <div className="flex gap-0 items-center font-poppins bg-stone-50 hover:bg-stone-100 border border-gray-200 hover:border-gray-400 pr-2 py-1 rounded-md">
          <img src={MongoDbImage} className="h-auto w-6" />
          <p>MongoDb</p>
        </div>
        <div className="flex gap-2 items-center font-poppins bg-stone-50 hover:bg-stone-100 border border-gray-200 hover:border-gray-400 px-2 py-1 rounded-md">
          <img src={ExpressImage} className="h-auto w-6" />
          <p>Express</p>
        </div>
        <div className="flex gap-2 items-center font-poppins bg-stone-50 hover:bg-stone-100 border border-gray-200 hover:border-gray-400 px-2 py-1 rounded-md">
          <img src={ReactImage} className="h-auto w-6" />
          <p>React</p>
        </div>
        <div className="flex gap-2 items-center font-poppins bg-stone-50 hover:bg-stone-100 border border-gray-200 hover:border-gray-400 px-2 py-1 rounded-md">
          <img src={NodeImage} className="h-auto w-6" />
          <p>Node</p>
        </div>
      </div>

    </div>
  )
}

export default Contact

