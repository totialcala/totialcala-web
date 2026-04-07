import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const ADMIN_USER_ID = process.env.ADMIN_CLERK_USER_ID;

async function checkAdmin() {
  const { userId } = await auth();
  if (!userId) return false;
  if (ADMIN_USER_ID && userId !== ADMIN_USER_ID) return false;
  return true;
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await checkAdmin())) return NextResponse.json({ error: "Sense permisos" }, { status: 403 });

  const { id } = await params;

  // Obtenir el clerk_user_id abans d'esborrar
  const { data: client } = await supabaseAdmin
    .from("clients")
    .select("clerk_user_id")
    .eq("id", id)
    .single();

  // Esborrar de Supabase (els directes s'esborren en cascada)
  const { error } = await supabaseAdmin.from("clients").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Esborrar de Clerk si té user_id
  if (client?.clerk_user_id) {
    const clerk = await clerkClient();
    await clerk.users.deleteUser(client.clerk_user_id).catch(() => null);
  }

  return NextResponse.json({ ok: true });
}
