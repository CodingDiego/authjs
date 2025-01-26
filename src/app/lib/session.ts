import "server-only"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 1000)
    const session = await encrypt({ userId, expiresAt })
        ; (await cookies()).set("session", session, {
            httpOnly: true,
            secure: true,
            expires: expiresAt,
        })
}

type SessionPayload = {
    userId: string,
    expiresAt: Date,
}

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey)
}

export async function deleteSession() {
    (await cookies()).delete("session")
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        })
        return payload
    } catch (error) {
        console.log(error)
        return null
    }
}


