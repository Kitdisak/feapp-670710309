import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { id: 670710309, name: 'กฤตดิศักดิ์ แก้วบุรงค์', nickname: 'เนส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ไก่ทอด', 'แมว'] },
  { id: 670710317, name: 'ชาญชัญญ์ เอื้อประเสริฐ', nickname: 'โจ้',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'ปลากัด'] },
    { id: 670710310, name: 'กฤษฎา นาคะพงศ์', nickname: 'พีท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาดำ', 'สิงโต'] }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
