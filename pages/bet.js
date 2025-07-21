import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BetPage() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [studentId, setStudentId] = useState('');
  const [bets, setBets] = useState({});
  const [showImage, setShowImage] = useState(false);

  const majors = [
    { name: "An toàn thông tin (CS)", threshold: 23.5 },
    { name: "Công nghệ Kỹ thuật Cơ điện tử (MET)", threshold: 22.8 },
    { name: "Công nghệ Sinh học - Phát triển thuốc (BIT)", threshold: 22.6 },
    { name: "Công nghệ Thông tin - Truyền thông (ICT)", threshold: 23.5 },
    { name: "Hóa học (CH)", threshold: 21 },
    { name: "Khoa học dữ liệu (DS)", threshold: 23.15 },
    { name: "Khoa học Môi trường Ứng dụng (AES)", threshold: 19.1 },
    { name: "Khoa học và Công nghệ thực phẩm (FST)", threshold: 21.45 },
    { name: "Khoa học và Công nghệ Y khoa (MST)", threshold: 22.05 },
    { name: "Khoa học vật liệu tiên tiến và Công nghệ Nano (AMSN)", threshold: 21.9 },
    { name: "Khoa học Vũ trụ và Công nghệ Vệ tinh (SST)", threshold: 21.3 },
    { name: "Kỹ thuật điện và Năng lượng tại tạo (EER)", threshold: 20.85 },
    { name: "Kỹ thuật Ô tô (ATE)", threshold: 22.25 },
    { name: "Toán ứng dụng (MAT)", threshold: 20.9 },
    { name: "Công nghệ vi mạch bán dẫn (SIC)", threshold: 25.5 },
    { name: "Dược học (PHA)", threshold: 22.65 },
  ];

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (!savedNickname) {
      router.push('/');
    } else {
      setNickname(savedNickname);
    }
  }, []);

  const handleBet = (majorName, type) => {
    setBets((prev) => ({
      ...prev,
      [majorName]: prev[majorName] === type ? null : type,
    }));
  };

  const handleSubmit = () => {
    console.log('Nickname:', nickname);
    console.log('Student ID:', studentId);
    console.log('Bets:', bets);
    alert("Dự đoán của bạn đã được ghi nhận!");
  };

  return (
    <main className="p-6 max-w-3xl mx-auto text-center space-y-6">
      <h1 className="text-2xl font-bold">Chào {nickname}!</h1>

      <input
        type="text"
        placeholder="Nhập mã SV hoặc SĐT"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <button
        onClick={() => setShowImage(!showImage)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showImage ? "Ẩn ảnh điểm chuẩn" : "Hiện ảnh điểm chuẩn"}
      </button>

      {showImage && (
        <div className="mb-6">
          <Image
            src="/diem-chuan-2023-2024.png"
            alt="Điểm chuẩn"
            width={800}
            height={600}
            className="mx-auto rounded shadow-lg"
          />
        </div>
      )}

      <h2 className="text-xl font-semibold">Chọn OVER hoặc UNDER</h2>

      <div className="space-y-4">
        {majors.map(({ name, threshold }) => (
          <div key={name} className="bg-white rounded p-4 shadow-sm">
            <p className="font-semibold mb-2">{name} – Mốc: {threshold}</p>
            <div className="space-x-4">
              <button
                onClick={() => handleBet(name, 'OVER')}
                className={`px-4 py-1 rounded ${
                  bets[name] === 'OVER'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 hover:bg-green-100'
                }`}
              >
                OVER
              </button>
              <button
                onClick={() => handleBet(name, 'UNDER')}
                className={`px-4 py-1 rounded ${
                  bets[name] === 'UNDER'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 hover:bg-red-100'
                }`}
              >
                UNDER
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Gửi Dự Đoán
      </button>
    </main>
  );
}
