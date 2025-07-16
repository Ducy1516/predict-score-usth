
import { useState } from 'react';

const majors = [
  { name: "ICT", threshold: 21.3 },
  { name: "Biotechnology", threshold: 20.5 },
  { name: "Chemistry", threshold: 19.5 },
  { name: "Engineering", threshold: 18.5 }
  // Thêm các ngành khác nếu cần
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
