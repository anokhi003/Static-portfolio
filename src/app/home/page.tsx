
import EfficientSection from "./_components/EfficientSection";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
  const users: Array<{ id: number; name: string; email: string }> = await res.json();
  return (
    <>
      <section className="container md:w-5/6 mx-auto py-8 text-white-100">
        <h2 className="text-small-heading md:text-heading font-playfair font-bold mb-4">Users</h2>
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="text-white-100">
              <span className="font-semibold">{u.name}</span> — {u.email}
            </li>
          ))}
        </ul>
      </section>
      <EfficientSection />
    </>
  );
}


