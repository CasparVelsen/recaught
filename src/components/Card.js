export default function Card({ date, time, target }) {
  return (
    <section>
      <span>{date}</span>
      <span>{time}</span>
      <span>{target}</span>
    </section>
  );
}
