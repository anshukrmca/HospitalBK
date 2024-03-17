import React from "react";

const MapLocation = () => {
  return (
    <div className="bg-[#212d37] p-6 md:flex gap-4 text-white">
      <div className="w-full overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 md:w-[600px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.391156909315!2d85.20397147361726!3d25.691470011506908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5c176fc82e25%3A0x1d865c1adae0e94d!2sNew%20B%20K%20Hospital!5e0!3m2!1sen!2sin!4v1710570797043!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="items-center flex justify-center mt-4">
    <div className="max-w-xl mx-auto">
        <p className="md:text-2xl text-amber-600 font-semibold">
            New B K Hospital
        </p>
        <p>
            <span className="font-semibold">Address</span> : Jauhari Bazar,Near SBI BANK, Vaishali, Bihar, India 844101
        </p>
        <p>
            <span className="font-semibold">Phone</span> : 9097333335
        </p>
        <p>
            <span className="font-semibold">Email</span> : Kumarrohit653@gmail.com
        </p>
        <p>
            <span className="font-semibold">Service</span> : 24 X 7
        </p>
    </div>
</div>

    </div>
  );
};

export default MapLocation;
