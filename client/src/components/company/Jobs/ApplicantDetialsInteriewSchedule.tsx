import { useState } from 'react';
import LOGO from '../../../assets/googleIcon.png';
import Modal from '../../common/ModalBox';

const ApplicantInterviewSchedule = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [testType, setTestType] = useState<string>("");
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");

  const handleScheduleInterview = () => {
    // Handle scheduling logic here
    // This is a placeholder, you can replace it with your actual logic
    console.log('Scheduling interview...');
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 mt-4">
        <div>
          <h1 className="text-gray-800 ms-3 text-sm font-semibold">Interview List</h1>
        </div>
        <div>
          <h1 onClick={() => setIsModalOpen(true)} className="font-semibold hover:cursor-pointer text-sm text-lightgreen">+ Add Schedule Interview</h1>
        </div>
      </div>
      <div className="border mt-5 flex justify-between flex-wrap">
        <div className='ms-3 mt-4 flex gap-x-3'>
          <img src={LOGO} alt="" className='w-12 h-12 rounded-full border' />
          <div className='mt-2'>
            <h1 className='text-sm text-blue-gray-800 font-semibold'>Kathryn</h1>
            <h1 className='text-xs text-gray-600'>written test</h1>
          </div>
        </div>
        <div className='mt-5 md:me-40'>
          <h1 className='text-sm font-semibold text-gray-800'>10 AM</h1>
          <h1 className='text-xs'>RoomId .<span>company name</span> </h1>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>
          <form onSubmit={handleScheduleInterview}>
            <div>
              <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Test Type</label>
              <input required name="testType" className="border rounded-md py-2 px-2 mt-2 w-full outline-none" placeholder='Enter Test Type' value={testType} onChange={(e) => setTestType(e.target.value)} />
            </div>
            <div className='mt-4'>
              <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Select Employee</label>
              <select required name="employeeId" className="border rounded-md py-2 px-2 w-full outline-none" value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
                <option value="" defaultChecked hidden className='text-gray-600'>Select Employee</option>
                <option value="1" className='text-gray-600'>Employee 1</option>
                <option value="2" className='text-gray-700'>Employee 2</option>
                <option value="3" className='text-gray-700'>Employee 3</option>
                <option value="4" className='text-gray-700'>Employee 4</option>
              </select>
            </div>
            <div className='mt-4'>
              <label htmlFor="" className='text-gray-600 text-sm font-semibold'>Select Date and Time</label>
              <input required type="datetime-local" className='border rounded-md py-2 px-2 w-full outline-none' />
            </div>
            <div className='mt-4 flex justify-center'>
              <button type="submit" className='bg-lightgreen text-white font-semibold text-center px-3 py-2 rounded-md'>Schedule</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ApplicantInterviewSchedule;
