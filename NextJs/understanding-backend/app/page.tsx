import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    <h2>Todo</h2>
                </div>
                <div>
                    <Link href="/signin" className="text-m text-blue-500">Sign in to Todo app</Link>
                </div>
                <Link href="/signup" className="text-m text-blue-500">Sign up to Todo app</Link>
            </div>
        </div>
    </div>
  );
}
