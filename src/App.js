function Page1() {
  return (
    <div className="bg-[url('https://i.imgur.com/gJdlb1M.png')] h-[50%] bg-cover bg-center text-white p-4 lg:w-full flex flex-col items-center justify-center">
      <img
        className="w-1/2 sm:w-3/4 md:w-1/2 lg:w-2/4 mx-auto my-4"
        src="https://i.imgur.com/AU3rBfq.png"
        alt="Ảnh mẫu"
      />
      <div className="text-center lg:w-[70%]">
        <div>
          Viettel&You 2025 muốn đưa các nhà báo tham gia vào hành trình khám phá
          những giá trị tinh hoa của di sản văn hóa Việt Nam với sự kết hợp của
          công nghệ.
        </div>
        <div>
          Từng câu chuyện, nét nghệ thuật truyền thống và làng nghề lâu đời được
          tái hiện và lan tỏa qua lăng kính của công nghệ hiện đại, giúp kết nối
          quá khứ với hiện tại một cách sống động và sáng tạo.
        </div>
        <div className="text-red-600">Trụ sở Viettel</div>
        <div className="text-red-600">06 | 01 | 2025</div>
      </div>
    </div>
  );
}

export default Page1;
