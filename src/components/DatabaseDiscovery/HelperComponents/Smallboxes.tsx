const Smallboxes = ({
  values,
}: {
  values: {
    enqueue_waits: number;
    shared_buffers_mb: number;
    slow_queries: number;
  };
}) => {
  return (
    <div className="mt-5  flex justify-around gap-x-10 ">
      <div className="bg-white shadow-lg rounded-lg  text-lg flex items-center justify-center h-14 w-1/3">
        Enqueue Waits : <span className="text-[#1F74C2] ml-2">{values.enqueue_waits}</span>
      </div>
      <div className="bg-white shadow-lg rounded-lg  text-lg flex items-center justify-center h-14 w-1/3">
        Shared Buffers : <span className="text-[#1F74C2] ml-2"> {values.shared_buffers_mb}</span>
      </div>
      <div className="bg-white shadow-lg rounded-lg  text-lg flex items-center justify-center h-14 w-1/3">
        Work MEM : <span className="text-[#1F74C2] ml-2"> {values.slow_queries}</span>
      </div>
    </div>
  );
};

export default Smallboxes;
