import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken, verifyToken } from "./tokenService";
const prisma = new PrismaClient();

class AuthService {
  generateToken(type: "user" | "store", id: number): string {
    return generateToken(type, id);
  }

  async loginUser(
    email: string,
    password: string
  ): Promise<{ token: string; user: any }> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }
    const token = this.generateToken("user", user.id);
    const { password: _, ...userWithoutPassword } = user;
    return { token, user: userWithoutPassword };
  }

  async loginStore(
    email: string,
    password: string
  ): Promise<{ token: string; store: any }> {
    const store = await prisma.store.findUnique({ where: { email } });
    if (!store) {
      throw new Error("Store not found");
    }
    const validPassword = await bcrypt.compare(password, store.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }
    const token = this.generateToken("store", store.id);
    const { password: _, ...storeWithoutPassword } = store;
    return { token, store: storeWithoutPassword };
  }
}

export default new AuthService();
