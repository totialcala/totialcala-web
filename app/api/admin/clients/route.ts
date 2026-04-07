import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ADMIN_USER_ID = process.env.ADMIN_CLERK_USER_ID;

export async function POST(request: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "No autenticat" }, { status: 401 });
  if (ADMIN_USER_ID && userId !== ADMIN_USER_ID) {
    return NextResponse.json({ error: "Sense permisos" }, { status: 403 });
  }

  const body = await request.json();
  const { nom, email, empresa, pla, notes_internes } = body;

  if (!nom || !email || !empresa || !pla) {
    return NextResponse.json({ error: "Camps obligatoris incomplerts" }, { status: 400 });
  }

  // 1. Guardar el client a Supabase (sense clerk_user_id de moment)
  const { error: dbError } = await supabaseAdmin.from("clients").insert({
    clerk_user_id: null,
    nom,
    empresa,
    email,
    pla,
    notes_internes: notes_internes || null,
  });

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 });
  }

  // 2. Enviar invitació per email via Clerk
  const clerk = await clerkClient();
  try {
    await clerk.invitations.createInvitation({
      emailAddress: email,
      notify: true,
      ignoreExisting: true,
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/portal/signup`,
    });
  } catch {
    // Best-effort — el client ja és guardat a Supabase
  }

  return NextResponse.json({ ok: true });
}
