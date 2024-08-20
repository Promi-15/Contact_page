import { FaRegMessage } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
export default function ContactForm() {
    const onViaCallSubmit = () => {
     console.log("I am on call")
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[3].value)
        console.log(e.target[4].value)
        console.log(e.target[5].value)
    }

  return (
    <div className="flex max-w-7xl m-auto justify-between mt-10">
          <form onSubmit={onSubmit} className="flex  justify-between gap-40" >
          <div >
              <div className="flex  justify-between">
              <div><button className="py-3 px-7 border-2 flex items-center gap-4 bg-black text-white font-medium rounded-md"><FaRegMessage /><span>Via Support Chat</span></button></div>
              <div><button className="py-3 px-14 border-2 flex items-center gap-4 bg-black text-white font-medium rounded-md" onClick={onViaCallSubmit}><IoMdCall /><span>Via Call</span></button></div>
              </div>
              <div>
              <div><button className="py-3 w-full mt-5   justify-center border-2 flex items-center  gap-4 font-medium rounded-md"><FaRegMessage /><span>Via Email Form</span></button></div>
              </div>
              <div className="grid grid-cols-1">
                  <div>
                  <label style={{ position: 'absolute', top: '365px',   background:'white',left:'350px'}}>
                      Name
                  
                  </label>
                  <input className="border-2 w-full p-2 mt-5 rounded-md"   type="text" name="" id="" />
                  </div>
                  <div>
                  <label style={{ position: 'absolute', top: '428px',  background:'white',left:'350px'}}>
                      Email
                  
                  </label>
                  <input className="border-2 w-full p-2 mt-5 rounded-md"  type="email" name="" id="" />
                  </div>
                  <div>
                  <label style={{ position: 'absolute', top: '495px',  background:'white',left:'350px'}}>
                      text
                  
                  </label>
                  <input className="border-2 w-full p-2 mt-5 rounded-md"  type="text" name="" id="" />
                 </div>
              </div>
              <div>
              <button className="py-3 w-full mt-10 justify-center border-2 flex items-center gap-4 bg-black text-white font-medium rounded-md">Submit</button>
              </div>
          </div>
          <div>
              <img src="/public/form.svg" alt="" className="w-5/6"/>
         </div>
        </form>
    </div>
  )
}
