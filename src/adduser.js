import './index.css';
import MiniDrawer from './components/MiniDrawer';

function Adduser() {
  return (
    <div style={{ flex: 20 }} className='mx-5 my-5'>
      <MiniDrawer/>
      <div style={{ flex: 5 }} className=" flex flex-row justify-start text-black text-3xl font-extrabold">
        <div className='pr-1'>ข้อมูลผู้ใช้งาน</div>
        <div className='text-rose-color'>อาจารย์</div>
      </div>
      <div style={{ flex: 5 }} className='flex flex-row justify-center text-gray-50 text-xl font-bold p-5'>
        <button className='flex flex-col rounded-md bg-button-color p-3.5 w-1/5 p-5 m-5 drop-shadow-lg hover:bg-rose-800 active:bg-neutral-800 justify-center items-center'> <p>อาจารย์</p><p>5</p> </button>
        <button className='flex flex-col rounded-md bg-button-color p-3.5 w-1/5 m-5 p-5 drop-shadow-lg hover:bg-rose-800 active:bg-neutral-800 justify-center items-center' > <p>ผู้ดูแลระบบ</p><p>5</p> </button>
      </div>
      <div style={{ flex: 10 }} className='flex flex-row justify-center'>
        <div className='bg-from-color rounded-lg  p-5 mx-10 w-9/12'>
          <div className='flex justify-end mb-5'><button className='bg-slate-50 rounded-full hover:bg-rose-800 active:bg-neutral-800 '><img src="https://cdn0.iconfinder.com/data/icons/phosphor-light-vol-4/256/user-circle-plus-light-256.png" width={40} alt="add user" /></button></div>
          <form class=" h-60 touch-none justify-brtween m-6 text-name-color">

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

            <div className='justify-between flex flex-row drop-shadow-md bg-white rounded-full m-3'>
              <div className='flex items-center'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png" width={40} alt="add user" />
                <div className='flex flex-col font-bold'>
                  <p>สมใจ แสนดี</p>
                  <p>สถานะ: อาจารย์</p>
                </div>
              </div>
              <div className='flex items-center mr-2'>
                <img className='m-2' src="https://cdn1.iconfinder.com/data/icons/line-free/24/Recycle_bin_-256.png" width={20} alt="delete" />
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
