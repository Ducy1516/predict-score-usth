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
  const [studentId, setStudentId] = useState('');
  const [bets, setBets] = useState({});
  const [step, setStep] = useState('intro');

  const handleStart = () => {
    if (!nickname) {
      alert('Vui lòng nhập nickname trước khi dự đoán');
      return;
    }
    setStep('bet');
  };

  const handleBetChange = (major, choice) => {
    setBets(prev => {
      if (prev[major] === choice) {
        const updated = { ...prev };
        delete updated[major]; // Hủy chọn nếu nhấn lại
        return updated;
      }
      return { ...prev, [major]: choice };
    });
  };

  const handleSubmit = () => {
    alert("Dự đoán đã được ghi nhận. Cảm ơn bạn!");
  };

  return (
    <main style={{ padding: 20 }}>
      {step === 'intro' && (
        <>
          <h1>DỰ ĐOÁN ĐIỂM CHUẨN THPTQG CỦA USTH 🎯</h1>
          <p>
            Xin chào mọi người, mình là <strong>Trí Đức – B3 khoa ICT</strong>.
            Với mong muốn rèn luyện kỹ năng code cũng như tạo ra một minigame thú vị cho cộng đồng USTH,
            mình đã tự xây dựng trang web nhỏ này để mọi người cùng <strong>dự đoán điểm chuẩn THPTQG 2025</strong> theo hình thức <em>Over/Under</em>.
            <br /><br />
            Hãy thử dự đoán xem năm nay điểm chuẩn sẽ cao hay thấp hơn mốc nhé!
            Có <strong>giải thưởng tiền mặt</strong> chờ bạn nếu dự đoán chính xác 🎁
          </p>

          <input
            type="text"
            placeholder="Nhập nickname của bạn"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            style={{ padding: 8, marginBottom: 10, width: "100%" }}
          />

          <input
            type="text"
            placeholder="Hãy nhập mã sinh viên của bạn nhé!"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            style={{ padding: 8, marginBottom: 20, width: "100%" }}
          />

          <button onClick={handleStart}>Bắt đầu dự đoán</button>
        </>
      )}

      {step === 'bet' && (
        <>
          <h2>Chọn OVER hoặc UNDER cho từng ngành</h2>
          {majors.map(({ name, threshold }) => (
            <div key={name} style={{ marginBottom: 10 }}>
              <strong>{name}</strong> – Mốc: {threshold}
              <br />
              <button
                onClick={() => handleBetChange(name, 'OVER')}
                style={{
                  marginRight: 10,
                  backgroundColor: bets[name] === 'OVER' ? 'lightgreen' : '',
                }}
              >
                Over
              </button>
              <button
                onClick={() => handleBetChange(name, 'UNDER')}
                style={{
                  backgroundColor: bets[name] === 'UNDER' ? 'lightcoral' : '',
                }}
              >
                Under
              </button>
            </div>
          ))}
          <button onClick={handleSubmit} style={{ marginTop: 20 }}>Gửi dự đoán</button>
        </>
      )}
    </main>
  );
}
