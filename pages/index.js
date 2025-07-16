
import { useState } from 'react';

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

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [bets, setBets] = useState({});

  const handleBetChange = (major, choice) => {
    setBets(prev => ({ ...prev, [major]: choice }));
  };

  const handleSubmit = () => {
    alert("Dự đoán đã được ghi nhận. Cảm ơn bạn!");
    // Gửi dữ liệu đến backend hoặc Supabase tại đây nếu muốn
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Dự đoán điểm chuẩn USTH 2025 🎯</h1>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={nickname}
        onChange={e => setNickname(e.target.value)}
        style={{ padding: 8, marginBottom: 20, display: "block" }}
      />
      {majors.map(({ name, threshold }) => (
        <div key={name} style={{ marginBottom: 10 }}>
          <strong>{name}</strong> – Mốc: {threshold}
          <br />
          <button onClick={() => handleBetChange(name, 'OVER')}>Over</button>
          <button onClick={() => handleBetChange(name, 'UNDER')}>Under</button>
        </div>
      ))}
      <button onClick={handleSubmit} style={{ marginTop: 20 }}>Gửi dự đoán</button>
    </main>
  );
}
