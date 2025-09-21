import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
  const [contents, setContents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchContent() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found in localStorage");
          return;
        }

        const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
          headers: {
            Authorization: localStorage.getItem("token") // ✅ correct format
          },
        });

        setContents(response.data.content || []);
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    }

    fetchContent();
  }, []);

  return contents;
}
