import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function BetPage() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [studentId, setStudentId] = useState('');
  const [bets, setBets] = useState({});
  const [showImage, setShowImage] = useState(false);
  
const majors = [
  { name: "An toàn thông tin (CS)", threshold: 22.35 },
  { name: "Công nghệ Kỹ thuật Cơ điện tử (MET)", threshold: 22.6 },
  { name: "Công nghệ Sinh học - Phát triển thuốc (BIT)", threshold: 21.85 },
  { name: "Công nghệ Thông tin - Truyền thông (ICT)", threshold: 22.65 },
  { name: "Hóa học (CH)", threshold: 20.5 },
  { name: "Khoa học dữ liệu (DS)", threshold: 21.95 },
  { name: "Khoa học Môi trường Ứng dụng (AES)", threshold: 18.95 },
  { name: "Khoa học và Công nghệ thực phẩm (FST)", threshold: 20.85 },
  { name: "Khoa học và Công nghệ Y khoa (MST)", threshold: 21.6 },
  { name: "Khoa học vật liệu tiên tiến và Công nghệ Nano (AMSN)", threshold: 21.55 },
  { name: "Khoa học Vũ trụ và Công nghệ Vệ tinh (SST)", threshold: 21 },
  { name: "Kỹ thuật điện và Năng lượng tại tạo (EER)", threshold: 20.6 },
  { name: "Kỹ thuật Ô tô (ATE)", threshold: 21.75 },
  { name: "Toán ứng dụng (MAT)", threshold: 20.5 },
  { name: "Công nghệ vi mạch bán dẫn (SIC)", threshold: 25.2 },
  { name: "Dược học (PHA)", threshold: 22.55 },
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
    <main className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Chào {nickname}!</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Nhập mã SV hoặc SĐT"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        onClick={() => setShowImage(!showImage)}
        className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showImage ? "Ẩn ảnh điểm chuẩn" : "Hiện ảnh điểm chuẩn"}
      </button>

      {showImage && (
        <div className="mb-6">
          <img
            src="/diem-chuan-2023-2024.png"
            alt="Điểm chuẩn"
            className="mx-auto rounded shadow-lg max-w-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            ⚠️ Nếu ảnh không hiển thị, đảm bảo bạn đã đặt đúng file vào thư mục <code>/public/</code>!
          </p>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Chọn OVER hoặc UNDER</h2>
      {majors.map(({ name, threshold }) => (
        <div key={name} className="mb-4">
          <p className="font-semibold">{name} – Mốc: {threshold}</p>
          <div className="mt-2 space-x-4">
            <button
              onClick={() => handleBet(name, 'OVER')}
              className={`px-4 py-1 rounded ${
                bets[name] === 'OVER' ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}
            >
              OVER
            </button>
            <button
              onClick={() => handleBet(name, 'UNDER')}
              className={`px-4 py-1 rounded ${
                bets[name] === 'UNDER' ? 'bg-red-500 text-white' : 'bg-gray-200'
              }`}
            >
              UNDER
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
      >
        Gửi Dự Đoán
      </button>
    </main>
  );
}
