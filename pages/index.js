import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const [nickname, setNickname] = useState('');
  const [studentId, setStudentId] = useState('');
  const router = useRouter();

  const handleStart = () => {
    if (!nickname) {
      alert('Vui lòng nhập nickname trước khi tiếp tục');
      return;
    }

    localStorage.setItem('nickname', nickname);
    localStorage.setItem('studentId', studentId);
    router.push('/rules');
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>DỰ ĐOÁN ĐIỂM CHUẨN THPTQG CỦA USTH 🎯</h1>
      <p>
        Xin chào mọi người, mình là <strong>Trí Đức – B3 khoa ICT</strong>.<br />
        Với mong muốn rèn luyện kỹ năng code cũng như tạo ra một minigame thú vị cho cộng đồng USTH,
        mình đã tự xây dựng trang web nhỏ này để mọi người cùng <strong>dự đoán điểm chuẩn THPTQG 2025</strong> theo hình thức <em>Over/Under</em>.<br /><br />
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
        placeholder="Hãy nhập mã sinh viên (hoặc sđt nếu bạn không phải sinh viên USTH)!"
        value={studentId}
        onChange={e => setStudentId(e.target.value)}
        style={{ padding: 8, marginBottom: 20, width: "100%" }}
      />

      <button onClick={handleStart}>Tôi đã sẵn sàng</button>
    </main>
  );
}
