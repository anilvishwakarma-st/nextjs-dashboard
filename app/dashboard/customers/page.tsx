import { Metadata } from "next";

async function fetchCustomers() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return ["John", "Alice", "Bob"];
}

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}
