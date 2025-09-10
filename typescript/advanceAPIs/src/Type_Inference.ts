import { z } from "zod";
import express from "express";
import type { Request, Response } from "express";


const app = express();
app.use(express.json());

const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

export type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req: Request, res: Response) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    res.status(411).json({
      error: result.error.issues, // ✅ use .issues
    });
    return;
  }

  const updateBody: FinalUserSchema = result.data;

  res.json({
    message: "User updated",
    user: updateBody,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
