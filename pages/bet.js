// pages/bet.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const majors = [
  { name: "An toàn thông tin (CS)", threshold: 22.05 },
  { name: "Công nghệ Kỹ thuật Cơ điện tử (MET)", threshold: 22.3 },
  { name: "Công nghệ Sinh học - Phát triển thuốc (BIT)", threshold: 21.25 },
  { name: "Công nghệ Thông tin - Truyền thông (ICT)", threshold: 21.6 },
  { name: "Hóa học (CH)", threshold: 20.35 },
  { name: "Khoa học dữ liệu (DS)", threshold: 21.5 },
  { name: "Khoa học Môi trường Ứng dụng (AES)", threshold: 18.15 },
  { name: "Khoa học và Công nghệ thực phẩm (FST)", threshold: 20.05 },
  { name: "Khoa học và Công nghệ Y khoa (MST)", threshold: 20.75 },
  { name: "Khoa học vật liệu tiên tiến và Công nghệ Nano (AMSN)", threshold: 21.05 },
  { name: "Khoa học Vũ trụ và Công nghệ Vệ tinh (SST)", threshold: 20.85 },
  { name: "Kỹ thuật điện và Năng lượng tại tạo (EER)", threshold: 20.2 },
  { name: "Kỹ thuật Ô tô (ATE)", threshold: 21.45 },
  { name: "Toán ứng dụng (MAT)", threshold: 20.1 },
  { name: "Công nghệ vi mạch bán dẫn (SIC)", threshold: 23.9 },
  { name: "Dược học (MAT)", threshold: 22.55 },
];

export default function BetPage() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [studentId, setStudentId] = useState('');
  const [bets, setBets] = useState({});
  const [showImage, setShowImage] = useState(false); // 👈 Toggle ảnh

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    if (!savedNickname) {
      router.push('/');
    } else {
      setNickname(savedNickname);
    }
  }, []);

  const handleBetChange = (major, choice) => {
    setBets(prev => {
      if (prev[major] === choice) {
        const updated = { ...prev };
        delete updated[major];
        return updated;
      }
      return { ...prev, [major]: choice };
    });
  };

  const handleSubmit = () => {
    // TODO: Gửi dữ liệu đến backend hoặc Firebase
    console.log("Nickname:", nickname);
    console.log("MSV:", studentId);
    console.log("Bets:", bets);
    alert("Dự đoán đã được ghi nhận. Cảm ơn bạn!");
  };

  return (
    <main className="flex flex-col items-center p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Chào {nickname}!</h1>

      <label className="mb-4 w-full text-center">
        Xác nhận lại mã sinh viên (hoặc SĐT nếu không phải SV USTH):
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="VD: 23BI14097 hoặc 0838608866"
          className="border p-1 ml-2"
        />
      </label>

      <button
        onClick={() => setShowImage(!showImage)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showImage ? 'Ẩn điểm chuẩn 2023–2024' : 'Hiện điểm chuẩn 2023–2024'}
      </button>

      {showImage && (
        <Image
          src="/diem-chuan-2023-2024.png"
          alt="Điểm chuẩn USTH"
          width={800}
          height={600}
          className="rounded-lg shadow-lg mb-6"
        />
      )}

      <h2 className="text-xl font-semibold mb-4">Chọn OVER hoặc UNDER cho từng ngành</h2>

      {majors.map(({ name, threshold }) => (
        <div key={name} className="mb-4 text-center">
          <strong>{name}</strong> – Mốc: {threshold}
          <div className="mt-1">
            <button
              onClick={() => handleBetChange(name, 'OVER')}
              className={`px-4 py-1 mr-2 rounded ${
                bets[name] === 'OVER' ? 'bg-green-400' : 'bg-gray-200'
              }`}
            >
              Over
            </button>
            <button
              onClick={() => handleBetChange(name, 'UNDER')}
              className={`px-4 py-1 rounded ${
                bets[name] === 'UNDER' ? 'bg-red-400' : 'bg-gray-200'
              }`}
            >
              Under
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Gửi dự đoán
      </button>
    </main>
  );
}
