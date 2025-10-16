import axios from "axios";

export default async function User(){
    const response = await axios.get("http://localhost:3000/api/v1/user/details")
    const data = response.data;

    return <div>
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>
                        <h2>User page</h2>
                    </div>
                    <div>
                        <p>Title: {data.title}</p>
                    </div>
                    <p>Status: {data.completed? "Completed":"Not Completed"}</p>
                </div>
            </div>
        </div>
    </div>
}