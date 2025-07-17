import { useRouter } from 'next/router';

export default function RulesPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/bet');
  };

  return (
    <main style={{ padding: '20px', maxWidth: 800, margin: 'auto' }}>
      <h1>📜 Luật chơi minigame Dự đoán điểm chuẩn USTH 2025</h1>

      <ul style={{ lineHeight: 1.8 }}>
        <li>
          Bạn sẽ dự đoán <strong>Over</strong> hoặc <strong>Under</strong> so với mốc điểm của ngành mà web đã đưa ra!
        </li>
        <li>
          <strong>Cách chơi:</strong> Ví dụ mốc điểm của ngành An toàn thông tin (CS) là 22.05.
          <br />
          Bạn đánh Over, khi điểm chuẩn là 22 &rarr; bạn thua.
          <br />
          Khi điểm chuẩn là 22.10 &rarr; bạn thắng.
          <br />
          Còn nếu điểm chuẩn là chính xác 22.05 &rarr; bạn cũng thắng luôn.
        </li>
        <li>
          <strong>Hạn cuối:</strong> 23:59 ngày 12/08/2025. Sau thời gian này, mọi dự đoán sẽ bị khóa.
        </li>
        <li>
          <strong>Lệ phí tham gia:</strong> 5.000đ qua QR code bên dưới.
        </li>
        <li>
          Bạn có thể sửa đổi dự đoán bao nhiêu lần tùy ý trước hạn chót.
        </li>
        <li>
          <strong>Giải thưởng:</strong>
          <ul>
            <li>🥇 Giải nhất: 50k (tỷ lệ đúng &ge; 70%)</li>
            <li>🥈 2 giải nhì: 40k (tỷ lệ đúng &ge; 50%)</li>
            <li>🥉 3 giải ba: 20k (tỷ lệ đúng &ge; 30%)</li>
          </ul>
        </li>
        <li>Giải sẽ được trao sau khi điểm chuẩn chính thức được công bố.</li>
      </ul>

      <div style={{ margin: '30px 0' }}>
        <p><strong>📸 Quét mã QR để chuyển khoản lệ phí:</strong></p>
        <img src="/qr.png" alt="QR Code chuyển khoản" width={200} />
      </div>

      <button onClick={handleContinue} style={{ padding: '10px 20px', fontSize: 16 }}>
        Tôi đã hiểu và muốn tiếp tục
      </button>
    </main>
  );
}
