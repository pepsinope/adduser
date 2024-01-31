import '../style.css';
import { FaCircleUser } from "react-icons/fa6";

const Main = () => {
  return (
    <div className='ml-56'>
      <div className='mx-5 my-5 flex flex-col justify-start text-black font-bold '>
        <p className='text-3xl '>ยินดีต้อนรับเข้าสู่ระบบ</p>
        <div className='flex flex-row p-6 items-center'>
          <FaCircleUser size={60} />
          <p className='pl-6 text-rose-color text-2xl '>คุณสมศรี สนุกซุกซน</p>
        </div>
        <div className='flex flex-row justify-center'>
          <div className='bg-from-color rounded-lg  p-5 mx-10 w-9/12 justify-center '>
              <p className='justify-center text-xl'>ประกาศเพิ่มเติม</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Main;